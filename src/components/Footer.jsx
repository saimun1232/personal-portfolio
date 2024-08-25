import { useState } from "react";
import { bio, navLinks } from "../constants";
import { SectionWrapper } from "../hoc";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithubSquare,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const [active, setActive] = useState("");

  return (
    <footer className="flex flex-col gap-10 ">
      <h2 className="text-center text-[#915EFF] text-2xl font-semibold">
        Saimun Islam
      </h2>
      <ul className="flex justify-center items-center gap-10 black-gradient rounded-full py-2 flex-wrap">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            onClick={() => setActive(nav.id)}
            className={`${
              active === nav.id
                ? "text-white"
                : "text-secondary hover:text-white"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <ul className="flex justify-center items-center gap-10 text-2xl cursor-pointer black-gradient rounded-full py-2">
        <li className="hover:scale-110">
          <a href={bio.linkedin} target="_blank">
            <FaLinkedinIn />
          </a>
        </li>
        <li className="hover:scale-110">
          <a href={bio.github} target="_blank">
            <FaGithubSquare />
          </a>
        </li>
        <li className="hover:scale-110">
          <a href={bio.facebook} target="_blank">
            <FaFacebookF />
          </a>
        </li>
        <li className="hover:scale-110">
          <a href={bio.twitter} target="_blank">
            <FaTwitter />
          </a>
        </li>
      </ul>
      <p className="text-center text-slate-400 mb-7 black-gradient rounded-full py-2">
        © {new Date().getFullYear()} Saimun Islam. All rights reserved.
      </p>
    </footer>
  );
};

export default SectionWrapper(Footer, "");
