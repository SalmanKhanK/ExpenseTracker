import React from 'react';
const reducerData=((state,action)=>{
    switch(action.type){
        case "ADD":
            return [action.payload,...state]
        case "Deleted":{
          let deleted=state.filter((ev)=>ev.id!=action.payload.id);
          console.log(deleted);
          return deleted;
        }
    }
});
export default reducerData;