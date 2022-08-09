import React,{useState} from "react";
import SignUpMyModel from "../Navbar/SignUpModel.component";
import {AiOutlineUser} from 'react-icons/ai';
import {RiLockPasswordLine} from 'react-icons/ri';
import {MdFacebook} from 'react-icons/md';
import {AiFillTwitterCircle,AiFillGoogleCircle} from 'react-icons/ai';
// import axios from "axios";

const Login = ({onClose}) =>{
    let [showMySignupModel,setshowMySignupModel] = useState(false);
    const handleOnClose = () => setshowMySignupModel(false);

    const Gmailbtn = async () => {
                try {
                    console.log("Hiii");
                    let response = await fetch('/auth/google',{
                            method:"GET",
                            headers:{
                                "Content-Type" : "application/json"
                            },
                            body : JSON.stringify()
                    });
                    console.log(response);
                    if(response.statusText === 'OK'){
                        localStorage.setItem('token',response.data.token);
                    }
                    
                } catch (e) {
                    console.log(e)
                }
            }

    return(
        <>
            <div className="flex flex-col gap-3 md:gap-6 justify-center items-center w-full md:w-96 px-5 pb-4 md:pb-5">
                <div className="w-full flex justify-center items-center">
                    <h1 className="text-2xl font-bold">Login</h1>
                </div>
                <div className="flex flex-col justify-center items-center w-full gap-3">
                    <div className="flex flex-col justify-center items-start w-full gap-1">
                        <span className="font-medium text-gray-600 px-2">Username</span>
                        <div className="flex gap-2 w-full border-2 border-gray-400 rounded-lg px-2 py-2">
                            <AiOutlineUser className="text-2xl text-gray-500"/>
                            <input type="text" placeholder="username" className="outline-none text-gray-600"/>
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
                <div className="flex justify-end w-full">
                    <button className="text-gray-500">Forgot password?</button>
                </div>
                <div className="flex justify-center items-center w-full">
                    <button className="bg-tara-0 text-tara-1 w-full py-1 md:py-2 rounded-lg text-lg font-bold">Login</button>
                </div>
                <div className="w-full flex justify-center">
                    <span className="text-gray-500 font-medium">Or Login With</span>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <button className="text-4xl md:text-5xl cursor-pointer bg-tara-0 text-tara-1 rounded-full" onClick={Gmailbtn}><AiFillGoogleCircle /></button>
                    <button className="text-4xl md:text-5xl cursor-pointer bg-tara-0 text-tara-1 rounded-full"><MdFacebook /></button>
                    <button className="text-4xl md:text-5xl cursor-pointer bg-tara-0 text-tara-1 rounded-full"><AiFillTwitterCircle /></button>
                </div>
                <div className="w-full flex justify-center">
                    <span className="text-gray-500 font-medium">Or Sign Up With</span>
                </div>
                <div className="flex justify-center w-full">
                    <button className="text-black font-bold text-lg hover:underline"  onClick={()=>{setshowMySignupModel(true) }}>Sign Up</button>
                </div>
            </div>
            <SignUpMyModel onClose={handleOnClose} visiable={showMySignupModel} />
        </>
    );
}

export default Login;