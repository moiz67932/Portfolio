import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import metaversusImg from "../public/assets/projects/metaversusImg.png";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import ecommerce from "../public/assets/projects/ecommerce.png";
import dashboard from "../public/assets/projects/dashboard.png";
import exercise from "../public/assets/projects/exercise.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Metaversus Web 3"
            backgroundImg={metaversusImg}
            projectUrl="/metaversus"
            tech="Next JS"
          />

          <ProjectItem
            title="E-Commerce Website"
            backgroundImg={ecommerce}
            projectUrl="/e-commerce"
            tech="Next JS"
          />

          <ProjectItem
            title="Business Dashboard"
            backgroundImg={dashboard}
            projectUrl="/metaversus"
            tech="React JS"
          />

          <ProjectItem
            title="Exercise App"
            backgroundImg={exercise}
            projectUrl="/exercise-app"
            tech="React JS"
          />

          <ProjectItem
            title="Property Finder"
            backgroundImg={propertyImg}
            projectUrl="/property"
            tech="React JS"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
            tech="React JS"
          />
          <ProjectItem
            title="Netflix App"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
            tech="React JS"
          />
          <ProjectItem
            title="Twitch UI"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
