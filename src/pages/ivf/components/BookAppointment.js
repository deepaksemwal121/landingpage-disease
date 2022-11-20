import contact from "../assets/contact.png";
import axios from "axios";
import { useState } from "react";

const BookAppointment = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const bookHandler = async (e) => {
    e.preventDefault();
    const data = {
      name: details.name,
      email: details.email,
      phone: details.phone,
      disease: "IVF",
    };
    try {
      await axios.post(`https://backend.aretehealth.tech/api/v1/customer/`, data);
      setDetails({ name: "", email: "", phone: "" });
      alert("Appointement Successfully Booked");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="md:px-32 md:py-16 px-8 py-8 md:flex w-full">
      <div className="space-y-10 md:w-1/2">
        <h1 className="text-[32px]">Book Your Appointment with Our Specialists</h1>
        <form className="flex flex-col space-y-4 px-4" onSubmit={bookHandler}>
          <>
            <label htmlFor="fullname">Your Full Name</label>
            <input
              id="fullname"
              type="text"
              className="bg-white rounded-sm border-[2px] p-2"
              value={details.name}
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
            />
          </>
          <>
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              className="bg-white rounded-sm border-[2px] p-2"
              value={details.email}
              onChange={(e) => setDetails({ ...details, email: e.target.value })}
            />
          </>
          <>
            <label htmlFor="phone">Your Phone</label>
            <input
              id="phone"
              type="text"
              className="bg-white rounded-sm border-[2px] p-2"
              value={details.phone}
              onChange={(e) => setDetails({ ...details, phone: e.target.value })}
            />
          </>
          <>
            <label htmlFor="phone">Your Disease</label>
            <select className="bg-white rounded-sm border-[2px] p-2">
              {["In Vitro Fertilisation(IVF)", "Intrauterine Insemination (IUI)"].map((name, i) => {
                return <option key={i}>{name}</option>;
              })}
            </select>
          </>
          <button type="submit" className="bg-gradient-to-r from-[#adcd81] to-[#00b9f2] text-white w-full py-2">
            Book Appointment
          </button>
        </form>
      </div>
      <div className="md:flex justify-center items-end hidden md:w-1/2">
        <img src={contact} alt="" />
      </div>
    </div>
  );
};

export default BookAppointment;
