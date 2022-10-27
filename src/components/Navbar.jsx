import React from 'react';
import { FaBars} from 'react-icons/fa';

// Export Links

const links = [
    {
        id: 1,
        link: 'explore'
    },
    {
        id: 2,
        link: 'about'
    },
    {
        id: 3,
        link: 'portfolio'
    },
    {
        id: 4,
        link: 'experience'
    },
    {
        id: 5,
        link: 'contact'
    },
]



const Navbar = () => {
    return (
        <nav className='flex justify-between
        items-center w-full h-20 px-4
        text-white bg-black fixed'>

            <div>
                <h1 className='text-4xl
                font-signature ml-2'>Michael</h1>
            </div>

            <ul className='hidden md:flex'>

                {links.map(({ id, link }) => (

                    <li
                        key={id} className='px-4
                    cursor-pointer capitalize
                    text-gray-300 font-medium
                    hover:scale-110
                    duration-200'>{link}</li>

                    

                ))}

            </ul>
            <div className='cursor-pointer
            pr-4 z-10 text-gray-300'>
                <FaBars size={30} />
            </div>
        </nav>
    )
}

export default Navbar