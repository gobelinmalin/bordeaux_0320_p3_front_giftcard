import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import '../../styles/HomeCarousel.css';
import Axios from 'axios';

const HomeCarousel = () => {
  const settings = {
      dots: true,
      arrows:false,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      speed:1000
  };

  // const [ cards, setCards ] = useState([]);

  
  // useEffect(() => {
  //   Axios.get('URL/api')
  //   .then(response => response.data)
  //   .then(data => setCards(data))
  // }, []);

  return (
      <Slider className='slidercontainer' {...settings} >
        <div className='slide'>
          <div className='text-slide'>
              <h3>PRODUCT NAME</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className='button-custom'>Je personnalise !</button>
          </div>
          <div className='img-content'>
            <div className='img-slide'/>
          </div>
        </div>
        <div className='slide'>
          <div className='text-slide'>
              <h3>PRODUCT NAME</h3>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <button className='button-custom'>Je personnalise !</button>
          </div>
          <div className='img-content'>
            <div className='img-slide'/>
          </div>
        </div>
      </Slider>
    )
};

export default HomeCarousel;