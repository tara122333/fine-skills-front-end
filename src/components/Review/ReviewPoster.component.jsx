import React from "react";

const ReviewPost = () =>{
    return(
        <>
            <div className="flex flex-col gap-3 justify-center items-center border-2 border-gray-300 py-5 px-2 rounded-lg bg-purple-100">
                <div className="w-40 h-40">
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFLhXZMotSC3A/profile-displayphoto-shrink_400_400/0/1656750765178?e=1664409600&v=beta&t=oZcWli5IU0jyR75UT4Of9QssdRd3klsPYLLGhXtmJlg" alt="review" className="w-full h-full rounded-full"/>
                </div>
                <div className="flex flex-col gap-3 px-3">
                    <h1 className="font-bold text-2xl text-center font-mono">Tara Chand Kumawat</h1>
                    <p className="text-base text-start font-light text-gray-800">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, aut ipsa dolore ad vitae quas hic, repellendus ab temporibus aspernatur, quasi similique aliquam alias delectus Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ab asperiores, eligendi adipisci vitae, ipsum porro nobis quae sint ex in nesciunt rerum, deserunt libero nemo. Voluptas rem quibusdam consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi consequuntur dicta illo, rem voluptatem magni quod laborum quia provident voluptatibus voluptas, magnam repellat vero rerum at odio inventore quam. Beatae!</p>
                </div>
            </div>
        </>
    );
}

export default ReviewPost;