import React from "react";

export default function About(props) {
//   const [myStyle, setMyStyle] = useState({
//         color: "black",
//         backgroundColor: "white",
//   });

let myStyle ={
    color: props.mode ==='dark'?'white':'#042743',
    backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white',
    // border: '2px solid',
    // borderColor: props.mode === 'dark'?'white':'#042743',
}
  
  return (
    <div className="container my-3" style={{color:props.mode ==='dark'?'white':'#042743'}}>
      <h1 className="my-2">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             <strong> Analyize your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils gives you a way to analyize your text quickly and
              eficiently .Be it word count,character count or
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button "
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
               <strong>Free to use</strong> 
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Textutils is a free character countertool that provide instatnt
                character count & word count statictics for a given
                text.Textutils reports the numberof words and chracter. thus it
                is suitablefor writing text with word/character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browser such as
                chrome,firefox,internet explorer,safari,opera. It suitsto count
                character in facebook , blog , books , excel,document,pdf
                document, essay ,etc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
