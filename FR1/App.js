import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";




function App() {

  const[listofProb, setlistofProb] = useState ([]);
  const[reqid, setID]= useState(0);
  const[aptnum, setNum]= useState(0);
  const[probarea, setArea]= useState("");    
  const[description, setDesc]= useState("");   
  const[photo, setPhoto]= useState("");   
  const[status, setStat]= useState("");   
  const[date, setDate]= useState(0); 

  const createRequest =() => {

    Axios.post("http://localhost:3001/createRequest",{
  reqid,
  aptnum,
  probarea,
  description,
  photo,
  status,
  date
  
    }).then((response) => {
      setlistofProb([...listofProb, {reqid,
        aptnum,
        probarea,
        description,
        photo,
        status,
        date
  
      },]);
    });
  
  };





  return (
    <div className="App">
      <div className="Title">
        <h1>Maintenance Request</h1>
        <h1>Please fill this form and our staff will reach out as soon as possible.</h1>
      </div>
      <div className="Request">
             <input type="number" placeholder="Request ID..."onChange={(event) => {
          setID(event.target.value);
        }}/>
        <input type="number" placeholder="Apartment Number..."onChange={(event) => {
          setNum(event.target.value);
        }}/>
        <input type="text" placeholder="Problem Area..."onChange={(event) => {
          setArea(event.target.value);
        }}/>
        <div className="Special">
        <input type="text" placeholder="Description..."onChange={(event) => {
          setDesc(event.target.value);
        }}/>
        </div>
        <input type="text" placeholder="Photo..."onChange={(event) => {
          setPhoto(event.target.value);
        }}/>
        <input type="text" placeholder="Status..."onChange={(event) => {
          setStat(event.target.value);
        }}/>
        <input type="text" placeholder="Date..."onChange={(event) => {
          setDate(event.target.value);
        }}/>
        <button onClick={createRequest}> Create Request</button>
        </div>
    </div>
  );
}

export default App;
