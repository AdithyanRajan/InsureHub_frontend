import { Fragment } from "react";
import { Link } from "react-router-dom";
import CrossIcon from '../../../icons/crossIcon';
import CarIcon from '../../../icons/carIcon';
import HouseIcon from '../../../icons/houseIcon';
import FireIcon from '../../../icons/fireIcon';
import BookIcon from '../../../icons/bookIcon';
import AirplaneIcon from '../../../icons/airplaneIcon';


const Card = ({data}) =>{
    return(
        <>
            <Link to={'/policy/'+data.route} className="mx-auto">
                <div className="w-[300px] flex flex-col gap-[16px] p-[8px] pb-[40px] rounded-[16px] border-2 border-gray-400 hover:scale-105 duration-200 ease-in">
                
                    <div className=" rounded-[8px] p-[4px] flex flex-col gap-[16px] items-center justify-center">
                        <div className="">
                            {data.icon} 
                        </div>
                        
                        <div className="rounded-[4px] text-center">
                            <p className="text-xl font-semibold">{data.insurance}</p>
                        </div>
                        <div className="h-[50px] w-full rounded-[8px] p-[4px] flex items-center bg-green-500 justify-center text-white">
                            Explore
                        </div>
                    </div>
                    
                    
                </div>
            </Link>
        </>
    )
}
 

const AvailableInsurance = () =>{

    const insuranceData = [
        {
            insurance: 'Life & Health Insurance',
            icon:<CrossIcon/>,
            description:'',
            route:'health-insurance'
        },
        {
            insurance: 'Motor Insurance',
            icon: <CarIcon />,
            description: '',
            route:'car-insurance'
        },
        {
            insurance: 'Home Insurance',
            icon: <HouseIcon />,
            description: '',
            route: 'home-insurance'

        },
        {
            insurance: 'Fire Insurance',
            icon: <FireIcon />,
            description: '',
            route: 'fire-insurance'

        },
        {
            insurance: 'Study Insurance',
            icon: <BookIcon />,
            description: '',
            route: 'study-insurance'
        },
        {
            insurance: 'Travel Insurance',
            icon: <AirplaneIcon />,
            description: '',
            route:'travel-insurance'
        }
    ]

    return(
        <>  
            <Fragment>
                <div className="w-full my-[80px]" id="insuranceproducts z-10" >
                    <div className="lg:w-[80%] w-[90%] mx-auto flex flex-col gap-[25px]">
                        <div className="flex flex-col gap-[12px] text-center">
                            <h1 className="text-3xl font-semibold">Every Insurance you need in the <span className="text-green-500">21st</span> Century</h1>
                            <p className="text-xl font-normal text-gray-700">
                                We do care, that's why we are everywhere you <br/>
                                need to be with whatever you need.
                            </p>
                        </div>
                        <div>
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px]">
                                {
                                    insuranceData.map((data,index) =>(
                                        <Card key={index} data={data}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>                
            </Fragment>
        </>
    )
}

export default AvailableInsurance;