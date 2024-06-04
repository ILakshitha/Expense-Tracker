
import { Children, createContext, useReducer } from "react";

//initial state



const initialState = {
    transaction : [

    ]
}

//Create context
export const GlobalContext = createContext(initialState);

//provider Component
export const GlobalProvider =({Children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={
            {transaction:state.transaction}
        }>
            {(Children)}
        </GlobalContext.Provider>
    )
}
