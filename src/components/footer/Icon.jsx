import React from 'react';
import './Icon.css';

const Icon = (props) => {

    const { image } = props
    return (
        <div className="Icon">
            <img src={require('../../image/' + image + '.png')} alt=""/>
        </div>
    )
}

export default Icon;