import React from "react";
import Navbar from "../components/Navbar/Navbar.component";
import ContactImg from '../Image/contact.svg';
import {AiOutlineUser} from 'react-icons/ai';
import {MdOutlineAlternateEmail} from 'react-icons/md';
import {BiMessageDetail} from 'react-icons/bi';

const ContactPage = () =>{
    return(
        <>
            <Navbar />
            <div className="flex flex-col gap-8 justify-center items-center mt-24 w-full md:flex-row">
                <div className="flex justify-center items-center">
                    <div className="w-60 h-60 md:w-full flex md:h-96 justify-center items-center">
                        <img src={ContactImg} alt="contact" className="w-full h-full" />
                    </div>
                </div>
                <div className="w-full p-4 md:w-1/2">
                    <h1 className="text-center font-bold text-tara-0 text-2xl my-3 md:text-4xl">Contact</h1>
                    <div className="flex flex-col justify-center items-center w-full gap-3">
                        <div className="flex flex-col justify-center items-start w-full gap-1">
                            <div className="flex gap-2 w-full border-2 border-gray-400 rounded-lg px-2 py-2">
                                <AiOutlineUser className="text-2xl text-gray-500"/>
                                <input type="text" placeholder="full name" className="outline-none text-gray-600"/>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-start w-full gap-1">
                            <div className="flex gap-2 w-full border-2 border-gray-400 rounded-lg px-2 py-2">
                                <MdOutlineAlternateEmail className="text-2xl text-gray-500"/>
                                <input type="email" placeholder="Email" className="outline-none text-gray-600"/>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-start w-full gap-1">
                            <div className="flex gap-2 w-full border-2 border-gray-400 rounded-lg px-2 py-2">
                                <BiMessageDetail className="text-2xl text-gray-500"/>
                                <textarea name="usermsg" id="usermsg" cols="30" rows="10" placeholder="Hii Write your message here" className="w-full h-28 md:h-36 outline-none text-gray-500"></textarea>
                            </div>
                        </div>
                        <div className="flex justify-center items-center w-full">
                            <button className="bg-tara-0 text-tara-1 w-full py-1 md:py-2 rounded-lg text-lg font-bold">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactPage;