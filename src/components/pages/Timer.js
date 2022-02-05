import React,{useContext} from "react";
import { timeContext} from "./Questions";
import { Time } from "../styles/Header.style";
import Header from "./Header";
import {useEffect} from 'react';


function Timer() {
  const time=useContext(timeContext);
  
  useEffect(() => {
console.log("dfddfdfddffdfgf")
  }, [time]);

  return (
<> 
{time}
{/* <UserContext.Provider value={time}><Header/></UserContext.Provider>  */}
{/* <UserContext.Provider value={time}><Header/></UserContext.Provider> */}
   {/* {`${time!==undefined?time:time}`} */}
   {/* {`${time!==undefined?time:time}`} */}
   </>
  );
}
export default Timer;

