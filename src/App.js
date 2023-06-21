import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);

  const [mode, setMode] = useState("light");


  const [greenMode, setGreenMode] = useState("");

  let showMessage = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

const removeClasses=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-sucess')
}


  const toggleMode = (cls) => {
    removeClasses()
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showMessage("Dark mode has been enable", "success");
      document.title = "React App - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showMessage("Light mode has been enable", "success");
      document.title = "React App - Light  Mode";
    }
  };

  return (
    <>
      <Router>

        <Navbar
          title="TextUtils"
          homePage="Home"
          aboutPage="About"
          mode={mode}
          greenMode={greenMode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm
                heading="Enter your text for analyze"
                mode={mode}
                showMessage={showMessage}
              />}> 
              
            </Route>
            <Route exact path="/about" element={ <About  mode={mode}/>}> 
             
            </Route>
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
