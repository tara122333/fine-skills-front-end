import React from "react";

const ReviewPost = (props) =>{
    return(
        <>
            {/* <div className"flex flex-col gap-3 justify-start items-center border-2 border-gray-300 py-5 px-2 rounded-lg bg-tara-blueCard">
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
            </div> */}
            <div className="main-tara w-full h-full rounded-3xl cursor-pointer">
                <ul className="review-cards m-4 h-80 lg:h-full lg:py-4 lg:pb-8 rounded-2xl lg:px-8">
                    <li>
                        <div className="review-card w-full h-full">
                        <img src={props.img} className="review-card__image w-full h-full" alt="" />
                        <div className="review-card__overlay left-0 right-0 bottom-0">
                            <div className="review-card__header gap-2 p-3 py-4">
                            <svg className="review-card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                            <img className="review-card__thumb w-10 h-10" src={props.img} alt="" />
                            <div className="review-card__header-text">
                                <h3 className="review-card__title text-sm">
                                    {
                                        props.name
                                    }    
                                </h3>            
                                <span className="review-card__status text-sm font-medium">{props.time} hour ago</span>
                            </div>
                            </div>
                            <p className="review-card__description text-sm font-semibold">
                                {
                                    props.title
                                }
                            </p>
                        </div>
                        </div>      
                    </li>
                    {/* <li>
                        <a href=" #" className="review-card">
                        <img src="https://i.imgur.com/2DhmtJ4.jpg" className="review-card__image" alt="" />
                        <div className="review-card__overlay">        
                            <div className="review-card__header">
                            <svg className="review-card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                            <img className="review-card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
                            <div className="review-card__header-text">
                                <h3 className="review-card__title">kim Cattrall</h3>
                                <span className="review-card__status">3 hours ago</span>
                            </div>
                            </div>
                            <p className="review-card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                        </div>
                        </a>
                    </li> */}
                    </ul>
                </div>
        </>
    );
}

export default ReviewPost;