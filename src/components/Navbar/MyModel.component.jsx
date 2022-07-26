import React from "react";

const MyModel = ({visiable,onClose}) =>{
    if(!visiable) return null;
    // const handleOnClose = ()=>{
    //     onClose();
    // }
    return(
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-2 rounded">
                <p>My Model</p>
                <button onClick={onClose}>
                    <ion-icon name="close-circle-outline"></ion-icon>
                </button>
            </div>
        </div>
    );
}

export default MyModel;