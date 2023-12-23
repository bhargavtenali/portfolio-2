// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "Axa Wildfire Risk Monitor App",
          path: "/axa.png",
          description:
            "Single-handedly built the Axa-app (Wildfire France 2023) from the ground up, including writing YAML deployment files and designing responsive frontend UI for both mobile and desktop.Earned commendable feedback from the Product Manager and the customer (Axa) for the exceptional quality of the delivered app.",
          note: "Note: For your safety, you may use a fake Email / Company name / Company size in the form and click CHECK YOUR LOCATION to view the application.",
          link: "https://smartservices.axaxl.com/wildfire",
        },
        {
          title: "Nxt Trendz ( ECommerce Clone - Amazon, Flipkart",
          path: "/nxttrendz.png",
          description:
            "Developed a complete ECommerce platform inspired by Amazon and Flipkart. Implemented user authentication with JWT tokens stored in secure cookies. Utilized React Router for seamless multi-page navigation and dynamic rendering.Technologies: React JS, JavaScript, CSS, Bootstrap, REST API Calls, Cookies, JWT Token",
          link: "https://bnxttrendz.ccbp.tech/",
          sourceCode: "https://github.com/bhargavtenali/bnexttrendz",
        },
        {
          title: "Emoji Game",
          path: "/emoji.png",
          description:
            "Developed responsive Emoji memory game where users can win it by clicking unique emoji each time till all displayed emojis are clicked. All emojis positions will be randomized after each clickList of Emojis is displayed by using React components, props , lists, conditional rendering, styled using CSS and randomized emojis placed using event listeners by updating react state.Updated different game states such as emojis list, winning state and losing state by using game state variable and conditional rendering.Technologies used: React.js, CSS, Bootstrap ",
          link: "https://bhemojigame.ccbp.tech/",
          sourceCode: "https://github.com/bhargavtenali/frontend_emojiGame",
        },
        {
          title: "Twitter Backend Clone",
          path: "/twitter.jpg",
          description:
            "Developed a RESTful API backend with Node.js and Express, featuring authentication middleware. Utilized SQLite for efficient data management, including access, updates, and creation. Laid the foundation for a Twitter- like social media application.Technologies: Node.js, Express, SQLite, REST APIs",
          sourceCode: "https://github.com/bhargavtenali/backend_twitter_clone",
        },
      ],
    },
    {
      images: [
        {
          title: "Money Manager",
          path: "/moneymanager.png",
          description:
            "A money manager app is a tool that helps users manage their personal finances. It allows users to track their income and expenses, set budgets, and view their financial history and trends.The goal of a money manager app is to provide users with an all-in-one solution for managing their money, helping them make informed decisions about their spending and saving habits.Transactions are stored in your browser's local storage. Technologies: React JS, JSX, CSS",
          link: "https://bhmoneymanager.ccbp.tech/",
          sourceCode: "https://github.com/bhargavtenali/frontend_moneyManager",
        },
        {
          title: "Appointments App",
          path: "/appointment.png",
          description:
            "It's a user-friendly appointment app that simplifies your scheduling. Add, star, and filter appointments effortlessly. Technologies: React JS, JSX, CSS",
          link: "https://bhappointment.ccbp.tech/",
          sourceCode: "https://github.com/bhargavtenali/frontend_appointment",
        },
        {
          title: "Digital Timer",
          path: "/timer.png",
          description:
            "Successfully developed a Digital Timer Application using the powerful combination of React.js and JSX. Users can effortlessly set the timer according to their  requirements.The application grants users the flexibility to commence the timer at any desired point in time.Users are empowered to pause the timer at their discretion.Additionally, the application offers a reset feature, enabling users to reset the timer as needed. Technologies: React JS, JSX, CSS",
          link: "https://bhdigitaltimer.ccbp.tech/",
          sourceCode: "https://github.com/bhargavtenali/frontend_timer",
        },
        {
          title: "Wikipedia Search Application",
          path: "/wiki.jpg",
          description:
            "Developed custom Wikipedia search application where users can search and view curated results and can see detailed explanations in Wikipedia by clicking on the specific resultThe displayed list of search results with HTML list elements with hyperlink as URL, styled list using CSS, Bootstrap, and implemented responsiveness using Flex properties and CSS Box model.Fetched search results from a server asynchronously using fetch GET HTTP API call. When a user clicks on a particular result, opens the website in a new tab by using the target attribute of the anchor tag in HTML.Technologies used: HTML, CSS, JS, REST API Calls, Bootstrap",
          link: "https://bhwikisearch.ccbp.tech/",
        },
      ],
    },
  ],
};

// import Swiper components and required styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

// import Next.js Image component
import Image from "next/image";
import { useState } from "react";

//faramr motion
import { motion } from "framer-motion";
import { fadeIn } from "/variants";

const WorkSlider = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowOverlay(true);
  };
  // initialize Vanilla Tilt.js on each slide element

  return (
    <>
      <Swiper
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="h-[280px] sm:h-[480px]"
      >
        {/* loop through each slide */}
        {workSlider.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 gap-4 cursor-pointer ">
                {/* loop through each image */}
                {slide.images.map((image, index) => {
                  return (
                    <div
                      key={index}
                      className="relative rounded-lg shadow-2xl overflow-hidden flex items-center justify-center group w-[90%] h-[90%] "
                      onClick={() => handleProjectClick(image)}
                    >
                      <div className="relative overflow-hidden flex items-center justify-center group-hover:scale-[1.1] ease-in-out transition-all duration-300 ">
                        {/* display image */}
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt=""
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* overlay */}
      {showOverlay && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center w-full h-full z-50 "
          onClick={() => setShowOverlay(false)}
        >
          <motion.div
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="tilt-slide bg-white p-4 rounded-lg shadow-lg shadow-zinc-600 w-[600px] h-[400px] flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 shadow">
                {selectedProject.title}
              </h2>
              <p className=" text-black font-sans font-semibold">
                {selectedProject.description}
              </p>
              <br />
              <p className=" text-black font-sans font-bold">
                {selectedProject.note}
              </p>
            </div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex justify-end items-end mt-4"
            >
              {selectedProject.sourceCode && (
                <a
                  href={selectedProject.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mr-4 ui-btn"
                >
                  <span>Source Code</span>
                </a>
              )}
              {selectedProject.link && (
                <motion.a
                  variants={fadeIn("right", 0.5)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="prj-demo"
                >
                  <div class="button">
                    <div class="box">L</div>
                    <div class="box">I</div>
                    <div class="box">V</div>
                    <div class="box">E</div>
                  </div>
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default WorkSlider;
