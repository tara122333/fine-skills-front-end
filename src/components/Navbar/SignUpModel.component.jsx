import React from "react";
import SignUp from "../User/SignUp";

const SignUpMyModel = ({visiable,onClose}) =>{
    if(!visiable) return null;
    // const handleOnClose = ()=>{
    //     onClose();
    // }
    return(
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-2 rounded flex flex-col">
                <div className="flex justify-end w-full">
                    <button onClick={onClose} className="flex justify-center items-center text-2xl lg:text-4xl">
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                </div>
                <div className="w-full">
                    <SignUp />
                </div>
            </div>
        </div>
    );
}

export default SignUpMyModel;