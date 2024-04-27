import React from "react";
import Image from "../images/notes.jpg";
import Image1 from "../images/notice.jpg";
import Image2 from "../images/paper-3033545_1280.webp";

const About = () => {
    return (
        <div>
                  {/* <img src={Image} alt="" className="App-logo" /> */}

            <h1 style={{textAlign: 'center', textDecoration: 'underline'}}>Your text here</h1>
            <MyClass/>
        </div>
    );
};

const MyClass = () => {
    return (
        <div className="boxx">
            <div className="col-md-3" style={{ backgroundColor: '', marginBottom: '0px', marginTop: '0px', height: 400, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src={Image} alt="" className="App-logo" />
            </div>
            <div className="col-md-3" style={{ backgroundColor: '', marginBottom: '0px', marginTop: '0px', height: 200,  color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src={Image1} alt="" className="App-logo" />
            </div>
            <div className="col-md-3" style={{ backgroundColor: '', marginBottom: '0px', marginTop: '0px', height: 200, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src={Image2} alt="" className="App-logo" />
            </div>
        </div>
    );
};

export default About;
