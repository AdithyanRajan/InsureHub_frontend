import { Player } from '@lottiefiles/react-lottie-player';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';



const SuccessPurchase = () =>{
    
    return(
        <Fragment>
            <div className='flex flex-col gap-[20px] items-center justify-center h-[79vh]' >
                <h1 className='text-3xl font-semibold text-green-500'>SuccessFully Claimed Insurance Policy</h1>
                <Player
                    src='https://lottie.host/7d8da004-249e-4e6d-a314-c131e56e2abe/In9txJdTl1.json'
                    className="player"
                    loop
                    autoplay
                    style={{ height: '300px', width: '300px' }}
                    speed={0.8}
                />
                <text className='text-gray-700'>Checkout your insurance policies <Link to={'/user-insurance'} className='text-blue-600 underline '>Here</Link></text>
            </div>
        </Fragment>
    )
}

export default SuccessPurchase;