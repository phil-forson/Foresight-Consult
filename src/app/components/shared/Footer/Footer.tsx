"use client";
import React, { useState } from "react";
import Map from "../../../../../public/images/map.png";
import Image from "next/image";

const Footer = () => {
  const [activeItem, setActiveItem] = useState("Customers");
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to render a navigation link
  const renderNavLink = (
    label: string,
    IconComponent?: React.FC<{ className: string }>
  ) => {
    const isActive = activeItem === label;
    return (
      <div
        onClick={() => {
          setActiveItem(label);
          setMenuOpen(false);
        }}
        className={`flex items-center px-[12px] py-2 cursor-pointer 
                      ${
                        isActive
                          ? " bg-primary5 text-black1 rounded-[1000px] "
                          : " text-primary3"
                      }`}
      >
        {IconComponent && (
          <IconComponent
            className={isActive ? "text-black1" : "text-primary3"}
          />
        )}
        <div className="ml-[8px] decoration-0 cursor-pointer">{label}</div>
      </div>
    );
  };
  return (
    <div className="py-4 bg-white px-36 text-blue-600">
      <div className="flex justify-between items-center   ">
        {/* Logo */}
        <div className="text-xl font-semibold">
          {/* {<img src={Logo} className="w-24 sm:w-auto "/> */}
          Foresight Consult
        </div>

        {/* Links */}
        <div className="flex justify-between">
          <div className="hidden lg:flex space-x-[12px] ">
            {renderNavLink("Our Firm")}
            {renderNavLink("Offices")}
            {renderNavLink("News")}
            {renderNavLink("Careers")}
            {renderNavLink("Contact")}
          </div>
          <div>
            <div className="hidden lg:flex space-x-[12px] ">
              {renderNavLink("Twitter")}
              {renderNavLink("LinkedIn")}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 pb-10 flex justify-between border-b border-blue-500">
        <div>
          <div className="flex flex-col">
            <div className="mb-5">United Kingdom</div>
            <div className="text-black">Marsthon Road, Manchester</div>
          </div>
        </div>
        <Image src={Map} alt="Map" objectFit="cover" />
      </div>
      <div className="py-6 flex justify-between items-center border-b border-blue-500">
        <div className="flex flex-col gap-2">
          <div className="text-black ">Business Segments</div>
          <div>Strategy & Communications</div>
          <div>Management Consulting</div>
          <div>Financial Advisory</div>
        </div>
        <div className="flex flex-col gap-2">
          <div>Risk Advisory</div>
          <div>People Advisory</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-black"> Offices</div>
          <div>United Kingdom</div>
          <div>Amsterdam</div>
          <div>Ghana</div>
        </div>
      </div>
      <div className="flex justify-between text-black py-4">
        <div>
          © {new Date(Date.now()).getFullYear().toString()} Foresight Consult.
          All rights reserved.
        </div>
        <div className="flex">
          <div className="pr-3 pl-2 border-r border-black">Terms Of Use</div>
          <div className="pr-3 pl-2 border-r border-black">Privacy</div>
          <div className="pr-3 pl-2 border-r border-black">
            Transparency in Supply Chains
          </div>
          <div className="pr-3 pl-2">Vendor Code of Conduct</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
