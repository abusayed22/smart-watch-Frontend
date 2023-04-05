import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(props) {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h2>404</h2>
            <p>not found page..</p>
            <Link className='' to={'/'}>Smart Watch Shop</Link>
        </div>
    );
}

export default NotFound;