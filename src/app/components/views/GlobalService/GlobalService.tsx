import React from "react";
import { BsArrowRight } from "react-icons/bs";

const GlobalService = () => {
  const data = [
    {
      heading: "Strategy & Communications",
      body: "Global strategic advisory and communications business focused on helping clients achieve major business objectives, manage their reputations and enhance stakeholder value.",
    },
    {
      heading: "Strategy & Communications",
      body: "Global strategic advisory and communications business focused on helping clients achieve major business objectives, manage their reputations and enhance stakeholder value.",
    },
    {
      heading: "Strategy & Communications",
      body: "Global strategic advisory and communications business focused on helping clients achieve major business objectives, manage their reputations and enhance stakeholder value.",
    },
    {
      heading: "Strategy & Communications",
      body: "Global strategic advisory and communications business focused on helping clients achieve major business objectives, manage their reputations and enhance stakeholder value.",
    },
    {
      heading: "Strategy & Communications",
      body: "Global strategic advisory and communications business focused on helping clients achieve major business objectives, manage their reputations and enhance stakeholder value.",
    },
  ];

  const firstColumnItems = data.slice(0, 3);
  const secondColumnItems = data.slice(3, 5);

  return (
    <section className=" bg-white px-10 md:px-36 py-10 md:py-20 w-full">
      <div className="text-3xl mb-5 text-blue-primary font-semibold">
        Global Service Offering
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:gap-10">
        <div className="flex flex-col">
          {firstColumnItems.map((section, index) => (
            <div className={`border-t-2 border-blue-primary py-7`} key={index}>
              <div className="text-black font-semibold">{section.heading}</div>
              <div className="text-[#505A72]">{section.body}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          {secondColumnItems.map((section, index) => (
            <div className={`border-t-2 border-blue-primary py-7 `} key={index}>
              <div className="text-black font-semibold">{section.heading}</div>
              <div className="text-[#505A72]">{section.body}</div>
            </div>
          ))}
        </div>
        <div className="border-t-2 border-blue-primary py-7 bg-gradient-to-br from-[#E7F2FB] to-[#EEEFFD] px-7 rounded-br-[32px] h-[50%]">
          <div className="text-[#505A72]">
            The breadth of our offering and our ability to provide bespoke and
            seamless advisory services, on either a standalone or integrated
            basis, makes us truly unique.
          </div>
          <div className="flex mt-5 justify-between w-48 items-center bg-gradient-to-r from-[#0D7DD4] to-[#585EE9] px-4 py-2">
            <div className="text-white font-semibold">All Practice Areas</div>
            <BsArrowRight className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalService;
