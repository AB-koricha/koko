import React,{createContext,useContext,useReducer} from 'react'

export const StateContext=createContext()//here is preparing the data layer
//below all is call higher order component
export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue=()=>useContext(StateContext)//whenever to pull thing out of data layer we use this useStateValue