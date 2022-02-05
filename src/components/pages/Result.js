import React from "react";
import { useState, useEffect } from "react";
import { Container } from "../styles/Container.style";
import { useNavigate } from "react-router-dom";

function Result({ highScore }) {
  // const u=useContext(userContext);
  const [name, setName] = useState("");
  const navigate = useNavigate();


  // const {user, setUser,addUser}=u;
  const onSubmit = (e) => {
    e.preventDefault();
    // setShow(false);
    const user = { name: name, score: highScore };
    const getData = localStorage.users;
    if (getData == null) {
      localStorage.setItem("users", "[]");
    }
    const old = JSON.parse(localStorage.getItem("users"));
    old.push(user);
    localStorage.setItem("users", JSON.stringify(old));
    navigate("/highscore");
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

 

  return (
    <>

      <div>
        <Container>
          <form>
            <h2>All done!</h2>

            <p>Your final score is {highScore}.</p>
            <label>Enter initails:</label>
            <input
              type="text"
              name="name"
              onChange={(e) => {
                onChange(e);
              }}
            />
            <button onClick={(e) => onSubmit(e)}>Submit</button>
          </form>
        </Container>
      </div>
    </>
  );
}

export default Result;
