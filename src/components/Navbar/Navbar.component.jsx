import React, { useState } from 'react';
// import {GiCancel} from 'react-icons/gi'
// import Button from './Button.component';
import MyModel from './MyModel.component';
import {Link} from 'react-router-dom'
import NavbarMenu from './NavbarModel';


const Navbar = ()=>{
    let Links = [
        {
            name:"Course", link:"/course"
        },
        {
            name:"Events", link:"/event"
        },
    ];
    let [open,setOpen] = useState(false);
    let [showMyModel,setShowMyModel] = useState(false);
    const handleOnClose = () => setShowMyModel(false);
    return(
        <>
            <div className="w-full fixed top-0 left-0 bg-white z-30 shadow-lg">
                <div className='md:flex items-center justify-between py-2 px-7 md:py-4 md:px-16 w-full'>
                    <div>
                        <Link to="/">
                            <div className='font-bold text-2xl md:text-3xl cursor-pointer flex items-center'>
                                <span className='text-tara-black'>Fine</span>
                                <span className='text-tara-yellow'>Skills</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <ul className="hidden md:flex items-center w-full">
                            {
                                Links.map((item)=>(
                                    <li key={item.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                        <a href={item.link} className="text-tara-black hover:text-tara-orange duration-500 font-semibold">{item.name}</a>
                                    </li>
                                ))
                            }
                            <button className="hidden md:block text-tara-black rounded md:ml-8 hover:bg-duration" >
                                <div className='flex justify-center items-center gap-2'>
                                    <span className='text-xl font-semibold'>Login</span>
                                </div>
                            </button>
                        </ul>
                        <div className='flex md:hidden overflow-hidden bg-white'>
                            <NavbarMenu />
                        </div>
                    </div>
                </div>
                {/* <MyModel onClose={handleOnClose} visiable={showMyModel}/> */}

            </div>
        </>
    );
}

export default Navbar;
