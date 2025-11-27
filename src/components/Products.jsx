import React, { useEffect, useState } from "react";
import product1 from "/a_dark_amber_sweaty_perfume_bottle_with__a_dark_de-removebg-preview 1.png";
import product2 from "/a_dark_amber_sweaty_perfume_bottle_with__a_dark_de__1_-removebg-preview 1.png";
import product3 from "/Old_fashion_gold_color_perfume__1_-removebg-preview 1.png";
import product4 from "/the_very_good_looking_parfume_calling_B_A_H_R_I_J_-removebg-preview.png";
import product5 from "/Aline_Zanette_A_bottle_of_lavender_perfume_on_the_water_at_dusk_91fa4d71-345e-4861-a119-16cabf95b3e1 1.png";
import product6 from "/pexels-valeria-boltneva-1961791 1.png";
import product7 from "/Group 17.png";
import product8 from "/Old_fashion_gold_color_perfume__2_-removebg-preview 1.png";
import product9 from "/Old_fashion_gold_color_perfume_bottles_set-removebg-preview 1.png";
import product10 from "/Old_fashion_black___gold_color_perfume_bottles_set__2_-removebg-preview 1.png";
import product11 from "/Old_fashion_gold_color_perfume_bottles_set__3_-removebg-preview (1) 1.png";
import product12 from "/Old_fashion_balck_and_gold_color_perfume-removebg-preview 1.png";
import product13 from "/ariekoprasethio_a_bottle_of_perfume_spray_super_realistic_4K_re_f44fec90-0d8e-4dc3-96f8-3f03da660dec (1)FFSB 1 (1).png";
import product14 from "/diesel_punk_marble_wide_angle_Hyperrealistic_neo_--removebg-preview.png";
import product15 from "/Old_fashion_balck_and_gold_color_perfume__3_-removebg-preview 1.png";

import {
  FiChevronLeft,
  FiChevronRight,
  FiHeart,
  FiShoppingCart,
  FiStar,
} from "react-icons/fi";

const Products = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(4);
  const products = [
    {
      id: 1,
      name: "Floral",
      price: 99.99,
      rating: 4.5,
      image: product1,
      discount: 20,
    },
    {
      id: 2,
      name: "Oriental",
      price: 349.99,
      rating: 4.5,
      image: product2,
      discount: 10,
    },
    {
      id: 3,
      name: "Moody",
      price: 129.99,
      rating: 4.5,
      image: product3,
      discount: 10,
    },
    {
      id: 4,
      name: "Fruity",
      price: 199.99,
      rating: 4.5,
      image: product4,
      discount: 15,
    },
    {
      id: 5,
      name: "Citrus",
      price: 229.99,
      rating: 4.5,
      image: product5,
      discount: 0,
    },
    {
      id: 6,
      name: "Aromaitc",
      price: 139.99,
      rating: 4.5,
      image: product6,
      discount: 5,
    },
    {
      id: 7,
      name: "Chypre",
      price: 249.99,
      rating: 4.5,
      image: product7,
      discount: 0,
    },
    {
      id: 8,
      name: "Oriental",
      price: 289.99,
      rating: 4.5,
      image: product8,
      discount: 15,
    },
    {
      id: 9,
      name: "Floral",
      price: 339.99,
      rating: 4.5,
      image: product9,
      discount: 5,
    },
    {
      id: 10,
      name: "Moody",
      price: 129.99,
      rating: 4.5,
      image: product10,
      discount: 10,
    },
    {
      id: 11,
      name: "Fruity",
      price: 199.99,
      rating: 4.5,
      image: product11,
      discount: 15,
    },
    {
      id: 12,
      name: "Citrus",
      price: 229.99,
      rating: 4.5,
      image: product12,
      discount: 0,
    },
    {
      id: 13,
      name: "Aromaitc",
      price: 139.99,
      rating: 4.5,
      image: product13,
      discount: 5,
    },
    {
      id: 14,
      name: "Chypre",
      price: 249.99,
      rating: 4.5,
      image: product14,
      discount: 0,
    },
    {
      id: 15,
      name: "Oriental",
      price: 289.99,
      rating: 4.5,
      image: product15,
      discount: 15,
    },
  ];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setProductsPerPage(1);
      } else if (window.innerWidth < 768) {
        setProductsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setProductsPerPage(3);
      } else {
        setProductsPerPage(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(products.length / productsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };
  const visibleProducts = products.slice(
    currentSlide * productsPerPage,
    (currentSlide + 1) * productsPerPage
  );

  return (
    <section id="products" className="py-12 scroll-mt-20 bg-gray-50">
      <div className="container mx-auto px-4 ">
        <div className="flex justify-between items-center mb-8">
          <h2 className="md:text-3xl text-2xl font-bold text-amber-900">
            Featured Products
          </h2>
          <div className="flex space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md bg:pink-100 text-pink-600 
            transition-colors"
              aria-label="Previous-slide"
            >
              <FiChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md bg:pink-100 text-pink-600 
            transition-colors"
              aria-label="Next-slide"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden
                    transition-all duration-300 hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-75 object-center"
                  />
                  {product.discount > 0 && (
                    <span
                      className="absolute top-3 right-3 bg-red-500
                                text-white text-xs font-bold px-2 py-1 rounded-full "
                    >
                      -({product.discount})%
                    </span>
                  )}
                  <button
                    className="absolute top-3 left-3 p-2 bg-white rounded-full
                            shadow-md hover:bg-pink-100 text-gray-700"
                  >
                    <FiHeart size={18} />
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    {[
                      ...Array(5).map((_, i) => (
                        <FiStar
                          key={i}
                          size={16}
                          className={
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }
                        />
                      )),
                    ]}
                    <span className="text-sm text-gray-500 ml-1">
                      ({product.rating})
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-pink-600">
                        $(
                        {product.price *
                          (1 - product.discount / 100).toFixed(2)}
                        )
                      </span>
                      {product.discount > 0 && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          $({product.price.toFixed(2)})
                        </span>
                      )}
                    </div>
                    <button className="p-2 bg-pink-950 rounded-full text-white hover:bg-pink-700 transition-colors">
                      <FiShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-pink-950" : "bg-gray-400"
              }`}
              aria-label={`Go to Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
