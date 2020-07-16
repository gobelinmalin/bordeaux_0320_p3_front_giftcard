import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StandardEcardSteps from './StandardEcardSteps';
import EcardSendContainer from './EcardSendContainer';
import StandardEcardChoiceContainer from './StandardEcardChoiceContainer';
import './StandardEcardContainer.css';

const StandardEcardContainer = (props) => {
  const { step } = props;
  return (
    <div className="standardecard">
      <h2>VOTRE CARTE</h2>
      <StandardEcardSteps />
      {step === 'step1' ? (
        <StandardEcardChoiceContainer />
      ) : (
        <EcardSendContainer />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    step: state.choice.step,
  };
};

StandardEcardContainer.defaultProps = {
  step: '',
};

StandardEcardContainer.propTypes = {
  step: PropTypes.string,
};

export default connect(mapStateToProps, null)(StandardEcardContainer);
