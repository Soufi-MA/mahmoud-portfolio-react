import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className=" flex max-w-[1240px] h-20 bg-black bg-primary-dark justify-between items-center m-auto">
      <div className="bg-[url('./assets/Logo.jpg')] h-20 w-20 bg-cover"></div>
      <div className=" flex text-primary-light space-x-4 text-xl self-center p-4">
        <div>Home</div>
        <div>Projects</div>
        <div>Contact me</div>
        <div>About me</div>
      </div>
    </div>
  );
};
export default Nav;
