import React from 'react';
import './StandardEcardSteps.css';

const StandardEcardSteps = () => {
  return (
    <div className="stepcontainer">
      <div className="AllSteps">
        <div className="Step FirstStep">
          <h3>1</h3>
          <p>Choix</p>
        </div>
        <div className="Step">
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

export default StandardEcardSteps;
