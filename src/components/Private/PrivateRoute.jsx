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
  isAuthenticatedShop,
  loadUser,
}) => {
  useEffect(() => {
    loadUser(localStorage.getItem('token'));
  }, [loadUser]);
  if (
    (!isAuthenticated && isAuthenticated !== null) ||
    (!isAuthenticatedShop && isAuthenticatedShop !== null)
  ) {
    return <Redirect to="/connexion" />;
  }

  return <Route path={path} component={Component} />;
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isAuthenticatedShop: state.authShop.isAuthenticated,
  };
};

PrivateRoute.propTypes = {
  path: PropTypes.string,
  component: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  isAuthenticatedShop: PropTypes.bool,
  loadUser: PropTypes.func,
};

PrivateRoute.defaultProps = {
  path: '',
  component: {},
  isAuthenticated: false,
  isAuthenticatedShop: false,
};

export default connect(mapStateToProps, { loadUser })(PrivateRoute);
