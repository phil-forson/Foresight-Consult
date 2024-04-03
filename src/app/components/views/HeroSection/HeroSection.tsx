import React from "react";
import { Nav } from "../../shared/Nav/Nav";
import Image from "next/image";
import HeroImg from "../../../../../public/images/discussion.jpg";
import { BsArrowRight } from "react-icons/bs";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex justify-center items-center">
      <Image src={HeroImg} alt="Banner" fill={true} objectFit="cover" />
      <div className="absolute inset-0 h-auto bg-gradient-to-r from-[#001C61] from-10% via-[rgba(0,24,83,0.875)] to-[rgba(0,25,86,0)]">
        <div className="text-white w-[50%] h-screen flex flex-col justify-center px-36">
          <div className="text-5xl font-bold">The Global CEO Advisory Firm</div>
          <div className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <div className="flex mt-7 justify-between w-64 items-center bg-gradient-to-r from-[#0E00C5] to-[#B401BF] text-black px-4 py-2">
            <div className="text-white font-semibold">Get Consultancy</div>
            <BsArrowRight className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
