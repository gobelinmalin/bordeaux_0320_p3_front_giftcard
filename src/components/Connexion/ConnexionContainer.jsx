import React from 'react';
import '../../style/Connexion.css';
import ButtonConnexion from '../../style/ButtonConnexion';

const ConnexionContainer = () => {
    return (
        <div className='connexion'>
            <h2>CONNEXION</h2>
            <div className='connexionBtn'>
                <ButtonConnexion user='client' />
                <ButtonConnexion user='enseigne' />
            </div>
        </div>
    );
};

export default ConnexionContainer;