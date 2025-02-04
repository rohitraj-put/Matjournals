import React, { useEffect } from "react";
import Aos from "aos";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import "aos/dist/aos.css";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    image:
      "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
    review:
      "This product exceeded my expectations! I would  definitely recommend it to others.",
    rating: 5,
  },
  {
    id: 2,
    name: "John Smith",
    image:
      "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
    review:
      "Great quality and fast shipping. The customer service  was also very helpful.",
    rating: 4,
  },
  {
    id: 3,
    name: "Sara Lee",
    image:
      "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
    review:
      "I love the design and the functionality of this product. It's perfect for my needs.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Johnson",
    image:
      "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
    review:
      "Affordable and reliable. I've been using it for a while now and it hasn't disappointed.",
    rating: 4,
  },
  {
    id: 5,
    name: "Emily Watson",
    image:
      "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
    review:
      "The best product in its category. I can't imagine going  back to anything else.",
    rating: 5,
  },
  {
    id: 6,
    name: "David Lee",
    image:
      "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
    review: "Solid performance and great value for money. Highly recommended!",
    rating: 5,
  },
];

const Testimonials = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  });

  const handleCardClick = (id) => {
    console.log(`Card with ID ${id} clicked!`);
    // You can also navigate to a detailed page or perform any action here
  };

  return (
    <div className="flex flex-col items-center p-6 bg-blue-700 min-h-80 overflow-hidden">
      <h1 className="text-3xl font-bold text-white mb-8 uppercase">
        Editorial Blog
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl"
        data-aos="fade-up"
      >
        {testimonials.map(({ id, name, image, review, rating }) => (
          <div
            key={id}
            className="testimonial-card bg-white rounded-lg p-6 shadow-lg transform transition-transform duration-200 hover:scale-105 cursor-pointer"
            onClick={() => handleCardClick(id)}
          >
            <div className="flex items-center mb-4">
              <img
                className="w-16 h-16 rounded-full mr-4"
                src={image}
                alt={name}
              />
              <div>
                <h2 className="font-semibold text-lg">{name}</h2>
                <div className="flex text-yellow-500">
                  {[...Array(rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              <FaQuoteLeft className="inline mr-2 text-gray-400" />
              {review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
