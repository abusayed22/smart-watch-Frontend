import React from 'react'
import './SearchModal.css'
import { motion } from 'framer-motion'
import { RxCross2 } from 'react-icons/rx';


function SearchModal({ modal,open, closs }) {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        dumping: 25,
        stiffness: 300
      }
    },
    exit: {
      y: "-100vh",
      opacity: 0,
    }
  }
  return (
    <motion.div
      className='search_dorp'
      onclick={closs}
      // onclick={(e) => e.stopPropagation()}
      // initial={{opacity:0}}
      // animate={{opacity: 1}}
      // exit={{opacity: 0}}
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"

    >
      {/* {children} */}
      
      {
        modal && (<form>
          <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-10 pl-10 text-sm text-gray-900 bg-ash" placeholder="Search watch..." required />
              {/* <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
              <button onClick={closs} className="text-white absolute right-2.5 bottom-8 bg-blue font-medium rounded-lg text-sm px-2 py-2"><RxCross2/></button>
              
          </div>
        </form>)
      }

    </motion.div>
  )
}

export default SearchModal
