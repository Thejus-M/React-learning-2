import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("clicked"+text);
        let newText=text.toUpperCase()
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("on changed");
        setText(event.target.value)
    }
    const [text,setText] = useState("")
    return (
        <div>
            <h1>
                {props.area}
            </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} placeholder="Enter text here" id="myBox" onChange={handleOnChange} rows="8">
                </textarea>
            </div>
            <button className="btn btn btn-primary" onClick={handleUpClick}>
                Convert to UpperCase
            </button>
        </div>
    )
}
