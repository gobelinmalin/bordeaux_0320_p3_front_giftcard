import React from 'react';
import '../EcardStandard/StandardEcardContainer.css';
import StandardCardChoiceContainer from './StandarCardChoiceContainer';

const StandardcardContainer = () => {
  return (
    <div className="standardecard">
      <h2>VOTRE CARTE PHYSIQUE</h2>
      <StandardCardChoiceContainer />
    </div>
  );
};

export default StandardcardContainer;
