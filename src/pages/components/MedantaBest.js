import parasBest from "../assets/parasChoose.png";

const MedantaBest = () => {
  return (
    <div className="px-32 py-16 w-full bg-gray-100 text space-x-8 flex">
      <div className="w-1/2 space-y-4">
        <h1 className="text-[45px] border-b-2 w-fit border-blue-900 ">
          Get Treated By The Best
        </h1>
        <p>
          Dr. Amit Bhushan Sharma is an eminent cardiologist with over 1500
          transradial angioplasties to his credit. He comes with extensive
          experience of 19 years. He is an expert in complex angioplasties done
          through the wrist and is only an Interventional cardiologist in Delhi
          NCR to have ECFMG Certification ( United states Certification ) with 2
          accredited fellowships from the premier institutes of united states
          namely Mount Sinai New York and Michigan State University.
        </p>
        <div className="grid grid-cols-3 gap-4 space-x-4">
          <div>
            <img
              className="rounded-full border-gray-200 border-4"
              src="https://cdn.hexahealth.com/Image/122c238f-9572-4899-9cfe-46d8542fc6f3.jpg"
              alt="Dr1"
            />
            <p>Dr Amit Bhushan Sharma</p>
            <span className="italics text-sm">Director and Unit Head Cardiology at Paras Hospitals, Gurgaon.</span>
          </div>
          {/* <div>
            <img
              className="rounded-full border-gray-200 border-4"
              src="https://ecupload.medanta.org:9000/images/file201706150931028156-833631338?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=P8BJQTM4QFSD9DCZ22Z2/20220907/us-east-1/s3/aws4_request&X-Amz-Date=20220907T120946Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2b50b594d0306927ad9f89ff4669f4c9fd7f780c494b2f756470688de62ae53f"
              alt="Dr1"
            />
            <p>Dr Amit Chandra</p>
            <span className="italics text-sm">
              Director - Cardiac Surgery ,Heart Institute
            </span>
          </div> */}
          {/* <div>
            <img
              className="rounded-full border-gray-200 border-4"
              src="https://ecupload.medanta.org:9000/images/file201706150931028202227718368?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=P8BJQTM4QFSD9DCZ22Z2/20220907/us-east-1/s3/aws4_request&X-Amz-Date=20220907T121417Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=0a72bc5ae713bd455fb166e590d3aa4af5d213cd9b3ac5304deef2e4fac7da2a"
              alt="Dr1"
            />
            <p>Dr Anil Bhan</p>
            <span className="italics text-sm">
              Chairman Cardiac Surgery , Heart Institute
            </span>
          </div> */}
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <div className="p-4  flex-col text-white flex items-center justify-center bg-[#00b9f2]  w-[250px] h-[250px]">
            <p className="text-[50px] font-bold block">2500+</p>
            <p>Cases</p>
          </div>
          <div className="p-4 flex flex-col text-white items-center justify-center bg-[#adcd81] w-[250px] h-[250px]">
            <p className="text-[50px] font-bold block">2000</p>
            <p className="text-center">Successfull Surgeries Performed</p>
          </div>
        </div>
        <div>
          <img src={parasBest} alt="" />
          <button className="bg-gradient-to-r from-[#adcd81] to-[#00b9f2] m-20 text-white w-2/3 py-2">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedantaBest;
