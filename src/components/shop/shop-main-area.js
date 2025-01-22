// 'use client';
// import { useState } from "react";
// // internal
// import Wrapper from "@layout/wrapper";
// import Header from "@layout/header";
// import ShopCta from "@components/cta";
// import Footer from "@layout/footer";
// import ShopBreadcrumb from "@components/common/breadcrumb/shop-breadcrumb";
// import ShopArea from "@components/shop/shop-area";
// import ErrorMessage from "@components/error-message/error";
// import { useGetShowingProductsQuery } from "src/redux/features/productApi";
// import ShopLoader from "@components/loader/shop-loader";

// export default function ShopMainArea({ Category, category, brand, priceMin, max, priceMax, color }) {
//   const { data: products, isError, isLoading } = useGetShowingProductsQuery();
//   const [shortValue,setShortValue] = useState("");

//   // selectShortHandler
//   const selectShortHandler = (e) => {
//     setShortValue(e.value);
//   };

//   // decide what to render
//   let content = null;
//   if (isLoading) {
//     content = <ShopLoader loading={isLoading} />;
//   }

//   if (!isLoading && isError) {
//     content = <ErrorMessage message="There was an error" />;
//   }

//   if (!isLoading && !isError && products?.products?.length === 0) {
//     content = <ErrorMessage message="No products found!" />;
//   }

//   if (!isLoading && !isError && products?.products?.length > 0) {
//     let all_products = products.products;
//     let product_items = all_products;

//     if (Category) {
//       product_items = product_items.filter(
//         (product) =>
//           product.parent.toLowerCase().replace("&", "").split(" ").join("-") ===
//           Category
//       );
//     }
//     if (category) {
//       product_items = product_items.filter(
//         (product) =>
//           product.children
//             .toLowerCase()
//             .replace("&", "")
//             .split(" ")
//             .join("-") === category
//       );
//     }
//     if (brand) {
//       product_items = product_items.filter(
//         (product) =>
//           product.brand.name.toLowerCase().replace("&", "").split(" ").join("-") ===
//           brand
//       );
//     }
//     if (color) {
//       product_items = product_items.filter((product) =>
//         product.colors.includes(color)
//       );
//     }
//     if (priceMin || max || priceMax) {
//       product_items = product_items.filter((product) => {
//         const price = Number(product.originalPrice);
//         const minPrice = Number(priceMin);
//         const maxPrice = Number(max);
//         if (!priceMax && priceMin && max) {
//           return price >= minPrice && price <= maxPrice;
//         }
//         if (priceMax) {
//           return price >= priceMax;
//         }
//       });
//     }
//     // selectShortHandler
//     if (shortValue === "Short Filtering") {
//       product_items = all_products
//     }
//     // Latest Product
//     if (shortValue === "Latest Product") {
//       product_items = all_products.filter(
//         (product) => product.itemInfo === "latest-product"
//       );
//     }
//     // Price low to high
//     if (shortValue === "Price low to high") {
//       product_items = all_products
//         .slice()
//         .sort((a, b) => Number(a.originalPrice) - Number(b.originalPrice));
//     }
//     // Price high to low
//     if (shortValue === "Price high to low") {
//       product_items = all_products
//         .slice()
//         .sort((a, b) => Number(b.originalPrice) - Number(a.originalPrice));
//     }


//     content = (
//       <ShopArea
//         products={product_items}
//         all_products={all_products}
//         shortHandler={selectShortHandler}
//       />
//     );
//   }

//   return (
//     <Wrapper>
//       <Header style_2={true} />
//       <ShopBreadcrumb />
//       {content}
//       <ShopCta />
//       <Footer />
//     </Wrapper>
//   );
// }
'use client';
import Link from "next/link";
import Image from "next/image";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import ShopBreadcrumb from "@components/common/breadcrumb/shop-breadcrumb";
import ShopCta from "@components/cta";

// Internal assets
import img1 from "@assets/img/photos/soa.webp";
import img2 from "@assets/img/photos/air.png";
import img3 from "@assets/img/photos/heat_pump1.jpg";
import img4 from "@assets/img/photos/ss.webp";

export default function ShopMainArea() {
  return (
    <Wrapper>
      <Header style_2={true} />
      <ShopBreadcrumb />
      <div className="py-12 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto space-y-12 px-6">
          {/* Row 1 */}
          <div className="flex justify-between gap-8">
            {/* Product 1 */}
            <Link
              href="/hotwater"
              className="w-[48%] bg-white text-gray-800 shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105"
            >
              {/* Image Section */}
              <div className="flex justify-center bg-gray-100 py-6">
                <Image
                  src={img1}
                  alt="Hot Water System"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
              {/* Content Section */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Hot Water System</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Heat Pump hot water systems are an energy-efficient solution.
                </p>
                <div className="px-4 py-2 text-sm font-semibold text-white bg-teal-500 rounded hover:bg-teal-600 transition-shadow shadow-md hover:shadow-lg">
                  Read More
                </div>
              </div>
            </Link>

            {/* Product 2 */}
            <Link
              href="/ac"
              className="w-[48%] bg-white text-gray-800 shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="flex justify-center bg-gray-100 py-6">
                <Image
                  src={img2}
                  alt="Air Conditioner"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Air Conditioner</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Upgrade to eco-friendly air conditioning that replaces outdated gas systems.
                </p>
                <div className="px-4 py-2 text-sm font-semibold text-white bg-teal-500 rounded hover:bg-teal-600 transition-shadow shadow-md hover:shadow-lg">
                  Read More
                </div>
              </div>
            </Link>
          </div>

          {/* Row 2 */}
          <div className="flex justify-between gap-8">
            {/* Product 3 */}
            <Link
              href="/solar-panel"
              className="w-[48%] bg-white text-gray-800 shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="flex justify-center bg-gray-100 py-6">
                <Image
                  src={img3}
                  alt="Solar Panel"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Solar Panel</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Reduce your energy bills and carbon footprint with solar panels.
                </p>
                <div className="px-4 py-2 text-sm font-semibold text-white bg-teal-500 rounded hover:bg-teal-600 transition-shadow shadow-md hover:shadow-lg">
                  Read More
                </div>
              </div>
            </Link>

            {/* Product 4 */}
            <Link
              href="/hot-water-commercial"
              className="w-[48%] bg-white text-gray-800 shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="flex justify-center bg-gray-100 py-6">
                <Image
                  src={img4}
                  alt="Hot Water Commercial"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Hot Water Commercial</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our commercial hot water systems are built for high-demand environments.
                </p>
                <div className="px-4 py-2 text-sm font-semibold text-white bg-teal-500 rounded hover:bg-teal-600 transition-shadow shadow-md hover:shadow-lg">
                  Read More
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <ShopCta />
      <Footer />
    </Wrapper>
  );
}











