/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
//  icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaSass,
  FaNode,
  FaCode,
  FaPython,
  FaDocker,
  FaJenkins,
} from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import {
  SiTypescript,
  SiMui,
  SiMysql,
  SiElastic,
  SiRedux,
  SiExpress,
  SiFlask,
  SiKubernetes,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { PiCertificateBold } from "react-icons/pi";
import { TbSql } from "react-icons/tb";
import {
  BiLogoTailwindCss,
  BiBriefcase,
  BiLogoPostgresql,
} from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsGit } from "react-icons/bs";

//framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//counter
import CountUp from "react-countup";

// About data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Frontend",

        icons: [
          <FaJs />,
          <SiTypescript />,
          <FaReact />,
          <SiRedux />,
          <FaHtml5 />,
          <FaCss3 />,
          <FaSass />,
          <BiLogoTailwindCss />,
          <SiMui />,
        ],
      },
      {
        title: "Backend",

        icons: [
          <FaNode />,
          <SiExpress />,
          <SiTypescript />,
          <FaPython />,
          <SiFlask />,
        ],
      },
      {
        title: "Devops",
        icons: [
          <FaDocker />,
          <SiKubernetes />,
          <FaJenkins />,
          <BsGit />,
          <FaGitlab />,
        ],
      },
      {
        title: "Database",
        icons: [<TbSql />, <SiElastic />, <SiPostgresql />, <SiMongodb />],
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "Full Stack Developer, Kayrros",
        stage: "Aug 2022 - Present",
      },
      {
        title: "Web Developer Intern, NxtWave",
        stage: "Feb 2022 - Aug 2022",
      },
      {
        title: "Manager - Government of India",
        stage: "2017 - 2022",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        desc: "Bachelor of Technology",
        title: "IIT, Varanasi",
        stage: "2013 - 2017",
      },
    ],
  },

  {
    title: "certifications",
    info: [
      {
        title: "Python Bootcamp from Zero to Hero",
        stage: "Jan - 2022",
        link: "https://www.udemy.com/certificate/UC-d7803210-626e-4620-9dd4-f035fdf23abc/",
      },
      {
        title: "Web Development Bootcamp",
        stage: "Nov - 2021",
        link: "https://www.udemy.com/certificate/UC-379b041e-02d0-4350-9000-6063c670e940/",
      },
      {
        title: "HTML for Web Development",
        stage: "Oct - 2021",
        link: "https://olympus1.mygreatlearning.com/course_certificate/XMCBXSAK",
      },
      {
        title: "CSS for Web Development",
        stage: "Nov - 2021",
        link: "https://olympus1.mygreatlearning.com/course_certificate/KIFSQYTX",
      },
      {
        title: "Javascript",
        stage: "Nov - 2021",
        link: "https://olympus1.mygreatlearning.com/course_certificate/WAFNIANJ",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // add a loading state

  useEffect(() => {
    // simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="h-full py-24 xl:py-32 text-center xl:text-left">
      {/* background image */}
      <div
        className={`bg-about bg-cover bg-right bg-no-repeat w-full h-full absolute left-0 top-0 opacity-[.25] z-0`}
      ></div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center z-10">
          <motion.h2
            className="h2 text-shad-sm"
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Welcome <span className="text-sky-600">again!</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-2 xl:mb-12 px-2 xl:px-0 font-sans font-semibold text-shad-sm"
          >
            I am a dedicated Full Stack Web Developer.
            <br /> With a passion for continuous learning and a commitment to
            delivering high-quality solutions, I am excited to contribute to web
            development projects. <br />
            Also, I have actively contributed to the open-source community
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 1.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-4"
          >
            <div className="flex flex-1">
              {/* clents */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 px-8">
                <div className="text-2xl xl:text-4xl font-extrabold text-shad-sm text-center mb-2 flex items-center flex-col ">
                  <div className="text-sky-600 text-center flex items-center flex-col text-shad-sm">
                    <BiBriefcase className="mr-1 flex-1 shadow" />
                    <CountUp start={0} end={2} duration={20} />
                  </div>
                  <div className="text-xs uppercase text-center tracking-[1px] loading-[1.4] max-w-[100px]">
                    <br />
                    Work Experience
                  </div>
                </div>
              </div>
              {/* finish Projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 px-8">
                <div className="text-2xl xl:text-4xl font-extrabold text-center mb-2 flex items-center flex-col ">
                  <div className="text-sky-600 text-center flex items-center flex-col text-shad-sm">
                    <AiOutlineFundProjectionScreen className="mr-1 flex-1 shadow" />
                    <CountUp start={0} end={30} duration={10} />
                  </div>
                  <div className="text-xs uppercase  text-center tracking-[1px] loading-[1.4]  max-w-[100px]">
                    <br />
                    Finished Projects
                  </div>
                </div>
              </div>
              {/* Support*/}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 px-8">
                <div className="text-2xl xl:text-4xl font-extrabold text-center mb-2 flex items-center flex-col ">
                  <div className="text-sky-600 text-center flex items-center flex-col text-shad-sm">
                    <PiCertificateBold className="mr-1 flex-1" />
                    <CountUp start={0} end={20} duration={10} />
                  </div>
                  <div className="text-xs uppercase  text-center tracking-[1px] loading-[1.4] max-w-[100px]">
                    <br />
                    Web Certifications
                  </div>
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 px-8">
                <div className="text-2xl xl:text-4xl font-extrabold text-center mb-2 flex items-center flex-col ">
                  <div className="text-sky-600 text-center flex items-center flex-col text-shad-sm">
                    <FaCode className="mr-1 flex-1" />
                    <CountUp start={0} end={2} duration={20} />
                  </div>
                  <div className="text-xs uppercase  text-center tracking-[1px] loading-[1.4] max-w-[100px]">
                    <br />
                    Open Source Contributions
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("down", 1.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-2">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-sky-600 after:w-[100%] after:bg-sky-600 after:transition-all after:duration-700 after:left-0  "
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:absolute overflow-hidden after:left-[-20px] after:bottom-0 `}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center"
                >
                  {/* title */}
                  <div className="font-bold mb-2 md:mb-0 text-sky-600 ">
                    {item.desc}
                  </div>
                  {item.link ? (
                    <a
                      target="_blank"
                      href={item.link}
                      className="z-50 font-bold mb-2 md:mb-0 text-sky-600 "
                    >
                      {item.title}
                    </a>
                  ) : (
                    <div className="font-bold mb-2 md:mb-0 text-sky-600 ">
                      {item.title}
                    </div>
                  )}
                  <div className="hidden md:flex ">-</div>

                  <div>{item.stage}</div>
                  {/* icons */}
                  <div className="flex gap-x-4 ">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div
                          key={itemIndex}
                          className="text-2xl transition-all duration-100 hover:scale-[1.5] "
                        >
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
