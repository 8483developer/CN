import React from 'react';
import Banner from './Banner'; // Uncommented the Banner import
import ProductCard from './ProductCard';
import 'flowbite';

const Homepage = () => {

 
  return (
    <div>
      {/* Hero Banner */}
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        {/* Carousel Wrapper */}
        <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
          {/* Item 1 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="src/assets/images/crousal/DALL·E 2024-12-13 08.29.11 - A modern homepage design for a furniture website named 'CraftNest.' The homepage features a visually stunning banner carousel with high-quality images.webp"
              className="block w-full h-full object-cover"
              alt="Banner 1"
            />
          </div>
          {/* Item 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="src/assets/images/crousal/Gemini_Generated_Image_5mjb3k5mjb3k5mjb.jpg"
              className="block w-full h-full object-cover"
              alt="Banner 2"
            />
          </div>
          {/* Item 3 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="src/assets/images/crousal/Gemini_Generated_Image_lkywumlkywumlkyw.jpg"
              className="block w-full h-full object-cover"
              alt="Banner 3"
            />
          </div>
          {/* Item 4 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="src/assets/images/crousal/Gemini_Generated_Image_qyw96qyw96qyw96q.jpg"
              className="block w-full h-full object-cover"
              alt="Banner 4"
            />
          </div>
          {/* Item 5 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="src/assets/images/crousal/Gemini_Generated_Image_sgfspgsgfspgsgfs.jpg"
              className="block w-full h-full object-cover"
              alt="Banner 5"
            />
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute z-30 flex space-x-3 bottom-4 left-1/2 transform -translate-x-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-gray-300"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-gray-300"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-gray-300"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-gray-300"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-gray-300"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>

        {/* Slider Controls */}
        <button
          type="button"
          className="absolute top-1/2 left-2 z-30 flex items-center justify-center h-8 w-8 bg-white/70 rounded-full group focus:outline-none transform -translate-y-1/2"
          data-carousel-prev
        >
          <svg
            className="w-5 h-5 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          className="absolute top-1/2 right-2 z-30 flex items-center justify-center h-8 w-8 bg-white/70 rounded-full group focus:outline-none transform -translate-y-1/2"
          data-carousel-next
        >
          <svg
            className="w-5 h-5 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Featured Categories */}
      <div className="featured-categories">
        <h2 className="text-4xl font-bold mb-5 text-center "><i>Featured Categories</i></h2>
        <div className="category-grid grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
          <div className="category-item relative">
            <img
              src="src/assets/images/DALL·E 2024-12-11 11.05.44 - A stylish and cozy living room setup featuring modern furniture. The room includes a sleek, contemporary sofa set in neutral tones, a wooden coffee ta.webp"
              alt="Living Room"
              className="w-full h-64 object-cover rounded-3xl"
            />
            <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50">
              Living Room
            </h3>
          </div>
          <div className="category-item relative">
            <img
              src="src/assets/images/Gemini_Generated_Image_9m58ld9m58ld9m58.jpg"
              alt="Bedroom"
              className="w-full h-64 object-cover rounded-3xl"
            />
            <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50">
              Bedroom
            </h3>
          </div>
          <div className="category-item relative">
            <img
              src="src/assets/images/Gemini_Generated_Image_sdtep2sdtep2sdte.jpg"
              alt="Dining Room"
              className="w-full h-64 object-cover rounded-3xl"
            />
            <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50">
              Dining Room
            </h3>
          </div>
        </div>
      </div>

      {/* Top-Selling Products */}
      <div className="top-selling-products">
        <h2 className="text-4xl font-bold mb-5 text-center"><i>Top-Selling Products</i></h2>
        <div className="product-grid grid grid-cols-1 md:grid-cols-3 gap-6 p-10 py-10">
          <ProductCard
            imageUrl="src/assets/images/DALL·E 2024-12-11 11.10.02 - A modern sofa set designed for a stylish living room. The setup includes a sleek, L-shaped sectional sofa in a neutral beige or gray tone with plush c.webp"
            title="Modern Sofa Set"
            price=" ₹999"
            description="A sleek and stylish sofa for your living room which makes it attractive"
          />
          <ProductCard
            imageUrl="src/assets/images/DALL·E 2024-12-11 11.12.34 - An elegant dining table setup designed for a luxurious dining room. The table is made of polished dark wood with a glossy finish, complemented by a se.webp"
            title="Elegant Dining Table"
            price=" ₹599"
            description="A beautiful table to bring your dining room together"
          />
          <ProductCard
            imageUrl="src/assets/images/Gemini_Generated_Image_5kpf105kpf105kpf.jpg"
            title="Stylish Office Chair"
            price=" ₹199"
            description="Comfortable and ergonomic chair for your workspace"
          />
        </div>
      </div>

      {/* Seasonal Offer Banner */}
      <Banner
        imageUrl="path/to/seasonal_offer_banner.jpg"
        title="Seasonal Offer: Up to 50% Off"
        description="Limited time offer! Shop now and save big."
      />
/
      {/* Trending Collection */}
      <h2 className="text-4xl font-bold mb-5 text-center"><i>Trending Collection</i></h2>
      <div className="trending-collection">
        <img
          src="src/assets/images/Gemini_Generated_Image_j785lyj785lyj785.jpg"
          alt="Trending"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Homepage;
