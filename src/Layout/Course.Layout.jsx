import React from "react";
import Navbar from "../components/Navbar/Navbar.component";
import CourseComponent from "../components/Course/course.component";
import Footer from "./Footer.Layout";

const CourseLayout = () =>{
    return(
        <>

            <div className="mb-20 md:mb-24">
                <Navbar/>
            </div>
            <div>
                <CourseComponent />
            </div>
            <div className="mt-7">
            <Footer />
            </div>
        </>
    );
}

export default CourseLayout;