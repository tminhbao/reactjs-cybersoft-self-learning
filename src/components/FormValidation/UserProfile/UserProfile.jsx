import React, { useState } from "react";
import "./UserProfile.css";

export default function UserProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passWordConfirm, setPasswordConfirm] = useState("");

  const handleChangeValue = (e) => {
    let { name, value } = e.target;
    setFirstName(value);
  };

  console.log(firstName);

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#EEEEEE",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form
        style={{
          fontSize:
            'font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif',
          width: 600,
        }}
        className=" bg-white p-5 m-5"
      >
        <h1 className="text-center mt-0 mb-5">User Profile</h1>
        <div className="row">
          <div className="col-6">
            <div className="group">
              <input
                type="text"
                required
                name="firstName"
                onChange={() => handleChangeValue()}
              />
              <span className="highlight" />
              <span className="bar" />
              <label>firstName</label>
              <span className="text text-danger"></span>
            </div>
          </div>
          <div className="col-6">
            <div className="group">
              <input type="text" name="lastName" required />
              <span className="highlight" />
              <span className="bar" />
              <label>lastName</label>
              <span className="text text-danger"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="group">
              <input type="text" name="userName" required />
              <span className="highlight" />
              <span className="bar" />
              <label>userName</label>
              <span className="text text-danger"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="group">
              <input type="email" name="email" required />
              <span className="highlight" />
              <span className="bar" />
              <label>email</label>
              <span className="text text-danger"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="group">
              <input name="passWord" type="password" required />
              <span className="highlight" />
              <span className="bar" />
              <label>password</label>
              <span className="text text-danger"></span>
            </div>
          </div>
          <div className="col-6">
            <div className="group">
              <input name="passWordConfirm" type="password" required />
              <span className="highlight" />
              <span className="bar" />
              <label>passwordConfirm</label>
              <span className="text text-danger"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <button
            className="btn text-white bg-dark w-100 col-12"
            style={{ fontSize: 25 }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
