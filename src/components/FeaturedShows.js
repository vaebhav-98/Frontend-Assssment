import React, { useRef } from 'react'
import Card from './Card'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FeaturedShows = (props) => {
    const PrevCarouselBtn = (props) => {
        const { onClick } = props;
        return (
            <div
                onClick={onClick}
                style={{
                    display: "inline",
                    padding: "2px",
                    position: "absolute",
                    top: "45%",
                    left: "-25px",
                    color: "grey",
                    zIndex: "10",
                    cursor: "pointer",
                }}
            >
                <FaAngleLeft size="30" className="text-black" />
            </div>
        );
    };
    const NextCarouselBtn = (props) => {
        const { onClick } = props;
        return (
            <div
                onClick={onClick}
                style={{
                    display: "inline",
                    padding: "2px",
                    position: "absolute",
                    top: "45%",
                    right: "-25px",
                    color: "grey",
                    zIndex: "10",
                    cursor: "pointer",
                }}
            >
                <FaAngleRight size="30" className="text-black" />
            </div>
        );
    };
    var settings = {
        infinite: props.data.length <= 2 ? false : true,
        speed: 500,
        slidesToShow: 5,
        lazyLoad: true,
        slidesToScroll: 5,
        autoplay: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    arrows: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    speed: 300,
                    arrows: false,
                    slidesToScroll: 2,
                },
            },
        ],
        prevArrow: <PrevCarouselBtn />,
        nextArrow: <NextCarouselBtn />,
    };

    return (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className='flex justify-between items-center'>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Shows</h2>
                <div className='cursor-pointer text-red-500'>See more</div>
            </div>
            <div className="mt-6 ">
                <Slider {...settings}>

                    {
                        props.data.map((item, idx) => {
                            return (
                                <Card data={item} key={idx} />
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default FeaturedShows