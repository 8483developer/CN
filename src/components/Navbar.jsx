import { useState } from "react";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false); // Tracks the state of the navbar (open/close)
    const [search, setSearch] = useState(""); // Tracks the search input

    const handleSearchChange = (e) => {
        setSearch(e.target.value); // Updates the search state
    };

    return (
        <nav className="w-full d8a97d bg-[#7b3f00] shadow-lg z-50" style={{ position: 'relative' }}> 
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8" >
                     <div>
                    <div className="flex items-center justify-between py-3 md:py-7 md:block">
                        <a href="javascript:void(0)">
                            <h2 className="text-2xl font-bold text-white"><i><b>CraftNest</b></i></h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)} // Toggles navbar state
                            >
                                {navbar ? (
                                    // Close icon (X)
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    // Burger menu icon
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:flex md:items-center space-x-6 md:justify-center transform transition-all duration-500 ease-in-out fixed top-0 left-0 w-[30%] h-full bg-[#7b3f00] md:static md:bg-transparent md:h-auto md:flex-row md:space-y-0 md:space-x-6 md:opacity-100 ${
                        navbar ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                    }`}  
                >
                    <ul className="flex flex-col items-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
                    <a href="javascript:void(0)">
                            <h2 className="text-2xl font-bold text-white  md:hidden" ><i><b>CraftNest</b></i></h2>
                        </a>
                        <li className="text-white hover:text-indigo-200 transition duration-300">
                            <a href="/homepage">Home</a>
                        </li>
                        <li className="text-white hover:text-indigo-200 transition duration-300">
                            <a href="/Categories">categories</a>
                        </li>
                        <li className="text-white hover:text-indigo-200 transition duration-300 text-center">
                            <a href="/RoomInspiration">Room Inspiration</a>
                        </li>
                        <li className="text-white hover:text-indigo-200 transition duration-300">
                            <a href="/Addtocart">Your cart</a>
                        </li>
                        <li className="text-white hover:text-indigo-200 transition duration-300">
                            <a href="/Account">Account</a>
                        </li>
                        <li className="text-white hover:text-indigo-200 transition duration-300">
                            <a href="/ContactUs">Contact Us</a>
                        </li>
                    </ul>

                    {/* Search Bar */}
                    {/* <div className="relative mt-4 md:mt-0">
                        <input
                            type="text"
                            value={search}
                            onChange={handleSearchChange}
                            placeholder="Search..."
                            className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 w-full md:w-64"
                        />
                        <button className="absolute right-0 top-0 mt-2 mr-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-4.35-4.35M16.5 10.5A6.5 6.5 0 109 10.5a6.5 6.5 0 007.5 0z"
                                />
                            </svg>
                        </button>
                    </div> */}
                </div>
            </div>
        </nav>
    );
}
