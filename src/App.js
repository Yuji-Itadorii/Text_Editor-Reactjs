import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
// import Textform from './component/Textform';
function App() {
  return (
    <>
    <Navbar title="TextEditor" />
    <div className="container my-5">
    {/* <Textform heading="Editor"/> */}
    <About/>
    </div>
    </>
  );
}

export default App;
