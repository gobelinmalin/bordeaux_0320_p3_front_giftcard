import React from 'react';

const HomeTheme = ({themes}) => {
    return (
        <div className='theme-container'>
            {themes.map(theme => (
                <button key={theme.id} className='card-theme'>
                    <h4 className='theme-title'>{theme.name}</h4>
                    <img src={theme.image} alt={theme.name} className='img-theme' />
                </button>
            ))}
        </div>
    )
};

export default HomeTheme;