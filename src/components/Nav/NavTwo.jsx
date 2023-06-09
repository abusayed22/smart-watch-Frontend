import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import "animate.css";
import { navItems } from "../../Static/Data";

function NavTwo(props) {
  const [menu, setMenu] = useState(false);
  // toggle function
  const menuToggled = () => {
    setMenu((prv) => !prv);
  };
  return (
    <div>
      <div>
        <div className=" z-30 relative md:hidden h-12 w-full bg-black text-white flex justify-center items-center">
          {/* menu */}
          <button onClick={menuToggled} className="text-center ">
            - MENU -
          </button>
          {menu && (
            <div className="absolute w-full h-auto top-12 ">
              <ul className="z-30 w-[100%] bg-[#0c0f11a1] h-[180px] flex flex-col items-center justify-around rounded-b-md">
                {navItems?.map((item) => (
                  <li className="animate__animated animate__backInLeft">
                    <Link
                      to={item.url}
                      className="font-bold animate__animated animate__fadeInDownBig0"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="hidden md:block w-full h-12 bg-black ">
          <div className="w-[70%] h-12 mx-auto flex justify-around items-center text-white">
            {/* <Link to={"/"} className="font-bold">
              HOME
            </Link>{" "}
            |
            <Link to={"/shop"} className="font-bold">
              SHOP
            </Link>{" "}
            |
            <Link to={"/watch"} className="font-bold">
              WATCH
            </Link>{" "}
            |
            <Link to={"models"} className="font-bold">
              MODELS
            </Link> */}
            {navItems?.map((item) => (
                  <Fragment key={item.url}>|
                  <Link  to={item.url} className="font-bold">
                  {item.title}
                </Link>
                |</Fragment>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavTwo;
