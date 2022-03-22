import React,{useState} from "react";


const ItemCount=({stock,initial,onAdd})=>{
    const[initialvalue]=('');
    const [contador,setContador]=useState(initial);
    
    

    const clickSum=() => {
        if (contador===stock){
            return;
        }
        setContador(contador +1 );    
    };
    
    const clickRes=()=>{
        if (contador===initial){
            return;
        }
        setContador(contador -1 );
    };
    
    const addToCart =()=>{
        onAdd(contador);
    };
return (
    <div style={{backgroundColor:initialvalue}}>
        <h1>{contador}</h1>
        <div style={{display:'flex', flexdirection: 'row',justifyContent:'center'}}>
            <button onClick={()=> clickSum('sumar')}>sumar</button>
            <button onClick={()=> clickRes('resta')}>restar</button>
        </div>
        <div>
            <button onClick={()=> addToCart()}>Agregar al carrito</button>
        </div>

        

    </div>

);
}
export default ItemCount;