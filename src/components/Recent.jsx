import React, { useState } from "react";
import red1 from "/p5.jpg";
import red2 from "/p2.jpg";
import red3 from "/p3.jpg";
import red4 from "/p4.jpg";

function Recent() {
  const [hovered, setHovered] = useState(null);
  const [fullImage, setFullImage] = useState(null);

  const cards = [
    { id: 1, img: red1, title: "Shopify Development" },
    { id: 2, img: red2, title: "Worpress Development" },
    { id: 3, img: red3, title: "Wordpress Development" },
    { id: 4, img: red4, title: "React Development" },
  ];

  return (
    <section id="recent" className="section">
        <div className="w-full flex flex-col items-center   text-white    font-serif px-4 sm:px-8 md:px-12 lg:px-24">
          
          <h2 className="text-lg sm:text-xl font-bold pt-8">RECENT WORK</h2>

          
          <div className="flex flex-wrap gap-6 w-full justify-center text-center mt-6">
            <div className="w-full  sm:w-[90%] text-2xl sm:text-3xl font-bold">
              <h1>Look at my portfolio and give me your feedback.</h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="text-xl">
                <p className="text-4xl font-bold">20</p>
                <p>Complete Projects</p>
              </div>
              <div className="w-[1px] h-[50px] bg-white hidden sm:block"></div>
              <div className="text-xl">
                <p className="text-4xl font-bold">94%</p>
                <p>Positive Ratings</p>
              </div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-10 lg:gap-24 mt-12">
            {cards.map((card) => (
              <div
                key={card.id}
                className="relative w-full sm:w-[300px] h-[200px] overflow-hidden rounded-xl cursor-pointer"
                onMouseEnter={() => setHovered(card.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Background Image */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                />

                {/* Overlay Text */}
                <div
                  className={`absolute left-0 w-full bg-[#001A33] text-white p-4 transition-all duration-1000 ${
                    hovered === card.id ? "bottom-0" : "bottom-[-100px]"
                  }`}
                >
                  <p className="text-xs sm:text-sm"></p>
                  <h3 className="text-base sm:text-lg font-bold">{card.title}</h3>
                  <div
                    className="absolute right-4 bottom-3 bg-red-500 p-2 rounded-full cursor-pointer"
                    onClick={() => setFullImage(card.img)}
                  >
                    ➜
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          {fullImage && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
              <div className="relative">
                <img
                  src={fullImage}
                  alt="Full View"
                  className="max-w-full max-h-[80vh] rounded-lg"
                />
                <button
                  className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg text-xl"
                  onClick={() => setFullImage(null)}
                >
                  ✖
                </button>
              </div>
            </div>
          )}
        </div>

    </section>
  );  
}

export default Recent;
