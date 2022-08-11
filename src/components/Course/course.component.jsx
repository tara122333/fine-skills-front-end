import React from "react";

const CourseComponent = () =>{
    return(
        <>
            <div>
                <div className="w-full flex flex-col gap-6">
                    <div className="w-full flex flex-col gap-5 justify-center items-center">
                        <h1 className="font-bold text-tara-0 text-xl text-center md:text-3xl">MERN Stack Web Development Course</h1>
                        <div className="flex w-full justify-center items-center flex-col gap-8 md:flex-row">
                            <div className="w-full h-54">
                                <img src="https://skillvertex.in/wp-content/uploads/2022/07/Full-Stack-Web-Dev-1-768x432.png" alt="course" className="w-full h-full"/>
                            </div>
                            <div className="flex flex-col gap-3 w-full justify-center items-center">
                                <h3 className="text-lg font-medium md:text-xl">Key highlights</h3>
                                <ul className="list-disc text-lg text-gray-600">
                                    <li>95+ hours of video lectures</li>
                                    <li>3 Months Course</li>
                                    <li>Lifetime LMS access for study contents</li>
                                    <li>Study on mobile or laptop</li>
                                    <li>recorded sessions</li>
                                    <li>Dedicated mentorship assistance</li>
                                    <li>Industrial projects (5 minor+ 2 major)</li>
                                    <li>Certificate of completion</li>
                                    <li>Internship opportunities</li>
                                </ul>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeDsAjSpkAPc59p4mxRvzAIDVmxxp9_B5J72tTiKX29Qtl8ag/viewform?usp=sf_link" className="my-3">
                                    <div className="px-24 py-2 rounded-2xl bg-tara-0 text-tara-1 font-medium text-lg hover:text-tara-0 hover:bg-tara-1">
                                        Buy Now
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="w-full flex justify-center items-center flex-col gap-6 px-5 md:my-10">
                    <div>
                        <h1 className="text-xl font-medium text-gray-600 md:text-3xl">Things you will learn</h1>
                    </div>
                    <div className="flex justify-center items-center flex-col gap-3 px-4 w-full">
                        <div className="flex justify-center items-center gap-3 flex-col md:flex-row md:gap-10">
                            <ul className="list-disc text-lg text-gray-600">
                                <li>Create websites by exploring the base language used to power all websites: HTML5</li>
                                <li>Learn to use CSS3 properties to control the design of the website</li>
                                <li>Apply responsive design to enable page to be viewed by various devices</li>
                                <li>Developing a database application with NodeJs and MongoDB</li>
                                <li>Dynamic Website With ReactJs</li>
                                <li>Tailwind Css</li>
                                <li>Rest API</li>
                            </ul>
                            <ul className="list-disc text-lg text-gray-600">
                                <li>Add interactivity to web pages with Javascript</li>
                                <li>Intern with us on live projects</li>
                                <li>Create a strong skill for your personal purpose/career</li>
                                <li>Develop an insight of web development queer</li>
                                <li>Know which algorithm/ model to implement at different problem statements</li>
                                <li>Bootstrap</li>
                                <li>Authentication</li>
                                <li>AWS Server deploy</li>
                                <li>TMDB API</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-full my-5 md:justify-start md:items-start md:px-10">
                <div className="flex justify-center items-center flex-col border-2 border-gray-400 w-80 md:w-96 gap-5 py-10">
                    <h3 className="text-2xl text-tara-0 font-bold">Plan</h3>
                    <div className="flex flex-col">
                        <h1 className="text-xl font-medium">MERN Stack</h1>
                        <div className="flex flex-col px-5">
                            <div className="px5">
                                <span className="text-2xl font-semibold">2999 </span>
                                <s className="text-gray-500 text-lg">4999</s>
                            </div>
                            <br/>
                            <div className="px-5">
                                <ul className="list-disc text-lg text-gray-600">
                                    <li>Recorded video lectures</li>
                                    <li>Industrial projects</li>
                                    <li>Certifications</li>
                                    <li>Direct mentoring</li>
                                </ul>
                            </div>
                            <br />
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeDsAjSpkAPc59p4mxRvzAIDVmxxp9_B5J72tTiKX29Qtl8ag/viewform?usp=sf_link" className="my-3">
                                    <div className="px-24 py-2 rounded-2xl bg-tara-0 text-tara-1 font-medium text-lg hover:text-tara-0 hover:bg-tara-1">
                                        Buy Now
                                    </div>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default CourseComponent;