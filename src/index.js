import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import Home from './components/pages/Home/Home';
import Policy from './components/pages/Policy/Policy';
import PolicyDetails from './components/pages/PolicyDetails/PolicyDetails';
import { Provider } from 'react-redux';
import store from './redux/store';
import Purchase from './components/pages/Purchase/Purchase';
import UserPurchased from './components/pages/User_Purchased/User_Purchased';
import SuccessPurchase from './components/pages/PolicyDetails/SuccessPurchase';

const root = ReactDOM.createRoot(document.getElementById('root'));


const appRouter = createBrowserRouter([
  {
    path:'/signin',
    element:<SignIn />,
  },
  {
    path:'/signup',
    element:<SignUp/>
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"policy/:insuranceType",
        element:<Policy/>
      } ,
      {
        path: "policy/:insuranceType/:policyId",
        element: <PolicyDetails />
      },
      {
        path: 'purchase/:policyId',
        element: <Purchase />
      },
      {
        path:'/user-insurance',
        element:<UserPurchased/>
      },
      {
        path:'/user-purchase/success',
        element:<SuccessPurchase/>
      }
    ],
  }
])

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
