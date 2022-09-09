const WhyAdvised = () => {
  return (
    <>
      <div className="md:flex flex-col md:px-32 md:py-16 px-16 py-8">
        <h1 className="text-center text-3xl mb-4">
          Why are you advised a Coronary Artery Bypass Graft?
        </h1>
        <p className="md:px-20 text-lg text-center">
          Coronary artery disease can cause a blood clot to form, cutting off
          blood flow and leading to a heart attack. You might have been advised
          medicines, lifestyle changes, and other procedures before CABG was
          recommended to you but due to limited success with these other
          treatment choices, your doctor may have advised you CABG as an
          effective and viable option for you at this time.
        </p>
      </div>
      <div className="md:flex">
        <div className="symptoms-chest flex items-center text-center ">
          <p className="symptoms">Chest pain or discomfort called angina </p>
        </div>
        <div className="symptoms-heart flex items-center text-center">
          <p className="symptoms"> Irregular heartbeat</p>
        </div>
        <div className="symptoms-breath">
          <p className="symptoms">Shortness of breath </p>
        </div>
      </div>
    </>
  );
};

export default WhyAdvised;
