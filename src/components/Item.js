import { Card, CardActionArea, CardMedia, CardContent, Typography,Button,Box} from "@mui/material"
import ItemCount from './ItemCount'


const ItemListContainer = ({item}) =>{
  return (
    <Card sx={{ maxWidth: 200 , m: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="100px"
          height="140px"
          image={item.pictureUrl}
          alt="producto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
         
        </CardContent>
    
      </CardActionArea>
      <Box sx={{display:'flex',justifyContent:'center'}}>
      <Button variant="outlined" >Ver detalle</Button>
      </Box>
      <ItemCount initial={1} stock={5}/>
    </Card>
  )
}

export default ItemListContainer