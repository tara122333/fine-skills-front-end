import React, { useState } from 'react'
import {BiLogIn} from 'react-icons/bi'
// import {GiCancel} from 'react-icons/gi'
// import Button from './Button.component';
import MyModel from './MyModel.component';

const Navbar = ()=>{
    let Links = [
        {
            name:"Course", link:"/course"
        },
        {
            name:"Get Hire", link:"/hire"
        },
        {
            name:"About", link:"/about"
        },
        // {
        //     name:"Contact", link:"/contact"
        // },
    ];
    let [open,setOpen] = useState(false);
    let [showMyModel,setShowMyModel] = useState(false);
    const handleOnClose = () => setShowMyModel(false);
    return(
        <>
            <div className="shadow-md w-full fixed top-0 left-0">
                <div className='md:flex items-center justify-between bg-tara-0 py-3 md:px-10 px-7'>
                    <div className='font-bold text-2xl cursor-pointer flex items-center'>
                        <span className='text-white'>Fine</span>
                        <span className='text-tara-1'>Skills</span>
                    </div>
                    <div className='text-3xl absolute right-8 top-3 cursor-pointer text-tara-1 md:hidden' onClick={()=> setOpen(!open)}>
                        <ion-icon name={open ? 'close-circle-outline' : 'grid-outline'}></ion-icon>
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-tara-0 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-19' : 'top-[-490px]'} md:opacity-100`}>
                        {
                            Links.map((item)=>(
                                <li key={item.name} className='md:ml-8 text-xl font-bold  md:my-0 my-7'>
                                    <a href={item.link} className="text-white hover:text-tara-1 duration-500">{item.name}</a>
                                </li>
                            ))
                        }
                        {/* <button className='flex justify-center items-center'>
                            <span>
                                <BiLogIn />
                            </span>
                            <span>
                                Login
                            </span>
                        </button> */}
                        {/* <div onClick={()=>setShowMyModel(true)} className="cursor-pointer w-32">
                            <Button className="bg-red-500 w-full">  
                                Login
                            </Button>
                        </div> */}
                        <button onClick={()=>setShowMyModel(true)} className="bg-tara-1 px-4 py-1 text-tara-0 rounded md:ml-8 hover:bg-duration" >
                            <div className='flex justify-center items-center gap-2'>
                                <BiLogIn className='text-2xl'/>
                                <span className='text-lg font-bold'>Login</span>
                            </div>
                        </button>
                    </ul>
                </div>
                <MyModel onClose={handleOnClose} visiable={showMyModel}/>
            </div>
        </>
    );
}

export default Navbar;
