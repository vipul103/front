"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// Import images
import achievement1 from "@assets/img/achivement/1.png";
import achievement2 from "@assets/img/achivement/2.png";
import achievement3 from "@assets/img/achivement/3.png";

// Define achievements array with imported images
const achievements = [
  {
    id: 1,
    image: achievement1,
    number: 200,
    offer_title: "Achieved Milestone 1",
  },
  {
    id: 2,
    image: achievement2,
    number: 150,
    offer_title: "Achieved Milestone 2",
  },
  {
    id: 3,
    image: achievement3,
    number: 300,
    offer_title: "Achieved Milestone 3",
  },
];

const CounterOneSection = () => {
  const [data, setData] = useState([]);

  // Simulating API call or data fetching
  useEffect(() => {
    setData(achievements);
  }, []);

  return (
    <section
      className="counter-one"
      style={{
        paddingTop: "20px",
        paddingBottom: "45px",
        backgroundColor: "lightgreen", // Apply light green background to the entire container
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 text-center">
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              Achievements
            </h2>
            <div className="spacer-single"></div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="counter-one__inner">
          <div className="counter-one__bg-shape" style={{ backgroundColor: "#fff" }}></div>
          <div className="row">
            {data.length > 0 &&
              data.map((achievement) => (
                <div
                  key={achievement.id}
                  className="col-xl-4 col-lg-6 col-md-6 counter-one__item"
                >
                  <div className="counter-one__single text-center">
                    <div className="counter-one__icon mb-3">
                      {achievement.image ? (
                        <Image
                          src={achievement.image}
                          alt={achievement.offer_title || "Achievement Image"}
                          className="img-fluid"
                          layout="intrinsic" // Use intrinsic layout for optimized rendering
                          width={100} // Set appropriate width
                          height={100} // Set appropriate height
                        />
                      ) : (
                        <div
                          style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "#ccc",
                          }}
                        >
                          {/* Fallback Placeholder */}
                        </div>
                      )}
                    </div>
                    <div className="counter-one__count-list-content">
                      <div className="counter-one__count count-box">
                        <h3 className="count-text" data-stop={achievement.number} data-speed="1500">
                          {achievement.number}
                        </h3>
                        <span>+</span>
                      </div>
                      <p className="counter-one__text">{achievement.offer_title}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterOneSection;
