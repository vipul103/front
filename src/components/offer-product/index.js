// 'use client';
// import React, { useState } from "react";
// import Link from "next/link";
// // internal
// import ErrorMessage from "@components/error-message/error";
// import ProductLoader from "@components/loader/product-loader";
// import SingleCoupon from "./single-coupon";
// import { useGetOfferCouponsQuery } from "src/redux/features/coupon/couponApi";

// const OfferPopularProduct = () => {
//   const [copiedCode, setCopiedCode] = useState("");
//   const [copied, setCopied] = useState(false);


//   const handleCopied = (code) => {
//     setCopiedCode(code);
//     setCopied(true);
//     setTimeout(() => {
//       setCopied(false)
//     }, 3000);
//   };

//   const { data: offerCoupons, isError, isLoading } = useGetOfferCouponsQuery();
//   // decide what to render
//   let content = null;

//   if (isLoading) {
//     content = (
//       <div className="p-relative">
//         <ProductLoader loading={isLoading} />
//       </div>
//     );
//   }

//   if (!isLoading && isError) {
//     content = <ErrorMessage message="There was an error" />;
//   }

//   if (!isLoading && !isError && offerCoupons?.length === 0) {
//     content = <ErrorMessage message="No products found!" />;
//   }

//   if (!isLoading && !isError && offerCoupons?.length > 0) {
//     const coupon_items = offerCoupons;
//     content = (
//       <div className="row">
//         {coupon_items.map((coupon) => (
//           <SingleCoupon
//             key={coupon._id}
//             coupon={coupon}
//             handleCopied={handleCopied}
//             copied={copied}
//             copiedCode={copiedCode}
//           />
//         ))}
//       </div>
//     );
//   }

//   return (
//     <section className="product__coupon-area porduct__offer pt-120">
//       <div className="container">
//         <div className="row align-items-end">
//           <div className="col-xl-6 col-md-6">
//             <div className="section__title-wrapper-13 mb-35">
//               <h3 className="section__title-13">Deal of The Day</h3>
//             </div>
//           </div>
//           <div className="col-xl-6 col-md-6">
//             <div className="product__offer-btn mb-30 text-md-end">
//               <Link href="/shop" className="tp-btn">
//                 View All Products
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="product__coupon-area pb-120">
//           <div className="container">{content}</div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OfferPopularProduct;

"use client";
import Image from "next/image";
import img1 from "@assets/img/photos/Heat_Pump1.jpg";
import img2 from "@assets/img/photos/Heat_Pump1.jpg";
import img3 from "@assets/img/photos/Heat_Pump1.jpg";
import React, { useState } from "react";

const SquareImages = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (id) => {
    setHovered(id);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="flex-container">
      {/* Image 1 */}
      <div
        className={`image-wrapper ${hovered === "img1" ? "hovered" : ""}`}
        onMouseEnter={() => handleMouseEnter("img1")}
        onMouseLeave={handleMouseLeave}
      >
        <Image src={img1} alt="Hot Water Rebate" layout="fill" objectFit="cover" />
        <div className="overlay">
          <div className="text">
            <h2>Hot Water Rebate</h2>
            <p>UP TO 70% LESS ENERGY</p>
          </div>
        </div>
      </div>

      {/* Image 2 */}
      <div
        className={`image-wrapper ${hovered === "img2" ? "hovered" : ""}`}
        onMouseEnter={() => handleMouseEnter("img2")}
        onMouseLeave={handleMouseLeave}
      >
        <Image src={img2} alt="Aircon Rebate" layout="fill" objectFit="cover" />
        <div className="overlay">
          <div className="text">
            <h2>Aircon Rebate</h2>
            <p>GOVERNMENT INITIATIVE</p>
          </div>
        </div>
      </div>

      {/* Image 3 */}
      <div
        className={`image-wrapper ${hovered === "img3" ? "hovered" : ""}`}
        onMouseEnter={() => handleMouseEnter("img3")}
        onMouseLeave={handleMouseLeave}
      >
        <Image src={img3} alt="Contact Us" layout="fill" objectFit="cover" />
        <div className="overlay">
          <div className="text">
            <h2>Contact Us</h2>
            <p>REDUCE YOUR ELECTRICITY BILLS</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .flex-container {
          display: flex;
          width: 100%;
          height: 60vh;
          perspective: 1000px;
        }

        .image-wrapper {
          position: relative;
          flex: 1;
          height: 100%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.5s ease, box-shadow 0.5s ease;
          transform-style: preserve-3d;
        }

        .image-wrapper:hover,
        .image-wrapper.hovered {
          transform: rotateY(10deg) scale(1.1);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.5);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          transform: translateZ(50px);
        }

        .image-wrapper:hover .overlay,
        .image-wrapper.hovered .overlay {
          opacity: 1;
        }

        .text {
          text-align: center;
        }

        .text h2 {
          font-size: 24px;
          font-weight: bold;
          margin: 0;
        }

        .text p {
          margin: 8px 0 0;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};

export default SquareImages;






