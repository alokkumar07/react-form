import React, { useState } from "react";

let componentRender =0;
const UserInfoComponentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const ChangeHandler = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    if (inputName === "name") {
      setName(inputValue);
    } else if (inputName === "email") {
      setEmail(inputValue);
    } else if (inputName === "phone") {
      setPhone(inputValue);
    }
  };

  const formSubmitHandler =(e)=>{
    e.preventDefault();
    console.log("Form submit handler")

    let data= { name,email,  phone }
    if(name === ""){
        alert("Please enter name")
    }else if(email === ""){
        alert("Please enter email")
    }else if(phone === ""){
        alert("Please enter phone")
    }
    console.log(data,'data')
  }

  componentRender++;

  return (
    <div className="userForm">
      <h2>User Info Details</h2>
      <h3> MU component rerender -{componentRender}</h3>
      <form action="#" onSubmit={formSubmitHandler} className="userDetailsForm">
        <div className="formGroup">
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type="text"
            name="name"
            value={name}
            onChange={ChangeHandler}
            placeholder="Enter Your Name"
          />
        </div>
        <div className="formGroup">
          <label  htmlFor='email'>Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={ChangeHandler}
            placeholder="Enter Your email"
          />
        </div>
        <div className="formGroup">
          <label  htmlFor='phone'>Mobile No</label>
          <input
            id="phone"
            type="number"
            name="phone"
            value={phone}
            onChange={ChangeHandler}
            placeholder="Enter Your Number"
          />
        </div>
        <div className="formGroup">
          <input type="submit" value="save" />
        </div>
      </form>
    </div>
  );
};

export default UserInfoComponentForm;
