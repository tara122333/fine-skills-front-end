import React from "react";
import {BsWhatsapp,BsChevronDown} from 'react-icons/bs';
import {FaDiscord} from 'react-icons/fa';
import {RiSearchLine} from 'react-icons/ri'
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
// import viru from '../Image/viru.jpeg';
import Fire from '../Image/search.png';


const HomePage = ()=>{
    return(
        <>
            <div className="flex gap-7 flex-col">

            <div className="bg-purple-100 w-full h-full flex justify-center items-center pt-10 lg:px-10">

                <div className="flex flex-col gap-14 md:gap-5 lg:gap-6 w-full">
                        <div className="flex flex-col lg:flex-row justify-between items-center h-full">
                            <div>
                                <div className="flex flex-col gap-2 px-5 lg:gap-4">
                                    <span className="px-3 py-2 font-semibold text-lg bg-tara-black rounded-lg text-white w-60 text-center">Search Over 1M + Content</span>
                                    <span className="text-2xl">Search & Get Skilled with Our</span>
                                    <p className="font-semibold text-4xl">Top Notch Speakers</p>
                                    <p className="font-light font-base text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea fugit eius nostrum quam molestiae provident eligendi obcaecati.</p>
                                    <div className="lg:hidden">
                                        <input type="search" placeholder="I am Looking For" className="outline-none px-5 py-5 w-full focus:outline-none"/>
                                        <button className="px-5 py-5 w-full bg-gradient-to-r from-tara-yellow to-tara-orange hover:bg-gradient-to-r hover:shadow-md hover:from-tara-black hover:to-tara-black">
                                            <span className="text-white text-xl flex gap-2 justify-center items-center">
                                                <RiSearchLine />
                                                Search
                                            </span>
                                        </button>
                                    </div>
                                    <div className="hidden lg:flex py-2 px-3 bg-white gap-3 rounded shadow-2xl">
                                        <div className="flex justify-center items-center w-4/5">
                                            <input type="search" placeholder="I am Looking For" className="outline-none px-5 py-5 w-full focus:outline-none"/>
                                            <span className="text-xl text-gray-500">
                                                <BsChevronDown />
                                            </span>
                                        </div>
                                        <button className="px-5 rounded-sm w-1/5 bg-gradient-to-r from-tara-yellow to-tara-orange hover:bg-gradient-to-r hover:shadow-md hover:from-tara-black hover:to-tara-black">
                                            <span className="text-white text-xl flex gap-2 justify-center items-center">
                                                <RiSearchLine />
                                                Search
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:flex h-full relative w-1/2">
                                <img src="https://amentotech.com/projects/workreap/wp-content/uploads/2021/03/user.png" alt="" className="w-full" />
                            </div>
                        </div>
                </div>
                </div>


                {/* <div className="flex flex-col md:flex-row-reverse md:justify-between overflow-hidden lg:items-center lg:container lg:mx-auto lg:px-10 lg:h-full lg:mb-20">
                    <div className="w-full md:w-1/2 h-full">
                        <div className="px-3 py-2 md:px-20">
                            <img src="https://amentotech.com/projects/workreap/wp-content/uploads/2021/03/img-01-1.jpg" alt="hometheme" className="w-full h-full"/>
                        </div>                   
                    </div>
                    <div className="flex flex-col gap-4 md:gap-8 w-full h-full md:w-1/2 justify-center items-center">
                        <div className="flex flex-col my-5">
                            <div className="flex flex-col justify-center items-center w-full md:my-10 gap-3 md:gap-8 my-4">
                                    <div className="flex gap-2 md:gap-5">
                                        <span className="text-3xl font-semibold md:text-4xl lg:text-6xl">We are the</span>
                                        <span className="text-3xl font-bold md:text-4xl lg:text-6xl text-tara-orange">Community</span>
                                        <span className="text-3xl font-semibold md:text-4xl lg:text-6xl">of</span>
                                    </div>
                                    <div className="flex gap-3 md:gap-6">
                                        <span className="text-3xl font-bold md:text-4xl lg:text-6xl text-tara-orange">Learners</span>
                                        <span className="text-3xl font-semibold md:text-4xl lg:text-6xl">and</span>
                                        <span className="text-3xl font-bold md:text-4xl lg:text-6xl text-tara-orange">Experts</span>
                                    </div>
                                </div>
                            <span className="text-base text-start ml-5 md:text-xl">Learn from experts and network through Workshops,</span>
                            <span className="text-base text-start ml-5 md:text-xl">Join clubs and learn real life skills,</span>
                            <span className="text-base text-start ml-5 md:text-xl">Hang out on our discord server to make new friends and have fun :)</span>
                        </div>
                        <div className="w-full flex flex-col gap-3 px-2 md:px-0 md:my-5 md:flex-row">
                            <a href=" https://chat.whatsapp.com/GrD14ONRd8RKRbLKCCF4V2" target="_blank" className="w-full bg-tara-0 rounded-full">
                                <div className="flex  justify-center items-center gap-3 md:gap-6 bg-gradient-to-r from-tara-yellow to-tara-orange rounded-full px-8 py-2 text-white hover:shadow-md hover:bg-gradient-to-r hover:from-tara-black hover:to-tara-black">
                                    <BsWhatsapp  className="text-tara-1 text-xl"/>
                                    <span className="text-tara-1 text-lg">Join WhatsApp</span>
                                </div>
                            </a>
                            <a href=" https://discord.gg/kJESc7gA" target="_blank" className="w-full bg-tara-0 rounded-full cursor-pointer">
                                <div className="bg-gradient-to-r from-tara-yellow to-tara-orange rounded-full px-8 py-2 text-white hover:shadow-md flex justify-center items-center gap-3 md:gap-6 hover:bg-gradient-to-r hover:from-tara-black hover:to-tara-black">
                                    <FaDiscord  className="text-tara-1 text-xl"/>
                                    <span className="text-tara-1 text-lg">Join Discord</span>
                                </div>
                            </a>
                        </div>
                        <div className="relative w-96 h-72 rounded-full bg-tara-orange blur-3xl -z-10 left-2/4 -top-5" style={{ background: "rgb(138 210 255)" }} />
                        <div className="relative w-96 h-72 rounded-full bg-tara-purple blur-3xl -z-10 top-96 -left-96" style={{ background: "rgb(238 210 255)" }}></div>
                    </div>
                </div> */}



                {/* <div className="bg-purple-100 w-full h-full flex justify-center items-center py-10 lg:pt-20 lg:px-10">

                    <div className="flex flex-col gap-14 md:gap-5 lg:gap-6 my-5 w-full">
                            <h3 className="text-4xl text-center font-bold md:text-4xl lg:text-5xl text-tara-orange">Explore Workshops</h3>
                            <div className="flex flex-col lg:flex-row-reverse justify-between items-center h-full">
                                <div>
                                    <div className="flex flex-col gap-2 px-5 lg:gap-4">
                                        <span className="px-3 py-2 font-semibold text-lg bg-tara-black rounded-lg text-white w-60 text-center">Search Over 1M + Content</span>
                                        <span className="text-2xl">Search & Get Skilled with Our</span>
                                        <p className="font-semibold text-4xl">Top Notch Speakers</p>
                                        <p className="font-light font-base text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea fugit eius nostrum quam molestiae provident eligendi obcaecati.</p>
                                        <div className="lg:hidden">
                                            <input type="search" placeholder="I am Looking For" className="outline-none px-5 py-5 w-full focus:outline-none"/>
                                            <button className="px-5 py-5 w-full bg-gradient-to-r from-tara-yellow to-tara-orange hover:bg-gradient-to-r hover:shadow-md hover:from-tara-black hover:to-tara-black">
                                                <span className="text-white text-xl flex gap-2 justify-center items-center">
                                                    <RiSearchLine />
                                                    Search
                                                </span>
                                            </button>
                                        </div>
                                        <div className="hidden lg:flex py-2 px-3 bg-white gap-3 rounded shadow-2xl">
                                            <div className="flex justify-center items-center w-4/5">
                                                <input type="search" placeholder="I am Looking For" className="outline-none px-5 py-5 w-full focus:outline-none"/>
                                                <span className="text-xl text-gray-500">
                                                    <BsChevronDown />
                                                </span>
                                            </div>
                                            <button className="px-5 rounded-sm w-1/5 bg-gradient-to-r from-tara-yellow to-tara-orange hover:bg-gradient-to-r hover:shadow-md hover:from-tara-black hover:to-tara-black">
                                                <span className="text-white text-xl flex gap-2 justify-center items-center">
                                                    <RiSearchLine />
                                                    Search
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:flex h-full relative w-1/2">
                                    <img src={Fire} alt="" className="w-full" />
                                </div>
                            </div>
                    </div>
                </div> */}

                <div className="flex gap-4 flex-col justify-center items-center md:my-7 md:container md:mx-auto md:px-10">
                    
                    <div className="flex flex-col mt-4 w-full gap-4">
                        <h3 className="font-bold text-3xl text-tara-0 text-center">UPCOMMING WORKSHOP</h3>
                        <div className="bg-tara-0 w-full flex justify-center items-center flex-col md:flex-row gap-4 py-4">
                            {/* <WorkShopsCarouselPoster className="w-full h-full"/> */}
                            <div className="lg:h-96 w-full">
                            <img src={Banner} alt="banner"  className="w-full h-full rounded-lg"/>
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
                        <ReviewPost img="https://media-exp1.licdn.com/dms/image/C4D03AQFLhXZMotSC3A/profile-displayphoto-shrink_800_800/0/1656750765178?e=1665014400&v=beta&t=wu_Pi1j4emrJjUHpBenn9r7vTJq4eygZPFnqa9JoPyg" name="Tara Chand Kumawat" title="Seeking to get good learning guidance and career growth opportunities and improve my ability to thrive in a challenging environment where efficiency and accuracy matters."/>
                        <ReviewPost img="https://i.ibb.co/5MMYyx5/viru.jpg" name="Virendra Tiwari" title="Hey folks Virendra this side , Seriously telling I love to talk about Startup, Revolution & Innovation and have always been a part of startup talks as it gave me opportunity to interact with lots of (Small , medium & Unicorns) Start-up Founders,VC's including Mr. Anurag Jain from Cardekho.com , Mr. Ajay Data , Mr. Prateek Mathur and many more .. "/>

                        <ReviewPost img="https://media-exp1.licdn.com/dms/image/C4D03AQEGP1vPuIyDsA/profile-displayphoto-shrink_800_800/0/1659182274287?e=1665014400&v=beta&t=LEzMQR4VmzuJNQklb7XyeSG29S4FEJbQP3j9spNR5E0" name="Harshit Bhardwaj" 
                        title="As founder at Hikup, I am working on a mission to make content creation a sustainable profession for everyone and for a vision to create the largest trustworthy network of creators on the internet."
                        />
                        
                    </div>
                    {/* <div className="py-3 cursor-pointer" >
                        <button className="px-10 py-2 bg-tara-0 text-tara-1 rounded-full font-bold text-lg cursor-not-allowed">Explore More</button>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default HomePage;