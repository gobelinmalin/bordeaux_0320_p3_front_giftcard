import React from 'react';
import ModalConnexion from '../ModalConnexion/ModalConnexion';
import StandardEcardChoice from './StandardEcardChoice';
import StandardEcardMessage from './StandardEcardMessage';

const StandardEcardChoiceContainer = () => {
  return (
    <div className="ecardstepchoice">
      <div className="ecardchoice">
        <StandardEcardChoice />
        <hr />
        <StandardEcardMessage />
      </div>
      <ModalConnexion />
    </div>
  );
};

export default StandardEcardChoiceContainer;
