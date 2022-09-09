const WhyChoose = () => {
  return (
    <div className="md:px-32 md:py-16 px-16 py-8 space-y-8">
      <h1 className="text-[45px] text-center">Why Choose Paras</h1>
      <p className="text-center">
        Paras Healthcare is a leader in establishing specialized hospitals in
        places that lack access to healthcare, specifically super specialty
        tertiary care. Each of it's initiative is based on three tenets of
        healthcare- Affordability, Accessibility &amp; Quality.
      </p>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center">
          <img
            src="https://i.pinimg.com/736x/53/86/10/538610257fb2ee8b4a93de756976394a--take-care-very-well.jpg"
            className="rounded-full md:w-[300px] md:h-[300px] border-4 border-gray-200"
            alt=""
          />
          <p className="md:text-[24px] font-semibold">Advanced Care</p>
        </div>{" "}
        <div className="flex flex-col items-center">
          <img
            src="https://www.vaidam.com/sites/default/files/medanta-brainsuite.jpg"
            className="rounded-full md:w-[300px] md:h-[300px] border-4 border-gray-200"
            alt=""
          />
          <p className="md:text-[24px] font-semibold">Specialized Institution </p>
        </div>{" "}
        <div className="flex flex-col items-center">
          <img
            src="https://mediglobus.com/wp-content/uploads/2018/01/medanta1-e1526057692685.jpg"
            className="rounded-full md:w-[300px] md:h-[300px] border-4 border-gray-200"
            alt=""
          />
          <p className="md:text-[24px] font-semibold">Success Rate</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
