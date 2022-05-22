import React, {useState} from 'react'
//import CloseIcon from '@material-ui/icons/Close';
import './Gallery.css';
import Hook1 from './Hook1.jsx';

const Gallery= () => {

const [ model, setModel ] = useState(false);
const [ tempimgSrc, setTempImgSrc ] = useState('');
  
const gallery = Hook1();
  
const getImg = (img) => {
  setTempImgSrc(img);
  setModel(true);
}
  
return (
   <>
      <div className = "title"> <h1>Photo Gallery</h1> </div>
      <div className={ model ? "model open" : "model"}>
        <img src = {tempimgSrc}></img>
        <button onClick={ () => setModel(false)} className = "close">X</button>
          
      </div>
      <div className = "gallery">
        
        {gallery.map((pair, index) => {
           return (
             
             <div className = "pics" key={index} onClick={()=> getImg(pair.image)}>
              <img src={pair.image} alt={pair.id} style={{width:'100%'}}></img>
            </div>
           )
            
        })}
      
      </div>
    </>
  )
}

export default Gallery;