import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];
const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              Car Rental
            </h1>
            <p className="text-sm">
              We are a car rental company that provides a wide range of vehicles
              for hire. We offer a wide range of vehicles for hire, from compact
              cars to luxury sedans.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Sitapur, Uttar Pradesh</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 9258510000</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8 col-span-2 md:pl-10">
          <div className="">
              <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-left mb-3 text-gray-700 dark:text-white">
                      Important Links
                  </h1>
                  <ul className="flex flex-col gap-2">
                      {FooterLinks.map((link) => (
                          <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-600 dark:text-gray-300">
                              <span>&#11162;</span>
                              <span>{link.title}</span>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
          <div className="">
              <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-left mb-3 text-gray-700 dark:text-white">
                      Links
                  </h1>
                  <ul className="flex flex-col gap-2">
                      {FooterLinks.map((link) => (
                          <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-600 dark:text-gray-300">
                              <span>&#11162;</span>
                              <span>{link.title}</span>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
          <div className="">
              <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-left mb-3 text-gray-700 dark:text-white">
                      Location
                  </h1>
                  <ul className="flex flex-col gap-2">
                      {FooterLinks.map((link) => (
                          <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-600 dark:text-gray-300">
                              <span>&#11162;</span>
                              <span>{link.title}</span>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
      </div>
      
        </div>
      </section>
    </div>
  );
};

export default Footer;
