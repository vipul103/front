import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import Image from "next/image";
import imgHotWaterSystem from "@assets/img/photos/Heat_Pump1.jpg";

export const metadata = {
  title: "Hot Water System",
};

export default function HotWaterSystem() {
  return (
    <Wrapper>
      <Header style_2={true} />
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
              HOT WATER <span className="text-teal-500">COMMERCIAL</span>
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              ECOGENICA innovative hot water commercial save energy and money.
              Contact us today and transform the way you live.
            </p>
            <button className="tp-btn">
              CONTACT US
            </button>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src={imgHotWaterSystem}
              alt="Hot Water System"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Feature 1 */}
            <div>
              <h2 className="text-6xl font-bold text-gray-800 mb-4">01</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Reduced environmental impact
              </h3>
              <p className="text-gray-600">
              Contribute to a sustainable future by minimising your carbon footprint and promoting responsible energy consumption.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <h2 className="text-6xl font-bold text-gray-800 mb-4">02</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Enhanced building comfort
              </h3>
              <p className="text-gray-600">
              Create a more comfortable and productive environment for your employees and customers with improved temperature control and air quality.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <h2 className="text-6xl font-bold text-gray-800 mb-4">03</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Government incentives and rebates
              </h3>
              <p className="text-gray-600">
              Take advantage of various financial incentives and government programs offered to support businesses transitioning to energy-efficient solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
}
