import React from 'react'
import NETFLIX_LOGO from './../assets/images/Netflix_Logo_PMS.png';


const HeaderComponant = () => {
    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
            <img className='w-44 px-8 py-2 bg-gradient-to-b from-black' alt='netflix-logo' src={NETFLIX_LOGO} />
            <div>
            </div>
        </div>
    )
}

export default HeaderComponant;
