import logo from './logo.svg';
import './App.css';
import { useEffect, useState,useMemo } from 'react';

function App() {

  const [number,setNumber]=useState(0);
  const [dark,setDark]=useState('true');
  
  // const doubleNumber= slowFunction(number)

  const doubleNumber = useMemo(()=>{
    return slowFunction(number);
  },[number])                                                                                                                                                                                                                                                                 


  // const themeStyles = {
  //    backgroundColor: dark ? 'black' : 'white',
  //    color: dark? 'white' : 'black'
  // }
  const themeStyles=useMemo(()=>{
    return{
      backgroundColor: dark? 'black' :'white',
      color: dark ? 'white' : 'black'
    }
  },[])

  useEffect(()=>{
    console.log('theme changed');
  },[themeStyles])
  return (
    <>
       <input type='number' value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
       <button onClick={()=>{setDark(prevDark=>!prevDark)}}>Change theme</button>
       <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

function slowFunction(num){
  console.log("hii")
  for(let i=0;i<=10000000;i++){
      return num*2;
  }
}

export default App;
