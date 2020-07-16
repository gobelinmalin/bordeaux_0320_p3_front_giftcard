import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './StandardEcardSteps.css';

const StandardEcardSteps = (props) => {
  const { step } = props;
  return (
    <div className="stepcontainer">
      <div className="AllSteps">
        <div className={step === 'step1' ? 'Step FirstStep' : 'Step'}>
          <h3>1</h3>
          <p>Choix</p>
        </div>
        <div className={step === 'step2' ? 'Step FirstStep' : 'Step'}>
          <h3>2</h3>
          <p>Option d&apos;envoi</p>
        </div>
        <div className="Step">
          <h3>3</h3>
          <p>Paiement</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    step: state.choice.step,
  };
};

StandardEcardSteps.defaultProps = {
  step: '',
};

StandardEcardSteps.propTypes = {
  step: PropTypes.string,
};

export default connect(mapStateToProps, null)(StandardEcardSteps);
