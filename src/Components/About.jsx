import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import aboutImg from "../assets/Images/about-img.jpg";

function About() {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  });
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl uppercase font-bold text-blue-800 mb-4">
          About Us
        </h1>
        <p className="text-lg text-black">
          MAT Journal is a leading provider of high-quality scientific content
          for academia, scientific institutions, and corporate R&D departments.
          We deliver innovative information, products, and services to support
          knowledge creation and dissemination.
        </p>
      </div>
      <div className=" bg-gray-100 py-16 bg-[url(https://img.freepik.com/premium-photo/vintage-typewriter-stack-books-wooden-desk_239711-30950.jpg?w=1060)] bg-no-repeat bg-cover bg-fixed overflow-hidden">
        <div className="  mx-auto px-4  bg-[#22222240] hover:bg-red-600x ">
          <div className="flex flex-col md:flex-row justify-around items-start gap-8">
            <div
              className="bg-white rounded-lg shadow-lg p-6 w-full md:w-2/3 "
              data-aos="fade-right"
            >
              <ul className="text-left">
                <li className="py-2 font-semibold">
                  ✔ Established in 2015, MAT Journals Pvt. Ltd. has been
                  committed to providing a platform for knowledge creation and
                  dissemination.
                </li>
                <li className="py-2 font-semibold">
                  ✔ We aim to bridge the gap between research and practical
                  application by offering valuable insights and resources.
                </li>
                <li className="py-2 font-semibold">
                  ✔ Our content is trusted by academia, scientific institutions,
                  and corporate R&D departments worldwide.
                </li>
                <li className="py-2 font-semibold">
                  ✔ We continuously innovate to stay ahead in the field of
                  scientific publishing.
                </li>
                <li className="py-2 font-semibold">
                  ✔ Our mission is to empower researchers and professionals with
                  the information they need to succeed.
                </li>
                <li className="py-2 font-semibold">
                  ✔ Join us in our journey to make scientific knowledge
                  accessible and impactful.
                </li>
              </ul>
            </div>
            <div
              className="w-full  h-[64vh] md:w-1/2 overflow-hidden"
              data-aos="fade-left"
            >
              <img
                className="w-full h-full rounded-lg shadow-lg object-cover  duration-700"
                src={aboutImg}
                alt="About us"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
