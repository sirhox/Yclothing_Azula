import { Grid } from '@mui/material'
import Item from './Item'

const ItemList = ({items}) =>{
  return (
      <Grid sx={{}} container> 

     {items.map(it =>  (<Grid xs={2} item key={it.id}> <Item key={it.title} item={it}/> </Grid>))}

    </Grid>
  )
}

export default ItemList