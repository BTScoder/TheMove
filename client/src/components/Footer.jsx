import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
const Footer = () => {
  // const location = useLocation();

  // const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className="relative mt-auto w-full">
        {/* Div for the svg */}
        <svg
          className="relative block h-24 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,120 L0,60 L1200,20 L1200,120 Z" className="bg-black/90" />
        </svg>

        {/* Other part of the svg */}
        <div className="w-full bg-black px-5 pb-10">
          <div className="container mx-auto flex flex-col gap-8 text-gray-400 lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Logo Section */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <span className="text-2xl font-bold text-white">G</span>
                </div>
                <span className="text-xl font-semibold text-white lg:text-2xl">
                  Grace<span className="font-light">Community</span>
                </span>
              </div>
              {/* Socials */}
              <div className="flex items-center gap-4">
                <FaFacebook className="h-6 w-6 cursor-pointer text-gray-400 transition-colors hover:text-white" />
                <FaInstagram className="h-6 w-6 cursor-pointer text-gray-400 transition-colors hover:text-white" />
                <FaXTwitter className="h-6 w-6 cursor-pointer text-gray-400 transition-colors hover:text-white" />
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-3 lg:items-center">
              <h3 className="text-sm font-semibold text-white uppercase">
                Quick Links
              </h3>
              <div className="flex flex-col gap-2 lg:items-start">
                <a
                  href="#home"
                  className="cursor-pointer text-sm transition-colors hover:text-white"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="cursor-pointer text-sm transition-colors hover:text-white"
                >
                  About Us
                </a>
                <a
                  href="#meetings"
                  className="cursor-pointer text-sm transition-colors hover:text-white"
                >
                  Meetings
                </a>
                <a
                  href="#messages"
                  className="cursor-pointer text-sm transition-colors hover:text-white"
                >
                  Messages
                </a>
              </div>
            </div>

            {/* Subscribe to newsletter */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-white uppercase">
                Subscribe to our newsletter
              </h3>
              <p className="text-sm leading-relaxed">
                Get instant access to our news and updates on the Grace
                Community and our meetings
              </p>
              <form className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  name="newsletter-email"
                  id="newsletter-email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-white focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="container mx-auto"></div> */}
      </footer>
    </>
  );
};

export default Footer;
