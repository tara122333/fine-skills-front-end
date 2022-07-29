import React from "react";
import Navbar from "../components/Navbar/Navbar.component";
import HomePage from "../page/Home.page";
import Footer from "./Footer.Layout";

const HomeLayout = () =>{
    return(
        <>

            <div className="mb-20 md:mb-24">
                <Navbar/>
            </div>
            <div>
                <HomePage />
            </div>
            <div className="mt-7">
            <Footer />
            </div>
        </>
    );
}

export default HomeLayout;