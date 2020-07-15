import React from 'react';
import StandardEcardSteps from './StandardEcardSteps';
import StandardEcardChoiceContainer from './StandardEcardChoiceContainer';
import './StandardEcardContainer.css';

const StandardEcardContainer = () => {
  return (
    <div className="standardecard">
      <h2>VOTRE CARTE</h2>
      <StandardEcardSteps />
      <StandardEcardChoiceContainer />
    </div>
  );
};

export default StandardEcardContainer;
