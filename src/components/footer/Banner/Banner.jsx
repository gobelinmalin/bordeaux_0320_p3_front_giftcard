import React from 'react';
import './Banner.css';
import Icon from '../Icon';

const Banner = () => {
    return (
        <div className='Banner'>
            <div className='IconAndTextContainer'>
                <Icon image='gift'/>
                <p>Cadeau 100% personnalisé</p>
            </div>
            <div className='IconAndTextContainer'>
                <Icon image='gift'/>
                <p>Une équipe à votre écoute</p>
            </div>
            <div className='IconAndTextContainer'>
                <Icon image='gift'/>
                <p>Livraison le jour de votre choix</p>
            </div>
            <div className='IconAndTextContainer'>
                <Icon image='gift'/>
                <p>Paiement sécurisé</p>
            </div>  
        </div>
    )
}

export default Banner;