import React from 'react';
import test from '../../assets/images/men.jpg';
import './topRated css/TopRated.css'
import { GiShoppingCart } from 'react-icons/gi';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { TiEyeOutline } from 'react-icons/ti';


function TopRated(props) {
    return (
        <div className='mt-20  bg-[#edc5ab83]'>
            <p className='text-center text-braun text-2xl font-serif font-bold my-3'>Top <span className='text-black'>Rated</span></p>
            <div className=' flex h-auto flex-wrap justify-center space-x-3 md:space-x-5 space-y-3 md:space-y-5'>

                <div className='mainCartShadow hover:relative transition w-[200px] h-[300px] md:w-[300px] md:h-[400px] flex flex-col space-y-3 md:space-y-5'>
                    <img src={test} alt="" className='bg-cover w-[200px] h-[200px] md:w-[300px] md:h-[280px]' />
                    <div id='' className='cartShadow flex justify-around items-center'>
                        <button id='cartButton' className=''><GiShoppingCart className='text-grray' /></button>
                        <button id='cartButton'><MdOutlineFavoriteBorder className='text-grray' /></button>
                        <button id='cartButton'><TiEyeOutline className='text-grray' /></button>
                    </div>
                    <div className='flex hover:bg-braun hover:p-2 hover:transition p-1 justify-between'>
                        <div>
                            <b>description</b>
                            <p className='hover:font-2xl'>price</p>
                        </div>
                        <div>top Rated</div>
                    </div>
                </div>
                


            </div>
        </div>
    );
}

export default TopRated;