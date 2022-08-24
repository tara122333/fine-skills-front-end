import React from "react";

const ReviewPost = (props) =>{
    return(
        <>
            <div className="flex flex-col gap-3 justify-start items-center border-2 border-gray-300 py-5 px-2 rounded-lg bg-tara-blueCard">
                <div className="w-40 h-40 md:w-48 md:h-48">
                    <img src={props.img} className="w-full h-full rounded-full" alt="review"/>
                </div>
                <div className="flex flex-col gap-3 px-3">
                    <h1 className="font-bold text-2xl text-center font-mono text-tara-black">{props.name}</h1>
                    <p className="text-base text-start font-light text-gray-800">
                        {
                            props.title
                        }
                    </p>
                </div>
            </div>
        </>
    );
}

export default ReviewPost;