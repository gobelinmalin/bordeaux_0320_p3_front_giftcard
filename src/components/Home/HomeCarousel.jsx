import React from 'react';
import Slider from "react-slick";
import '../../styles/HomeCarousel.css';

const HomeCarousel = () => {
  const settings = {
      dots: true,
      arrows:false,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 4000,
      speed:1000
  };

  return (
      <Slider className='slidercontainer' {...settings} >
        <div className='slide'>
          <div className='text-slide'>
              <h3>PRODUCT NAME</h3>
              <p>description carte blablabla</p>
              <button className='button-custom'>Je personnalise !</button>
          </div>
          <div className='img-content'>
            <div className='img-slide'/>
          </div>
        </div>
        <div className='slide'>
          <div className='text-slide'>
              <h3>PRODUCT NAME</h3>
              <p>description carte blablabla</p>
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