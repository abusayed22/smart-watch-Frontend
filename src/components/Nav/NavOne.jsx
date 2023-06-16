import React, { useState } from "react";
import "./Nav_One.css";
import SearchModal from "./modals/searchModal/SearchModal";
import { AiOutlineSearch } from "react-icons/ai";
import { FiDollarSign } from "react-icons/fi";
import { RiAccountPinCircleLine, RiShoppingCart2Line } from "react-icons/ri";
import { motion,AnimatePresence } from "framer-motion";

function NavOne(props) {
  const [openModal,setOpenModal] = useState(false)

  const modalOpen = () => setOpenModal(true);
  const modalClossed = () => setOpenModal(false);

  return (
    <div>
      {openModal && <SearchModal open={modalOpen} closs={modalClossed} />}
      <div className="w-[90%] mx-auto md:flex md:justify-around">
        <div className="md:w-[60%] text-braun font-extrabold text-4xl md:text-3xl font-style text-center h-20 md:h-24 flex justify-center md:justify-start items-center select-none">
          Smart---Watch
        </div>
        <div className="flex md:justify-center md:w-[40%]">
          <div className=" w-[25%] h-8 md:hidden md:h-20 border-grray border-t-[1px] border-b-[1px] border-r-[1px]"></div>
          <div className="w-[10%] md:h-24 border-grray border-[1px] h-8 flex justify-center items-center">
            <div>
              <motion.button
              whileHover={{scale: 1.1}}
              whileTap={{scale: 1.9}}
              className="save-button"
              onClick={() => openModal? modalClossed() : modalOpen()}
              >
                <AiOutlineSearch className="md:text-2xl text-lg" />
              </motion.button>
              <AnimatePresence
              initial={false}
              // exitBeforeEnter={true}
              onExitComplete={() => null}
              >
                {openModal && <SearchModal modal={openModal} open={modalOpen} closs={modalClossed}/> }
              </AnimatePresence>
            </div>
          </div>
          <div className="w-[10%] md:h-24 border-grray border-[1px] h-8 flex justify-center items-center">
            <RiAccountPinCircleLine className="md:text-2xl text-lg" />
          </div>
          <div className="w-[30%] md:h-24 border-grray border-[1px] h-8 flex justify-center items-center">
            <div className="w-[40%] flex items-center border-r-[1px]">
              <RiShoppingCart2Line className="ml-2 md:text-2xl text-lg" />
              <span className="mt-[-20px]">0 </span>
            </div>
            <div className="flex w-[60%]">
              <FiDollarSign className="text-grray" />
              <span className="">{0.00}</span>
            </div>
          </div>
          <div className=" w-[25%] md:hidden md:h-20 h-8 border-grray border-t-[1px] border-b-[1px] border-l-[1px]"></div>
        </div>
      </div>
    </div>
  );
}

export default NavOne;
