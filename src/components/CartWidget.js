import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from "react-router-dom"
import { Box } from "@mui/material"
import { useState } from "react"
import { useCart } from "../contexts/CartContext";
import { useEffect } from "react";



const CartWidget = () =>{
    const cartContext=useCart();
    const [totalItems, setTotalItems] = useState(0)
    useEffect(()=>{
      let cantidad = 0
      const reduceItems = cartContext.cart.addedItems.reduce((previo, actual) => previo + actual.quantityToAdd, cantidad)
      setTotalItems(reduceItems)
    }, [cartContext.cart.addedItems])
    
    let navigate = useNavigate()
    return (
      totalItems>0 &&
      <div  onClick={() => navigate(`/cart`) }>
         <Box sx={{ cursor : 'pointer'}}>
           {totalItems}
      <ShoppingCartOutlinedIcon/>
      </Box>
      </div>
    )
  }
  
  export default CartWidget