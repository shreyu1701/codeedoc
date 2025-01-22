import React from "react";

function Feedback() {
  const Container = ({ title }) => {
    return (
      <div className="flex flex-col w-full px-2">
        <label className="block text-sm font-medium text-gray-700">
          {title}
        </label>
        <input
          className="mt-1 block w-full rounded-md border-gray-700 shadow-sm focus:border-[#008000] focus:ring-[#008000] sm:text-sm"
          placeholder={title}
        />
      </div>
    );
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Let’s build something great together...
        </h2>

        {/* Form Fields */}
        <form className="space-y-6">
          {/* First Row of Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Container title="Company Name*" />
            <Container title="Company Email*" />
            <Container title="Phone Number*" />
            <div className="flex flex-col w-full px-2">
              <label className="block text-sm font-medium text-gray-700">
                Type of Projects
              </label>
              <select className="mt-1 block w-full rounded-md border-gray-700 shadow-sm focus:border-[#008000] focus:ring-[#008000] sm:text-sm">
                <option>Web</option>
                <option>Mobile</option>
                <option>Web & Mobile</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Message Field */}
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              How can we help you?
            </label>
            <textarea
              className="mt-1 block w-full h-28 rounded-md border-gray-700 shadow-sm focus:border-[#008000] focus:ring-[#008000] sm:text-sm"
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center text-left ">
            <button
              type="submit"
              className="inline-flex justify-center w-full md:w-auto rounded-full bg-black text-white px-6 py-3 text-sm font-medium shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              <b>Connect With Us</b>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
