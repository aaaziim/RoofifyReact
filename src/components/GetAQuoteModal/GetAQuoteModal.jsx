import React from 'react';
import { FaWindowClose } from "react-icons/fa";

const GetAQuoteModal = () => {
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><FaWindowClose className='text-xl'></FaWindowClose></button>
    </form>
    <section id="contact" className="relative w-full rounded-xl bg-black text-red-500 my-4">
      <h1 className="text-4xl p-4 font-bold tracking-wide">
        Get A Quote
      </h1>
     

      {/* Wrapper */}
      <div className="relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-center">

        {/* Contact Me */}
        <form action="#" className="w-full border border-red-500 p-6 bg-gray-900 rounded-xl">
          <h2 className="text-2xl pb-3 font-semibold">
            Send Your Query
          </h2>
          <div>
            <div className="flex flex-col mb-3">
              <label htmlFor="name">Name</label>
              <input 
                type="text" id="name" 
                className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="email">Email</label>
              <input 
                type="text" id="email" 
                className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="phone">Phone</label>
              <input 
                type="text" id="phone" 
                className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="message">Message</label>
              <textarea 
                rows="4" id="message" 
                className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
              ></textarea>
            </div>
          </div>
          <div className="w-full pt-3">
            <button type="submit" className="w-full bg-gray-900 border border-red-500 px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-red-500 hover:text-white text-xl cursor-pointer">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
   
  </div>
</dialog>
        </div>
    );
};

export default GetAQuoteModal;