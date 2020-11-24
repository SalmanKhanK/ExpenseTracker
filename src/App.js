import React,{useState, useContext} from 'react';
import './App.css';
import {Balance} from './Balance';
import {Header} from './Header';
import  {TransactionContext} from './Createcontext';
function App() {
  const [desc,setDesc] = useState("");
  const [newamount,setAmount] = useState(0);
  let {transactions,addTransaction,deleteTransaction}=useContext(TransactionContext);
console.log(transactions)
 const handleform=(event)=>{
    event.preventDefault();
        // console.log(desc);
        // console.log(amount);
        addTransaction({
           desc:desc,
           amount:Number(newamount),
           id:transactions.length
        });
        setDesc("");
        setAmount(0);
    
  };
  function Deletetransac(ind){
    deleteTransaction({
      id:ind
        });
  }
  function Income(){
   let count=0
    for(var i=0;i< transactions.length;i++){
      if(transactions[i].amount>0){
        count=count+transactions[i].amount;
      }
    }
    return count;
  }
  function Expence(){
    let count=0
     for(var i=0;i< transactions.length;i++){
       if(transactions[i].amount<0){
         count=count+transactions[i].amount;
       }
     }
     return count;
   }
  return (
    <div className="center">
        
        {/* <Header /> */}
        <Balance amount={Income()} expence={Expence()} />
        <h3>History</h3>
             <hr />
             <ul className="transactionList">
                     {transactions.map((transObj, ind) => {
                    return (<li key={ind}>
                        <button className="delete-btn" type="button"  onClick={()=>{Deletetransac(transObj.id)}}>X</button>
                        {/* <span ><button onClick={() => { handleDelete(transObj.id) }}>delete</button></span> */}
                        <span>{transObj.desc}</span>
                        <span>${transObj.amount}</span>
                    </li>
                    )
                })}  
             </ul>
             <h3>Add New Transaction</h3>
             <hr />
             <form className="form" onSubmit={handleform}>
             <label>Enter Discription <br />
                <input type="text" 
                placeholder="Enter Text"
                value={desc} 
                onChange={(ev)=>setDesc(ev.target.value)}
                required></input>
            </label>
            <label>Enter Amount <br />
                <input type="number"
                 placeholder="Enter Amount"
                 value={newamount}
                 onChange={(ev)=>setAmount(ev.target.value)} 
                 required></input>
            </label>
            <input type="submit"
             value="Add Transaction" />
             </form>

    </div>
  );
}

export default App;
