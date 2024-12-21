import React from "react";

const Categories = () => {
  const categories = [
    { id: 1, name: "Living Room", icon: "🛋️" },
    { id: 2, name: "Bedroom", icon: "🛏️" },
    { id: 3, name: "Dining Room", icon: "🍽️" },
    { id: 4, name: "Office", icon: "💼" },
    { id: 5, name: "Outdoor", icon: "🌳" },
    { id: 6, name: "Decor", icon: "🖼️" },
  ];

  const handleCategoryClick = (category) => {
    alert(`You clicked on ${category.name}!`);
    // Add your navigation or filtering logic here
  };

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black mb-6">Shop by Category</h1>
        <p className="text-black text-lg">
          Discover furniture and decor for every room.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category)}
            className="group cursor-pointer bg-cyan-500 rounded-lg p-6 flex flex-col items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition duration-300">
              {category.icon}
            </div>
            <h2 className="text-lg font-medium text-gray-800 group-hover:text-[#7b3f00] transition duration-300">
              {category.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
