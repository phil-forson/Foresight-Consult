"use client";
import "./index.css";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import MarfoPNG from "../../../../../public/images/Marfo.jpg";
import { BsArrowRight } from "react-icons/bs";

const OurPeople = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const people = [
    {
      name: "Samuel Yeboah Marfo",
      role: "Senior Data Engineer",
      image: MarfoPNG,
    },
    {
      name: "Samuel Yeboah Marfo",
      role: "Senior Data Engineer",
      image: MarfoPNG,
    },
    {
      name: "Samuel Yeboah Marfo",
      role: "Senior Data Engineer",
      image: MarfoPNG,
    },
    {
      name: "Samuel Yeboah Marfo",
      role: "Senior Data Engineer",
      image: MarfoPNG,
    },
    {
      name: "Samuel Yeboah Marfo",
      role: "Senior Data Engineer",
      image: MarfoPNG,
    },
  ];
  return (
    <section className="min-h-50 py-20 bg-white px-56">
      <div className="text-blue-primary text-center text-xl font-bold">
        Our People
      </div>
      <div className="text-center text-gray-500 mt-5">
        Our teams thrive on collaboration to help solve complex issues. We
        operate as an extension of our clients' organizations to help them
        understand the broader landscape and introduce new ways of thinking.
        Global team members include:
      </div>
      <div className="embla mt-10" ref={emblaRef}>
        <div className="embla__container text-black">
          {people.map((person, index) => (
            <div className="embla__slide flex flex-col justify-center items-center" key={index}>
              <Image
                src={MarfoPNG}
                alt="Senior Dev"
                width={100}
                height={100}
                className="rounded-full w-48 h-48 object-cover"
              />
              <div className="mt-5 text-blue-primary">{person.name}</div>
              <div>{person.role}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-8 items-center mt-10">
        <div className="border-2 border-blue-primary flex justify-between w-64 items-center bg-transparent text-black px-4 py-2">
          <div className="text-blue-primary font-semibold">Search People</div>
          <BsArrowRight className="text-blue-primary" />
        </div>
        <div className="flex justify-between w-64 items-center bg-gradient-to-r from-[#0E00C5] to-[#B401BF] text-black px-4 py-2">
          <div className="text-white font-semibold">Executive Leadership</div>
          <BsArrowRight className="text-white" />
        </div>
      </div>
    </section>
  );
};

export default OurPeople;
