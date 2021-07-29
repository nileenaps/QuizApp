import DisplayScore from './DisplayScore';
import DispQnA from './DispQnA';
import { useState} from 'react';




const Questionbank=({qna})=>{
    
    const [score,setScore]=useState(0);
    const [total,setTotal]=useState(0);

    const selected=(choice,correctAns)=>{
        
        setTotal(total+1);
        if(choice===correctAns) setScore(score+1);
       

    }

    return(
    <>     {(total<qna.length) &&
            <ol>
            {qna.map((data,index)=>{
               const options=data.incorrect_answers.concat(data.correct_answer);
               const question=data.question;
               const correctAns=data.correct_answer;
               
               return ( <DispQnA key={index} question={question} options={options} correctAns={correctAns} selected={selected} />)
  
                }
            )}
            </ol>
             }

            {(total===qna.length) && <DisplayScore score={score} total={qna.length}/>
            }
    </>)

}





export default Questionbank;