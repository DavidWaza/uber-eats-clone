import React from 'react';
import { Link} from "react-router-dom";
import './Subsection.css';
import PizzaSlice from '../svgFiles/PNG/PizzaSlice.png'
import DeliveryBoy from '../svgFiles/delivery.png';
import BicycleBoy from '../svgFiles/bicycle.png'

function subsection() {
  return (
  <div>
    <div className='container'>
        <div className='constant'>
          <a href='#'>
            <img src={PizzaSlice} alt='pizzaslice' style={{height:250, width:'100%'}}></img>
            <p className='subtext'>Feed your employees</p>
            <p className='anchor-text'>Create a business account</p>
            </a>
        </div>
        <div className='constant'>
          <a href='#'>
            <img src={DeliveryBoy} alt='pizzaslice' style={{height:250, width:'100%'}}></img>
            <p className='subtext'>Your restaurant, delivered</p>
            <p className='anchor-text'>Add your restaurant</p>
            </a></div>
        <div className='constant'>
        <Link to= "signin">
            <img src={BicycleBoy} alt='pizzaslice' style={{height:250, width:'100%', backgroundColor:'#FFC043'}}></img>
            <p className='subtext'>Deliver with Waza Eats</p>
            <p className='anchor-text'>Sign up to deliver</p>
            </Link></div>
        </div>
    </div>
  );
}

export default subsection;
