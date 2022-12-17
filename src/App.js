import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("dark")//Whether Dark mode is enabled or not
  const [blue, setblue] = useState("blue")
  const [yellow, setyellow] = useState("yellow")
  // const [alert, setAlert] = useState(null)

  // let showAlert=(message,type)=>{
  //   setAlert({
  //     msg:message,
  //     type:type
  //   })
  //   setTimeout(() => {
  //    setAlert(null);
  //   }, 2000);
  // }

  const togglemode = () => {
    if (mode === "dark") {
      setmode("light")
      document.body.style.backgroundColor = "white"
      document.title = "TextUtils - Light mode"
      setInterval(() => {
        document.title = "TextUtils is amazing"
      }, 2000);
      setInterval(() => {
        document.title = "TextUtils fired"
      }, 1500);
      //  showAlert(" Light mode has been enabled","Success")
    }
    else {
      setmode("dark")
      document.body.style.backgroundColor = "grey"
      document.title = "TextUtils - Dark mode"
      setInterval(() => {
        document.title = "TextUtils is amazing"
      }, 2000);
      setInterval(() => {
        document.title = "TextUtils fired"
      }, 1500);
      //  showAlert(" Dark mode has been enabled","Success")

    }
  }

  const bluemode = () => {
    if (mode === "dark" || yellow === "yellow") {
      setblue("blue")
      document.body.style.backgroundColor = "blue"
      document.title = "TextUtils - Blue mode"
    }
  }
  const yellowmode = () => {
    if (mode === "dark" || blue === "blue") {
      setyellow("yellow")
      document.body.style.backgroundColor = "yellow"
      document.title = "TextUtils - Yellow mode"
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="Textutils" abouttext="About Textutils" mode={mode} togglemode={togglemode} bluemode={bluemode} yellowmode={yellowmode} />
        {/* <Alert alert={alert}/> */}
        {/* <Navbar /> */}
        <div className="container" >
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/"> */}
              <Textform heading="Enter Text to Analyse" />
            
          {/* </Route>
        </Switch> */}
        </div>
      {/* </Router> */}
          {/* <Textform  showAlert={showAlert} heading="Enter Text to Analyse"/> */}
          {/* <About/> */}

    </>
  );
}

export default App;