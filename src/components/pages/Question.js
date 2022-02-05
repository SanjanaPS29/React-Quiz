import React, { useEffect, useState} from "react";
import { Container } from "../styles/Container.style";
import { OptionStyle, ListStyle} from "../styles/Question.style";

function Question({
  data,
  score,
  setScore,
  setStop,
  setQuestionNumber,
  questionNumber,
  setTimer,
  time
}) {

 
  const [correct, setCorrect] = useState();
  // const [stop, setStop] = useState(false);
  const [question, setQuestion] = useState(null);
  //  const {data, setTimeout,setQuestionNumber,questionNumber} = props;

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };
useEffect(()=>{
  if(time<=0){
    set();
  }

},[time])



function set(){
     setQuestionNumber((prev) => prev + 1);
        setCorrect(null);
       
     if(data[questionNumber] == null){
      setTimer(null);
   setStop(true);
    }
    else{
      setTimer(50);
    }
}
  const checkAnswer = (opt) => {
    const choose = opt.option;

     if (choose == question.answer) {
      setCorrect("Correct!");
      setScore(score + 1);
   
      const ti=setTimeout(() => {
        set();
      
      }, 200);
     
    } else {
    setTimer(time-10)
      setCorrect("Incorrect!");
           
    }

  };
 


  return (
  
    <Container>
      <h2>{question?.questionText}</h2>
      <ListStyle>
        {question?.options.map((option, index) => (
          <OptionStyle key={index} onClick={(e) => checkAnswer({ option })}>
            {option}
          </OptionStyle>
        ))}
        <hr />
        <p>{correct}</p>
      </ListStyle>

    </Container>
    
  );
}

export default Question;

//
//   let interval;
//   if (timer) { useEffect(() => {
//     interval = setInterval(() => {
//       console.log("In setInterval");
//     }, 1000);
//   } else {
//     clearInterval(interval);
//   }
//   return () => clearInterval(interval);
// }, [timer]);

// let timer=0;
// let interval=0;
//   useEffect(() => {
//   setInterval(countDown,1000);
//   }, []);

// const countDown= () =>{
// if(timer === 20){
//   clearInterval(interval);
// }
// else{
//   timer++;
//   console.log(timer);
// }
// }
