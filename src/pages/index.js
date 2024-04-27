// pages/index.js

import React from 'react';


const Home = () => {
  return (
    <div
    //   style={{
    //     display: 'flex',
    //     justifyContent: 'centre',
    //     alignItems: 'centre',
    //     // height: '100vh'
    //   }}
    >
      <h1  style={{textAlign: 'center', textDecoration: 'underline'}}>Welcome to Page!</h1>
      <div className="boxsx">
        <div  className="col-md-3" style={{ backgroundColor: 'blue', marginBottom: '0px',  marginTop: '50px', height: 250, width: 500, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >box1</div>
        <div className="col-md-3" style={{ backgroundColor: 'yellow', marginBottom: '0px', marginTop: '50px', height: 250, width: 500, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >box2</div>
        <div className="col-md-3" style={{ backgroundColor: 'green', marginBottom: '0px', marginTop: '50px', height: 250, width: 500, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >box3</div>
    </div>

    </div>
  );
};

export default Home;
