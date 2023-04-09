import React from 'react';
import Carousel from './Carousel';
import Catagory from './Catagory';
import TopRated from './TopRated';
import SpecialEdition from './specialEdition/SpecialEdition';
import Testimonial from './testimonial/Testimonial';

function Home(props) {
    return (
        <div className=''>
            <Carousel />
            <Catagory />
            <TopRated />
            <SpecialEdition />
            <Testimonial />
        </div>
    );
}

export default Home;