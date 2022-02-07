import React, { useState, useEffect,createContext} from "react";
import { questions } from "../../quiz";
import Question from "./Question";
import Result from "./Result";
import Timer from "./Timer";
// import timeContext from '../useContext';
import Header from "./Header";

export const timeContext = createContext();
function Questions() {
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  
  const handleScore = () => {
    setScore(score + 1);
  };
 
   const [time,setTimer]= useState(50);
useEffect(()=>{
 
 const interval = setInterval(() => {
     if(!stop) {setTimer((prev) => prev - 1);}
 }, 1000) ;
 return ()=>clearInterval(interval);
  
  
},[stop])

  return (
    <div>
       <timeContext.Provider value={time}><Header/></timeContext.Provider>
  {/* <UserContext.Provider value={"time"}><Header/></UserContext.Provider> */}
  {/* <Timer/> */}
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
