import logo1 from "./img/White-Codeedoc-Transparant-–-1.png";
import { Icon } from "@iconify/react";

function Footer() {
  const Location = (locate) => {};

  return (
    <div class="bg-black  text-white px-10 ">
      <div class="flex justify-between mx-[65px] border-b-2 border-solid	border-[#FFFFFF1A] ">
        <div class="flex flex-col flex-wrap pr-12">
          <img class="w-[416px] h-[155px] mb-5" src={logo1}></img>
          <div class="pl-7 mb-2">
            <li class="text-base font-rubik ">
              <b>CODEEDOC</b> Since VS 2072.
            </li>
            <li class="text-base font-rubik leading-8">
              We Delivers Advanced IT Services To Organize The <br />
              Satisfied Software Development Process Across The Globe.
            </li>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center text-left">
          <div class=" w-full text-left pb-5">
            <h1 class="text-[18px]">
              <b>Get In Touch</b>
            </h1>
          </div>
          <div>
            <div
              class=" flex flex-row font-rubik text-base pb-2 "
              onClick={Location()}
            >
              <div class="flex pt-1 pr-2">
                <Icon icon="mdi:location" />{" "}
              </div>
              3084 Silver Business Point, VIP circle, Surat - 394105, India.
            </div>
            <a href="tel:+91%209727277767">
              <div class="inline-flex font-rubik text-base pb-2">
                <div class="flex font-rubik text-base pt-1 pr-2">
                  <Icon icon="material-symbols:call" />
                </div>
                +91 9727277767
              </div>
            </a>
            <br />
            <a href="mailto:hello@codeedoc.com">
              <div class="inline-flex font-rubik text-base pb-2">
                <div class="flex font-rubik text-base pt-1 pr-2">
                  <Icon icon="material-symbols:mail-outline" />
                </div>
                hello@codeedoc.com
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class=" bg-black text-white text-center p-5">
        <div class="font-rubik text-lg">
          Copyright © VS 2077 <b>CODEEDOC</b>
        </div>
      </div>
    </div>
  );
}
export default Footer;
