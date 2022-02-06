import React from "react";

function Login() {
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={(event)=>{
        event.preventDefault()
      }}>
        <label>email:
          <input></input>
        </label>
        <label>password:
          <input></input>
        </label>
        <button type="submit">log me in</button>
      </form>
    </>
  );
}

export default Login;
