import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import Image from "next/image";
import imgAirConditioner from "@assets/img/photos/Heat_Pump1.jpg"; // Replace this with your correct image path

export const metadata = {
  title: "AIR CONDITIONER",
};

export default function AirConditionerPage() {
  return (
    <Wrapper>
      <Header style_2={true} />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative flex items-center justify-between w-full h-[80vh] bg-white">
          <div className="flex flex-col items-start justify-center w-1/2 px-12">
            <h1 className="text-6xl font-semibold tracking-tight text-gray-800">
              AIR CONDITIONER
            </h1>
            <button className="tp-btn">
              GET A FREE QUOTE NOW
            </button>
          </div>
          <div className="relative w-1/2 h-full">
            <Image
              src={imgAirConditioner}
              alt="Air Conditioner"
              className="object-cover w-full h-full"
            />
          </div>
        </section>

        {/* Details Section */}
        <section className="px-12 py-16 bg-gray-50">
          <div className="flex items-start gap-6">
            <h2 className="text-6xl font-bold text-gray-800">01</h2>
            <div>
              <h3 className="text-2xl font-semibold text-gray-700">
                Split System Air Conditioner
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                Experience superior comfort with our split system AC! Our
                efficient indoor unit cools your room quietly, while the
                powerful outdoor unit expels heat outside. Enjoy perfect
                temperature control without the noise. Contact us now for a
                cooler, more comfortable home!
              </p>
            </div>
            <h2 className="text-6xl font-bold text-gray-800">02</h2>
            <div>
              <h3 className="text-2xl font-semibold text-gray-700">
              Multi-Head System Air Conditioner.
              </h3>
              <p className="mt-4 text-lg text-gray-600">
              Discover the efficiency of Midea's multi-split system air conditioners! Heat or cool multiple rooms with just one outdoor unit connected to multiple indoor units.
               Using advanced split system technology, the condenser is placed outside, while the indoor units keep your home perfectly comfortable.
                Contact us today to upgrade your climate control!
              </p>
            </div>
            <h2 className="text-6xl font-bold text-gray-800">03</h2>
            <div>
              <h3 className="text-2xl font-semibold text-gray-700">
              Ducted Reverse Cycle
              </h3>
              <p className="mt-4 text-lg text-gray-600">
              Elevate your comfort with a ducted air conditioner! Ideal for larger buildings,
               it features a ceiling-mounted indoor unit and an outdoor unit, delivering conditioned air through a network of ducts.
               Enjoy efficient, whole-building climate control. Contact us today!
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Wrapper>
  );
}

