import React, { useState } from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import ProductOne from "../../assets/products/product1.jpg";
import ProductTwo from "../../assets/products/product2.jpg";
import ProductThree from "../../assets/products/product3.jpg";
import ProductFour from "../../assets/products/product9.jpg";
import ProductFive from "../../assets/products/product8.jpg";

const productData = [
  {
    id: 1,
    name: "Large size",
    price: "Rs 399",
    description: "Elevate your space with our large lavender wax sachet, enriched with dried florals for a calming and elegant aroma.",
    image: ProductFour,
  },
  {
    id: 2,
    name: "2 Small size",
    price: "Rs 99",
    description: "A duo of vibrant citrus-scented sachets that add a fresh, energizing touch to drawers, closets, or your workspace.",
    image: ProductTwo,
  },
  {
    id: 3,
    name: "Medium size",
    price: "Rs 349",
    description: "Experience subtle luxury with our rose-scented wax sachet, blending soft floral notes with a timeless feel.",
    image: ProductThree,
  },
];

const Products = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    if (visibleCount < 12) {
      setVisibleCount((prev) => prev + 3);
    }
  };

  return (
    <div className="bg-[#fdfaf6] py-20"
      id="products"
    >
      <div className="container">
        {/* Section Heading */}
        <motion.div
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="text-center max-w-[400px] mx-auto mb-12"
        >
          <h2 className="text-4xl font-serif font-bold text-[#5e4a71]">Our Products</h2>
          <p className="text-[#8a8882] text-sm mt-2">
            Handcrafted scented wax sachets for every mood and moment.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productData.slice(0, visibleCount).map((product, index) => (
            <motion.div
              key={product.id}
              variants={SlideUp(index * 0.2)}
              initial="initial"
              whileInView="animate"
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-[#e7e4da]"
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ height: '20rem' }}
                className=" w-full object-cover"
              />
              <div className="p-4 text-[#5e4a71]">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-[#8d8a85]">{product.description}</p>
                <p className="mt-2 font-bold">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Products;
