"use client";
import { useState } from "react";
import Logo from "../../../../../public/images/logo.png";
import Image from "next/image";

export const Nav: React.FC = () => {
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
        className={`flex items-center px-3 py-2 cursor-pointer 
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
    <div className="w-full flex justify-between items-center py-4 px-10 md:px-36 bg-transparent absolute top-0 h-24 z-50">
      {/* Logo */}
      <div className="text-xl font-bold">
        <Image
          src={Logo}
          alt="Foresight Logo"
          className="w-5 h-5 md:w-10 md:h-10 sm:w-auto "
        />
      </div>

      {/* Links */}
      <div className="hidden lg:flex space-x-[12px] ">
        {renderNavLink("Services")}
        {renderNavLink("Careers")}
        {renderNavLink("People")}
      </div>

      {/* User Info && Menuicon */}
    </div>
  );
};
