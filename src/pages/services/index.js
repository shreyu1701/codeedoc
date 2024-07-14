import React from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import product from "../../img/Product-consulting-and-strategy-1024x483.png";
import rescue from "../../img/Project-Rescue-1024x689.png";
import roadmap from "../../img/Roadmap-1-1024x896.png";
import team from "../../img/dedicated-team-1024x476.png";
import logo from "../../img/time-hour1024x1024.png";
import Feedback from "../home/Feedback";

function Services() {
  const Item = ({ image, leftDir, children }) => {
    return (
      <div class="inline-flex px-[40px]">
        <div
          class={`flex justify-center mx-[65px] mb-[100px] items-center ${
            leftDir ? "flex-row-reverse " : ""
          } `}
        >
          <div class="flex flex-col justify-center pr-10">{children}</div>
          <img class="flex  h-fit w-[540px] pr-8 " src={image}></img>
        </div>
      </div>
    );
  };
  return (
    <>
      <Header />
      <Item image={logo}>
        <div class="text-[24px] font-bold mb-5">Our Services</div>
        <div class="text-[32px] font-bold mb-5">
          Predictable. Measurable. Agile
        </div>
        <p class="text-[18px] font-rubik text-color  mb-5">
          We aim to grow you and your business with the help of our excellent
          team.
        </p>
      </Item>

      <Item image={product}>
        <div class="text-[45px] font-bold mb-5 ">
          Product Consulting & Strategy
        </div>
        <p class="text-[18px] font-rubik text-color mb-5 leading-8">
          We are not only in the business of development, but we are in the
          field of developing your business, we are here to guide you through.
          We not only develop technical solutions but we also help you to choose
          what’s best for you. Codeedoc will help you throughout strategizing
          your launch and achieving your business goal.
        </p>
        <div class="text-[18px] font-rubik text-color mb-5 leading-8">
          We create a better path to success and use our tools to scale your
          business in folds. We aim to help you achieve your vision.
        </div>
      </Item>
      <Item image={team} leftDir={true}>
        <div class="text-[45px] font-bold mb-5">Dedicated Team</div>
        <p class="text-[18px] font-rubik text-color mb-5 leading-8">
          Gain the power of an in-house team without managing an in-house team.
        </p>
        <p class="text-[18px] font-rubik text-color mb-5 relative leading-8">
          You get a highly talented team without having the hassle to manage
          them or to groom them. We provide you technically skilled people with
          competitive market pricing. While you don’t entirely pay for the
          management, employee benefits, employee administration, and other
          expenses, you still get full control over the team.
        </p>
      </Item>
      <Item image={rescue}>
        <div class="text-[45px] font-bold mb-5">Project Rescue</div>
        <div class="text-[18px] font-rubik text-color mb-5 leading-8">
          The story of many startups; despite investing a substantial amount of
          time and resources your project never breaks into the market. That’s
          where we come into play as a rescue team to save your project.
          Codeedoc makes sure that your product sees the light of the market and
          we focus on growing you as a business while maintaining proper
          standards.
        </div>
      </Item>
      <Item image={roadmap} leftDir={true}>
        <div class="text-[45px] font-bold mb-5">RoadMap</div>
        <div class="text-[18px] font-rubik text-color mb-5 leading-8">
          We are the craftsman who possess the skill to bring your idea to life.
          We do this by following our fixed development process.
        </div>
        <ul class="pl-12 list-disc ">
          <li className="rubik">Conceptualization</li>
          <li className="rubik">Brainstorming</li>
          <li className="rubik">Designing</li>
          <li className="rubik">Development</li>
          <li className="rubik">Launch</li>
          <li className="rubik">Repeat</li>
        </ul>
      </Item>
      <Feedback />
      <Footer />
    </>
  );
}

export default Services;
