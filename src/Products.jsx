import React from 'react'
import './Products.css';

const Products = ({onAdd, productItems}) => {

const products = [
    {
      id:"1",
      name: "Cotton Shirt",
      image: "./cottonshirt.jpg",
      price: "Rs.250",
      description: "Full Sleeve Cotton Shirt"
    },
    {
      id:"2",
      name: "White Tshirt",
      image: "./whitetshirt.jpg",
      price: "Rs.399",
      description: "Stylish Cotton Tshirt"
    },
    {
      id:"3",
      name: "Full Sleeve Tshirt",
      image: "./fullsleeve.jpg",
      price: "Rs.584",
      description: "Maroon Full Sleeve Cotton Tshirt"
    }
];

return (
      
       <div className = "products">
        {products.map((pair) => (
          <div className = "card">
            <div>
              <img className = "product-image" src={pair.image} alt={pair.name}></img>
            </div>
            <div>
               <h3 className = "product-name">{pair.name}</h3>
            </div>
            <div className= "product-price"> {pair.price}</div>
            <div className= "product-des"> {pair.description}</div>
            <div >
              <button className = "product-add-button" onClick={ () => onAdd(pair) } > Add to Bag </button>
            </div>
          </div>
        ))}
      </div> 
    
    
  )
}

export default Products;