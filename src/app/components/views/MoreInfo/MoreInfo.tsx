import Image from "next/image";
import React from "react";
import Banner from "../../../../../public/images/consultancy1.jpg";

const MoreInfo = () => {
  return (
    <section className="px-3 relative min-h-80 w-full">
      <Image src={Banner} alt="Banner" fill={true} objectFit="cover" />
      <div className="absolute inset-0 bg-gradient-to-l from-[#002684] to-[rgba(0,36,132,0)] bg-opacity-50 h-auto"></div>
      <div className="flex flex-row-reverse relative z-50 text-white h-80">
        <div className="md:w-[50%] h-full flex justify-center items-center text-2xl md:text-4xl font-semibold">
          We leverage our global expertise and unchallenged breadth of services
          to solve our clients’ most complex issues.
        </div>
        <div className="w-[50%]"></div>
      </div>
    </section>
  );
};

export default MoreInfo;
