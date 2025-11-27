import React from "react";
import product from "/Nele_he_perfume_You_or_some_one_like_you_of_Etat_Libre_dOrange__daa24d6d-5e28-424b-93f9-0fbcc7e774fd 1.png"

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen scroll-mt-20 bg-gradient-to-b
     from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden h-96 shadow-xl  ">
              <img
                src={product}
                alt="Luxury Perfumes"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t form-black to-transparent opacity-50"></div>

              <div className="absolute bottom-0 left-0 text-white">
                <h3 className="text-2xl font-bold">Since 1996</h3>
                <p className="mt-2">
                  Discover the art of fragrance with our exclusive collection of premium perfumes.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-amber-900 mb-6">About Us</h2>
            <p className="text-lg text-gray-600 mb-4 ">
               At shopease, we believe in the power of scent to evoke emotions and memories. 
               Since 1996, we've been curating an exquisite collection of luxury perfumes,
                crafted from the finest ingredients, to help you express your unique style and personality.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">

 <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <h4 className="font-semibold text-pink-600 ">50+</h4>
       <p className="text-gray-600">Unique fragances</p>
      </div>


      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <h4 className="font-semibold text-pink-600 ">50+</h4>
       <p className="text-gray-600">Countries worldwide</p>
      </div>

       <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <h4 className="font-semibold text-pink-600 ">100%</h4>
       <p className="text-gray-600">Customer Satisfaction</p>
      </div>

       <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <h4 className="font-semibold text-pink-600 ">24/7</h4>
       <p className="text-gray-600">Customer Support</p>
      </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
