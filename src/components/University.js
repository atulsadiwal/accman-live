"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import college from "../../public/image/arizon-map.png"
import person1 from "../../public/image/P2UGM57.jpeg"
import person2 from "../../public/image/smiling-student-girl-in-eyeglasses.jpg"
import person3 from "../../public/image/portrait-of-male-student-standing.jpg"
import person4 from "../../public/image/university.jpg"
import person5 from "../../public/image/guy-in-college.jpg"
import person6 from "../../public/image/portrait-of-male-student-standing.jpg"


const cardData = [
  {
    id: 1,
    name: "Sophia Patel",
    course: "B.Tech",
    feedback:
      "Engaging lectures, clear explanations, and approachable professor made the class enjoyable and easy to follow.",
    rating: 5,
    image: person1, 
  },
  {
    id: 2,
    name: "Aisha Patel",
    course: "B.Tech",
    feedback:
      "Challenging assignments, but valuable insights gained. Professor responsive to questions, fostering a positive learning environment.",
    rating: 4.5,
    image: person2,
  },
  {
    id: 3,
    name: "Neha Singh",
    course: "B.Tech",
    feedback:
      "Engaging discussions boosted learning, though workload impacted balance. A rewarding yet demanding course overall.",
    rating: 4,
    image: person3,
  },
  {
    id: 4,
    name: "Arjun Verma",
    course: "M.Tech",
    feedback:
      "Exceptional curriculum and supportive professors made learning a joy. I learned a lot through collaboration.",
    rating: 4.5,
    image: person4,
  },
  {
    id: 5,
    name: "Meera Sharma",
    course: "M.Sc",
    feedback:
      "Professors are knowledgeable, and courses are challenging but rewarding. Highly recommend the programs here.",
    rating: 5,
    image: person5,
  },
  {
    id: 6,
    name: "Rahul Gupta",
    course: "PhD",
    feedback:
      "The research-oriented approach helped me grow as an academic. Facilities and faculty support are exceptional.",
    rating: 4,
    image: person6,
  },
];

const University = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // Mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full h-[100vh] sm:h-[75vh] bg-indigo-900 text-white py-6 md:py-20 px-8 sm:px-52">
      {/* Section with Two Columns */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-6 font-playfair">We Are One Of The Best Institute</h2>
          <p className="text-[0.6rem] font-medium">
            We stand proud as one of the largest universities, fostering a vibrant academic
            community. Our commitment to excellence, diverse programs, and cutting-edge research
            propels us to inspire and shape the future. Join us in a journey of knowledge and
            innovation.
          </p>
          <p className="mt-4 text-[0.6rem] font-medium">
            Embracing endless possibilities, our Institute is a gateway to diverse opportunities.
            Join us in a journey of discovery, learning, and growth. We are open for opportunities.
          </p>
        </div>
        <div>
          <img
            src={college}
            alt="Institute"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Divider */}
      <hr className="my-10 border-white" />

      {/* Card Slider */}
      <div className="relative -mx-4">
        <Slider {...settings}>
          {cardData.map((card) => (
            <div key={card.id} className="px-2">
              <div className="bg-white text-gray-800 px-6 py-4 shadow-lg">
                {/* Rating */}
                <div className="flex items-center mb-1">
                  {Array.from({ length: Math.floor(card.rating) }, (_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">★</span>
                  ))}
                  {card.rating % 1 !== 0 && <span className="text-yellow-500 text-lg">★</span>}
                </div>

                {/* Profile */}
                <div className="flex items-center mb-4">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-10 h-10 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-[0.8rem] text-indigo-900 font-playfair font-semibold">{card.name}</h3>
                    <p className="text-[0.6rem] text-gray-500">{card.course}</p>
                  </div>
                </div>

                {/* Feedback */}
                <p className="text-gray-600 text-[0.6rem]">{card.feedback}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default University;
