import React, { useState, useEffect} from "react";
import { questions } from "../../quiz";
import { Time } from "../styles/Header.style";
import Question from "./Question";
import Result from "./Result";



function Questions() {
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  
  const handleScore = () => {
    setScore(score + 1);
  };
 
   const [time,setTimer]= useState(50);
useEffect(()=>{
  console.log(time)
 
 const interval = setInterval(() => {
     if(!stop) {setTimer((prev) => prev - 1);}
 }, 1000) ;
 return ()=>clearInterval(interval);
  
     if(stop){
      console.log("hiiii")
  }
},[stop])

  return (
    <div>
    Time: { stop? time: time}
      {/* <Time>Time: <Timer setStop={setStop} questionNumber={questionNumber} /> </Time> */}
      
      {stop ? (

        <Result highScore={score}/>
      ) : (
        <>
          {
            <Question
              data={questions}
              questionNumber={questionNumber}
              score={score}
              setScore={setScore}
              setStop={setStop}
              setQuestionNumber={setQuestionNumber}
              setTimer={setTimer}
              time={time}
            />
          }
        </>
      )}
    </div>
  );
}

export default Questions;

{
  /* <div>
<p>{result}</p>
{questions.map((question, index) => (

  <Question {...question} key={index} getScore={handleScore} />
 
))}
</div>
); */
}
