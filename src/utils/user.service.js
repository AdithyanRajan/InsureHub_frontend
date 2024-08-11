import { getCookie } from "./cookie.service";
import toast from 'react-hot-toast';
import axios from 'axios'

async function checkAuthorization() {
    const token = getCookie('token');
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/check`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        if (response.data.success) {
            return {status:true,user:response.data.user};
        } else {

            return {status:false};
        }
    } catch (error) {
        console.error('Error checking authorization:', error);
        throw error;
    }
}




const notifyMessage = (message) => {
    toast(message, {
        duration: 2000,
        position: 'top-right',
        style: {
            minWidth: '250px',
            minHeight: '50px',
            padding: '10px',
        }
    });

}

const notifySuccess = (message) => {
    toast.success(message, {
        duration: 2000,
        position: 'top-right',
        style: {
            minWidth: '250px',
            minHeight: '50px',
            padding: '10px',
        }
    });
}

const notifyError = (message) => {
    toast.error(message, {
        duration: 2000,
        position: 'top-right',
        style: {
            maxWidth: '450px',
            maxHeight: '200px',
        }
    });
}


export { checkAuthorization , notifySuccess, notifyError, notifyMessage };