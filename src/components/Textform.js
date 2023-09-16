import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter text here");
  const handleTyping = (event) => {
    setText(event.target.value);
  };
  const deletePlaceholder = (event) => {
    if (event.target.value === "Enter text here") setText("");
  };
  const handleUpper = () => {
    if (text !== "Enter text here") {
      let newUpper = text.toUpperCase();
      setText(newUpper);
      props.showAlert("success", "Your text has been converted to Uppercase");
    }
  };
  const handleLower = () => {
    if (text !== "Enter text here") {
      let newLower = text.toLowerCase();
      setText(newLower);
      props.showAlert("success", "Your text has been converted to Lowercase");
    }
  };
  const handleClear = () => {
    if (text !== "Enter text here") {
      setText("");
      props.showAlert("success", "Your text has been cleared");
    }
  };
  const handleCopy = () => {
    if (text !== "Enter text here") {
      navigator.clipboard.writeText(text);
      props.showAlert("success", "Your text has been copied to clipboard");
    }
  };
  const handleExtraSpaces = () => {
    if (text !== "Enter text here") {
      let newSentence = text.split(/[ ]+/);
      setText(newSentence.join(" "));
      props.showAlert(
        "success",
        "Extra spaces has been removed from your text"
      );
    }
  };
  return (
    <>
      <div className="container my-3">
        <form>
          <div className="h1 my-4">TextUtils - The complete text analyzer.</div>
          <div className="form-group">
            <label htmlFor="myForm">Enter your text below</label>
            <textarea
              className="form-control"
              id="myForm"
              rows={10}
              value={text}
              onChange={handleTyping}
              onClick={deletePlaceholder}
              style={
                props.mode === "dark"
                  ? { backgroundColor: "#343A40", color: "white" }
                  : {}
              }
            />
          </div>
        </form>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "dark" ? "outline-" : ""
          }primary m-2`}
          onClick={handleUpper}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "dark" ? "outline-" : ""
          }warning m-2`}
          onClick={handleLower}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "dark" ? "outline-" : ""
          }danger m-2"`}
          onClick={handleClear}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "dark" ? "outline-" : ""
          }success m-2`}
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "dark" ? "outline-light" : "dark"
          } m-2`}
          onClick={handleExtraSpaces}
        >
          Remove extra spaces
        </button>
      </div>

      <div className="container">
        <div className="lead">
          {text === "Enter text here"
            ? 0
            : text.split(/\s+/).filter((word) => {
                return word !== "";
              }).length}{" "}
          words and {text === "Enter text here" ? 0 : text.length} characters
        </div>
      </div>
    </>
  );
}
