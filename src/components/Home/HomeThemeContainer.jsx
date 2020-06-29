import React, {useState, useEffect} from 'react';
import HomeTheme from './HomeTheme';
import Axios from 'axios';
import '../../style/HomeThemeContainer.css';

const HomeThemeContainer = () => {
    const [themes, setThemes] = useState([]);
    useEffect(() => {
        Axios.get('https://givyoo.herokuapp.com/api/themes')
            .then(res => res.data)
            .then(data => setThemes(data))
    }, []);

    return (
        <div className='home'>
            <h2>NOS THÈMATIQUES</h2>
           <HomeTheme themes={themes}/> 
        </div>
    )
};

export default HomeThemeContainer;