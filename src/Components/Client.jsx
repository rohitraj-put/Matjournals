import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";

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
      src: "https://matjournals.com/img/clients/client-2.png",
    },
    {
      src: "https://matjournals.com/img/clients/client-3.png",
    },
    {
      src: "https://matjournals.com/img/clients/client-19.png",
    },
    {
      src: "https://matjournals.com/img/clients/client-5.png",
    },
    {
      src: "https://matjournals.com/img/clients/client-6.png",
    },
    {
      src: "https://matjournals.com/img/clients/client-7.png",
    },
    {
      src: "https://matjournals.com/img/clients/client-8.png",
    },
    {
      src: "https://matjournals.com/img/clients/client-9.png",
    },
    {
      src: "https://matjournals.com/img/clients/client-10.png",
    },
    {
      src: "https://matjournals.com/img/clients/client-11.png",
    },
    {
      src: "https://matjournals.com/img/clients/client-12.png",
    },
    {
      src: "https://matjournals.com/img/clients/client-13.png",
    },
    {
      src: "https://matjournals.com/img/clients/client-14.png",
    },
    {
      src: "https://matjournals.com/img/clients/client-15.png",
    },
    {
      src: "https://matjournals.com/img/clients/client-1.png",
    },
    {
      src: "https://matjournals.com/img/clients/client-20.png",
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
              <div className="p-5" key={index}>
                <img
                  src={client.src}
                  alt={client.name}
                  className="w-full h-full object-contain"
                  style={{ aspectRatio: "3/2" }}
                  data-aos="zoom-in"
                />
                <p className="text-center mt-2 font-semibold">{client.name}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Client;
