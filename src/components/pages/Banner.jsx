import React from 'react';


const Banner = () => {
  return (
    <div className="flex items-center justify-between p-12 bg-gray-100 relative">
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to CraftNest</h1>
        <p className="text-xl mb-6">High-Quality Furniture for Your Home and Office</p>
        <a 
          href="/RoomInspiration" 
          className="inline-block px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
        >
          Shop Now
        </a>
      </div>
      <div className="max-w-xs">
        <img 
          src="\src\assets\images\Gemini_Generated_Image_1m5fgn1m5fgn1m5f.jpg" 
          alt="CraftNest Banner" 
          className="w-full h-auto rounded-xl"
        />
      </div>
    </div>
  );
};

export default Banner;
