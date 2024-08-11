import { configureStore } from '@reduxjs/toolkit'
import policyReducer from './policySlice'
import userReducer from './userSlice'

const store = configureStore({
    reducer: {
        policy: policyReducer,
        userData: userReducer
    }
})

export default store;