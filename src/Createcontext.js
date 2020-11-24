import React, { createContext, useReducer } from 'react';
import reducerData from './Createreducer';
const Initialtransaction=[{id:0,desc:"transaction",amount:432}];
export const TransactionContext=createContext(Initialtransaction);


export const PreventTransaction=({children})=>{
     let [state,dispatch]=useReducer(reducerData,Initialtransaction);
     function addTransaction(traObject){
             dispatch({
                  type:"ADD",
                  payload:{
                  desc:traObject.desc,
                  amount:traObject.amount,
                  id:traObject.id
             }
             })
     }
     function deleteTransaction(transObj){
          dispatch({
               type:"Deleted",
               payload:{
               id:transObj.id
          }
          })
     }
     return(
     <TransactionContext.Provider value={{
         transactions:state,
         addTransaction,
         deleteTransaction
     }}>
           {children}
     </TransactionContext.Provider>
     )
}