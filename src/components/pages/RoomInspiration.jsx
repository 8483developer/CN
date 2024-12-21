import React, { useState } from "react";

const RoomInspiration = () => {
  const [filter, setFilter] = useState("All");

  const roomData = [
    { id: 1, type: "Living Room", img: "/src/assets/images/DALL·E 2024-12-11 11.05.44 - A stylish and cozy living room setup featuring modern furniture. The room includes a sleek, contemporary sofa set in neutral tones, a wooden coffee ta.webp" },
    { id: 2, type: "Bedroom", img: "src/assets/images/Gemini_Generated_Image_9m58ld9m58ld9m58.jpg" },
    { id: 3, type: "Dining Room", img: "src/assets/images/Gemini_Generated_Image_sdtep2sdtep2sdte.jpg" },
    { id: 4, type: "Living Room", img: "/src/assets/images/Gemini_Generated_Image_3gzmfa3gzmfa3gzm.jpg" },
    { id: 5, type: "Bedroom", img: "/src/assets/images/Gemini_Generated_Image_gy361tgy361tgy36.jpg" },
    { id: 6, type: "Office", img: "/src/assets/images/Gemini_Generated_Image_rdql7trdql7trdql.jpg" },
  ];

  const filteredRooms =
    filter === "All" ? roomData : roomData.filter((room) => room.type === filter);

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-12 py-12 md:px-8 ">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Room Inspiration</h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
          Browse through beautifully designed rooms to inspire your next furniture purchase.
        </p>
      </div>

      {/* Filter Options */}
      <div className="flex flex-wrap justify-center mt-18 space-x-4 pb-4">
  {["All", "Living Room", "Bedroom", "Dining Room", "Office"].map((category) => (
    <button
      key={category}
      onClick={() => setFilter(category)}
      className={`px-4 py-2 rounded-lg font-medium text-sm sm:text-base w-full sm:w-auto ${
        filter === category
          ? "bg-[#7b3f00] text-white"
          : "bg-gray-200 hover:bg-gray-300 text-gray-800"
      } transition mb-4 sm:mb-0`}
    >
      {category}
    </button>
  ))}
</div>


      {/* Room Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <img
              src={room.img}
              alt={room.type}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-110 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <p className="text-white text-xl sm:text-2xl font-semibold">{room.type}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action */}
      <div className="mt-16 bg-[#7b3f00] text-white p-8 rounded-lg text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Need Help Designing Your Space?</h2>
        <p className="mb-6 text-sm sm:text-base">
          Our design experts are here to help you choose the perfect furniture for your room.
        </p>
        <a 
          href="/ContactUs" 
          className="inline-block px-6 py-3 bg-white text-[#7b3f00] text-lg font-semibold rounded-lg transition duration-300"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default RoomInspiration;
