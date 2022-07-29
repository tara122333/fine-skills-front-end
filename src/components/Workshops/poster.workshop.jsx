import React from "react";

const WorkShopPoster = (props) =>{
    return(
        <>
            <div className="flex gap-5 h-72 w-56">
                <img src={props.img} alt="banner" className="w-full h-full"/>
            </div>
        </>
    );
}

export default WorkShopPoster;