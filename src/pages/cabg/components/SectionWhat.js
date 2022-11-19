import React from "react";
import what from "../assets/what.png";
const SectionWhat = () => {
  return (
    <div className="md:px-32 md:py-16 px-8 py-8 md:flex space-x-4 items-center bg-gray-100">
      <div className="md:w-1/2">
        <h1 className="text-[50px]">
          What is CABG
          <lord-icon
            src="https://cdn.lordicon.com/hdiorcun.json"
            trigger="loop"
            delay="1000"
            style={{ width: 100, height: 100 }}
          ></lord-icon>
        </h1>
        <p className="leading-8 text-lg">
          A coronary artery bypass graft (CABG) is a surgical procedure used to
          treat sever coronary heart disease (CAD). It diverts blood around
          narrowed or clogged parts of the major arteries to improve blood flow
          and oxygen supply to the heart.
        </p>
        <p className="py-2 w-fit text-lg font-medium border-b-2 text-[#aec874] border-[#4eb0de]">
          Read More
        </p>
      </div>
      <div className="md:w-1/2">
        <img src={what} alt="what" width={1000} />
      </div>
    </div>
  );
};

export default SectionWhat;
