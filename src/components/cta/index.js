// 'use client';
// // internal
// import bg from "@assets/img/cta/13/cta-bg-1.jpg";

// const ShopCta = () => {
//   // handleSubmit
//   const handleSubmit = e => {
//     e.preventDefault();
//   }
//   return (
//     <section
//       className="cta__area pt-50 pb-50 p-relative include-bg jarallax"
//       style={{ backgroundImage: `url(${bg.src})` }}
//     >
//       <div className="container">
//         <div className="cta__inner-13 white-bg">
//           <div className="row align-items-center">
//             <div className="col-xl-6 col-lg-6">
//               <div className="cta__content-13">
//                 <h3 className="cta__title-13">
//                   Subscribe for <br />
//                   Latest Trends & Offers
//                 </h3>
//               </div>
//             </div>
//             <div className="col-xl-6 col-lg-6">
//               <div className="cta__form-13">
//                 <form onSubmit={handleSubmit}>
//                   <div className="cta__input-13">
//                     <input type="email" placeholder="Enter Your Email" />
//                     <button type="submit" className="tp-btn">
//                       Subscribe
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ShopCta;
"use client";
import React from "react";
import Image from "next/image"; // Import Image component for optimized images

// Replace with your actual image paths or dynamic data
import approvalLogo from "@assets/img/logo/vic.png";
import vicLogo from "@assets/img/logo/approval.jpg";

const AccreditationsSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-3 wow fadeInUp" data-wow-delay=".2s">
          OUR ACCREDITATIONS & CERTIFICATIONS
        </h2>
        <p className="mag mb-5 wow fadeInUp text-lg" data-wow-delay=".4s">
          We are Accredited / Certified by the following organisations which are
          well known in the Solar Industry.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-4 col-sm-6 mb-3">
            <Image
              src={approvalLogo}
              alt="Solar Accreditation Logo"
              className="img-fluid logo-small wow fadeInUp"
              data-wow-delay=".6s"
              layout="intrinsic"
              width={200} // Set appropriate width
              height={100} // Set appropriate height
            />
          </div>
          <div className="col-md-4 col-sm-6 mb-3">
            <Image
              src={vicLogo}
              alt="Solar Accreditation Logo"
              className="img-fluid logo-small wow fadeInUp"
              data-wow-delay=".6s"
              layout="intrinsic"
              width={200} // Set appropriate width
              height={100} // Set appropriate height
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccreditationsSection;
