import { Box, Grid, Typography, Button } from "@mui/material"
import DescriptionIcon from '@mui/icons-material/Description'
import Description from "@mui/icons-material/Description"

const ItemDetail = ({item}) => {
  return(
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
            <Button variant="outlined" sx={{m:0.5}}>Comprar</Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ItemDetail