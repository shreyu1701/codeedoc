import React from "react";

function Feedback() {
  const Container = ({ title }) => {
    return (
      <div className="flex-1 flex-row">
        <div class="p-1">
          <div class="w-full p-1 font-rubik text-left">{title}</div>
          <input
            class="w-full p-1  border bg-white text-black border-[#848484]"
            placeholder={title}
          ></input>
        </div>
      </div>
    );
  };
  return (
    <div className="App">
      <div class="flex flex-col  mx-[100px]">
        <div class="text-[24px] font-rubik pb-5">
          <b>Let’s build something great together...</b>
        </div>
        <div class="px-3 mx-[90px]">
          <div class="inline-flex flex-row justify-center w-full text-left  p-1 ">
            <Container title="Company Name*"></Container>
            <Container title="Company Email*"></Container>
            <Container title="Phone Number*"></Container>
            <div class="p-1 flex-1 ">
              <div class=" w-full p-1 font-rubik text-left">
                Type of Projects
              </div>
              <select class=" border w-full p-1 bg-white text-black border-[#848484]">
                <option>Web</option>
                <option>Mobile</option>
                <option>Web & Mobile</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* <div class="inline-flex flex-col justify-center font-rubik text-left mx-[120px] px-12"> */}
          <div class="font-rubik text-left p-1">How can we help you?</div>
          <textarea
            class="inline-flex w-full h-[100px] border bg-white text-black border-[#848484] p-1"
            placeholder="Your Message"
          ></textarea>
          <div class="text-left pt-5 pb-10">
            <button
              type="submit"
              class="w-1/3 rounded-3xl bg-black text-white px-8 p-3.5 "
            >
              <b>Connect With Us</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Feedback;
