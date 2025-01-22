"use client"; // Mark this file as a Client Component

import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import Image from "next/image";
import imgHotWaterSystem from "@assets/img/photos/Heat_Pump1.jpg";

export default function HotWaterSystem() {
  return (
    <Wrapper>
      <Header style_2={true} />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            Revolutionize Your Home <br />
            <span className="highlight">Hot Water Systems</span>
          </h1>
          <p className="hero-description">
            Upgrade to modern, energy-efficient hot water systems. Save on bills
            while enjoying superior performance with government rebates.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="flip-card-container">
            {/* Left Image */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Image
                    src={imgHotWaterSystem}
                    alt="Energy-Efficient System"
                    width={300}
                    height={300}
                    className="image"
                  />
                </div>
                <div className="flip-card-back">
                  <h3 className="back-title">Energy-Efficient Systems</h3>
                  <p className="back-description">
                    Save money with our energy-efficient hot water solutions,
                    designed for maximum performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Image
                    src={imgHotWaterSystem}
                    alt="Hot Water System"
                    width={400}
                    height={400}
                    className="image"
                  />
                </div>
                <div className="flip-card-back">
                  <h3 className="back-title">Modern Hot Water Systems</h3>
                  <p className="back-description">
                    Enjoy energy savings, top performance, and government
                    rebates with our innovative hot water systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Image
                    src={imgHotWaterSystem}
                    alt="Eco-Friendly System"
                    width={300}
                    height={300}
                    className="image"
                  />
                </div>
                <div className="flip-card-back">
                  <h3 className="back-title">Eco-Friendly Systems</h3>
                  <p className="back-description">
                    Reduce your carbon footprint with our eco-friendly hot water
                    systems that benefit both you and the planet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="section-title">Why Choose Us?</h2>
          <div className="cards-container">
            <div className="glass-card">
              <h3 className="card-title">LICENSED PROFESSIONALS</h3>
              <p className="card-description">
                All of our licensed professionals have been carefully selected
                and rigorously trained, ensuring that you receive the best
                experience. When you choose to work with us, know that you are
                consistently choosing quality and excellence. Contact us to
                learn more.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="card-title">VIC AND NSW BENEFITS</h3>
              <p className="card-description">
                Get a new hot water system with significant rebates in Victoria
                and NSW. Enjoy reduced energy consumption and lower bills
                through the VEU and ESS programs. Save with top-tier,
                eco-friendly products.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="card-title">FIRST-RATE BRANDS</h3>
              <p className="card-description">
                Upgrade to an Emerald energy-efficient hot water system. Enjoy
                significant energy savings and rebates in Victoria and NSW. Save
                on energy bills with top-tier, eco-friendly products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Scoped CSS */}
      <style jsx>{`
        .hero-section {
          background: linear-gradient(to bottom right, #38bdf8, #0ea5e9);
          color: white;
          text-align: center;
          padding: 4rem 2rem;
        }
        .hero-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .highlight {
          color: #fde047;
        }
        .hero-description {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .why-choose-us {
          background-color: #f9fafb;
          padding: 4rem 2rem;
          text-align: center;
        }
        .section-title {
          font-size: 2rem;
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 2rem;
        }
        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .flip-card-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .flip-card {
          perspective: 1000px;
          width: 300px;
          height: 300px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.6s ease;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1rem;
          overflow: hidden;
        }
        .flip-card-front {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
        }
        .flip-card-back {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(to bottom right, #0ea5e9, #38bdf8);
          color: white;
          transform: rotateY(180deg);
          padding: 1rem;
          text-align: center;
        }
        .back-title {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        .back-description {
          font-size: 0.9rem;
          line-height: 1.4;
        }
      `}</style>
    </Wrapper>
  );
}
