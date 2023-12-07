import './App.css';
import { useState, useEffect } from 'react';
import Axios from "axios";

function App() {

  const[listofProb, setlistofProb] = useState ([]);
  const[searchTerm, setSearchTerm]=useState('');


  useEffect(()  => {
  Axios.get("http://localhost:3001/getProblems").then((response) => {
    setlistofProb(response.data);
  })
}, []);

  const UpdateStatus = (id) => {
    const newStat = prompt("Enter new Status : ");

    Axios.put("http://localhost:3001/UpdateStatus", {newStat: newStat, id: id}).then(() =>{
      setlistofProb(listofProb.map((item) =>{
        return item._id === id ? {_id: id, 
          reqid: item.reqid, 
          aptnum: item.aptnum,
          probarea: item.probarea,
          description: item.description,
          photo: item.photo,
          status: newStat,
          date: item.date} : item
      }))
    })};


  return (
    <div className="App">
      <div className="Title">
<h1>Maintenance Request</h1>
<input type="text" placeholder="Search..."onChange={(event) => {
  setSearchTerm(event.target.value);
           }}/>
<button> Search</button>
          
              </div>
       <div className="ItemDisplay">
      {
      listofProb.map((item) => {



          return (
            <div className="Display">
              
              <h1>Request ID: {item.reqid}</h1>
              <h1>Apartment Number: {item.aptnum}</h1>
              <h1>Problem Area: {item.probarea}</h1>
              <h1>Description: {item.description}</h1>
              <h1>Optional PhotoUrl: {item.photo}</h1>
              <h1>Status: {item.status}</h1>
              <h1>Date: {item.date}</h1>
             <button onClick={() => {
              UpdateStatus(item._id);
            }} 
            >Update Status</button>
           
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
