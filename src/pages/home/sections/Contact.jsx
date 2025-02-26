import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[70vh] bg-lime-50">
     
      <form action="https://formspree.io/f/xldeezyn" method="POST" className="flex flex-col bg-green-600 gap-8 mt-2 mb-2 p-8 w-100 rounded">
      <h4 className="flex text-4xl text-lime-50 font-bold justify-center">
        Contact Us
      </h4>
        <input className="bg-white p-2"  type="text" name="Fullname" placeholder="Fullname"/>

        <input className="bg-white p-2" type="email" name="Email" placeholder="Email"/>

        <textarea className="bg-white p-2" name="message" id="message" placeholder="Please enter your request"></textarea>

        <button type="Submit" className="border-2 p-2 border-white text-lime-50  justify-center">Submit</button>
      </form>

      
    </div>
  );
};

export default Contact;
