import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const navigate = useNavigate(); // Use navigate hook for redirection

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleLogout = () => {
    // Remove 'isLoggedIn' from localStorage
    localStorage.removeItem("isLoggedIn");

    // Reset state and redirect to the login page
    navigate("/");

    // Additional logout logic can go here (e.g., clearing user session, etc.)
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          My Account
        </h1>

        {/* Tabs */}
        <div className="flex justify-around border-b mb-6">
          {["Profile", "Orders", "Wishlist", "Settings"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`pb-2 text-lg font-medium ${
                activeTab === tab
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "Profile" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Profile Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="mt-2 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="example@example.com"
                    className="mt-2 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </div>
                <div>
                  <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Orders" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                My Orders
              </h2>
              <p className="text-gray-600">No orders found.</p>
            </div>
          )}

          {activeTab === "Wishlist" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                My Wishlist
              </h2>
              <p className="text-gray-600">No items in your wishlist.</p>
            </div>
          )}

          {activeTab === "Settings" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Settings</h2>
              <div className="space-y-4">
                <button className="bg-gray-100 text-red-500 px-6 py-3 rounded-lg font-medium hover:bg-red-500 hover:text-white transition">
                  Change Password
                </button>
                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="bg-gray-100 text-red-500 px-6 py-3 rounded-lg font-medium hover:bg-red-500 hover:text-white transition"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
