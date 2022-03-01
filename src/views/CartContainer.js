import { Box, Grid, Typography, Button } from "@mui/material"
//import Description from "@mui/icons-material/Description"
//import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCart } from "../contexts/CartContext";




const CartContainer = () => {   
  const remover =(id) =>{
    
    cart.removeItem(id)
  }
  const cart=useCart();
  //const ItemsAgregados = cart.cart.addedItems
  let navigate = useNavigate()
    return (
      <>
       <Box sx={{width: '50%', boxShadow: 5, m: 5}}>
       <Typography variant="h3" sx={{p:5,display: 'flex',  justifyContent:'center'}} >
              {"CARRITO"}
            </Typography>
         {cart.cart.addedItems.length >0 ? cart.cart.addedItems.map(item=>
      <Grid container spacing={1} key={item.id}>
        <Grid item xs={4}>
          <img alt={'no hay imagen'} src={item.pictureUrl} width={150}/> 
        </Grid>
        <Grid container item xs={7}>
          <Grid item xs={12}>
            <Typography variant="h4">
              {item.title}
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{display: 'flex', gap: 1,justifyContent:'space-between'}}>
            {"X "+item.quantityToAdd}  
            <Button variant="outlined"  onClick={() => remover(item.id)} sx={{m:0.5}}>Quitar</Button>
          </Grid>
          <Grid item xs={12} sx={{display: 'flex', alignItems: 'left'}} >
            <Typography variant="h5" sx={{flexGrow: 1}}>
            ${item.price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      ):
      <Box sx={{display: 'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
        <Typography variant="h4">
              {"No hay items agregados"}
            </Typography>
             <Button variant="outlined" onClick={() => navigate(`/`)}  sx={{m:0.5}}>Volver al inicio</Button>
      </Box>
      
      }
      <Box>
      </Box>

      {cart.cart.addedItems.length >0 ?
    <Typography variant="h3" sx={{p:3,display: 'flex',  justifyContent:'center'}} >
      <Button variant="outlined" onClick={() => navigate(`/`)} sx={{m:0.5}}>Seguir comprando</Button>
      <Button variant="outlined" onClick={() => navigate(`/checkout`)} sx={{m:0.5}}>Continuar...</Button>
      
    </Typography>
    : null}
    </Box>
    
      </>
    )

  }

export default CartContainer