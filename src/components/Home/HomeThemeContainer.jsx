import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import HomeTheme from './HomeTheme';
import '../../style/HomeThemeContainer.css';

const HomeThemeContainer = () => {
  const [themes, setThemes] = useState([]);
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_LOCALHOST}/api/themes`)
      .then((res) => res.data)
      .then((data) => setThemes(data));
  }, []);

  return (
    <div className="home">
      <h2>NOS THÉMATIQUES</h2>
      <HomeTheme themes={themes} />
    </div>
  );
};

export default HomeThemeContainer;
