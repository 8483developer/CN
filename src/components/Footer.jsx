import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#7b3f00] text-white py-8">
      <div className="container mx-auto px-8 ">
        {/* Footer top section with links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div>
            <h3 className="text-xl font-semibold mb-4">CraftNest</h3>
            <p className="text-sm">Your one-stop destination for premium furniture and home decor.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm hover:text-gray-400">About Us</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">Shop</a>
              </li>
              <li>
                <a href="/ContactUs" className="text-sm hover:text-gray-400">Contact</a>
              </li>
              <li>
                <a href="/privacy" className="text-sm hover:text-gray-400">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook text-2xl hover:text-gray-400"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-2xl hover:text-gray-400"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-2xl hover:text-gray-400"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin text-2xl hover:text-gray-400"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} CraftNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
