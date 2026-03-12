import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        { ...inputValue },
        { withCredentials: true }
      );
      if (data.success) {
        window.location.href = "http://localhost:3001"; 
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container p-5 mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="/media/signup.png" style={{ width: "100%" }} alt="Signup" />
        </div>
        <div className="col-6 p-5">
          <h1 className="mb-4">Signup now</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" name="email" value={email} className="form-control" onChange={handleOnChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input type="text" name="username" value={username} className="form-control" onChange={handleOnChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" name="password" value={password} className="form-control" onChange={handleOnChange} required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
            <p className="mt-3">Already have an account? <Link to="/login">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;