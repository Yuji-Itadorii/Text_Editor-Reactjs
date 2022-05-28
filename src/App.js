import './App.css';
import { useState } from 'react';
// import About from './component/About';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';


function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

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
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Light Mode enabled" , "success");
    }
    console.log("hello");
  }
  return (
    <>
    <Navbar title="TextEditor" Mode={Mode}  />
    <Alert  alert={alert}  />
    <div className="container my-5">
    <Textform heading="Editor" Mode={Mode} toggleMode={toggleMode} alert={alert}  showAlert={showAlert}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
