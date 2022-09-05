import React, { useEffect } from "react";
import {useState} from 'react'

function Calcuator() {
    
    const [operandsOne, setOperandsOne] = useState('')
    const [operandsTwo, setOperandsTwo] = useState('')
    const [operator, setOperator] =useState('')
    const [result, setResult] = useState('')

    function hanleClick(e) {
    
      if(operator==='') {
        setOperandsOne(
         operandsOne+e.target.value
        )
     }else{
        setOperandsTwo(
          operandsTwo+e.target.value
         )
    }
    // console.log(typeof(operandsOne))
}
console.log(result)
useEffect(()=>{
  setResult(operandsOne+operator+operandsTwo)
},[operandsOne,operator,operandsTwo])

    function handleOperands(e){
      setOperator(e.target.value)
       }

    function handleClear() {
        setResult('')
        setOperandsOne('')
        setOperandsTwo('')
        setOperator('')
    }

    const handleResult = () => {
   
        let op1 = parseFloat(operandsOne)
        let op2 = parseFloat(operandsTwo)
        let res
          //  if(operandsOne.includes('.')||operandsTwo.includes('.')){
            if(operator==='+'){
              res = (op1+op2);
              // console.warn(res/10)
             setResult(res)
     
           }else if (operator==='-'){
             res = (op1-op2)
             setResult(res.toFixed(4))
           }else if (operator==='*'){
             res =( op1*op2)
             setResult(res.toFixed(4))
           }else if(operator==='/'){
             res =(op1/op2)
             
             setResult(res.toFixed(4))
           } 
    }

    
    function handleDelete() {

      if(operator===''){
        let o = operandsOne.slice(0,-1)
        setOperandsOne(o)
      }
      else if(!operandsTwo){
      setOperator('')
      }
      
      else {
       
        let t = operandsTwo.slice(0,-1)
        setOperandsTwo(t)
      }
    }

    
    return (
      <div className="main">
        <div className="container">
          <div className="input-box">
            <p style={{ textAlign: "end", paddingTop: "25px" }}>{result}</p>
          </div>

          <div>
            <button className="clear-button" onClick={handleClear}>
              Clear
            </button>
            <button className="button1" onClick={handleDelete} value={"c"}>
              DEL
            </button>
            <button className="button1" onClick={handleOperands} value={"*"}>
              x
            </button>
          </div>

          <div>
            <button className="button" onClick={hanleClick} value={9}>
              9
            </button>
            <button className="button" onClick={hanleClick} value={8}>
              8
            </button>
            <button className="button" onClick={hanleClick} value={7}>
              7
            </button>
            <button className="button1" onClick={handleOperands} value={"/"}>
              /
            </button>
          </div>
          <div>
            <button className="button" onClick={hanleClick} value={6}>
              6
            </button>
            <button className="button" onClick={hanleClick} value={5}>
              5
            </button>
            <button className="button" onClick={hanleClick} value={4}>
              4
            </button>
            <button className="button1" onClick={handleOperands} value={"-"}>
              -
            </button>
          </div>
          <div>
            <button className="button" onClick={hanleClick} value={3}>
              3
            </button>
            <button className="button" onClick={hanleClick} value={2}>
              2
            </button>
            <button className="button" onClick={hanleClick} value={1}>
              1
            </button>
            <button className="button1" onClick={handleOperands} value={"+"}>
              +
            </button>
          </div>
          <div>
            <button className="button2" onClick={hanleClick} value={"."}>
              .
            </button>
            <button className="button3" onClick={hanleClick} value={0}>
              0
            </button>
            <button
              className="button2"
              style={{ background: "green" }}
              onClick={handleResult}
              value={"="}
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
}
export default Calcuator