import React from "react";

const footerStyles = {
    backgroundColor:"black",
    color:"white",
    textAlign:"center",
    height:50,
    padding:"4px 16px"
}

function Footer() {
  return (
        <div className="container-wrapper">
            <div className="container-q" style={footerStyles}>
                <h3>Made by Waza with Love</h3>
            </div>
        </div>
  );
}

export default Footer;
