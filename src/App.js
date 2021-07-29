import {useState,useEffect} from 'react';
import {Loading} from './Loading';
import Questionbank from './Questions';
import  './App.css';

const App=()=> {
  const [loading,setLoading]=useState(true);
  const[error,setError]=useState(false);
  const [qna,setQna]=useState([]);
  
  const getQA=async(url)=>{
    const resp=await fetch(url);
    
    const data=await resp.json();
    
    return {resp,data};
  }

  useEffect(()=>{
    const url=`https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple`;
    getQA(url).then(
      result=>{
        
        if(result.resp.status>=200 && result.resp.status<=299)
        {
          setLoading(false);
          setQna(result.data.results);
          
        }

      }
    ).catch(err=>setError(true));

  },[]);

  if(error){
    return(<h1>Error loading data</h1>)
  }  
   return (
    <section className="section-center">
      <h1 className="title">QuizBee</h1>
      {loading && <Loading/>}
      {(!loading) && <Questionbank qna={qna}/>}
      </section>

    );
 
}

export default App;
