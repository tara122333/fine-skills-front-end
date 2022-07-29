import React from "react";
import {AiOutlineUser} from 'react-icons/ai';

const Login = () =>{
    return(
        <>
            <div>
                <div>
                    <h1>Login</h1>
                </div>
                <div>
                    <div>
                        <span>Username</span>
                        <div>
                            <AiOutlineUser />
                            <input type="text" />
                        </div>
                    </div>
                    <div>
                        <span>Password</span>
                        <div>
                            <AiOutlineUser />
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <div>
                    <span>Forgate password</span>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </div>
        </>
    );
}

export default Login;