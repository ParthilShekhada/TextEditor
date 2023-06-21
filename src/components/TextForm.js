import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpCase = () => {
    console.log("Click");
    let newText = text.toUpperCase();
    setText(newText);
    props.showMessage("Converted to Uppercase", "success");
  };

  const handleLoCase = () => {
    console.log("Click");
    let newText = text.toLowerCase();
    setText(newText);
    props.showMessage("Converted to Lowercase", "success");
  };

  const handleClearCase = () => {
    console.log("Click");
    setText("");
    props.showMessage("Clear Text Area", "success");
  };

  const handleInCase = () => {
    console.log("Click");
    let newText = text.split("").reverse().join("");
    console.log(newText);
    setText(newText);
    props.showMessage("Converted to Reverse Order", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showMessage("Copy text successfully!!!", "success");
  };

  const handleRemoveSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showMessage("Remove Extra  space successfully!!!", "success");
  };

  const handleOnChange = (event) => {
    console.log("change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <div>
      <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
        {props.heading}
      </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="textBox"
          rows="8"
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleUpCase}>
        Convet To Uppercase
      </button>
      <button disabled={text.length===0} className="btn btn-success mx-3 my-1" onClick={handleLoCase}>
        Convet To LowerCase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleInCase}>
        Convet To Reversecase
      </button>
      <button disabled={text.length===0} className="btn btn-success mx-3 my-1" onClick={handleClearCase}>
        Clear Textarea
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleCopy}>
        Copy text
      </button>
     
      <div className="container my-3">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Your text summary
        </h1>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Word and {text.length} Characters
        </p>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read
        </p>
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Preview
        </h2>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {text.length > 0
            ? text
            : "Enter Something  is the textbox above  to preview here"}
        </p>
      </div>
    </div>
  );
}
