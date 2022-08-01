import React from "react";

const EventPoster = () =>{
    return(
        <>
            <div className="flex flex-col gap-3">
                <div className="h-72 w-full rounded-md">
                    <img src="https://cdn5.vectorstock.com/i/1000x1000/53/74/special-offer-banner-poster-background-sale-vector-26165374.jpg" alt="event"  className="w-full h-full md:rounded-md"/>
                </div>
                <div className="flex flex-col gap-2 px-2">
                    <div className="px-2 flex flex-col gap-1 md:gap-2">
                        <h1 className="text-2xl font-bold ">Heading</h1>
                        <span className="text-lg">Discription Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatibus, molestiae aliquid optio laboriosam est accusantium ea, assumenda hic vitae dignissimos! Repellendus iure, error adipisci consequatur doloremque ex ullam officiis!</span>
                    </div>
                    <a href="https://www.google.com" rel="workshps" target="_blank" >
                        <div className="w-full bg-tara-0 px-3 py-2 flex justify-center items-center rounded-sm lg:rounded-md">
                            <h1 className=" text-tara-1 text-xl font-bold">Visit Now</h1>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}

export default EventPoster;