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
    <nav
      // className={`${
      //   isHomePage ? "absolute bg-transparent" : "relative bg-black"
      // } top-0 z-50 w-full px-5 py-6 lg:px-10`}

      className={clsx("top-0 z-50 w-full px-5 py-6 text-black", {
        "bg-transparent lg:px-10": isHomePage, // There was an aboslute class here for the demo 1 of the hero section

        "relative lg:px-12 lg:py-6": !isHomePage,
      })}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group">
          <div className="flex items-center gap-3 transition-transform duration-200 hover:scale-105">
            <div
              className={clsx(
                "bg-primary flex h-12 w-12 items-center justify-center rounded-full shadow-md transition-all duration-200",
              )}
            >
              <span
                className={clsx(
                  "text-accent font-bold",
                  isHomePage ? "text-2xl" : "text-3xl",
                )}
              >
                G
              </span>
            </div>
            <span
              className={clsx("text-primary text-xl lg:text-2xl", {
                "": isHomePage,
                "text-gray-900": isProfile,
              })}
            >
              <span className="font-bold">Grace</span>
              <span className="font-light">Community</span>
            </span>
          </div>
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
                  "rounded-lg border-2 border-gray-800 bg-gray-800 px-6 py-2 text-sm font-medium text-white transition-all hover:bg-gray-900 lg:text-base",
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
            isHomePage ? "text-white" : "text-gray-900",
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
                  className="rounded-lg border-2 border-white/50 bg-white/10 px-6 py-2 text-center text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20"
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
