import React from "react";
import logo1 from "./img/White-Codeedoc-Transparant-–-1.png";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <footer className="bg-black text-white px-6 sm:px-10 py-8">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mx-auto max-w-7xl border-b-2 border-solid border-white/10 pb-8">
        {/* Logo & Description */}
        <div className="flex flex-col lg:w-1/2 space-y-4">
          <img
            className="w-52 lg:w-[416px] h-auto mb-4"
            src={logo1}
            alt="Logo"
          />
          <div className="pl-1 space-y-2">
            <p className="text-base font-semibold font-rubik">
              <b>CODEEDOC</b> Since VS 2072.
            </p>
            <p className="text-sm leading-6 font-rubik">
              We Deliver Advanced IT Services to Organize the Satisfied Software
              Development Process Across the Globe.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col mt-6 lg:mt-0 lg:w-1/2 lg:items-start">
          <h1 className="text-lg font-bold mb-4">Get In Touch</h1>
          <div className="space-y-4">
            {/* Location */}
            <div className="flex items-start space-x-2 font-rubik text-sm">
              <Icon icon="mdi:location" className="text-lg" />
              <p>
                3084 Silver Business Point, VIP Circle, Surat - 394105, India.
              </p>
            </div>
            {/* Phone */}
            <a
              href="tel:+91%209727277767"
              className="flex items-center space-x-2 font-rubik text-sm"
            >
              <Icon icon="material-symbols:call" className="text-lg" />
              <span>+91 9727277767</span>
            </a>
            {/* Email */}
            <a
              href="mailto:hello@codeedoc.com"
              className="flex items-center space-x-2 font-rubik text-sm"
            >
              <Icon icon="material-symbols:mail-outline" className="text-lg" />
              <span>hello@codeedoc.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black text-white text-center pt-6">
        <p className="font-rubik text-sm md:text-lg">
          Copyright © VS 2077 <b>CODEEDOC</b>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
