"use client";

import Image from "next/image";
import { IoLogoTwitter } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import {
  MdContactPhone,
  MdLocationPin,
  MdOutlineFacebook,
  MdOutlineMailOutline,
  MdPhone,
} from "react-icons/md";
import { PiPaperPlaneRightFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="w-full h-full flex-col justify-start items-start inline-flex">
      <div className="self-stretch px-20 py-12 bg-teal-400 justify-between items-start gap-8 inline-flex">
        <div className="justify-start items-start gap-7 flex">
          <div className="w-[423px]  flex-col justify-start items-start gap-3 inline-flex">
            <div className="justify-center items-center gap-3 inline-flex">
              <Image
                className="w-11 h-11 rounded-full"
                src="/images/dsap_logo.png"
                width={100}
                height={100}
                alt="logo"
              />
              <div className="text-center text-white text-base font-bold leading-normal">
                ISABELA - QUIRINO CHAPTER
              </div>
            </div>
            <div className="text-gray-200 text-base font-normal leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Ut tempus mauris efficitur, fermentum la
            </div>
            <div className="justify-start items-end gap-3 inline-flex">
              <div className="w-8 h-8 relative">
                <MdOutlineFacebook
                  size={30}
                  className="w-8 h-8 left-0 text-teal-500 top-0 absolute bg-white rounded-full"
                />
              </div>
              <div className="w-8 h-8 relative">
                <IoLogoTwitter
                  size={30}
                  className="w-8 h-8 left-0 text-teal-500 p-1 top-0 absolute bg-white rounded-full"
                />
              </div>
              <div className="w-8 h-8 relative">
                <SiGmail
                  size={30}
                  className="w-8 h-8 left-0 top-0 text-teal-500 p-0.5 absolute bg-white rounded-full"
                />
              </div>
              <div className="w-8 h-8 relative">
                <FaLinkedin
                  size={30}
                  className="w-8 h-8 p-1 text-teal-500 left-0 top-0 absolute bg-white rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="w-[147px]  flex-col justify-center items-start gap-3 inline-flex">
            <div className="text-center text-white text-base font-bold leading-normal">
              Useful links
            </div>
            <div className="text-center text-white text-base font-normal leading-normal">
              News
            </div>
            <div className="text-center text-white text-base font-normal leading-normal">
              Events
            </div>
            <div className="text-center text-white text-base font-normal leading-normal">
              About
            </div>
            <div className="text-center text-white text-base font-normal leading-normal">
              Privacy Policy
            </div>
            <div className="text-center text-white text-base font-normal leading-normal">
              Terms & Conditions
            </div>
          </div>
          <div className="w-[600px] h-[240px] flex-col justify-start items-start gap-3 inline-flex">
            <div className="justify-start items-center gap-3 inline-flex">
              <div className="w-8 h-8 ">
                <MdLocationPin
                  size={30}
                  className="bg-white rounded-full p-1 text-teal-500"
                />
              </div>
              <div className="text-center text-white text-base font-normal leading-normal">
                849 Wagas St, Tondo, Manila, 1012 Metro Manila, Philippines
              </div>
            </div>
            <div className="justify-start items-center gap-3 inline-flex">
              <div className="w-8 h-8 ">
                <MdPhone
                  size={30}
                  className="rounded-full p-1 bg-white text-teal-500"
                />
              </div>
              <div className="text-center text-white text-base font-normal leading-normal">
                +63 912 123 4567
              </div>
            </div>
            <div className="justify-start items-center gap-3 inline-flex">
              <div className="w-8 h-8 relative">
                <MdOutlineMailOutline
                  size={30}
                  className="bg-white p-1 text-teal-500 rounded-full"
                />
              </div>
              <div className="text-center text-white text-base font-normal leading-normal">
                sample@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-center items-start gap-3 inline-flex">
          <div className="w-[300px] h-[120.99px] flex-col justify-center items-start gap-3 inline-flex">
            <div className="text-center text-white text-base font-bold leading-normal">
              Subscribe Now
            </div>
            <div className="grow shrink basis-0 self-stretch bg-gray-100 rounded-lg justify-end items-center flex">
              <input
                placeholder="Email..."
                className="grow shrink focus:border-gray-800 px-4 basis-0 self-stretch  border-l-[1px] border-bg-gray-700 rounded-l-md text-gray-500 text-base font-semibold leading-normal"
              />
              <div className="w-[70px] p-2 cursor-pointer text-white hover:bg-teal-600 self-stretch bg-teal-500 rounded-tr-lg rounded-br-lg justify-center items-center flex">
                <PiPaperPlaneRightFill size={30} />
              </div>
            </div>
            <div className="justify-end items-center gap-4 inline-flex">
              <div className="w-8 h-[31.35px] relative" />
              <div className="w-16 h-[32.99px] relative" />
              <div className="w-24 h-[30.04px] relative" />
              <div className="w-8 h-[27.08px] py-[0.26px] justify-center items-center flex" />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch px-11 py-4 bg-teal-700 justify-start items-center gap-6 inline-flex">
        <div className="text-center text-gray-50 text-sm font-bold leading-tight">
          DSAP © 2023
        </div>
        <div className="text-center text-gray-50 text-sm font-normal leading-tight">
          Privacy Policy
        </div>
        <div className="text-center text-gray-50 text-sm font-normal leading-tight">
          Terms & Conditions
        </div>
      </div>
    </div>
  );
};

export default Footer;
