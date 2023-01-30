import React from "react";

const Project = ({ title, description }) => {
  return (
    <div className="w-[350px] h-[400px] border rounded bg-[#000000] shadow-md">
      <div className="bg-[url('./assets/project-img.png')] h-[200px] bg-cover bg-no-repeat bg-center rounded justify-center m-auto border-b"></div>
      <div className="text-primary-light text-2xl text-left font-bold p-2 h-[80px]">
        {title}
      </div>
      <div className="text-primary-light text-xl text-left p-2 h-[120px]">
        {description}
      </div>
    </div>
  );
};

export default Project;
