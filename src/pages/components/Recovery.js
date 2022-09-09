import recover from "../assets/recover3.png";
import recover1 from "../assets/recover.webp";

const Recovery = () => {
  return (
    <div className="px-16 md:px-32 py-8 md:py-16 w-full">
      <h1 className="text-center text-[40px] md:text-[50px] pb-20">
        Road to Recovery after CABG!
      </h1>
      <div className="">
        <div className="md:flex w-full items-center space-x-8">
          <div className="md:w-1/2">
            <h2 className="text-[32px] font-medium">Recovery at Hospital</h2>
            <hr className=" border-[#aec874] my-2 md:w-1/2 border-2" />
            <p className="text-lg">
              After surgery, you will typically spend one or two days in an
              intensive care unit. Your heart rate and blood pressure will be
              continuously monitored during this time.
            </p>
            <p className="py-2 w-fit text-lg font-medium border-b-2 text-[#aec874] border-[#4eb0de]">
              Read More
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={recover}
              alt="recovery at hospital"
              height={400}
              width={400}
            />
          </div>
        </div>
        <div className="md:flex w-full items-center space-x-8">
          <div className="md:w-1/2">
            <img
              src={recover1}
              alt="recovery at home"
              height={400}
              width={400}
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-[32px] font-medium">Recovery at Home</h2>
            <hr className=" border-[#aec874] my-2 md:w-1/2 border-2" />
            <p className="text-lg">
              Your doctor will give you specific instructions for recovering at
              home. You also may receive instructions on how to deal with common
              after-effects from surgery. After-effects often go away within
              four to six weeks after surgery, but may include...
            </p>
            <p className="py-2 w-fit text-lg font-medium border-b-2 text-[#aec874] border-[#4eb0de]">
              Read More
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
