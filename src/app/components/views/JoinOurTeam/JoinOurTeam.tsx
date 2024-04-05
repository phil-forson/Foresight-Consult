import React from "react";
import Banner from "../../../../../public/images/join.jpg";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const JoinOurTeam = () => {
  return (
    <section className="px-3 relative min-h-96 w-full">
      <Image src={Banner} alt="Banner" fill={true} objectFit="cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(160,0,174,0.9)] to-[rgba(5,19,54,0)] bg-opacity-50 h-auto"></div>
      <div className="flex flex-col relative z-50 w-full md:w-[50%] px-5 md:px-0 md:pl-36 justify-center text-white h-96">
        <div className="text-4xl text-white font-bold">Join Our Team</div>
        <div className="mt-5">
          We leverage the collective experience and expertise of our global team
          members and network of senior advisors to provide unique insights and
          perspectives to our clients. We believe in nurturing our teams from
          within, providing opportunities for team members to grow and take
          their place as our next generation of advisors.
        </div>
        <div className="border-2 border-white flex justify-between w-56 items-center bg-transparent text-black px-4 py-2 mt-5">
          <div className="text-white font-semibold">Join Our Team</div>
          <BsArrowRight className="text-white" />
        </div>
      </div>
    </section>
  );
};

export default JoinOurTeam;
