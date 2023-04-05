import React from 'react';
import men from '../../assets/images/men.jpg'
import women from '../../assets/images/women.jpg';
import all from '../../assets/images/all.jpg';

function Catagory(props) {
    return (
        <div className='w-[70%] mx-auto'>
            <div className='flex justify-around '>
                <div className='relative w-[200px] md:w-[250px] h-[250px] md:h-[350px] bg-black bg-cover bg-center flex justify-center items-center hover:scale-105 duration-100'>
                    <img src={men} alt="men" className='opacity-50 w-[200px] md:w-[250px] h-[250px] md:h-[350px] rounded-lg ' />
                    <b className='absolute bottom-10 left-5 hover:left-10 font-style text-ash'>All of Men</b>
                </div>
                <div className='relative w-[200px] md:w-[250px] h-[250px] md:h-[350px] bg-black bg-cover bg-center flex justify-center items-center hover:scale-105 duration-100'>
                    <img src={women} alt="women" className='opacity-50 w-[200px] md:w-[250px] h-[250px] md:h-[350px]' />
                    <b className='absolute bottom-10 left-5 font-style text-ash'>All of Women</b>
                </div>
                <div className='relative w-[200px] md:w-[250px] h-[250px] md:h-[350px] bg-black bg-cover bg-center flex justify-center items-center hover:scale-105 duration-100'>
                    <img src={all} alt="all" className='opacity-50 w-[200px] md:w-[250px] h-[250px] md:h-[350px]' />
                    <b className='absolute bottom-10 left-5 font-style text-ash'>All </b>
                </div>
            </div>
        </div>
    );
}

export default Catagory;