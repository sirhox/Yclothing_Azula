import { Card, CardActionArea, CardMedia, CardContent, Typography,Button,Box} from "@mui/material"
import { useNavigate } from "react-router-dom";


const ItemListContainer = ({item}) =>{
  let navigate = useNavigate()
  return (
    <Card sx={{ maxWidth: 200 , m: 5 }}>
      <CardActionArea onClick={() => navigate(`/item/${item.id}`)}>
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
      <Button variant="outlined" onClick={() => navigate(`/item/${item.id}`)} >Ver detalle</Button>
      </Box>

    </Card>
  )
}

export default ItemListContainer