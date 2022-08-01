import React from "react";

const Button = (props) =>{
    return(
        <button className="bg-tara-1 text-tara-0 rounded md:ml-8 hover:bg-duration w-full">
            {props.children}
        </button>
    );
}

export default Button;