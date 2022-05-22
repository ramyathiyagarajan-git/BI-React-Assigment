import React from 'react';
import Heading from './Heading.jsx';
import Products from './Products.jsx';
import './Cart.css';

const Cart = (props) => {
  
const { onAdd, productItems, onRemove, value } = props;
  
return (
   <>
    <Heading value = {value}></Heading>
    <Products onAdd = {onAdd} productItems = { productItems } onRemove= {onRemove}></Products>
   </>
  )
}

export default Cart;