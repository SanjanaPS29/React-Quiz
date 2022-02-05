import React from "react";
import { useEffect } from "react";




function Timer({time}) {


  // const [timer, setTimer] = useState(null);
  useEffect(() => {
    //if (timer <= 0) return setStop(true);
    // const interval = setInterval(() => {
    //   setTimer((prev) => prev - 1);
    // }, 2000);

  }, [time]);

  // useEffect(() => {
  //   setTimer(50);
  //   console.log(timer);
  // }, []);

  return (
    // <countContext.Provider value={timer}>
    //   <Header />
    // </countContext.Provider>
   <>
   {`${time!==undefined?time:'50'}`}
   </>
  );
}
export default Timer;




// useEffect(() => {
//   setTimer(5000);
//   console.log(timer);
// }, [questionNumber]);
