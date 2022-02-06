import React, { useState } from 'react';
import {Box, TextField, IconButton} from '@mui/material';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';

const ItemCount= ({stock, initial,onAdd}) =>{
    const [cantidad, setCant] = useState(initial);

    const handleButton = (numero) =>{
        setCant(numero+cantidad)
    }
    return(
    <>
         <Box sx={{ justifyContent: 'center', display: 'flex', alignItems:'center' }}>
      <IconButton disabled={cantidad <= 1} onClick={() => {handleButton(-1)}}>
        <RemoveSharpIcon/>
      </IconButton>
      {cantidad}
      <IconButton disabled={cantidad >= stock} onClick={() => {handleButton(1)}}>
        <AddSharpIcon/>
      </IconButton>
    </Box>
    </>
    )
}

export default ItemCount