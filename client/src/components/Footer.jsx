import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
const Footer = () => {
  // const location = useLocation();

  // const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className="bg-hero mt-auto flex w-full flex-col items-start justify-between space-y-10 px-10 py-8 lg:flex-row lg:space-y-0">
        <div>
          <p className="font-heading text-4xl">The Move Global</p>
          <div className="mt-5 flex items-center gap-4">
            <FaFacebook className="h-6 w-6 cursor-pointer transition-colors hover:text-white" />
            <FaInstagram className="h-6 w-6 cursor-pointer transition-colors hover:text-white" />
            <FaXTwitter className="h-6 w-6 cursor-pointer transition-colors hover:text-white" />
          </div>
        </div>
        <div>
          <ul className="flex flex-row items-center gap-6">
            <li className="uppercase">Home</li>
            <li className="uppercase">About us</li>
            <li className="uppercase">Meetings</li>
            <li className="uppercase">Messages</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-xl uppercase">
            Subscribe to our newsletter
          </h3>
          <p className="max-w-md leading-relaxed">
            Get instant access to our news and updates on the Grace Community
            and our meetings
          </p>
          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              name="newsletter-email"
              id="newsletter-email"
              placeholder="Enter your email"
              className="flex-1 border-b border-black px-4 py-3 text-sm focus:border-white focus:outline-none"
            />
            <button
              type="submit"
              className="hover:bg-button mt-5 rounded-lg px-6 py-3 text-sm font-medium text-black transition-colors hover:text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </footer>
    </>
  );
};

export default Footer;
