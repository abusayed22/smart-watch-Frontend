import React from 'react';
import Slider from './Slider';

function SpecialEdition(props) {
    return (
        <div className='mt-14'>
             <p className='text-center text-braun text-2xl font-serif font-bold my-3'>Special <span className='text-black'>Edittion</span></p>
             <div className='mt-8 '>
                <Slider />
             </div>
        </div>
    );
}

export default SpecialEdition;