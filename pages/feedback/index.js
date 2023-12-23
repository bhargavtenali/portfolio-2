//componants
import ServiceSlider from "../../components/ServiceSlider";

//faramr motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Feedback = () => {
  return (
    <div className="h-full flex items-center py-24 xl:py-32 ">
      {/* <Circles /> */}
      {/* background image */}
      <div
        className={`bg-service bg-cover bg-right bg-no-repeat w-full h-full absolute left-0 top-0 opacity-[.25]`}
      ></div>
      <div className="container mx-auto  ">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="flex text-center xl:w-[30vw] flex-col lg:text-left mb-2 xl:mb-0">
            <motion.h2
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8 md:mt-10 sm:mt-8 text-shad-sm"
            >
              Feedback Received
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 mt-4 max-w-[400px] mx-auto lg:mx-0 font-sans font-bold text-shad-sm"
            >
              I am commited to the Quality of the product, Timely Delivery,
              Clean Code Practies. It lead to very happy feedback from the
              Managers.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("up", 1.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[60%] text-sm"
          >
            {/* slider */}
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
