//next link
import Link from "next/link";

import {
  BsFacebook,
  BsLinkedin,
  BsWhatsapp,
  BsGithub,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { TiSocialSkype } from "react-icons/ti";

//darkmode
import DarkModeButton from "./darkmode";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-2 text-md sm:text-xl relative ">
      <button class="btn-cssbuttons">
        <span>
          <TiSocialSkype />
        </span>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/bhargavtenali/"
              target="_blank"
            >
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="https://github.com/bhargavtenali" target="_blank">
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href="tel:+91-93985-66627" target="_blank">
              <BsFillTelephoneFill />
            </a>
          </li>
          <li>
            <a href="https://wa.me/919398566627" target="_blank">
              <BsWhatsapp />
            </a>
          </li>
        </ul>
      </button>
      <div className=" relative left-[0px] dark-btn">
        <DarkModeButton />
      </div>
    </div>
  );
};

export default Socials;
