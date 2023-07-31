import {createReducer} from "@reduxjs/toolkit";

const initialState={
    email:""
};

export const customReducer=createReducer(initialState,{

    setloggedemail:(state,action)=>{
        state.email=action.payload
    }

})