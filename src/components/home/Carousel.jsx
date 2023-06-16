import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Carousel() {
    const slides = [
        {
            url: 'https://res.cloudinary.com/dll0uw2nw/image/upload/v1680506621/carasoul%20img/carosul%20img/lucas-santos-huRn8ECqADI-unsplash_eelqhy.jpg',
        },
        {
            url: 'https://res.cloudinary.com/dll0uw2nw/image/upload/v1680506612/carasoul%20img/carosul%20img/yoab-anderson-BZntpWeIe4I-unsplash_c03gol.jpg',
        },
        {
            url: 'https://res.cloudinary.com/dll0uw2nw/image/upload/v1680506602/carasoul%20img/carosul%20img/alvaro-bernal-RgIKRYhmG2k-unsplash_ab0axq.jpg',
        },

        {
            url: 'https://res.cloudinary.com/dll0uw2nw/image/upload/v1680506603/carasoul%20img/carosul%20img/pixel-bee-u8isJQ6QjF4-unsplash_1_ukew0c.jpg',
        },
        {
            url: 'https://res.cloudinary.com/dll0uw2nw/image/upload/v1680506601/carasoul%20img/carosul%20img/1img_gln1rq.jpg',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='max-w-[1400px] h-[80vh] md:h-[100vh] w-full m-auto relative group z-10'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full bg-center bg-cover duration-500'
            ></div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex justify-center py-2'>
                {/* {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled />
                    </div>
                ))} */}
            </div>
        </div>
    );
}


export default Carousel;