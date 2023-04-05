import React from "react";
import test from "../../../assets/carosul img/alvaro-bernal-RgIKRYhmG2k-unsplash.jpg";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import ReactImageMagnify from "react-image-magnify";

function SpecialCart(props) {
  return (
    <div className="w-[90%] flex flex-col items-center md:flex-row md:items-start">
      {/* TODO: image setcion */}
      <div className="w-[60%] h-[10%] flex flex-col">
        <div className="w-[100%] h-[10%] ">
          {/* image megnify */}
          <ReactImageMagnify
          className="w-[100%] h-[80%] rounded-md"
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: test,
              },
              largeImage: {
                src: test,
                width: 900,
                height: 500,
              },
            }}
          />
          {/* <img src={test} alt="" className='w-[100%] h-[50%] cursor-pointer hover:scale-150 duration-150' /> */}
        </div>
        <div className="h-[200px] flex justify-around items-center">
          <div className="w-[32.9%] h-[50%]  bg-black">
            <img src={test} alt="" />
          </div>
          <div className="w-[32.9%] h-[50%]  bg-ash">
            <img src={test} alt="" className="" />
          </div>
          <div className="w-[32.9%] h-[50%] bg-braun">
            <img src={test} alt="" />
          </div>
        </div>
      </div>
      {/* TODO: contend */}
      <div className="w-[100%] md:w-[50%] h-[300px] p-5 flex flex-col items-start space-y-2 md:space-y-4">
        <b>Black leather smart watch for men</b>
        <div className="flex space-x-2">
          <p>Price: </p> <p> $1880 </p>
        </div>
        <p className="text-left text-sm md:text-lg md:text-justify font-thin  ">
          This is the best in class effective watches from the luxury brand
          watch.co and gizmo. Lot of efforts. Take a peek look into itThis is
          the best in class effective watches from the luxury brand watch.co and
          gizmo. Lot of efforts. Take a peek look into it
        </p>

        {/* TODO:conditonal */}
        <div className="flex space-x-5">
          <div className="flex items-center space-x-4">
            <p>1</p>
            <div className="flex flex-col">
            <button>
              <BiUpArrow className="text-sm" />
            </button>
            <button>
              <BiDownArrow className="text-sm" />
            </button>
            </div>
          </div>
          <button className="hover:text-off_white transition p-1 md:p-2 bg-braun rounded-sm text-grray">
            Add to Cart
          </button>
        </div>
        <button className="hover:text-off_white transition p-1 md:p-2 bg-braun rounded-sm text-grray">
          Add to Whislist
        </button>

        <p className="hidden lg:block">Catagory:</p>
        <p className="hidden lg:block">Tags:</p>
      </div>
    </div>
  );
}

export default SpecialCart;
