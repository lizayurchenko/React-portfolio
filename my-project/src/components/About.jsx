import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
import React from "react";

const About = () => {
  return (
    <section className="bg-white py-20 " id="about">
      <div className="align-element grid md:grid-cols-2 gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text={"About me"} />
          <p className="text-slate-600 mt-8 leading-loose">
            Hello! I am enthusiastic about coding and constantly seek
            opportunities to enhance my skills in the world of technology.
            Currently, I am on a journey to find the perfect Ausbildung
            opportunity that aligns with my passion for technology. I am excited
            about the prospect of continuous growth and the pursuit of
            knowledge. Let's build the future together!
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
