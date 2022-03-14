import React, { useState } from 'react';
import {Box, IconButton,Button,Typography} from '@mui/material';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';

const ItemCount= ({stock, initial,onAdd}) =>{
    const [cantidad, setCant] = useState(initial);

    const [newStock, setNewStock] = useState(stock)

    const handleButton = (numero) =>{
        setCant(numero+cantidad)
    }

    const handleCart = () =>{
      setCant(stock - cantidad)
      setNewStock(stock - cantidad)
      onAdd(cantidad)
  }


  return newStock ? (
         <Box sx={{ justifyContent: 'center', display: 'flex', alignItems:'center' }}>
      <IconButton disabled={cantidad <= 1} onClick={() => {handleButton(-1)}}>
        <RemoveSharpIcon/>
      </IconButton>
      {cantidad}
      <IconButton disabled={cantidad >= stock} onClick={() => {handleButton(+1)}}>
        <AddSharpIcon/>
        </IconButton>


      <Button variant="outlined" onClick={() =>handleCart()} sx={{m:0.5}}>Agregar al carrito</Button>
    </Box>
    ) : ( <Typography sx={{mr: 4}} color={'red'}>No hay stock</Typography>)

}

export default ItemCount