import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
    const [text,setText] = useState("");
    const handleOnclick = ()=>{
        let newText = text.toUpperCase(); 
        setText(newText);
    }
    
    const convertLower = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const clearText = ()=>{
        setText("");
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
            <button className="btn btn-primary" onClick={handleOnclick} >Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={convertLower} >Convert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick={clearText} >Clear text</button>
            </div>
        </div>
        <div className="container mt-3">
            <h4>Your text summary</h4>
            <p> {text.split(" ").length-1} Words and {text.length} Characters </p>
        </div>
        </>
    )
}

Textform.prototype = {
    heading: PropTypes.string,
}