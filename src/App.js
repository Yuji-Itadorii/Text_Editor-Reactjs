import './App.css';
import { useState } from 'react';
// import About from './component/About';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
function App() {
  const [Mode, setMode] = useState('light');

  const toggleMode=() =>{
    if(Mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
    }
    console.log("hello");
  }
  return (
    <>
    <Navbar title="TextEditor" Mode={Mode}  />
    <div className="container my-5">
    <Textform heading="Editor" Mode={Mode} toggleMode={toggleMode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
