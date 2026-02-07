import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
const Footer = () => {
  // const location = useLocation();

  // const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className="mt-auto lg:flex-row lg:space-y-0">
        {/* Subscribe */}
        <section className="bg-button mx-auto grid w-full grid-cols-1 px-15 py-20 text-white lg:grid-cols-2">
          <div>
            <h1 className="mb-10 text-4xl lg:text-5xl">Subscribe</h1>
            <p className="max-w-md">
              Get instant access to our news and updates on the Grace Community
              and our meetings
            </p>
          </div>
          <div>
            <form className="mt-10 flex flex-col gap-10 sm:flex-row lg:mt-0">
              <input
                type="email"
                name="newsletter-email"
                id="newsletter-email"
                placeholder="Enter your email"
                className="flex-1 border-b-2 border-black px-4 py-3 text-sm focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-hero mt-5 rounded-lg px-6 py-3 text-sm font-bold tracking-wide text-black uppercase transition-all duration-150 hover:scale-110"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
        {/* Main footer */}
        <section className="bg-hero grid grid-cols-1 gap-10 px-10 py-20 lg:grid-cols-3">
          <h1 className="font-heading text-4xl">The Move Global</h1>
          <div>
            <ul className="flex flex-col items-start gap-6">
              <li className="uppercase">Home</li>
              <li className="uppercase">About us</li>
              <li className="uppercase">Meetings</li>
              <li className="uppercase">Messages</li>
            </ul>
          </div>
          <div>
            <p>email@example.com</p>
            <p>123-456-7890</p>
            <div className="mt-5 flex items-center gap-4">
              <FaFacebook className="h-6 w-6 cursor-pointer transition-colors hover:text-white" />
              <FaInstagram className="h-6 w-6 cursor-pointer transition-colors hover:text-white" />
              <FaXTwitter className="h-6 w-6 cursor-pointer transition-colors hover:text-white" />
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
