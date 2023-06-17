import React from 'react';
import test from '../../../assets/carosul img/pixel-bee-u8isJQ6QjF4-unsplash (1).jpg'
import { ReadMore } from '../../reusableComponents/utils/ReadMore';

function TestimonialComponent(props) {
    return (
        <div className=''>
            <p className='text-center my-4 text-braun text-2xl font-serif font-bold'>They <span className='text-black'>say!</span></p>
            <div className='space-y-4 flex flex-col justify-center items-center md:flex md:justify-center md:items-center'>
                <div className='w-[50%] md:w-[30%] flex flex-col justify-center items-center'>
                    <img  src={test} alt="" className='!w-28 !h-28 md:w-48 md:h-48 bg-cover rounded-full' />
                    <b className='text-md mt-3 md:text-lg'>Abu Sayed Rabbi</b>
                </div>
                <div className='w-[50%] md:w-[70%] bg-grray p-5 relative'>
                    <p className='md:hidden text-sm'><ReadMore>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aut hic saepe omnis ipsam impedit mollitia voluptatibus adipisci minus, repellat natus rerum, officiis laborum ut magnam? Laboriosam sint, cumque ipsum pariatur quisquam placeat reiciendis esse ipsa incidunt quos. Consectetur quas sequi laboriosam accusantium ipsa ratione corrupti a, reiciendis suscipit, minus odit, itaque adipisci dignissimos. Repudiandae distinctio, aut, rem doloremque eveniet laudantium dolores ipsam natus aperiam nam iste magni eos non!</ReadMore></p>
                    <p className='hidden md:block text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aut hic saepe omnis ipsam impedit mollitia voluptatibus adipisci minus, repellat natus rerum, officiis laborum ut magnam? Laboriosam sint, cumque ipsum pariatur quisquam placeat reiciendis esse ipsa incidunt quos. Consectetur quas sequi laboriosam accusantium ipsa ratione corrupti a, reiciendis suscipit, minus odit, itaque adipisci dignissimos. Repudiandae distinctio, aut, rem doloremque eveniet laudantium dolores ipsam natus aperiam nam iste magni eos non!</p>
                    <div className='w-6 h-6 bg-grray rotate-45 absolute top-[-8px] left-[49%] overflow-hidden'></div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialComponent;