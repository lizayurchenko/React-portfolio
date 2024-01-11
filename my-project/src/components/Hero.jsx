import React from "react";

import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24 mt-24" id="home">
      <div className="align-element grid md:grid-cols-2 items-center gsp-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I`m Lisa</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Tech enthusiast
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a
              href="https://github.com/lizayurchenko?tab=overview&from=2024-01-01&to=2024-01-11"
              target="_blank"
            >
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
