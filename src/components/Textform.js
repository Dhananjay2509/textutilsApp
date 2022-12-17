import React,{useState} from 'react'
export default function Textform(props) {
    const [text, setText]= useState("Enter Text here")
    // text=("Set new text")//Wrong way to set text
    //  setText("Set new Text")//Correct way to set text

    const handleupclick=()=>{
        console.log("Uppercase was clicked");
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted to Uppercase","Success")
    }
    const handledownclick=()=>{
        console.log("Lowercase was clicked");
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert(" Converted to Lowercase","Success")

    }
    const handleonchange=(event)=>{
        console.log("onchange was clicked");
        setText(event.target.value)
    }
    const handleExtraspaces=()=>{
     let newText= text.split(/[ ] + /)
     setText(newText.join(" "))
    }

    return (
        <>
  <div className="container">
      <h1>{props.heading}</h1>
    <textarea className="form-control"  value={text} onChange={handleonchange} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2 my-1" onClick={handleupclick}>Convert to Uppercase</button> 
  <button className="btn btn-primary mx-2 my-1" onClick={handledownclick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-2 my-1" onClick={handleExtraspaces}>Remove Extra spaces </button>
  <div className="container my-2 my-2">
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <h2>Preview</h2>
    <p>{text}</p>
    </div>
    
  </>
  )
}
