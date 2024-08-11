import { Fragment, useEffect , useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import  axios from 'axios'
import { setPolicies } from '../../../redux/policySlice';
import {useDispatch} from 'react-redux';
import { Player } from '@lottiefiles/react-lottie-player';


const PolicyCard = ({unique , data , insuranceType}) =>{
    return(
        <>
            <Link to={`/policy/${insuranceType}/${unique}`}>
                <div className='flex flex-row'>
                    <div className='w-[100px] h-[80px] p-[8px] bg-white shadow-lg border-2 border-gray-100 rounded-tl-[12px] rounded-bl-[12px]'>
                            <img src={data.image} className='w-full h-full'></img>
                    </div>
                    <div className='w-full p-[16px] text-[14px] flex flex-row justify-between gap-[20px] rounded-rb-[12px] shadow-sm mx-auto bg-gray-50 border-[1px] border-gray-300 rounded-b-[16px] rounded-br-[16px]'>
                        <div className='flex flex-col gap-[20px]'>
                            <h1 className='text-xl font-semibold'>{data.policyName}</h1>
                            <ul className='text-light text-gray-600 flex flex-col gap-[8px]'>
                                {
                                    data.recommendAds.map((ad,index) => {
                                        return(
                                            <>
                                                <li className='flex flex-row gap-[4px]'><span>✅</span> <span> {ad}</span></li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                            <text className='text-green-600'>Check all Features and Purcharse </text>
                        </div>
                        <div className='flex items-center justify-center flex-col gap-[12px] min-w-[210px]'>
                            <div className='flex flex-row gap-[20px] border-[1px] border-gray-500 w-full rounded-xl p-[16px] items-center justify-center'>
                                <div className='flex flex-col  gap-[8px] justify-center items-center'>
                                    <text className='text-blue-800 text-lg font-semibold'>Cover amount</text>
                                    <text className='text-gray-600'>${data.coverAmount}</text>
                                </div>
                            </div>
                            <button className='p-[20px] text-white rounded-xl w-full bg-green-500 hover:opacity-90 duration-200 ease-in'>${Math.floor(data.coverAmount/24)}/month</button>
                            <text className='text-gray-600 font-light'>${Math.floor(data.coverAmount/2)} annually</text>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}


const Policy = () => {
    const { insuranceType } = useParams();
    const [insuranceData, setInsuranceData] = useState([]);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        fetchAvailableInsurance(insuranceType)
    },[insuranceType])

    const fetchAvailableInsurance = async (insuranceType) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/policy?type=${insuranceType}`);
            const availableInsurance = response.data.message;
            setInsuranceData(availableInsurance); 
            dispatch(setPolicies(availableInsurance))

        } catch (error) {
            console.error('Error fetching available insurance:', error);
        }
    }

    return (
        <>
            <Fragment>
                <div className='p-[16px] flex flex-col gap-[20px] bg-gray-100'>
                    <div className='flex flex-col gap-[20px]'>
                        <h1 className='text-3xl font-bold text-gray-700 font-sans text-center'>Available Insurance Plans </h1>
                        <p className='text-xl font-normal text-gray-500 text-center'>Choose the <span className='text-green-500'>Right</span> plan for your needs !</p>
                    </div>
                    <div className='w-[60%] mx-auto flex flex-col gap-[16px]'>
                        {
                            insuranceData.length > 0 ?
                            insuranceData && insuranceData.map((data, index) => {
                                return (
                                    <PolicyCard key={index} unique={index} data={data} insuranceType={insuranceType}/>
                                )
                            })
                            :
                                <Player
                                    src='https://lottie.host/821a4544-9c77-4340-abc6-74b660712a58/YPVDFddI0e.json'
                                    className="player"
                                    loop
                                    autoplay
                                    style={{ height: '300px', width: '300px' }}
                                    speed={0.8}
                                />
                        }
                    </div>
                </div>
                
            </Fragment>
        </>
    );
}

export default Policy;