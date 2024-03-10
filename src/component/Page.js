import "./Page.css"
import { useState } from "react";
import paradata from "../Para.json"
import ListItem from "./ListItem";


function Page(){

    const [inputValue, setinputvalue] = useState();
    const [arr,setarr] = useState([]);

    function handleclick (e){
       e.preventDefault();
      if(inputValue > 8 ){
           alert(" Ayyo ! you are demanding very much paragraph in one go, kindly take little little 😀");
           return;
        }
        else if(inputValue < 1){
            alert("Ayyo ! you know that you wrote negative input 😵")
            return;
     } 
       let newArray = [];
       for(let i = 0; i<inputValue;i++){
            const obj = paradata[i];
             newArray.push(obj.para);
              
              }
     
        setarr(newArray);
       
    } 
    return(
<div>
        <h3 className="h3head">TIRED OF BORING LOREM IPSUM ?</h3>
        <form>
            <label className="paragraph">Paragraph:</label>
            <input className="inputype" type="number" onChange={(e)=>setinputvalue(e.target.value)} value={inputValue}></input>
            <button  className="btn1" onClick={handleclick}>Generate</button>
        </form>
        <ul>
           {arr.map((para)=>{
               return <ListItem para={para}/>
           })} 
        </ul>

   </div>
    )
}

export default Page;