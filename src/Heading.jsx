import React from 'react';
import { Link } from 'react-router-dom';
import './Heading.css';

const Heading = ({value}) => {


console.warn(value);
  
const products = [
    {
      id:"1",
      name: "Cotton Shirt",
      image: ""
    },
    {
      id:"2",
      name: "White Tshirt",
      image: ""
    },
    {
      id:"3",
      name: "Full Sleeve Tshirt",
      image: ""
    }
];

return (
  
    <div className = "head ">
     <h2 className = "Logo">Shopping Cart</h2>
      <div className = "header-links">
        <ul>
          <li>
            <Link to = "/bag" > Bag </Link>
          </li>
          <li>{value}</li>
        </ul>
      </div>
    </div>
    
  )
}

export default Heading;