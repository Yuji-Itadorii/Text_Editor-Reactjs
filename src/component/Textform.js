import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
    const [text,setText] = useState("");
    const handleOnclick = ()=>{
        let newText = text.toUpperCase(); 
        setText(newText);
        props.showAlert(" converted to upper case ! " , "success");

    }
    
    const convertLower = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert(" converted to lower case ! " , "success");
    }
    const clearText = ()=>{
        setText("");
        props.showAlert(" text cleared ! " , "success");
    }
    const copyText = ()=>{
        var text = document.getElementById("box");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" text copied ! " , "success");

    }

    const handleOnchange = (event)=>{
        setText(event.target.value);
    }

    return (
        <>
        <div className='conatiner'>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Text area</label>
                <textarea className="form-control" onChange={handleOnchange} value={text} id="box" rows="8"></textarea>
            </div>
            <div className="container">
            <button className={`btn btn-${props.Mode} border border-dark mx-1 my-1  fun_btn`} onClick={handleOnclick} >Convert to uppercase</button>
            <button className={`btn btn-${props.Mode} mx-1 my-1 border border-dark fun_btn`} onClick={convertLower} >Convert to lowercase</button>
            <button className={`btn btn-${props.Mode} mx-1 my-1 border border-dark fun_btn`} onClick={clearText} >Clear text</button>
            <button className={`btn btn-${props.Mode} mx-1 my-1 border border-dark fun_btn`} onClick={copyText} >Copy text</button>
            </div>
        </div>
        <div className="container mt-3">
            <h4>Your text summary</h4>
            <p> {text.split(" ").length-1} Words and {text.length} Characters </p>
        </div>
        <div className="container">
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" onClick={props.toggleMode} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
        </div>
        </>
        
    )
}

Textform.prototype = {
    heading: PropTypes.string,
}