import React from 'react';
import Slider from './Slider';

function SpecialEdition(props) {
    return (
        <div className='mt-14 md:h-[100vh]'>
             <p className='text-center text-braun text-2xl font-serif font-bold'>Special <span className='text-black'>Edittion</span></p>
             <div className=''>
                <Slider />
             </div>
        </div>
    );
}

export default SpecialEdition;