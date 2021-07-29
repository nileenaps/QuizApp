import { useState } from "react";


const DispQnA=({question,options,correctAns,selected})=>{

    const [choices,setChoices]=useState(options);

    const handleAnsSelect=(choice,selected)=>{
        setChoices([choice]);
        selected(choice,correctAns);
        
        
    }
    return( 
        <li >
        <h3>{question}</h3>

        {choices.map((choice,i)=>{

            return(
                 <button key={i} className="btn"  onClick={()=>handleAnsSelect(choice,selected)}>{choice}</button>
                 

                 )

        })} 
       
    </li> 

    )        


}
export default DispQnA;