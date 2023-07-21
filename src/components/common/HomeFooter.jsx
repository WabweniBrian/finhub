import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
const HomeFooter = () => {
  return (
    <>
      <footer className="py-10 max-w-7xl mx-auto mt-16">
        <div className="flex flex-wrap gap-2">
          <div className="flex-1 basis-[10rem]">
            <Link to="/">
              <img src="/images/logo2.png" alt="Logo" className="w-28" />
            </Link>
            <div className="mt-3">
              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                harum explicabo illo, magnam vitae expedita.
              </p>
            </div>
          </div>
          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul>
              <li className="my-3">
                <Link to="/"> Home</Link>
              </li>
              <li className="my-3">
                <Link to="/about"> About</Link>
              </li>
              <li className="my-3">
                <Link to="/services">Services</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Guide</h2>
            <ul>
              <li className="my-3">
                <Link to="/bokings"> Manage Bookings</Link>
              </li>
              <li className="my-3">
                <Link to="/booking/guide"> Booking Guide</Link>
              </li>
              <li className="my-3">
                <Link to="/payment/guide">Payment Guide</Link>
              </li>
              <li className="my-3">
                <Link to="/faqs">FAQs</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Support</h2>
            <ul>
              <li className="my-3">
                <Link to="/support"> Customer Support</Link>
              </li>
              <li className="my-3">
                <Link to="/contact"> Contact Us</Link>
              </li>
              <li className="my-3">
                <Link to="/partner">Partner with us</Link>
              </li>
              <li className="my-3">
                <Link to="/sitemap">Site Map</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="bg-[#2a2232] py-2 flex-center-center md:flex-center-between flex-col md:flex-row gap-4 md:gap-0 px-10">
        <h1 className="text-white">
          &copy;{new Date().getFullYear()} by{" "}
          <span className="text-primary">STL</span> | All rights reserved
        </h1>
        <div className="flex-align-center gap-x-2">
          <a href="https://www.facebook.com" className="icon-box">
            <FiFacebook />
          </a>
          <a href="https://www.facebook.com" className="icon-box">
            <FaWhatsapp />
          </a>
          <a href="https://www.facebook.com" className="icon-box">
            <FiTwitter />
          </a>
          <a href="mailto:simbulatugende@gmail.com" className="icon-box">
            <FiMail />
          </a>
        </div>
      </div>
    </>
  );
};

export default HomeFooter;
