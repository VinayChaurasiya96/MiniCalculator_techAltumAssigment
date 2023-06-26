import { useState } from "react"
import "./App.css";


const App = ()=> {

   const [fields,setFields] = useState({num1:"", num2:"",result:""});


   const onChangeHandler = (e)=>{
        let name =  e.target.name;
        let value = Number(e.target.value);
        setFields({...fields, [name]:value})
        
   }

    const doOperation = (e,value)=>{
        e.preventDefault()
        if(value == "+"){
            let sum =  Number(fields.num1) + Number(fields.num2);
            setFields({...fields, result:sum})
        }
        if(value == "-"){
            let subs =  Number(fields.num1) - Number(fields.num2);
            setFields({...fields, result:subs})
        }
        if(value == "*"){
            let mult =  Number(fields.num1) * Number(fields.num2);
            setFields({...fields, result:mult})
        }
        if(value == "/"){
            let divs =  Number(fields.num1) / Number(fields.num2);
            setFields({...fields, result:divs})
        }
       
    
        
    }
    return(
        <>
            <h1>Tech Altum Mini Calculator </h1>
           <form >
               <label htmlFor="num1">Enter first number</label> <br />
               <input onChange={onChangeHandler} type="text" name="num1"  value={fields.num1} required/><br />
               <label htmlFor="num2">Enter second number</label><br />
               <input onChange={onChangeHandler} type="text" name="num2" value={fields.num2} required /> <br />
               <input  onClick={(e)=>doOperation(e,"+")}  type="submit"  value="+" />
               <input  onClick={(e)=>doOperation(e,"-")} type="submit" value="-" />
               <input  onClick={(e)=>doOperation(e,"*")} type="submit" value="*"/>
               <input  onClick={(e)=>doOperation(e,"/")} type="submit"  value="/"/> <br />
               <label htmlFor="result">Result</label> <br />
               <input onChange={onChangeHandler} type="text" name="result"  value={fields.result}/>
               

               
           </form>
        </>
    )
}

export default App;