import React from "react";

const Hero = () => {
  return (
    <div className="border-t border-b">
      <div className="max-w-[1240px] h-[700px] pt-20 bg-[url('./assets/Hero.jpg')] bg-cover bg-no-repeat bg-center flex justify-center m-auto">
        <div className="text-center font-bold pt-20">
          <h1 className="text-6xl text-primary-light">
            Welcome to my Portfolio
          </h1>
          <h1 className="text-4xl text-primary-light">
            I'm a full stack web developer
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
