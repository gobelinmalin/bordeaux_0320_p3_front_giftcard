import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const HomeShopSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slideToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 500,
    speed: 3000,
  };

  const [shops, setShops] = useState([]);
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_LOCALHOST}/api/shops`)
      .then((res) => res.data)
      .then((data) => setShops(data));
  }, []);

  return (
    <Slider settings={settings}>
      {shops.map((shop) => (
        <Link to={`/enseignes/${shop.id}`} key={shop.id}>
          <img src={shop.logo} alt={shop.name} />
        </Link>
      ))}
    </Slider>
  );
};

export default HomeShopSlider;
