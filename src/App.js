import './App.css';
import { useState } from 'react';
import About from './component/About';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';
import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);
  const [textColor, settextColor] = useState("dark");

  const showAlert=(message , type)=>{
    setalert({
      msg : message,
      typ : type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const toggleMode=() =>{
    if(Mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
      showAlert("Dark Mode enabled" , "success");
      settextColor("light");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Light Mode enabled" , "success");
      settextColor("dark");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextEditor" Mode={Mode}  toggleMode={toggleMode} />
    <Alert  alert={alert}  />
      <Routes>
          <Route path="/" element={<div className="container my-5">
    <Textform heading="Editor" Mode={Mode} toggleMode={toggleMode} alert={alert}  showAlert={showAlert}/>
    </div>} />
          <Route path="/about" element={<div className="container my-5">
    <About toggleMode={toggleMode} Mode={Mode} textColor={textColor}/>
    </div>} />
    </Routes>
      </Router>
    </>
  );
}

export default App;
