import React, {useState, useEffect} from 'react';
import HomeTheme from './HomeTheme';
import Axios from 'axios';
import '../../styles/HomeThemeContainer.css';

const HomeThemeContainer = () => {
    const [themes, setThemes] = useState([]);
    useEffect(() => {
        Axios.get('URL/api')
            .then(res => res.data)
            .then(data => setThemes(data))
    }, []);

    return (
        <div className='home'>
            <h2>NOS THÈMES</h2>
           <HomeTheme themes={themes}/> 
        </div>
    )
};

export default HomeThemeContainer;