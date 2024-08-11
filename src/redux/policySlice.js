import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    policies:[
        {
            id: 1,
            policyName: 'None',
            policyType:'None',
            image: 'https://www.policybazaar.com/images/health-insurance/health-insurance-india.png',
            coverAmount: 0,
            companyName: 'None',
            recommendAds: [],
            description: 5,
            description: 'PolicyBazaar is a 5 Star Partner for Care Health'
        },
    ]
};

const policySlice = createSlice({
    name: 'policy',
    initialState,
    reducers: {
        setPolicies(state, action){
            state.policies = action.payload;
        }
    },
});


export const { setPolicies } = policySlice.actions;

export default policySlice.reducer;
