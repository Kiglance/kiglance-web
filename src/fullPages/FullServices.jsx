import React from "react";
import { TbBulb } from "react-icons/tb";
import { PiPencilLineBold } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";
import { RiSeoLine } from "react-icons/ri";
import project from "../assets/project.jpg";
import uiux from "../assets/uiux.jpg";
import seo from "../assets/seo.jpg";
import devt from "../assets/devt.jpg";
import HeaderLine from "../components/HeaderLine";

const ServicesFullPage = () => {
  return (
    <div>
      <div className="flex sm:flex-row flex-col-reverse items-center gap-4 mx-auto w-fit">
        <HeaderLine />
        <h1 className=" text-black/75 text-2xl font-bold">Our Services</h1>
      </div>
      <div className="flex items-center flex-col w-11/12 m-auto max-w-[1200px] gap-8 py-10">
        <div className="flex md:flex-row flex-col-reverse items-center h-full">
          <div className="bg-[#E5E5E5] p-4 md:w-1/2 md:h-[300px] overflow-y-auto no-scrollbar">
            <h1 className="flex sm:flex-row flex-col items-center gap-3 text-black/75 sm:text-2xl text-lg font-bold px-5 text-center">
              <TbBulb className="text-[#3E68FF] md:text-[40px] text-[30px]" />
              PROJECT CONCEPT
            </h1>
            <br />
            <p>
              Every great project starts with a spark of an idea. Our team
              doesn't just build websites and apps, we help you refine your
              concept into a winning solution.{" "}
            </p>
            <br />
            <p>
              Through brainstorming sessions and market research, we'll work
              with you to solidify your project's purpose, target audience, and
              key functionalities.{" "}
            </p>
            <br />
            <p>
              The result? A clear roadmap for success that ensures your project
              delivers real value and impact.
            </p>
          </div>
          <div className="md:w-1/2 h-full inset-0">
            <img
              src={project}
              alt=""
              className="w-full md:h-[300px] object-cover"
            />
          </div>
        </div>

        <div className="flex md:flex-row-reverse flex-col-reverse items-center h-full">
          <div className="bg-[#ffffff] p-4 md:w-1/2 md:h-[300px] overflow-y-auto no-scrollbar">
            <h1 className="flex sm:flex-row flex-col items-center gap-3 text-black/75 sm:text-2xl text-lg font-bold px-5 text-center">
              <PiPencilLineBold className="text-[#3E68FF] md:text-[40px] text-[30px]" />
              UI & UX
            </h1>
            <br />
            <p>
              We believe exceptional design goes beyond aesthetics. Our UI/UX
              experts craft user interfaces that are not only visually appealing
              but also intuitive and user-friendly. We prioritize clean layouts,
              clear navigation, and responsive design to create a seamless
              experience across all devices.{" "}
            </p>
            <br />
            <p>
              The user journey is at the heart of everything we do, ensuring
              your website or app is not just beautiful, but effortless for your
              users to interact with.
            </p>
          </div>
          <div className="md:w-1/2 h-full inset-0">
            <img
              src={uiux}
              alt=""
              className="w-full md:h-[300px] object-cover"
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col-reverse items-center h-full">
          <div className="bg-[#E5E5E5] p-4 md:w-1/2 md:h-[300px] overflow-y-auto no-scrollbar">
            <h1 className="flex sm:flex-row flex-col items-center gap-3 text-black/75 sm:text-2xl text-lg font-bold px-5 text-center">
              <FaCode className="text-[#3E68FF] md:text-[40px] text-[30px]" />
              DEVELOPMENT{" "}
            </h1>
            <br />
            <p>
              With a rock-solid foundation in place, our skilled developers
              bring your vision to life. We leverage the latest technologies and
              best practices to build secure, scalable, and high-performing
              applications.{" "}
            </p>
            <br />
            <p>
              Whether you need a complex web platform, a mobile app, or a custom
              software solution, our team possesses the expertise to deliver
              exceptional results.{" "}
            </p>
          </div>
          <div className="md:w-1/2 h-full inset-0">
            <img
              src={devt}
              alt=""
              className="w-full md:h-[300px] object-cover"
            />
          </div>
        </div>

        <div className="flex md:flex-row-reverse flex-col-reverse items-center h-full">
          <div className="bg-[#ffffff] p-4 md:w-1/2 md:h-[300px] overflow-y-auto no-scrollbar">
            <h1 className="flex sm:flex-row flex-col items-center gap-3 text-black/75 sm:text-2xl text-lg font-bold px-5 text-center">
              <RiSeoLine className="text-[#3E68FF] md:text-[40px] text-[30px]" />
              SEO/Content Writing
            </h1>
            <br />
            <p>
              In today's digital landscape, visibility is key. Our SEO
              specialists and content writers work hand-in-hand to optimize your
              website and create engaging content that attracts your target
              audience and ranks high in search engine results pages (SERPs).{" "}
            </p>
            <br />
            <p>
              From crafting keyword-rich website copy to developing compelling
              blog posts, we ensure your project not only looks great and
              functions flawlessly, but also finds its audience online.
            </p>
          </div>
          <div className="md:w-1/2 h-full inset-0">
            <img
              src={seo}
              alt=""
              className="w-full md:h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesFullPage;
