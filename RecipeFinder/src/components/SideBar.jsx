import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Heart } from 'lucide-react';
import './sidebar.css'

const SideBar = () => {
    return (
        <>
            <DesktopSidebar />
            <MobileSidebar />
        </>
    );
};

export default SideBar;

const DesktopSidebar = () => {
    return ( 
        <div className='p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block  bg-gray-200'>
            <div className="flex flex-col gap-20 sticky top-0 left-0">
                <div className='w-full '>
                    <h2 className='hidden md:block font-bold font-size-20'>RecipeFinder</h2>
                    <h2 className='block md:hidden font-bold'>RecipeFinder</h2>
                    {/* <img src="/logo.svg" alt="logo" className=' logo hidden md:block' />
                    <img src="/mobile-logo.svg" alt="logo" className='logo  block md:hidden' /> */}
                </div>
                <ul className='flex flex-col items-center md:items-start gap-8'>
                    <Link to={'/'} className='flex gap-1'>
                        <Home size={24} className='icon' />
                        <span className='icon font-bold hidden md:block'>Home</span>
                    </Link>
                    <Link to={'/favorites'} className=' flex gap-1'>
                        <Heart size={24} className='icon' />
                        <span className='icon font-bold hidden md:block'>Heart</span>
                    </Link>
                </ul>
            </div>
        </div>
   
    );
};

const MobileSidebar = ()=>{
    return(
        <div className='flex justify-center gap-10 border-t fixed w-full
        bottom-0 left-0 bg-white z-10 p-2 sm:hidden'>

        <Link to='/'>
         <Home size={24} className='cursor-pointer' />        
        </Link> 
        <Link to ='/favorites'>
         <Heart size={24} className='cursor-pointer' />
        </Link>
     
        </div>
    )
}