import { Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";
import ProfileComp from "./ProfileComp.jsx";
import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isProfile = location.pathname === "/profile";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, logoutUser } = useUser();
  return (
    <nav className="bg-white px-4 py-6 text-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group">
          <img src="/GCLogoBlack.png" alt="Grace Community Logo" />
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className={clsx(
              "text-sm font-medium transition-colors lg:text-base",
              isHomePage
                ? "text-black hover:text-gray-700"
                : "text-white hover:text-gray-300",
            )}
          >
            Home
          </Link>
          <a
            href="#meetings"
            className={clsx(
              "text-sm font-medium transition-colors lg:text-base",
              isHomePage
                ? "text-black hover:text-gray-700"
                : "text-white hover:text-gray-300",
            )}
          >
            Our Meetings
          </a>
          <a
            href="#messages"
            className={clsx(
              "text-sm font-medium transition-colors lg:text-base",
              isHomePage
                ? "text-black hover:text-gray-700"
                : "text-white hover:text-gray-300",
            )}
          >
            Messages
          </a>
        </div>

        {/* Desktop User/Auth Section - Hidden on Mobile */}
        <div className="hidden md:flex md:items-center md:gap-5">
          {user ? (
            <>
              <Link
                to="/profile"
                className={clsx(
                  "group flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900",
                )}
              >
                <ProfileComp isHomePage={isHomePage} />
                <p className="capitalize">Welcome, {user.firstName}</p>
              </Link>
              <button
                className={clsx(
                  "cursor-pointer rounded-lg px-4 py-2 text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900",
                )}
                onClick={() => logoutUser()}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/register"
                className={clsx(
                  "bg-button rounded-lg border-2 px-6 py-2 text-sm font-medium text-white transition-all hover:bg-gray-900 lg:text-base",
                )}
              >
                Register
              </Link>
              <Link
                to="/login"
                className={clsx(
                  "rounded-lg px-4 py-2 text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900",
                )}
              >
                Login
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={clsx(
            "md:hidden",
            isHomePage ? "text-primary" : "text-gray-900",
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="mt-4 rounded-lg bg-black/95 p-6 backdrop-blur-sm md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="text-white/90 transition-colors hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="#meetings"
              className="text-white/90 transition-colors hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Meetings
            </a>
            <a
              href="#messages"
              className="text-white/90 transition-colors hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Messages
            </a>

            {user ? (
              <>
                <Link
                  to="/profile"
                  className="flex items-center gap-3 text-white/90 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ProfileComp />
                  <p className="capitalize">Welcome, {user.firstName}</p>
                </Link>
                <button
                  className="text-left text-white/90 hover:text-white"
                  onClick={() => {
                    logoutUser();
                    setIsMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/register"
                  className="bg-button rounded-lg border-2 px-6 py-2 text-center text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="text-white/90 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
