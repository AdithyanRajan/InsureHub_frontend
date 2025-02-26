
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import {setCookie} from '../../utils/cookie.service'
import {useNavigate} from 'react-router-dom'
import { ring } from 'ldrs'
import { Toaster } from "react-hot-toast";
import { notifyError , notifySuccess } from "../../utils/user.service";

const SignIn = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loader,setLoader] = useState(0)
    ring.register()
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(1)
        try{
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`,{
                email,password
            })
            setLoader(0)
            setCookie('token',response.data.token,156)
            notifySuccess(response.data.message)
            navigate('/')
        }catch(err){
            setLoader(0)
            notifyError(err.response.data.message)
        }
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-green-500 md:p-[0px] px-[16px]">
                <Toaster />
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <input onChange={(e)=>setEmail(e.target.value)} autoComplete="off" type="email" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email address" />
                        <input onChange={(e)=>setPassword(e.target.value)} autoComplete="off" type="password" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Password" />
                        <div className="flex items-center justify-between flex-wrap">
                            <p className="text-gray-900 mt-4"> Don't have an account? <Link to={'/signup'} className="text-md text-blue-500 -200 hover:underline mt-4">Signup</Link></p>
                        </div>

                        {
                            loader == 0 ? 
                                <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Login</button>
                            :
                                <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">
                                    <l-ring
                                        size="23"
                                        stroke="2"
                                        bg-opacity="0"
                                        speed="2"
                                        color="white"
                                    ></l-ring>
                                </button>
                        }

                    </form>
                </div>
            </div>
        </>
    );
}

export default SignIn;