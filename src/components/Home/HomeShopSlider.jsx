import React from 'react';
import Slider from "react-slick";

const HomeShopSlider = () => {
    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        slidesToShow: 5,
        slideToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 500,
        speed:2000,
    };

    return (
        <Slider className="shopslidercontainer" {...settings} >
            <button>
                <img src="http://placekitten.com/g/400/200" />
            </button>
            <button>
                <img src="http://placekitten.com/g/400/200" />
            </button>
            <button>
                <img src="http://placekitten.com/g/400/200" />
            </button>
            <button>
                <img src="http://placekitten.com/g/400/200" />
            </button>
            <button>
                <img src="http://placekitten.com/g/400/200" />
            </button>
            <button>
                <img src="http://placekitten.com/g/400/200" />
            </button>
            <button>
                <img src="http://placekitten.com/g/400/200" />
            </button>
            <button>
                <img src="http://placekitten.com/g/400/200" />
            </button>
            <button>
                <img src="http://placekitten.com/g/400/200" />
            </button>
            <button>
                <img src="http://placekitten.com/g/400/200" />
            </button>
        </Slider>
    )
};

export default HomeShopSlider;