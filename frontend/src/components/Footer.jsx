import React from "react";

const bottom = {
    height: '50px',
    backgroundColor: '#b4c6f0',
    padding: '10px',
    marginTop : 650,
  };
  
  const center = {
    textAlign: 'center',
  };

function Footer() {
  return (
    <div style ={bottom}>
            <div style={center}>
                All rights reserved &copy; Ramya Reddy
            </div>
        </div>
  );
}

export default Footer;