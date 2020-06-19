import React from 'react';
import imgHome from "../../style/images/homestatic.jpg";
import '../../style/HomeStatic.css';

const HomeStatic = () => {
    return (
        <div className='home-static'>
            <p>Phrase d'accroche,<br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <img src={imgHome} alt='présentation de GivYoo' />
        </div>
    )
};

export default HomeStatic;