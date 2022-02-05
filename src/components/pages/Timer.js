import React,{useContext} from "react";
import { UserContext } from "./Questions";
import { Time } from "../styles/Header.style";
import Header from "./Header";
import {useEffect} from 'react';
function Timer() {
  const time=useContext(UserContext);

  
  useEffect(() => {

  }, [time]);

  return (
<> 
{/* <UserContext.Provider value={time}><Header/></UserContext.Provider>  */}
{/* <UserContext.Provider value={time}><Header/></UserContext.Provider> */}
   {/* {`${time!==undefined?time:time}`} */}
   {/* {`${time!==undefined?time:time}`} */}
   </>
  );
}
export default Timer;

