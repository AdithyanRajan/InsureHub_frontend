import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios'
import { getCookie } from '../../../utils/cookie.service';

const UserPurchased = () => {

    let token = getCookie('token')

    const [purchased, setPurchased] = React.useState([])

    useEffect(()=>{
        fetchUserPurchased()
    },[])

    async function fetchUserPurchased(){

        try{
            const response = await axios.get(`${ process.env.REACT_APP_API_URL }/policy/user`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setPurchased(response.data.message)
        }catch(err){    
            console.log(err)
        }
    }

    return (
        <div className='bg-gray-100 py-[20px] flex flex-col gap-[16px] h-[80vh]'>
            <h1 className='text-3xl font-bold text-green-500 text-center'>Claimed Policies</h1>
            <p className='text-xl font-normal text-gray-700 text-center'>Plans made for future safety</p>
            <div className='p-[20px] w-[60%] mx-auto flex flex-col gap-[12px] h-[60vh] overflow-y-auto'>
                {
                    purchased.length > 0 ? purchased.map((data,index)=>{
                        return(
                           
                                <div key={index} className='w-full p-[16px] text-[14px] flex flex-row justify-between gap-[20px] rounded-rb-[12px] shadow-sm mx-auto bg-gray-50 border-[1px] border-gray-300 rounded-b-[16px] rounded-br-[16px]'>
                                    <div className='flex flex-col gap-[20px]'>
                                        <h1 className='text-xl font-semibold'>{data.policyName}</h1>
                                    
                                        <text className='text-green-600'>Policy Claimed ✅</text>
                                    </div>
                                    <div className='flex items-center justify-center flex-col gap-[12px] min-w-[210px]'>
                                        <div className='flex flex-row gap-[20px] border-[1px] border-gray-500 w-full rounded-xl p-[16px] items-center justify-center'>
                                            <div className='flex flex-col  gap-[8px] justify-center items-center'>
                                                <text className='text-blue-800 text-lg font-semibold'>Cover amount</text>
                                                <text className='text-gray-600'>{data.coverAmount}</text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           
                        )
                    }) : <h1 className='text-3xl text-center'>None in the purchase</h1>
                }
               
            </div>
        </div>
    );
};

export default UserPurchased;