import React, { useState } from 'react';
import { Button } from "react-bootstrap"

const ItemCount= ({stock, initial,onAdd}) =>{
    const [cantidad, setCant] = useState(initial);

    const handlerButton = (numero) =>{
        setCant(numero+cantidad)
    }
    return(
    <>
        <Button disabled={cantidad<1}  onClick={()=>handlerButton(-1)}>
            -
        </Button>
        <label>{cantidad}</label>
        <Button disabled={cantidad>=stock} onClick={()=>handlerButton(1)}>
            +
        </Button>

    </>
    );
}
export default ItemCount