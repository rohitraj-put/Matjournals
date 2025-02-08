import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import client1 from "../assets/Images/client-1.png";
import client2 from "../assets/Images/client-2.png";
import client3 from "../assets/Images/client-3.png";
// import client4 from "../assets/Images/client-4.png";
import client5 from "../assets/Images/client-5.png";
import client6 from "../assets/Images/client-6.png";
import client7 from "../assets/Images/client-7.png";
import client8 from "../assets/Images/client-8.png";
import client9 from "../assets/Images/client-9.png";
import client10 from "../assets/Images/client-10.png";
import client11 from "../assets/Images/client-11.png";
import client12 from "../assets/Images/client-12.png";
import client13 from "../assets/Images/client-13.png";
import client14 from "../assets/Images/client-14.png";
import client15 from "../assets/Images/client-15.png";
import client16 from "../assets/Images/client-16.png";
import client17 from "../assets/Images/client-17.png";
import client19 from "../assets/Images/client-19.png";
import client20 from "../assets/Images/client-20.png";

function Client() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const clients = [
    {
      src: client1,
    },
    {
      src: client2,
    },
    {
      src: client3,
    },
    {
      src: client5,
    },
    {
      src: client6,
    },
    {
      src: client7,
    },
    {
      src: client8,
    },
    {
      src: client9,
    },
    {
      src: client10,
    },
    {
      src: client11,
    },
    {
      src: client12,
    },
    {
      src: client13,
    },
    {
      src: client14,
    },
    {
      src: client15,
    },
    {
      src: client16,
    },
    {
      src: client17,
    },
    {
      src: client19,
    },
    {
      src: client20,
    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 600,
    });
  });

  return (
    <>
      <div className="my-4">
        <div className="slider-container">
          <Slider {...settings} className="overflow-hidden">
            {clients.map((client, index) => (
              <div className="p-5 bg-white" key={index}>
                <img
                  src={client.src}
                  alt={client.name}
                  className="w-full h-full object-contain"
                  style={{ aspectRatio: "3/2" }}
                  data-aos="zoom-in"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Client;
