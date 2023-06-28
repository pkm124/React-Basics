import {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import {Multi} from './Multi_Component';
import {classComp} from './classComp';
import Student from './Student';
import StudentClass from './StudentClass';
import Profile from './Profile';
import Login from './Login';
import PassFunction from './PassFunction';
import Home from './component/Home';
import About from './component/About';
import Page404 from './component/Page404';
import ParamComp from './component/ParamComp';

import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';


// import {BrowserRouter} from 'react-router-dom'

// alert("hello")
function App() {
  let data = "Pratik Mishra";

  const [data1, setData] = useState(0)
  function Apple()
  {
    // data = "Peeter";
    setData(data1+1)
    // alert(data);
    // return(<div>Nested Component</div>)
  }
  console.warn(".......................")

  const [print_text] = useState(null)
  function getData(val){
    console.log(val.target.value)
    setData(val.target.value)
  }

  const [status, setStatus] = useState(true)


  const[name, setName] = useState("");
  const[tnc, setTnc] = useState(false);
  const[interest, setInterest] = useState("");
  function getFormData(e) {
    console.log(name, tnc, interest)
    e.preventDefault()
  }


  function normalPass() {
    alert("hello from application");
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* <Link to="/about">About</Link> */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/home/:name" element={<Home />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="/abc" element={<Navigate to="/home" />} />
      </Routes>
      
      </BrowserRouter>
      <PassFunction data={normalPass}/>  
      {
        status ? <h1>Hello Show</h1> : null
      }
      <Profile />
      <Login />
      <h1>Hello World</h1>
      <p>{data1}</p>
      <User />
      <Multi />
      <Student name="anil" email="anil@teest.com" other={{address:"safdhkjashdf", phone_no:8798798}}/>
      <Student name="preti"/>
      {/* <Apple /> */}
      {/* {Apple()} */}
      <StudentClass name="Pratik Student Class"/>
      <button onClick={Apple}>Click Me</button>
      <button onClick={()=>alert("skadfhkjsafh")}>Arrow Function Button</button>
      <br /><br />
      <input type="text" placeholder='Enter something' onChange={getData}/>
      <p>{print_text}</p>

      <button onClick={()=>setStatus(!status)}>Toggle</button>



      {/* form */}

      <br/><br/><br/><br/>
      <form onSubmit={getFormData}>
        <input type="text" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/><br/><br/>
        <select onChange={(e)=>setInterest(e.target.value)}>
          <option>Select</option>
          <option>Marvel</option>
          <option>DC</option>
        </select>
        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Terms and Conditions</span>
        <br /><br />
        <input type="submit"/>
      </form>
    </div>
  );
}

class Demo extends Component
{
  constructor()
  {
    super();
    this.state={
      data:"anil"
    }
  }
  apple1()
  {
    this.setState({data:"sidhu"})
  }
  render()
  {
    return(
      <div>
        <h1>{this.state.data}</h1>
        <button onClick={()=>this.apple1()}>Update Data</button>
      </div>
    )
  }
}

export default App;