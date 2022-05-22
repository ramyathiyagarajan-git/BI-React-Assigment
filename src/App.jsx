import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BMI from './Bmi.jsx';
import Cart from './Cart.jsx';
import Gallery from './Gallery.jsx';
import Navbar from './Navbar.jsx';
import Checkout from './Checkout.jsx';
import Hooks from './Hooks.jsx';

const App = () => {
  const  productItems  = Hooks();
  const [ bagItems, setBagItems ] = useState([]);
  const [value, setValue] = useState(0);
  
  const onAdd = (product) => {
    const exist =  bagItems.find( x => x.id === product.id );
    if(exist){
        console.log("exist",exist);
        
        setBagItems(bagItems.map( x => x.id === product.id ? {...exist, qty:exist.qty+1 } : x ))
    }
    else{
      setBagItems([...bagItems,{qty: 1,...product}])
      console.log("after pushing",bagItems);
    }
     setValue((bagItems.length + 1));

  }
  const onRemove = (product) => {
    const ProductExist = bagItems.find(x => x.id == product.id);
    if(ProductExist.qty === 1){
      setBagItems(bagItems.filter(x => x.id !== product.id));
    }else{
      setBagItems(bagItems.map( x => x.id === product.id ? {...ProductExist, qty:ProductExist.qty - 1 } : x ))
    }

    setValue( (bagItems.length - 1));
    
  }
  return (
    <div>

      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path= "project1" element = {<BMI/>}> </Route>
          <Route path= "project2" element = {<Cart productItems = {productItems} onAdd = {onAdd} onRemove= {onRemove} value = {value} />} ></Route>
          <Route path= "project3" element = {<Gallery/>}> </Route>
          <Route path= "bag"  element = {<Checkout onAdd = {onAdd} bagItems={bagItems} onRemove= {onRemove} ></Checkout>}> </Route>
        </Routes>
      </BrowserRouter> 
      
    </div>
  );
};

export default App;