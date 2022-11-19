import React from "react";

const Testimonials = () => {
  return (
    <div className="px-8 py-8 md:px-32 md:py-16 md:flex w-full space-y-7 md:space-y-0 bg-gray-100">
      <div className="md:w-1/2 relative">
        <h1 className="text-[50px]">Straight From The Heart</h1>
        <p className="text-[35px] leading-10">
          Here’s what Paras past patients have to say{" "}
        </p>

        <button className="bg-gradient-to-r from-[#adcd81] to-[#00b9f2]  mt-10 md:m-20 text-white w-2/3 py-2">
          Book Appointment
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-4 md:w-1/2">
        <div className="p-4 flex space-x-4  bg-white">
          <img
            src="https://content3.jdmagicbox.com/comp/hajipur/y5/9999px624.x624.190602142454.l9y5/catalogue/ravindra-kumar-singh-hajipur-3ze9igvkw8-250.jpg"
            className="rounded-full w-[60px] h-[60px]"
            alt=""
          />
          <div className="flex flex-col">
            <h2 className="font-semibold">
              RAVINDRA KUMAR <span className="text-sm">43 Yrs</span>{" "}
            </h2>
            <p>
              “Their personalized approach to patient care is outstanding.”
              <em>Read more..</em>
            </p>
          </div>
        </div>
        <div className="p-4 flex space-x-4  bg-white">
          <img
            src="https://i1.rgstatic.net/ii/profile.image/943944301019138-1602065267703_Q512/Pooja-Sharma-100.jpg"
            className="rounded-full w-[60px] h-[60px]"
            alt=""
          />
          <div className="flex flex-col">
            <h2 className="font-semibold">
              Pooja Bhatt <span className="text-sm">36 Yrs</span>{" "}
            </h2>
            <p>
              "Their clinical care is outstanding but what really sets them
              apart is that they truly care about the well-being of their
              patients."……<em>Read more..</em>
            </p>
          </div>
        </div>
        <div className="p-4 flex space-x-4  bg-white">
          <img
            src="https://images.indulgexpress.com/uploads/user/imagelibrary/2021/10/29/original/ABHISHEK_JAIN_PICTURE.JPG"
            className="rounded-full w-[60px] h-[60px]"
            alt=""
          />
          <div className="flex flex-col">
            <h2 className="font-semibold">
              {" "}
              ABHISHEK JAIN <span className="text-sm">32 Yrs</span>{" "}
            </h2>
            <p>
              I am glad to see the gradual progress in my mother's health after
              the treatments by Paras ….<em>Read more..</em>
            </p>
          </div>
        </div>
        <div className="p-4 flex space-x-4  bg-white">
          <img
            src="https://imilap.com/profileimages/profile_IMG_20180406_214741.jpg"
            className="rounded-full w-[60px] h-[60px]"
            alt=""
          />
          <div className="flex flex-col">
            <h2 className="font-semibold">
              Karan Vashisht <span className="text-sm">46 Yrs</span>{" "}
            </h2>
            <p>
              "I would like to express my sincere thanks to all the doctors and
              the entire nursing staff of Paras for the care, devotion and
              patience displayed during my stay in Paras &amp; thereafter."
              ..…. <em>Read more..</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
