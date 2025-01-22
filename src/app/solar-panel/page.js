import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import Image from "next/image";
import imgHotWaterSystem from "@assets/img/photos/Heat_Pump1.jpg";

export const metadata = {
  title: "solar panel",
};

export default function solarpanel() {
  return (
    <Wrapper>
      <Header style_2={true} />
    <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
              {/* Text Section */}
              <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
                <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
                  SOLAR <span className="text-teal-500">PANEL</span>
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                  ECOGENICA innovative hot water systems save energy and money.
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
                  Significant Cost Savings
                  </h3>
                  <p className="text-gray-600">
                  The Victorian Energy Upgrade Program offers generous rebates that reduce the upfront cost of installing solar panels, making clean energy more affordable.
                   You'll start saving on your energy bills from day one, with long-term financial benefits as your solar system pays for itself over time.
                  </p>
                </div>
    
                {/* Feature 2 */}
                <div>
                  <h2 className="text-6xl font-bold text-gray-800 mb-4">02</h2>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Environmental Impact
                  </h3>
                  <p className="text-gray-600">
                  Solar panels allow you to harness renewable energy, reducing your reliance on fossil fuels and lowering your carbon footprint.
                   By participating in the program, you contribute to a greener future for Victoria by promoting sustainable energy use.
                  </p>
                </div>
    
                {/* Feature 3 */}
                <div>
                  <h2 className="text-6xl font-bold text-gray-800 mb-4">03</h2>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Increased Home Value
                  </h3>
                  <p className="text-gray-600">
                  Installing solar panels can boost your property’s value, making it a smart investment.
                   Homes with solar power are attractive to buyers who are looking for energy-efficient and environmentally friendly options, ensuring your property stands out in the market.
                  In short, the Victorian Energy Upgrade Program makes going solar a financially wise and environmentally responsible choice, turning your home into a powerhouse of savings and sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
      <Footer />
    </Wrapper>
  );
}
