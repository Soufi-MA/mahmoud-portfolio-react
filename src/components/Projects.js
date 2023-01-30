import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="border-b">
      <div className="max-w-[1240px] m-auto p-20 bg-primary-dark justify-center">
        <h1 className="text-center text-4xl text-primary-light pb-20">
          Some of my work
        </h1>
        <div className="flex m-auto justify-between">
          <Project
            title={"Personal Portfolio"}
            description={"Personal project that showcase my skills"}
          />
          <Project
            title={"Personal Portfolio"}
            description={"Personal project that showcase my skills"}
          />
          <Project
            title={"Personal Portfolio"}
            description={"Personal project that showcase my skills"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
