import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

const About = () => {

    const [myStyle, setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'black'
    })
    const [btnText, setBtnText] = useState("Enable Dark Mode");

    let toggleStyle = () => {
        if(myStyle.color === 'white'){
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
                border: "1px solid black"
            })
            setBtnText("Enable Dark Mode");
        }else {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: "1px solid white"
            })
            setBtnText("Enable Light Mode");
        }
    }

  return (
    <div className="container mb-5" style={myStyle}>
        <h2 className="mt-5">This is About Us</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" style={myStyle}>
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body style={myStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={myStyle}>
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body style={myStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" style={myStyle}>
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body style={myStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <button onClick={toggleStyle} className="mt-3 btn btn-primary">{btnText}</button>
    </div>
  );
};

export default About;
