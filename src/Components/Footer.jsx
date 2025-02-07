import Aos from "aos";
import React, { useEffect } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../assets/Images/mat.png";

const Footer = () => {
  return (
    <footer className="relative bg-blue-700 py-10 px-8 max-md:px-2 dark:bg-dark lg:pb-20">
      <div className=" mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-2/3 lg:w-3/12 mb-10">
            <a href="#" className="mb-6 inline-block max-w-[160px]">
              <img src={logo} alt="logo" className="dark:hidden bg-white p-2" />
            </a>
            <p className="mb-7 text-base text-white dark:text-gray-400">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </p>

            <div className="flex space-x-4">
              {[
                <FaFacebook />,
                <FaTwitter />,
                <FaYoutube />,
                <FaLinkedin />,
              ].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="p-2 border rounded-full text-white hover:bg-white hover:text-blue-700 transition"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          <LinkGroup header="Resources">
            <NavLink link="/#" label="SaaS Development" />
            <NavLink link="/#" label="Our Products" />
            <NavLink link="/#" label="User Flow" />
            <NavLink link="/#" label="User Strategy" />
          </LinkGroup>
          <LinkGroup header="Company">
            <NavLink link="/#" label="About Us" />
            <NavLink link="/#" label="Contact & Support" />
            <NavLink link="/#" label="Success Stories" />
            <NavLink link="/#" label="Privacy Policy" />
          </LinkGroup>
          <LinkGroup header="Quick Links">
            <NavLink link="/#" label="Premium Support" />
            <NavLink link="/#" label="Our Services" />
            <NavLink link="/#" label="Our Team" />
            <NavLink link="/#" label="Download App" />
          </LinkGroup>
        </div>
      </div>
      <p className="text-center text-white border-t-[1px] pt-4">
        {" "}
        © Copyright MAT Journals Pvt. Ltd. All Rights Reserved
      </p>
    </footer>
  );
};

const LinkGroup = ({ children, header }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-2/12 mb-10">
      <h4 className="mb-6 text-lg font-semibold  text-white ">{header}</h4>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="text-base text-gwhitehover:text-primary text-white"
      >
        {label}
      </a>
    </li>
  );
};

export default Footer;
