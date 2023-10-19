import React from 'react'
import NETFLIX_LOGO from './../assets/images/Netflix_Logo_PMS.png';
import NETFLIX_BG from './../assets/images/NETFLIX_BG-bg.jpg';


const HeaderComponant = () => {
    return (
        <div>
            {/* <img className='w-44 px-8 py-2 bg-gradient-to-b from-black' alt='netflix-logo' src={NETFLIX_LOGO} />
            <div> */}
            <image alt='netflix-bg' src={NETFLIX_BG}/>
            {/* </div> */}
        </div>
    )
}

export default HeaderComponant;
