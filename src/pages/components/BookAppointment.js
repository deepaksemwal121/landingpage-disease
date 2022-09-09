import contact from "../assets/contact.png"

const BookAppointment = () => {
  return (
    <div className='md:px-32 md:py-16 px-16 py-8 md:flex w-full'>
        <div className='space-y-10 md:w-1/2'>
            <h1 className='text-[32px]'>Book Your Appointment with Our Specialists</h1>
            <form className='flex flex-col space-y-4 px-4'>
                <>
                <label htmlFor='fullname'>Your Full Name</label>
                <input id='fullname' type="text" className='bg-white rounded-sm border-[2px] p-2' />
                </>
                <>
                <label htmlFor='email'>Your Email</label>
                <input id='email' type="email" className='bg-white rounded-sm border-[2px] p-2' />
                </>
                <>
                <label htmlFor='phone'>Your Phone</label>
                <input id='phone' type="text" className='bg-white rounded-sm border-[2px] p-2' />
                </>
                <>
                <label htmlFor='phone'>Your Disease</label>
                <input id='phone' type="text" className='bg-white rounded-sm border-[2px] p-2' />
                </>
                <button className="bg-gradient-to-r from-[#adcd81] to-[#00b9f2] text-white w-full py-2">
          Book Appointment
        </button>
            </form>
        </div>
        <div className="md:flex justify-center items-end hidden md:w-1/2">
            <img src={contact} alt= "" />
        </div>
    </div>
  )
}

export default BookAppointment