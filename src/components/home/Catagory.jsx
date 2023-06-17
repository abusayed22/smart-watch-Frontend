import React from 'react';
import men from '../../assets/images/men.jpg'
import women from '../../assets/images/women.jpg';
import all from '../../assets/images/all.jpg';

function Catagory(props) {
    const catImg = [
        { img: men, name: "All of Men" },
        { img: women, name: "All of Women" },
        { img: all, name: "All" },
    ]
    return (
        <div className=''>
            <p className='text-center text-braun text-2xl font-serif font-bold my-3'>Catagory </p>

            <div className=''>
                <div className='flex flex-col items-center md:flex-row md:justify-center w-full space-y-3 md:space-y-0 md:flex md:space-x-3'>
                    {catImg.map(c => (
                        <div key={c.img} className='relative w-[300px] md:w-[250px] h-[200px] md:h-[350px] bg-black bg-cover bg-center flex justify-center items-center hover:scale-105 duration-100'>
                            <img src={c.img} alt="men" className='opacity-50 w-[300px] md:w-[250px] h-[200px] md:h-[350px] rounded-lg ' />
                            <b className='absolute bottom-10 left-5 hover:left-10 font-style text-ash'>{c.name}</b>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Catagory;