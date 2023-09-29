import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from "axios"


const Login=()=> {
  const ship=useNavigate()
  const [name,setname]= useState();
  const [middle_name,setmiddle_name]= useState();
  const [last_name,setlast_name]= useState();
  const [gender,setgender]= useState();
  const [address,setaddress]= useState();
  const [state,setstate]= useState();
  const [city,setcity]= useState();
  const [pin_code,setpin_code]= useState();
  const [phone_number,setphone_number]= useState();
  const [email,setemail]= useState();
  const [password,setpassword]= useState();

  function confrim_submit (e){
    e.preventDefault()
    
    axios.post("http://localhost:3090/register",{
      name,middle_name,last_name,gender,address,password
    }).then((res)=>{
      if(res.data=="done"){
        ship("/")
      }
      else{
        alert("something went wrong")
      }
    })
  }
  
  return (
    <>
<form method="POST" onSubmit={confrim_submit}>
 <label >FIRST NAME</label>
 <input type="text" name='name_data' onChange={(e)=>{
   setname(e.target.value)
 }}/>

 <label >MIDDLE NAME</label>
 <input type="text" name='mail_data'onChange={(e)=>{
   setmiddle_name(e.target.value)
 }}/>

 <label >LAST NAME</label>
 <input type="text" name='mail_data'onChange={(e)=>{
   setlast_name(e.target.value)
 }}/>
 
 <label >GENDER</label>
 <input type="text" name='gender_data'onChange={(e)=>{
   setgender(e.target.value)
 }}/>
 
 <label >ADDRESS</label>
 <input type="text" name='address_data'onChange={(e)=>{
   setaddress(e.target.value)
 }}/>

 <label >STATE</label>
 <input type="text" name='address_data'onChange={(e)=>{
   setstate(e.target.value)
 }}/>

 <label >CITY</label>
 <input type="text" name='address_data'onChange={(e)=>{
   setcity(e.target.value)
 }}/>

<label >PIN CODE</label>
 <input type="text" name='address_data'onChange={(e)=>{
   setpin_code(e.target.value)
 }}/>

<label >PHONE NUMBER</label>
 <input type="text" name='address_data'onChange={(e)=>{
   setphone_number(e.target.value)
 }}/>

<label >EMAIL</label>
 <input type="text" name='address_data'onChange={(e)=>{
   setemail(e.target.value)
 }}/>

<label >PASSWORD</label>
 <input type="text" name='password_data' onChange={(e)=>{
   setpassword(e.target.value)
 }}/>


<button type='submit'>


confirm

</button>

</form>


<div className='dumbstars'>
 <p>already have accout</p>
 <button>
 <Link to="/">log in</Link>
</button>
 
</div>

    </>
    
  );
};

export {Login};


