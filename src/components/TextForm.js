import { useState } from "react";


function TextForm(props) {

    const handleUpClick = () => {
        //console.log("Clicked!" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To UpperCase", 'success');
    }

    const handleOnChange = (e) => {
        //console.log("Change!");
        setText(e.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const removeExtraSpaces = () => {
        let res = text.split(/[ ]+/);
        setText(res.join(" "));
    }

    const handleClear = () => {
        let clearText = '';
        setText(clearText);
    }

    const [text, setText] = useState('');
    //setText("new text here");
  return (
    <div className="container">
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn-primary mx-2" onClick={handleClear}>Clear Text</button>
        <button className="btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn-primary mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
        <h2>My text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes needed to read.</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </div>
  );
}

export default TextForm;