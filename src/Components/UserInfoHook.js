import React from "react";
import {useForm} from 'react-hook-form'
import {DevTool} from "@hookform/devtools"

let componentRender =0;

const UserInfoComponentForm2 = () => {
    const form =useForm();
    const {register,control,handleSubmit} = form;
    // const {name,ref,onChange,onBlur} = register('name')
    // console.log(form,'form');

    const formSubmit = (data) =>{
        console.log(data,'data')
    }


  componentRender++;

  return (
    <div className="userForm">
      <h2>User Info Details</h2>
      <h3> MY component rerender -{componentRender}</h3>
      <form action="#" onSubmit={handleSubmit(formSubmit)} className="userDetailsForm">
        <div className="formGroup">
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            {...register('name')}
            type="text" 
            placeholder="Enter Your Name"
          />
        </div>
        <div className="formGroup">
          <label  htmlFor='email'>Email</label>
          <input
            {...register('email')}
            id="email"
            type="email"
           
            placeholder="Enter Your email"
          />
        </div>
        <div className="formGroup">
          <label  htmlFor='phone'>Mobile No</label>
          <input
             {...register('phone')}
            id="phone"
            type="number"
            placeholder="Enter Your Number"
          />
        </div>
        <div className="formGroup">
          <input type="submit" value="save" />
        </div>
      </form>
      <DevTool control={control}/>
    </div>
  );
};

export default UserInfoComponentForm2;
