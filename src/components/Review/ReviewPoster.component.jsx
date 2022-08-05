import React from "react";

const ReviewPost = (props) =>{
    return(
        <>
            <div className="flex flex-col gap-3 justify-center items-center border-2 border-gray-300 py-5 px-2 rounded-lg bg-purple-100">
                <div className="w-40 h-40 md:w-48 md:h-48">
                    <img src={props.img} className="w-full h-full rounded-full" />
                </div>
                <div className="flex flex-col gap-3 px-3">
                    <h1 className="font-bold text-2xl text-center font-mono">{props.name}</h1>
                    <p className="text-base text-start font-light text-gray-800">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, aut ipsa dolore ad vitae quas hic, repellendus ab temporibus aspernatur, quasi similique aliquam alias delectus Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ab asperiores, eligendi adipisci vitae, ipsum porro nobis quae sint ex in nesciunt rerum, deserunt libero nemo. Voluptas rem</p>
                </div>
            </div>
        </>
    );
}

export default ReviewPost;