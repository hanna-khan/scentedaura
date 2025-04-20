import React, { useState } from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import ProductOne from "@assets/productone.png";

const productData = [
  {
    id: 1,
    name: "Lavender Bliss",
    price: "$12.99",
    description: "Soothing lavender wax sachet with dried florals.",
    image: ProductOne,
  },
  {
    id: 2,
    name: "Citrus Zest",
    price: "$10.50",
    description: "Bright citrus scent with a burst of freshness.",
    image: ProductOne,
  },
  {
    id: 3,
    name: "Rose Garden",
    price: "$14.99",
    description: "Delicate rose fragrance in an elegant sachet.",
    image: ProductOne,
  },
  {
    id: 4,
    name: "Vanilla Amber",
    price: "$11.75",
    description: "Warm vanilla with hints of amber spice.",
    image: ProductOne,
  },
  {
    id: 5,
    name: "Ocean Breeze",
    price: "$13.20",
    description: "Fresh marine scent for a relaxing feel.",
    image: ProductOne,
  },
  {
    id: 6,
    name: "Sandalwood Calm",
    price: "$15.00",
    description: "Earthy sandalwood with calming tones.",
    image: ProductOne,
  },
  {
    id: 7,
    name: "Lemon Verbena",
    price: "$12.30",
    description: "Clean, crisp lemon scent for energy boost.",
    image: ProductOne,
  },
  {
    id: 8,
    name: "Peach Blossom",
    price: "$13.50",
    description: "Sweet peach notes with floral undertones.",
    image: ProductOne,
  },
  {
    id: 9,
    name: "Jasmine Dream",
    price: "$14.10",
    description: "Dreamy jasmine that soothes the senses.",
    image: ProductOne,
  },
  {
    id: 10,
    name: "Cinnamon Spice",
    price: "$11.00",
    description: "Cozy cinnamon & clove in a soft wax base.",
    image: ProductOne,
  },
  {
    id: 11,
    name: "Eucalyptus Mint",
    price: "$12.60",
    description: "Refreshing mint with herbal eucalyptus.",
    image: ProductOne,
  },
  {
    id: 12,
    name: "Floral Escape",
    price: "$13.99",
    description: "Bouquet-inspired design with mixed florals.",
    image: ProductOne,
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
                className="h-56 w-full object-cover"
              />
              <div className="p-4 text-[#5e4a71]">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-[#8d8a85]">{product.description}</p>
                <p className="mt-2 font-bold">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < 12 && (
          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLoadMore}
              className="px-6 py-2 bg-[#7f6a93] text-white rounded-full shadow-md hover:bg-[#5e4a71] transition-all"
            >
              Load More
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
