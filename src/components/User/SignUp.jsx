import React,{ useState }  from "react";
import {AiOutlineUser} from 'react-icons/ai';
import {MdAlternateEmail} from 'react-icons/md';
import {RiLockPasswordLine} from 'react-icons/ri';
import {MdFacebook} from 'react-icons/md';
import {AiFillTwitterCircle,AiFillGoogleCircle} from 'react-icons/ai';
import axios from "axios";

const SignUp = () =>{
    const [inputField,setInputFields] = useState({
        fullname:'',
        email:'',
        password:'',
    });
    const [errorField,setErrorFields] = useState({
        usernameError:'',
        usermailError:'',
        userpasswordError:'',

    });
    const submitbutton = async()=>{
        setErrorFields({
            usernameError:'',
            usermailError:'',
            userpasswordError:'',
        })
        if(validForm()){
            try {
                // const res = await fetch("http://localhost:4000/auth/signup",{
                //     method:"POST",
                //     headers:{

                //     },
                //     body:JSON.stringify({
                //         fullname : "tara",
                //     })
                // });
                // const data = await res.json();
                // if(data.status === 200){
                //     alert("success");
                // }
                let response = await axios.post("http://localhost:4000/signup",inputField);
                // let response = await axios(options);
                console.log(response);
                
            } catch (e) {
                alert("error");
            }
            
        }
        else{
            alert("validation error");
        }
    }

    const inputHandeler = (e)=>{
        console.log(e);
        setInputFields({...inputField,[e.target.name]:e.target.value});
    }
    
    const validForm = () =>{
        let formIsValid = true;
        if(inputField.fullname === ''){
            formIsValid = false;
            setErrorFields(prevState=>({
                ...prevState,usernameError:"please enter your name",
            }));
        }
        if(inputField.email === ''){
            formIsValid = false;
            setErrorFields(prevState=>({
                ...prevState,usermailError:"please enter your mail",
            }));
        }
        if(inputField.password === ''){
            formIsValid = false;
            setErrorFields(prevState=>({
                ...prevState,userpasswordError:"please enter your password",
            }));
        }
        return formIsValid;
    }
    return(
        <>
            <div>
            <div className="flex flex-col gap-3 md:gap-5 justify-center items-center w-full md:w-96 px-5 pb-4 md:pb-5">
                <div className="w-full flex justify-center items-center">
                    <h1 className="text-2xl font-bold">Login</h1>
                </div>
                <div className="flex flex-col justify-center items-center w-full gap-3">
                    <div className="flex flex-col justify-center items-start w-full gap-1">
                        <span className="font-medium text-gray-600 px-2">Full Name</span>
                        <div className="flex gap-2 w-full border-2 border-gray-400 rounded-lg px-2 py-2">
                            <AiOutlineUser className="text-2xl text-gray-500"/>
                            <input type="text" placeholder="Tara Chand Kumawat" name="fullname" className="outline-none text-gray-600" value={inputField.fullname} onChange={inputHandeler}/>
                        </div>
                        {
                            errorField.usernameError.length > 0 && <span>{errorField.usernameError}</span>
                        }
                    </div>
                    <div className="flex flex-col justify-center items-start w-full gap-1">
                        <span className="font-medium text-gray-600 px-2">Email</span>
                        <div className="flex gap-2 w-full border-2 border-gray-400 rounded-lg px-2 py-2">
                            <MdAlternateEmail className="text-2xl text-gray-500"/>
                            <input type="email" placeholder="tara@gmail.com" name="email" className="outline-none text-gray-600" value={inputField.email} onChange={inputHandeler}/>
                        </div>
                        {
                            errorField.usermailError.length > 0 && <span>{errorField.usermailError}</span>
                        }
                    </div>
                    <div className="flex flex-col justify-center items-start w-full gap-1">
                        <span className="font-medium text-gray-600 px-2">Password</span>
                        <div className="flex gap-2 w-full border-2 border-gray-400 rounded-lg px-2 py-2">
                            <RiLockPasswordLine className="text-2xl text-gray-500"/>
                            <input type="text" placeholder="password" name="password" className="outline-none text-gray-600" value={inputField.password} onChange={inputHandeler}/>
                        </div>
                        {
                            errorField.userpasswordError.length > 0 && <span>{errorField.userpasswordError}</span>
                        }

                    </div>
                </div>
                <div className="flex justify-center items-center w-full">
                    <button className="bg-tara-0 text-tara-1 w-full py-1 md:py-2 rounded-lg text-base md:text-lg font-bold" onClick={submitbutton}>Sign Up</button>
                </div>
                <div className="w-full flex justify-center">
                    <span className="text-gray-500 font-medium">Or Sign up With</span>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <span className="text-4xl md:text-5xl cursor-pointer bg-tara-0 text-tara-1 rounded-full"><AiFillGoogleCircle /></span>
                    <span className="text-4xl md:text-5xl cursor-pointer bg-tara-0 text-tara-1 rounded-full"><MdFacebook /></span>
                    <span className="text-4xl md:text-5xl cursor-pointer bg-tara-0 text-tara-1 rounded-full"><AiFillTwitterCircle /></span>
                </div>
                <div className="w-full flex justify-center">
                    <span className="text-gray-500 font-medium">Or Login With</span>
                </div>
                <div className="flex justify-center w-full">
                    <button className="text-black font-bold text-lg hover:underline">Login</button>
                </div>
                
            </div>
            </div>
        </>
    );
}

export default SignUp;