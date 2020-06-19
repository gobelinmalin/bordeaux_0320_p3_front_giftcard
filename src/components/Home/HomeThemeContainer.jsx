import React, {useState, useEffect} from 'react';
import HomeTheme from './HomeTheme';
import Axios from 'axios';
import '../../style/HomeThemeContainer.css';

const HomeThemeContainer = () => {
    const [themes, setThemes] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3000/api/themes')
            .then(res => res.data)
            .then(data => setThemes(data))
    }, []);

    return (
        <div className='home'>
            <div className='title'>
                <div className='circle circle2'/>
                <h2>THÉMATIQUES</h2>
            </div>
           <HomeTheme themes={themes}/> 
        </div>
    )
};

export default HomeThemeContainer;