import { useSelector } from "react-redux";
import {useState,useEffect} from 'react'
import axios from 'axios'
import { ring } from 'ldrs'
import { Toaster } from "react-hot-toast";
import { notifyError , notifySuccess } from "../../../utils/user.service";
import CancelIcon from '@mui/icons-material/Cancel';
import { useNavigate } from "react-router-dom";

const PaymentCard = ({totalAmount, setPayment , data }) =>{
    const [date,setDate] = useState('');
    const [cardnum, setCardNum] = useState('');
    const [expDate , setExpDate] = useState('');
    const [cvv, setCvv] = useState('');
    const { userData } = useSelector((store) => store.userData)
    const [loader,setLoader] = useState(0)
    ring.register()
    const navigate = useNavigate();

    const handlePayment =  async (e) =>{
            e.preventDefault();
            setLoader(1)
            try{
                console.log(data)
                const response = await axios.post(`${process.env.REACT_APP_API_URL}/policy/user`,{
                    email:userData.email,
                    policyId:data._id,
                    coverAmount: totalAmount,
                    policyName:data.policyName,
                })
                setLoader(0)
                navigate('/user-purchase/success')
            }catch(err){
                setLoader(0)
                notifyError(err.response.data.message)
            }
    }

    return(
        <>
            <div className="fixed top-0 left-0 w-full h-full  ease-in-out duration-500 bg-[#000000] bg-opacity-50 flex flex-col items-center justify-center">
                <Toaster/>

                <div className="w-[30rem] rounded-xl h-full  p-4 relative">
                    
                    <div className=" w-full bg-white rounded-xl shadow-xl top-11 p-4">
                        <button onClick={() => setPayment(0)} className="w-full text-right p-[4px] text-red-500 hover:opacity-90" ><CancelIcon/></button>
                        <div className="flex flex-row justify-between items-center p-2">
                            <h1 className="font-semibold text-lg text-blue-900">Confirm Payment</h1>
                            <div>
                                <svg width="40" height="40" viewBox="0 0 256 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2_15399)">
                                        <path d="M132.397 26.4282C132.251 37.9437 142.66 44.3702 150.501 48.1908C158.557 52.1112 161.263 54.625 161.232 58.1303C161.17 63.496 154.805 65.8637 148.848 65.9559C138.455 66.1174 132.412 63.1501 127.608 60.9054L123.864 78.4246C128.684 80.6462 137.609 82.5834 146.864 82.668C168.589 82.668 182.802 71.9443 182.879 55.3168C182.964 34.2154 153.691 33.0469 153.891 23.6147C153.96 20.7551 156.689 17.7032 162.669 16.9268C165.629 16.5348 173.8 16.235 183.064 20.5014L186.7 3.55104C181.718 1.73685 175.315 -0.000457764 167.343 -0.000457764C146.895 -0.000457764 132.512 10.8693 132.397 26.4282ZM221.638 1.46011C217.671 1.46011 214.328 3.77397 212.836 7.32547L181.803 81.4226H203.512L207.832 69.4844H234.36L236.867 81.4226H256L239.303 1.46011H221.638ZM224.675 23.0612L230.94 53.0875H213.782L224.675 23.0612ZM106.076 1.46011L88.9643 81.4226H109.651L126.755 1.46011H106.076ZM75.4732 1.46011L53.9413 55.8857L45.2316 9.60857C44.2092 4.44276 40.1734 1.46011 35.6918 1.46011H0.491982L0 3.78165C7.22599 5.34985 15.436 7.87895 20.4096 10.5849C23.4537 12.2376 24.3224 13.6828 25.3217 17.611L41.8185 81.4226H63.681L97.1973 1.46011H75.4732Z" fill="url(#paint0_linear_2_15399)" />
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_2_15399" x1="117.694" y1="84.3264" x2="120.087" y2="-0.575346" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#222357" />
                                            <stop offset="1" stop-color="#254AA5" />
                                        </linearGradient>
                                        <clipPath id="clip0_2_15399">
                                            <rect width="256" height="83" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="p-2">
                            <form className="grid grid-cols-2 gap-5"  onSubmit={handlePayment}>
                                <div className="relative col-span-2 shadow-sm p-4 rounded-xl border-2 border-zinc-200 z-20">
                                    <label for="" className="absolute text-sm font-medium left-4 -top-2.5 z-30 bg-white px-2">DD-MM-YY</label>
                                    <input value={date} onChange={(e)=>setDate(e.target.value)} type="text" className="w-[15rem] text-zinc-600  outline-none text-lg " placeholder="Enter your date" required></input>
                                </div>
                                <div className="relative col-span-2 shadow-sm p-4 rounded-xl border-2 border-zinc-200 z-20">
                                    <label for="" className="absolute text-sm font-medium left-4 -top-2.5 z-30 bg-white px-2">CARD NUMBER</label>
                                    <input value={cardnum} onChange={(e)=>setCardNum(e.target.value)} type="text" className="w-[15rem] text-zinc-600  outline-none text-lg " placeholder="Enter Card Number" required></input>
                                </div>
                                <div className="relative  shadow-sm p-4 rounded-xl border-2 border-zinc-200 z-20">
                                    <label for="" className="absolute text-sm font-medium left-4 -top-2.5 z-30 bg-white px-2">EXP DATE</label>
                                    <input value={expDate} onChange={(e)=>setExpDate(e.target.value)} type="text" className="w-full text-zinc-600  outline-none text-lg " placeholder="Enter Exp Date" required></input>
                                </div>
                                <div className="relative  shadow-sm p-4 rounded-xl border-2 border-zinc-200 z-20">
                                    <label for="" className="absolute text-sm font-medium left-4 -top-2.5 z-30 bg-white px-2">CVV</label>
                                    <input value={cvv} type="text" onChange={(e)=>setCvv(e.target.value)} className="w-full  text-zinc-600  outline-none text-lg " placeholder="Enter cvv" required ></input>
                                </div>
                                <div className="col-span-2">
                                    {
                                        loader === 0 ? 
                                            <button className="w-full bg-green-500 hover:opacity-90 duration-200 ease-in text-white text-center p-4  rounded-xl">Pay</button>
                                            :
                                            <button className="w-full bg-green-500 hover:opacity-90 duration-200 ease-in text-white text-center p-4  rounded-xl">
                                                <l-ring
                                                    size="23"
                                                    stroke="2"
                                                    bg-opacity="0"
                                                    speed="2"
                                                    color="white"
                                                ></l-ring>
                                            </button>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentCard;