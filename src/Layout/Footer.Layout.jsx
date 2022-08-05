import React from "react";
import {BsInstagram,BsWhatsapp,BsLinkedin} from 'react-icons/bs'

const Footer = () =>{
    return(
        <>
            <div className="bg-tara-0 flex flex-col text-white px-3 py-5">
                <div className="flex flex-col gap-3 md:flex-row md:justify-center w-full md:gap-6">
                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex flex-row">
                            <span className="text-white text-xl font-bold md:text-2xl">Fine</span>
                            <span className="text-tara-1 text-xl font-bold md:text-2xl">Skills</span>
                        </div>
                        <p className="text-start md:text-lg">FineSkills is India’s largest and smartest Learners community that enables students to learn new skills, grow their network, and get amazing opportunities in careers.</p>
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <h3 className="text-xl font-bold md:text-2xl">Company</h3>
                        <div className="flex flex-col gap-1">
                            <span className="md:text-lg">About</span>
                            <span className="md:text-lg">Privacy policy</span>
                            <span className="md:text-lg">Terms & Conditions</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <h3 className="text-xl font-bold md:text-2xl">Socials</h3>
                        <div className="flex gap-4">
                            <div className="w-8 h-8">
                                <a href="https://instagram.com/fineskills.co?igshid=YmMyMTA2M2Y=" target="_blank">
                                <BsInstagram className="w-full h-full"/>
                                </a>
                            </div>
                            <div className="w-8 h-8">
                                <a href="https://chat.whatsapp.com/GrD14ONRd8RKRbLKCCF4V2" target="_blank">
                                <BsWhatsapp className="w-full h-full"/>
                                </a>
                            </div>
                            <div className="w-8 h-8">
                                <a href="https://www.linkedin.com/company/fineskills-co/" target="_blank">
                                    <BsLinkedin className="w-full h-full"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <h2 className="text-tara-1 text-xl font-bold md:text-2xl text-center md:text-start">&copy; 2022 FineSkills.co All Rights Reserved.</h2>
                </div>
            </div>        
        </>
    );
}

export default Footer;