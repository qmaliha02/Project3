
import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [ListofTent, setListofTent] = useState([]);
  const[ID, setID]= useState(0);
  const[Name, setName] = useState("");
  const[Phone_Number, setPNumber] = useState(0);
  const[Email, setEmail] = useState("");
  const[Date_of_CheckIn, setCheckIn] = useState("");
  const[Date_of_CheckOut, setCheckOut] = useState("");
  const[Apt_Num, setApt] = useState(0);


useEffect (() => 
{
  Axios.get("http://localhost:3001/getTenant").then((response) => {
    setListofTent(response.data);
  });
},[]);


const CreateTenant =() => {

  Axios.post("http://localhost:3001/createTenant",{
ID,
Name,
Phone_Number,
Email,
Date_of_CheckIn,
Date_of_CheckOut,
Apt_Num

  }).then((response) => {
    setListofTent([...ListofTent, {ID,
      Name,
      Phone_Number,
      Email,
      Date_of_CheckIn,
      Date_of_CheckOut,
      Apt_Num

    },]);
  });

};

const DeleteItem = (id, Name) => {
  if(window.confirm(`Are you sure you want to delete ${Name}`)){

fetch("http://localhost:3001/deleteTenant", {
method: "POST",
crossDomain: true,
headers: {
  "Content-type": "application/json",
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
},
body: JSON.stringify({
  id : id,
}),
})
.then((res) => res.json())
.then((data) => {
alert(data.data);
})
  }else{

  }
};

  return (
    <div className="App">
      <div className="Title">
        <h1>Manager</h1>
        <h1>List of Tenants</h1>
      </div>
      <div className="TentDisplay">
        {
          ListofTent.map((user)=>{
            return(
           <div className="ItemContainer">
            <div className="Display">
              <h1>ID: {user.ID}</h1>
              <h1>Name: {user.Name}</h1>
              <h1>Phone Number: {user.Phone_Number}</h1>
              <h1>Email: {user.Email}</h1>
              <h1>Date of Check-in: {user.Date_of_CheckIn}</h1>
              <h1>Date of Check-out: {user.Date_of_CheckOut}</h1>
              <h1>Apartment Number: {user.Apt_Num}</h1>
              </div>
              <button onClick={() =>{
               DeleteItem(user._id, user.Name);
            }}>Delete</button>
              </div>
            ); 
        })}

      </div>
      <div className="Create">
        <h1>Create New Tenant</h1>
        <input type="number" placeholder="ID..."onChange={(event) => {
          setID(event.target.value);
        }}/>
        <input type="text" placeholder="Name..."onChange={(event) => {
          setName(event.target.value);
        }}/>
        <input type="number" placeholder="Phone Number..."onChange={(event) => {
          setPNumber(event.target.value);
        }}/>
        <input type="text" placeholder="Email..."onChange={(event) => {
          setEmail(event.target.value);
        }}/>
        <input type="text" placeholder="date of check in..."onChange={(event) => {
          setCheckIn(event.target.value);
        }}/>
        <input type="text" placeholder="date of check out..."onChange={(event) => {
          setCheckOut(event.target.value);
        }}/>
        <input type="number" placeholder="Apartment Number..."onChange={(event) => {
          setApt(event.target.value);
        }}/>
        <button onClick={CreateTenant}> Create Tenant</button>
      </div>
      
    </div>
  );
}

export default App;
