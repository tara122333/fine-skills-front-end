import React from 'react'
import { motion } from 'framer-motion';

// images
import Card from './Card';

const Service = () => {

    const transition = { duration: 1, type: "spring" };
    const expert = "https://t4.ftcdn.net/jpg/02/90/71/49/360_F_290714904_oNKWLHHdw0s1E8VQ2d6hx4VxJU2o8QVm.jpg";
    const opportunity = "https://images.unsplash.com/photo-1620915283474-18ef99f53a5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80";

    const img = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

  return (
    <>
    <div id='services' className='w-full flex px-5 mb-96 pb-96 lg:pb-0 lg:mb-0 justify-center items-center lg:container lg:mx-auto lg:px-10'>
        <div className='flex flex-col lg:flex-row w-full justify-center' >
            <div className='flex flex-col h-full w-full lg:w-1/2'>
                <div className='flex flex-row gap-3 lg:py-12 md:flex-row md:gap-3 py-6'>
                    <span className='text-3xl lg:text-5xl font-bold'>What we</span>
                    <span className='text-3xl lg:text-5xl text-tara-orange font-bold'>Offer</span>
                </div>
                <div className='my-1 lg:my-5  pr-5'>
                    <span className='text-gray-600'>Become a family of india's biggest learners & experts community </span>
                </div>
                <div className='my-8'>
                    <a href="https://chat.whatsapp.com/GrD14ONRd8RKRbLKCCF4V2" download>
                        <button className='bg-gradient-to-r border-2 border-tara-orange from-tara-yellow to-tara-orange rounded-full px-8 py-2 text-white shadow-2xl shadow-tara-yellow hover:shadow-md hover:bg-gradient-to-r hover:from-tara-black hover:to-tara-black hover:border-tara-bgblack'>Join Now</button>
                    </a>
                </div>
                {/* <div className="relative my-96 w-96 h-72 rounded-full bg-tara-purple blur-3xl -z-10 top-96 -left-96" style={{ background: "#ABF1FF94" }}></div> */}
            </div>
            <div className='hidden md:flex w-full h-full lg:w-1/2'>
                
                    <motion.div
                initial={{ left: "25rem" }}
                whileInView={{ left: "14rem" }}
                transition={transition}
                className="relative"
                >
                <Card
                    emoji={opportunity}
                    heading={"Opportunity"}
                    detail={"Actionable programs to offset the Pareto Principle; you will execute projects using what you learned"}
                    className="relative"
                />
                </motion.div>
                {/* second card */}
                <motion.div
                initial={{ left: "-11rem", top: "12rem" }}
                whileInView={{ left: "-4rem" }}
                transition={transition}
                className="relative"
                >
                <Card
                    emoji={img}
                    heading={"Network"}
                    detail={"Enjoy the best of peer-led learning with tons of events while building lifelong relationships"}
                    className="relative"
                />
                </motion.div>
                {/* 3rd */}
                <motion.div
                initial={{ top: "19rem", left: "25rem" }}
                whileInView={{ left: "12rem" }}
                transition={transition}
                className="relative"
                >
                <Card
                    emoji={expert}
                    heading={"Experts"}
                    detail={
                    "Attend Workshops & get a chane from the expert"
                    }
                    color="rgba(252, 166, 31, 0.45)"
                    className="relative"
                />
                </motion.div>
            </div>


            <div className='flex md:hidden relative flex-1 w-full h-full flex-wrap mb-96'>
                <motion.div
            initial={{ left: "0rem" }}
            whileInView={{ left: "7rem" }}
            transition={transition}
            className="relative"
            >
            <Card
                emoji={img}
                heading={"Opportunity"}
                detail={"Actionable programs to offset the Pareto Principle; you will execute projects using what you learned"}
                className="relative"
            />
            </motion.div>
            {/* second card */}
            <motion.div
            initial={{ left: "0rem", top: "20rem" }}
            whileInView={{ left: "7rem" }}
            transition={transition}
            className="relative"
            >
            <Card
                emoji={img}
                heading={"Network"}
                detail={"Enjoy the best of peer-led learning with tons of events while building lifelong relationships"}
                className="relative"
            />
            </motion.div>
            {/* 3rd */}
            <motion.div
            initial={{ top: "40rem", left: "0rem" }}
            whileInView={{ left: "7rem" }}
            transition={transition}
            className="relative"
            >
            <Card
                emoji={img}
                heading={"Experts"}
                detail={
                "Attend Workshops & get a chane from the expert"
                }
                color="rgba(252, 166, 31, 0.45)"
                className="relative"
            />
            </motion.div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Service;