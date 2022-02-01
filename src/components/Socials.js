import React from 'react';
import './Socials.css'
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi"

function Socials() {
  return (
  <div>
      <div className='Socials-wrapper'>
        <div className='social-icons'>
        <FiInstagram  className='icon-size'></FiInstagram>
        <FiTwitter className='icon-size'></FiTwitter>
        <FiFacebook className='icon-size'></FiFacebook>
        <FiLinkedin className='icon-size'></FiLinkedin>
        </div>
      </div>
  </div>
  );
}

export default Socials;
