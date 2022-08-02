import React from "react";
import {AiOutlineUser} from 'react-icons/ai';
import {MdAlternateEmail} from 'react-icons/md';
import {RiLockPasswordLine} from 'react-icons/ri';
import {MdFacebook} from 'react-icons/md';
import {AiFillTwitterCircle,AiFillGoogleCircle} from 'react-icons/ai';

const SignUp = ({}) =>{
    return(
        <>
            <div className="flex flex-col gap-3 md:gap-5 justify-center items-center w-full md:w-96 px-5 pb-4 md:pb-5">
                <div className="w-full flex justify-center items-center">
                    <h1 className="text-2xl font-bold">Login</h1>
                </div>
                <div className="flex flex-col justify-center items-center w-full gap-3">
                    <div className="flex flex-col justify-center items-start w-full gap-1">
                        <span className="font-medium text-gray-600 px-2">Full Name</span>
                        <div className="flex gap-2 w-full border-2 border-gray-400 rounded-lg px-2 py-2">
                            <AiOutlineUser className="text-2xl text-gray-500"/>
                            <input type="text" placeholder="Tara Chand Kumawat" className="outline-none text-gray-600"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start w-full gap-1">
                        <span className="font-medium text-gray-600 px-2">Email</span>
                        <div className="flex gap-2 w-full border-2 border-gray-400 rounded-lg px-2 py-2">
                            <MdAlternateEmail className="text-2xl text-gray-500"/>
                            <input type="text" placeholder="tara@gmail.com" className="outline-none text-gray-600"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start w-full gap-1">
                        <span className="font-medium text-gray-600 px-2">Password</span>
                        <div className="flex gap-2 w-full border-2 border-gray-400 rounded-lg px-2 py-2">
                            <RiLockPasswordLine className="text-2xl text-gray-500"/>
                            <input type="password" placeholder="password" className="outline-none text-gray-600"/>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full">
                    <button className="bg-tara-0 text-tara-1 w-full py-1 md:py-2 rounded-lg text-base md:text-lg font-bold">Sign Up</button>
                </div>
                <div className="w-full flex justify-center">
                    <span className="text-gray-500 font-medium">Or Sign up With</span>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <span className="text-4xl md:text-5xl cursor-pointer bg-tara-0 text-tara-1 rounded-full"><AiFillGoogleCircle /></span>
                    <span className="text-4xl md:text-5xl cursor-pointer bg-tara-0 text-tara-1 rounded-full"><MdFacebook /></span>
                    <span className="text-4xl md:text-5xl cursor-pointer bg-tara-0 text-tara-1 rounded-full"><AiFillTwitterCircle /></span>
                </div>
                <div className="w-full flex justify-center">
                    <span className="text-gray-500 font-medium">Or Login With</span>
                </div>
                <div className="flex justify-center w-full">
                    <button className="text-black font-bold text-lg hover:underline">Login</button>
                </div>

            </div>
        </>
    );
}

export default SignUp;