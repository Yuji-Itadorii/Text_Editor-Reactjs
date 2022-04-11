import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
function App() {
  return (
    <>
    <Navbar title="TextEditor" />
    <div className="container my-5">
    <Textform heading="Editor"/>
    </div>
    </>
  );
}

export default App;
