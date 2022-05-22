import React from 'react';
import Hooks from './Hooks.jsx';

import './Checkout.css';

function Checkout({bagItems ,onAdd, onRemove}) {

const data = Hooks();
console.warn(bagItems);
return (
    <div className="cart-items" >
      <div className="cart-items-header"> Cart Items</div>
      {bagItems.length === 0 && (<div className = "cart-items-header" >No item Added in Bag</div>)}

      <div >
        {bagItems.map((item) => (
         <div key={item.id} className="cart-items-list">
           <img className ="cart-items-image" src= {item.image} alt={item.name}></img>
           <div className ="cart-items-name">{item.name}</div>
           <div className ="cart-items-name">{item.description}</div>
           <div className ="cart-items-function">
             <button className = "cart-items-remove" onClick={ () => onRemove(item) } > Remove </button>
           </div>
         </div>
        ))}
      </div>
    </div>
  
    
  )
}

export default Checkout;