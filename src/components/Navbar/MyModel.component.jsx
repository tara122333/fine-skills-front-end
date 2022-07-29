import React from "react";
import Login from "../User/Login";

const MyModel = ({visiable,onClose}) =>{
    if(!visiable) return null;
    // const handleOnClose = ()=>{
    //     onClose();
    // }
    return(
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-2 rounded flex justify-center items-center gap-5 py-20 md:px-10">
                <Login />
                <button onClick={onClose} className="flex justify-center items-center text-4xl">
                    <ion-icon name="close-circle-outline"></ion-icon>
                </button>
            </div>
        </div>
    );
}

export default MyModel;