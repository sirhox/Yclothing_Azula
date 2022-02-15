import { Box, Grid, Typography, Button } from "@mui/material"
import Description from "@mui/icons-material/Description"
import ItemCount from './ItemCount'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCart } from "../contexts/CartContext";


const ItemDetail = ({item}) => {
  const [cantidad, setCant] = useState(0)

  const [cart,setCart] = useCart();

  const onAdd = (quantityToAdd) =>{
    //setCant(quantityToAdd)
    cart.addItem({...item, quantityToAdd:quantityToAdd})
  }
  
  let navigate = useNavigate()
  return(
    <>
    <Box sx={{width: '50%', boxShadow: 5, m: 5}}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <img src={item.pictureUrl} width={150}/> 
        </Grid>
        <Grid container item xs={7}>
          <Grid item xs={12}>
            <Typography variant="h3">
              {item.title}
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{display: 'flex', gap: 1}}>
              <Description/>
            {item.description}
          </Grid>
          <Grid item xs={12} sx={{display: 'flex', alignItems: 'left'}} >
            <Typography variant="h4" sx={{flexGrow: 1}}>
            ${item.price}
            </Typography>
            <ItemCount onAdd={onAdd} initial={1} stock={5}/>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ m: 5,display: 'flex', justifyContent: 'flex-end'}}>
    <Button variant="outlined" onClick={() => navigate(`/cart`)} disabled={cantidad===0} sx={{m:0.5}}>Terminar Compra</Button>
    </Box>
    </>
  )
}

export default ItemDetail