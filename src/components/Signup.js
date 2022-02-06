import React from "react";

import { UserContext } from "../App";
 

function Signup() {
  const {user, setUser} = React.useContext(UserContext)
  // console.log(user, setUser);
  return (
    <>
      <h1>Signup</h1>
      <h2>{user.name}</h2>
      <form onSubmit={(event)=> {
        event.preventDefault()
        console.log(event.target[0].value)
        setUser({name: event.target[0].value})
      }}>
        <label>email:
          <input type="text"></input>
        </label>
        <label>password:
          <input></input>
        </label>
        <button type="submit">Sign me up</button>
      </form>
    </>
  );
}

export default Signup;
