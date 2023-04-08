import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { SiGmail } from "react-icons/si";
import { CiFacebook, CiInstagram, CiYoutube } from "react-icons/ci";

function Footer(props) {
  return (
    <div>
      <div className="md:flex md:justify-center items-center w-[90%] mx-auto">
        <div className="w-[90%] mx-auto md:w-[29%] h-80 flex flex-col items-center">
          <b className="text-2xl text-braun">Teams of condition</b>
          <p className="mt-10 md:mt-14 text-grray text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim eum
            laboriosam alias soluta ea earum hic eos, cumque suscipit molestias?
            Vitae in suscipit eius libero similique quas hic enim rem, quidem
            placeat fugit aspernatur delectus optio corrupti quos provident
            debitis dolorum sapiente explicabo est ea quaerat et? Aut beatae
            facere ipsam veritatis eius, veniam quae culpa incidunt numquam nemo
            reprehenderit, et quo. Dolor dignissimos a, est reprehenderit
            facilis quo ad.
          </p>
        </div>
        <div className="w-[1px] h-64 bg-[#75707067] hidden md:block"></div>
        <div className="md:w-[29%] w-[90%] mx-auto h-80 flex flex-col items-center">
          <b className="text-2xl text-braun"> Contact</b>
          <div className="mt-10 md:mt-14">
            <div className="space-y-3">
              <div className="flex space-x-1">
                <SiGmail className="text-xl text-grray" />
                <input type="text" className="border-b-[1px] outline-none" placeholder="Email Address"/>
              </div>
              <div className="flex space-x-1">
                <BiPhoneCall className="text-xl text-grray" />
                <p className="text-grray"> =5790345723</p>
              </div>
            </div>
            <div className="flex mt-2 space-x-2">
              <CiFacebook className="text-5xl rounded-md p-1 hover:text-white hover:bg-black transition text-[#290ec2a2] w-8 h-8 border-[1px] border-ash" />
              <CiYoutube className="text-5xl rounded-md p-1 hover:text-white hover:bg-black transition text-[#c20e0ea2] w-8 h-8 border-[1px] border-ash" />
              <CiInstagram className="text-5xl rounded-md p-1 hover:text-white hover:bg-black transition text-[#c20e86a2] w-8 h-8 border-[1px] border-ash" />
            </div>
          </div>
        </div>
        <div className="w-[1px] h-64 bg-[#75707067] hidden md:block"></div>
        <div className="w-[90%] mx-auto md:w-[29%] h-80 flex flex-col items-center">
          <b className="text-2xl text-braun">Our Blog's</b>
          <p className="mt-10 md:mt-14 text-grray text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim eum
            laboriosam alias soluta ea earum hic eos, cumque suscipit molestias?
            Vitae in suscipit eius libero similique quas hic enim rem, quidem
            placeat fugit aspernatur delectus optio corrupti quos provident
            debitis dolorum sapiente explicabo est ea quaerat et? Aut beatae
            facere ipsam veritatis eius, veniam quae culpa incidunt numquam nemo
            reprehenderit, et quo. Dolor dignissimos a, est reprehenderit
            facilis quo ad.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
