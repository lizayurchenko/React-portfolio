import ProjectsCard from "./ProjectsCard";
import { projects } from "../assets/data";
import SectionTitle from "./SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    //fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="web creations" />
      <Slider {...settings}>
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </Slider>
    </section>
  );
};

export default Projects;
