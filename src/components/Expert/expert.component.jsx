import React from "react";
import {SiPaytm} from 'react-icons/si';

const ExpertComponentLg = () =>{
    return(
        <>
            <div className="w-full">
                <div className="grid grid-cols-8 w-full">
                    <div className="w-full flex justify-center items-center">
                        <SiPaytm className="w-28 h-24 text-white"/>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <SiPaytm className="w-28 h-24 text-white"/>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <SiPaytm className="w-28 h-24 text-white"/>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <SiPaytm className="w-28 h-24 text-white"/>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <SiPaytm className="w-28 h-24 text-white"/>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <SiPaytm className="w-28 h-24 text-white"/>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <SiPaytm className="w-28 h-24 text-white"/>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <SiPaytm className="w-28 h-24 text-white"/>
                    </div>
                </div>
            </div>
        </>
    );
}

const ExpertComponentSm = () =>{
    return(
        <>
            <div className="grid grid-cols-3 w-full">
                <div className="w-full flex justify-center items-center">
                    <SiPaytm className="w-28 h-24 text-white"/>
                </div>
                <div className="w-full flex justify-center items-center">
                    <SiPaytm className="w-28 h-24 text-white"/>
                </div>
                <div className="w-full flex justify-center items-center">
                    <SiPaytm className="w-28 h-24 text-white"/>
                </div>
            </div>
        </>
    );
}

const ExpertComponent = () =>{
    return(
        <>
        <div className="flex lg:hidden">
            <ExpertComponentSm />
        </div>
        <div className="hidden lg:flex w-full">
            <ExpertComponentLg />
        </div>
        </>
    );
}
export default ExpertComponent;