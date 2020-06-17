import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Slider from "react-slick";

const HomeShopSlider = () => {
    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        slidesToShow: 6,
        slideToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 500,
        speed:3000,
    };

    const [shops, setShops] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3000/api/shops')
            .then(res => res.data)
            .then(data => setShops(data))
    }, []);

    return (
        <Slider {...settings} >
            {shops.map(shop => (
                <button key={shop.id}>
                    <img src={shop.logo} alt={shop.name} />
                </button>
            ))}
        </Slider>
    )
};

export default HomeShopSlider;