import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Text is converted to uppercase!!","success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText);
        props.showAlert("Text is converted to lowercase!!","success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleClear = (event) => {
        setText("")
        props.showAlert("Text is cleared !!","success");
    }

    const [text, setText] = useState("")
    return (
        <>
            <div className='container'>
                <h1> {
                    props.area
                } </h1>
                <div className="mb-3">
                    <textarea className="form-control"
                        value={text}
                        style={
                            {
                                background: props.mode === 'light' ? 'white' : 'rgb(99, 99, 100)',
                                color: props.mode === 'dark' ? 'white' : 'black'
                            }
                        }
                        placeholder="Enter text here"
                        id="myBox"
                        onChange={handleOnChange}
                        rows="8"></textarea>
                </div>
                <button className="btn btn btn-primary mx-2"
                    onClick={handleUpClick}>
                    Convert to Upper Case
                </button>
                <button className="btn btn btn-primary mx-2"
                    onClick={handleLoClick}>
                    Convert to Lower Case
                </button>
                <button className="btn btn btn-primary mx-2"
                    onClick={handleClear}>
                    Clear
                </button>
            </div><br />
            <div className="container my-3">
                <h2>Your text Summary</h2>
                <p>{
                    text === "" ? 0 : (text.split(" ").length)
                }
                    <b>words</b>
                </p>
                <p>{
                    text.length
                }
                    <b>characters</b>
                </p>
                <p> {
                    text === "" ? 0 : (0.008 * (text.split(" ").length))
                }
                    <b>
                        time take to read in minutes</b>
                </p>
                <h2>Preview</h2>
                <div className="box">
                    {text.length===0?'Enter a Text to Preview':text} </div>
            </div>
        </>
    )
}
