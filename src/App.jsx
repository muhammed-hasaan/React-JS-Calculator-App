import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function  Add(){
    var a1 = parseFloat(document.getElementById("number1").value);
    var b1 = parseFloat(document.getElementById("number2").value);
    var sum = a1 + b1;
    console.log(sum);
    document.getElementById("show").style.fontSize = "30px";
    document.getElementById("show").style.color = "blue";
  document.getElementById("show").innerText = sum;
  document.getElementById("sign").innerText = " + ";
}
function  Subtract(){
  var a2 = document.getElementById("number1").value;
  var b2 = document.getElementById("number2").value;
  var sub = a2 - b2
  document.getElementById("show").innerHTML = sub;
  document.getElementById("sign").innerText = " - ";
}
function  Multiply(){
  var a3 = document.getElementById("number1").value;
  var b3 = document.getElementById("number2").value;
  var mul = a3 * b3
  document.getElementById("show").innerHTML = mul;
  document.getElementById("sign").innerText = " x ";
}
function  Divide(){
  var a4 = document.getElementById("number1").value;
  var b4 = document.getElementById("number2").value;
  var divi = a4 / b4
  document.getElementById("show").innerHTML = divi;
  document.getElementById("sign").innerText = " / ";
}
  return (
    <>
    <div>
      <h2><b style={{color:"red", padding:"10px" , height:"10px" , paddingLeft:"30px"   , paddingRight:"30px" , fontSize:"30px"}}>Calculator <b style={{color:"blue"}}>With</b> <b style={{color:"green"}}>React</b></b></h2>
      <h2 id='show'><b style={{color:"blue", padding:"10px" , height:"10px" , paddingLeft:"30px"   , paddingRight:"30px", fontSize:"30px"}}>0</b></h2>
     <input style={{width:"250px", height:"30px", borderRadius:"20px", border:"1px solid gray" , paddingLeft:"30px", }} type="number"id='number1' />
     <span id='sign'> x </span>
  
     <input style={{width:"250px", height:"30px", borderRadius:"20px", border:"1px solid gray" , paddingLeft:"30px", }} type="number"id='number2' />
     <br />
     <br />
     <div className='btns'>

     <button style={{border:"1px solid Red"}} onClick={() => Add()}><b style={{color:"Red",}}>Add</b></button>
     <button style={{border:"1px solid Green"}} onClick={() => Subtract()}><b style={{color:"Green",}}>minus</b></button>
     <button style={{border:"1px solid brown"}} onClick={() => Multiply()}><b style={{color:"brown",}}>Multiply</b></button>
     <button style={{border:"1px solid blue"}} onClick={() => Divide()}><b style={{color:"blue",}}>Divide</b></button>
     </div>
    </div>
    </>
  )
}

export default App
