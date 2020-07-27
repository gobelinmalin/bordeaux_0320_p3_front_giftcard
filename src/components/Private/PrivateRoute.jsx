/* eslint-disable no-shadow */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser } from '../../actions/generalActions';

const PrivateRoute = ({
  path,
  component: Component,
  isAuthenticated,
  loadUser,
}) => {
  useEffect(() => {
    loadUser(localStorage.getItem('token'));
  }, [loadUser]);
  if (!isAuthenticated && isAuthenticated !== null) {
    return <Redirect to="/connexion" />;
  }

  return <Route path={path} component={Component} />;
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

PrivateRoute.propTypes = {
  path: PropTypes.string,
  component: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  loadUser: PropTypes.func,
};

PrivateRoute.defaultProps = {
  path: '',
  component: {},
  isAuthenticated: false,
};

export default connect(mapStateToProps, { loadUser })(PrivateRoute);
