import { Fragment } from "react";
import Landing from "./Landing";
import Card from '@mui/material/Card';
import AvailableInsurance from "./AvailableInsurance";

const Home = () =>{
    return(
        <Fragment>
            <div className="">
                <Landing />
                <AvailableInsurance/>
            </div>
        </Fragment>
    )
}

export default Home;