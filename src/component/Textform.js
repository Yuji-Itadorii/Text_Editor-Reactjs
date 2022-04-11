import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
    const [text,setText] = useState();
    const handleOnclick = ()=>{
        let newText = text.toUpperCase(); 
        setText(newText);
    }

    const handleOnchange = (event)=>{
        setText(event.target.value);
    }
    return (
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Text area</label>
                <textarea className="form-control" onChange={handleOnchange} value={text} id="box" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleOnclick} >Convert to uppercase</button>
        </div>
    )
}

Textform.prototype = {
    heading: PropTypes.string,
}