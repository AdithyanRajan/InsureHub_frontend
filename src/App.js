import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/layouts/Header';
import { useEffect , useState } from 'react';
import { checkAuthorization } from './utils/user.service';
import { useNavigate } from 'react-router-dom';
import Footer from './components/layouts/Footer';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/userSlice';

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loggedIn,setLoggedIn] = useState(0)
  useEffect(()=>{
    checkAuthorization().then((response)=>{
        if(response.status){
          setLoggedIn(1)
          dispatch(setUser(response.user))
        }else{
          setLoggedIn(0)
          navigate('/signin')
        }
    }).catch((error)=>{
      setLoggedIn(0)
      navigate('/signin')
    })
  })


  return (
    <>
      {
        loggedIn == 1 ?
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div >
        :
        <div className='flex h-screen items-center justify-center'>
              <div className='text-xl'>Loading . . .</div>
        </div>
      }
    </>

  );
}

export default App;
