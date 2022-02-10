import * as React from 'react';
import { Box, AppBar, Toolbar, Typography, Menu, MenuItem, Container, IconButton, Button,ThemeProvider,createTheme} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from './CartWidget'
import { useNavigate } from "react-router-dom";

const NavBar = ({brand, list = []}) => {
  let navigate = useNavigate()

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClickCategory = (title) => {
    handleCloseNavMenu();
    navigate(`/category/${title.toLowerCase()}`);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
  <AppBar position="static">
  <Container maxWidth="xl">
    <Toolbar disableGutters>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ cursor: 'pointer',mr: 2, display: { xs: 'none', md: 'flex' } }}
        onClick={() => navigate('/')}
      >
        {brand}
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {list.map((menu) => (
            <MenuItem key={menu.title} onClick={()=>handleClickCategory(menu.title)}>
              <Typography textAlign="center">{menu.title}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
      >
        {brand}
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {list.map((el) => (
          <Button
            key={el.title}
            onClick={()=>handleClickCategory(el.title)}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {el.title}
          </Button>
        ))}
      </Box>
      <CartWidget/>
    </Toolbar>
  </Container>
</AppBar>
</ThemeProvider>
)
}

export default NavBar;