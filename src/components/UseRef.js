import React,{useEffect, useRef,useState} from 'react'

function UseRef() {
 
    let [name,setName]=useState('')
    let count=useRef(0);

    let handleChange = (e)=>{
        
        setName(e.target.value)
    }
    let handleSubmit = () =>{
        count.current = count.current+1
        setName('')
    }
   
  return <>
        <input value={name} type ={"text"}
        onChange={(e)=>handleChange(e)} />
        <button  type={'submit'} onClick={()=>handleSubmit()}>button</button>
        <div>my name is {name}</div>
        <div>it has beeen rendered has {count.current} times</div>
        
    </>
  
}

export default UseRef;