import React, { useState } from "react";
import { UseState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    const body = {
      name,
      email,
      password,
    };
    console.log("body => ", body);
    try {
      const response = await fetch("http://localhost:8080/create-user", {
        // const response = await fetch("http://localhost:8080/signUp", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });

      response.json().then((res) => {
        console.log(res.message, res.data);
        alert(res.message);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <input
        className="inputBox"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <input
        className="inputBox"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button onClick={handleSignUp} className="appButton" type="buttion">
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
