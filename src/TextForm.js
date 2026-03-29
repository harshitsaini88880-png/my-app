import React, {useState , useRef}  from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log("UpperCase Was Clicked" + text);
    let newText = text.toUpperCase();
     setText(newText);
  }

 const handleDownClick = ()=>{
    console.log("LowerCase Was Clicked" + text);
    let newText = text.toLowerCase();
     setText(newText);
  }

 const handleClearClick = ()=>{
    console.log("LowerCase Was Clicked" + text);
    let newText = ('');
     setText(newText);
  }

 const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value);
  }

  const handleFirstWordCapital = () => {
  let newText = text.charAt(0).toUpperCase() + text.slice(1);
  setText(newText);
};

const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{color :props.mode==='dark'?'white':'black'}}>
       <h1> {props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value= {text} onChange={handleOnChange} style={{background :props.mode==='light'?'grey':'white', color: props.mode==='black'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
       <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
       <button className="btn btn-primary mx-2" onClick={handleFirstWordCapital}>First Word Capital</button>
     </div>
     <div className="container mt-3" style={{color :props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split (" ") .length -1} Word And {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
     </div>
     </>
  )
}
