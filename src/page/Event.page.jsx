import React from "react";
import Navbar from "../components/Navbar/Navbar.component";
import EventPoster from "../components/Event/EventPoster.component";
import Footer from '../Layout/Footer.Layout.jsx'
const EventPage = () =>{
    return(
        <>
            <div className="mb-14 md:mb-24">
                <Navbar/>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 md:container md:mx-auto md:px-10">
                    <EventPoster />
                    <EventPoster />
                    <EventPoster />
                    <EventPoster />
                    <EventPoster />
                    <EventPoster />
                    <EventPoster />
                    <EventPoster />
                    <EventPoster />
                </div>
            </div>
            <div className="mt-7">
            <Footer />
            </div>
        </>
    );
}

export default EventPage;