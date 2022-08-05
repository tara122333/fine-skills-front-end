import React from "react";
import {BsWhatsapp} from 'react-icons/bs';
import {FaDiscord} from 'react-icons/fa';
import img from '../Image/home.png';
import Explore from '../Image/explore.png';
import {Link} from 'react-router-dom';
import Learn from '../Image/learning.png';
import Banner from '../Image/banner.png';
import intract from '../Image/intract.png';
import community from '../Image/community.png';
import best from '../Image/best.png'
import ExpertComponent from "../components/Expert/expert.component";
import ReviewPost from "../components/Review/ReviewPoster.component";



const HomePage = ()=>{
    return(
        <>
            <div className="flex gap-7 flex-col">
                <div className="flex flex-col md:flex-row-reverse md:justify-between md:container md:mx-auto md:px-10 md:mt-10">
                    <div className="w-1/2 h-full">
                        <div className="px-20">
                            <img src={img} alt="hometheme" className="w-full h-full rounded-2xl" />
                        </div>                   
                    </div>
                    <div className="flex flex-col gap-4 w-1/2">
                        {/* bottom */}
                        <div className="flex flex-col">
                            <h1 className="text-3xl font-bold text-center my-2 md:text-4xl lg:text-6xl md:my-5 mb-3 md:mb-7">
                                {/* <h1 className="mb-4">India's Biggest</h1>
                                <span className="text-tara-1 my-5"> Youth </span> 
                                <span>Platform</span> */}
                                We are the Community of Learns's and Exports
                            </h1>
                            <span className="text-xl font-bold text-start ml-5 md:text-2xl">Learn from experts and network through Workshops,</span>
                            <span className="text-xl font-bold text-start ml-5 md:text-2xl">Join clubs and learn real life skills,</span>
                            <span className="text-xl font-bold text-start ml-5 md:text-2xl">Hang out on our discord server to make new friends and have fun :)</span>
                        </div>
                        <div className="w-full flex flex-col gap-3 px-2 md:px-0 md:my-5 md:flex-row">
                            <a href=" https://chat.whatsapp.com/GrD14ONRd8RKRbLKCCF4V2" target="_blank" className="w-full bg-tara-0 rounded-full">
                                <div className="flex gap-4 px-3 py-2 justify-center items-center">
                                    <BsWhatsapp  className="text-tara-1 text-xl"/>
                                    <span className="text-tara-1 text-lg">Join WhatsApp</span>
                                </div>
                            </a>
                            <a href="https://discord.gg/kJESc7gA" target="_blank" className="w-full bg-tara-0 rounded-full cursor-pointer">
                                <div className="flex gap-4 px-3 py-2 justify-center items-center">
                                    <FaDiscord  className="text-tara-1 text-xl"/>
                                    <span className="text-tara-1 text-lg">Join Discord</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>





                <div className="flex gap-4 flex-col justify-center items-center md:my-7 md:container md:mx-auto md:px-10">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-3xl ml-5 text-start font-bold md:text-4xl">Education that gets you industry-ready</h3>
                        <p className="text-xl ml-5 text-start">College & bookish knowledge doesn’t prepare you for real-world and modern careers. Growth School, co-creates programs with top industry professionals who can help you get years ahead in your career</p>
                    </div>
                    <div className="flex flex-col mt-4 w-full gap-4">
                        <h3 className="font-bold text-3xl text-tara-0 text-center">UPCOMMING WORKSHOP</h3>
                        <div className="bg-tara-0 w-full flex justify-center items-center flex-col md:flex-row gap-4 py-4">
                            {/* <WorkShopsCarouselPoster className="w-full h-full"/> */}
                            <div className="h-72 w-full">
                            <img src={Banner} alt="banner"  className="w-full h-full"/>
                            </div>
                            <div className="h-72 w-full">
                                <img src={Banner} alt="banner"  className="w-full h-full"/>
                            </div>
                            <div className="h-72 w-full">
                            <img src={Banner} alt="banner"  className="w-full h-full"/>
                            </div>
                        </div>
                    </div>
                    <div className="py-3 cursor-pointer">
                        <Link to="/event">
                            <button className="px-10 py-2 bg-tara-0 text-tara-1 rounded-full font-bold text-lg">Upcomming Workshops</button>
                        </Link>
                    </div>
                </div>

            


                <div className="flex flex-col my-5 md:flex-row justify-center items-center md:container md:mx-auto md:px-10">
                    <div className="w-full">
                        {/* image */}
                        <img src={Explore} alt="exploretheme" className="h-full w-full"/>
                    </div>
                    <div className="flex flex-col my-4 gap-5">
                        {/* some logo and desc */}
                        <div className="flex gap-3 ml-5 justify-center items-center">
                            <div className="flex justify-center items-center w-40 h-24">
                                {/* <img src="" alt="" className="w-full h-full"/> */}
                                <img src={intract} alt="intract" className="w-full h-full rounded-md bg-white" />
                            </div>
                            <div className="flex flex-col gap-1 w-3/4 my-3">
                                <h3 className="text-2xl text-start md:font-bold">Learn From Top 1 %</h3>
                                <p className="text-start text-lg">Attend Workshops & get a chane from the expert </p>
                            </div>
                        </div>
                        <div className="flex gap-3 ml-5 justify-center items-center">
                            <div className="flex justify-center items-center w-40 h-24">
                                <img src={community} alt="community" className="w-full h-full  rounded-md bg-white"/>
                            </div>
                            <div className="flex flex-col gap-1 w-3/4 my-3">
                                <h3 className="text-2xl text-start md:font-bold">Build Your Portfolio</h3>
                                <p className="text-start text-lg">Enjoy the best of peer-led learning with tons of events while building lifelong relationships</p>
                            </div>
                        </div>
                        <div className="flex gap-3 ml-5 justify-center items-center">
                            <div className="flex justify-center items-center w-40 h-24">
                                <img src={Learn} alt="Learn" className="w-full h-full rounded-md bg-white"/>
                            </div>
                            <div className="flex flex-col gap-1 w-3/4 my-3">
                                <h3 className="text-2xl text-start md:font-bold">Learn by Doing</h3>
                                <p className="text-start text-lg">Actionable programs to offset the Pareto Principle; you will execute projects using what you learned</p>
                            </div>
                        </div>
                        <div className="flex gap-3 ml-5 justify-center items-center">
                            <div className="flex justify-center items-center w-40 h-24">
                                <img src={best} alt="Learn" className="w-full h-full rounded-md bg-white"/>
                            </div>
                            <div className="flex flex-col gap-1 w-3/4 my-3">
                                <h3 className="text-2xl text-start md:font-bold">Join Workshops</h3>
                                <p className="text-start text-lg">Actionable programs to offset the Pareto Principle; you will execute projects using what you learned</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col mt-4 w-full gap-4">
                            <h3 className="font-bold text-3xl text-tara-0 text-center">Expert From</h3>
                            <div className="bg-tara-0">
                                <ExpertComponent />
                            </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center md:container md:mx-auto md:px-10">
                    <h3 className="text-3xl text-center font-bold text-tara-0">Learners's Review</h3>
                    <div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-2 lg:grid-cols-3 my-2 md:my-5 md:gap-6">
                        <ReviewPost />
                        <ReviewPost />
                        <ReviewPost />
                        <ReviewPost />
                        <ReviewPost />
                        <ReviewPost />
                    </div>
                    <div className="py-3 cursor-pointer" >
                        <button className="px-10 py-2 bg-tara-0 text-tara-1 rounded-full font-bold text-lg cursor-not-allowed">Explore More</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;