import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function Carousel() {
  const images = [
    {
      link: "/RopewaySolutions",
      imgsrc:
        "https://img.freepik.com/free-photo/woman-s-hands-with-magazine_1162-52.jpg?t=st=1738580269~exp=1738583869~hmac=72acf781861e8244a06b62a8dd5f2b640232d27f2eb466bebcbd244633fb16b4&w=900",
      caption: "Precision in Every Piece, Excellence in Every Machine.",
    },
    {
      link: "/MicroMachining",
      imgsrc:
        "https://img.freepik.com/free-photo/cheerful-business-woman-standing-grey-wall-with-newspapers_171337-7377.jpg?t=st=1738580226~exp=1738583826~hmac=703909e6c607853dbf2a7a50c998a6b54ac67585227e394e1ba3df78321dbc96&w=900",
      caption: "Innovating Tomorrow's Machinery, Today's Excellence.",
    },
    {
      link: "/EngineeringPlasticsTrading",
      imgsrc:
        "https://img.freepik.com/premium-photo/female-hands-holding-pen-reading-lot-books-concept-research-searching-answers-textb_361816-2455.jpg?w=996",
      caption: "Crafting Quality, Powering Industries.",
    },
  ];

  const NextArrow = ({ onClick }) => {
    return (
      <button
        className="next-arrow absolute top-1/3 max-md:top-1/2 transform -translate-y-1/2 right-4 z-10 bg-gray-100 p-2 rounded-full cursor-pointer shadow-md hover:bg-gray-200"
        onClick={onClick}
      >
        <svg
          className="w-6 h-6 text-black cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <button
        className="prev-arrow absolute top-1/3 max-md:top-1/2 cursor-pointer transform -translate-y-1/2 left-4 z-10 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200"
        onClick={onClick}
      >
        <svg
          className="w-6 h-6 text-black cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-full h-[33rem] max-sm:h-[18rem] overflow-hidden">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-full flex items-center justify-center overflow-hidden"
          >
            <img
              className="w-full h-full object-fill cursor-pointer"
              src={item.imgsrc}
              alt={`carousel_image_${index}`}
              loading="lazy"
            />
            {/* <div className="absolute w-3/4 top-1/3 mt-4 max-md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-black  bg-opacity-25 rounded-lg text-center max-sm:top-1/3">
              <h2 className="text-xl sm:text-3xl md:text-4xl uppercase lg:text-5xl font-bold text-white mb-6">
                "{item.caption}"
              </h2>
              <div className="flex justify-center gap-4">
                <Link
                  to={item.link}
                  className="py-2 px-4 capitalize font-semibold rounded-md  text-[#214fc6] "
                >
                  <button
                    type="submit"
                    className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#214fc6]  hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                  >
                    Read More
                    <svg
                      className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                      viewBox="0 0 16 19"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                        className="fill-gray-800 group-hover:fill-gray-800"
                      ></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
