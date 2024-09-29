import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import logo from '../assets/logo1.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const pages = [
  { name: 'HOME', path: '/' },
  { name: 'SHOP', path: '/shop' },
  { name: 'PAGES', path: '/pages' },
  { name: 'ABOUT US', path: '/about' },
  { name: 'CONTACT US', path: '/contact' },
];

const homeDropdownItems = [
  { name: 'Man', path: '/pages/subpage1' },
  { name: 'Woman', path: '/pages/subpage2' },
  { name: 'Kids', path: '/pages/subpage3' },
];;

const shopDropdownItems = [
  { name: 'Shop Grid', path: '/shop/grid' },
  { name: 'Shop List', path: '/shop/list' },
  { name: 'Shop Full', path: '/shop/full' }
];

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));


function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}


function Appbar() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElHome, setAnchorElHome] = React.useState(null);
  const [anchorElShop, setAnchorElShop] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [mobileHomeOpen, setMobileHomeOpen] = React.useState(false);
  const [mobileShopOpen, setMobileShopOpen] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleOpenHomeMenu = (event) => {
    if (isMobile) {
      setMobileHomeOpen((prev) => !prev);
      setMobileShopOpen(false); 
    } else {
      setAnchorElHome(event.currentTarget);
    }
  };

  const handleCloseHomeMenu = () => {
    setAnchorElHome(null);
    setMobileHomeOpen(false);
  };

  const handleOpenShopMenu = (event) => {
    if (isMobile) {
      setMobileShopOpen((prev) => !prev);
      setMobileHomeOpen(false); 
    } else {
      setAnchorElShop(event.currentTarget);
    }
  };

  const handleCloseShopMenu = () => {
    setAnchorElShop(null);
    setMobileShopOpen(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);

  };

  const handleContactClick = () => setDrawerOpen(true);


  return (

    <AppBar position="static" sx={{ backgroundColor: "white", borderRadius: "50px", color: '#000', position: "sticky", top: "10px", zIndex: "999" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isMobile && (
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            )}
            <Box sx={{ display: 'flex', alignItems: 'center', mx: isMobile ? 0 : 3 }}>
              <img width="100" src={logo} alt="Logo" />
            </Box>
          </Box>

          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              {pages.map((page) =>
                page.name === 'HOME' ? (
                  <Button
                    key={page.name}
                    sx={{ my: 2, color: 'black', display: 'flex', mx: 3 }}
                    component={Link}
                    to="/"

                  >
                    {page.name}
                  </Button>
                ) : page.name === 'CONTACT US' ? (
                  <Button
                    key={page.name}
                    onClick={handleContactClick}
                    sx={{ my: 2, color: 'black', mx: 3 }}
                  >
                    {page.name}
                  </Button>
                ) : page.name === 'PAGES' ? (
                  <Box
                    onMouseEnter={!isMobile ? handleOpenHomeMenu : null}
                    onMouseLeave={!isMobile ? handleCloseHomeMenu : null}
                  >
                    <Button
                      sx={{ my: 2, color: 'black', mx: 3 }}
                      onClick={isMobile ? handleOpenHomeMenu : null}
                    >
                      PAGES
                    </Button>
                    <Menu
                      anchorEl={anchorElHome}
                      open={Boolean(anchorElHome) || mobileHomeOpen}
                      onClose={handleCloseHomeMenu}
                      MenuListProps={{ onMouseLeave: handleCloseHomeMenu }}
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                    >
                      {homeDropdownItems.map((item) => (
                        <MenuItem
                          key={item.name}
                          component={Link}
                          to={item.path}
                          onClick={handleCloseHomeMenu}
                        >
                          {item.name}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>

                ) : page.name === 'SHOP' ? (
                  <Box key={page.name} onMouseEnter={!isMobile ? handleOpenShopMenu : null} onMouseLeave={!isMobile ? handleCloseShopMenu : null}>
                    <Button sx={{ my: 2, color: 'black', mx: 3 }} onClick={isMobile ? handleOpenShopMenu : null}>
                      {page.name}
                    </Button>
                    <Menu
                      anchorEl={anchorElShop}
                      open={Boolean(anchorElShop) || mobileShopOpen}
                      onClose={handleCloseShopMenu}
                      MenuListProps={{ onMouseLeave: handleCloseShopMenu }}
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                    >
                      {shopDropdownItems.map((item) => (
                        <MenuItem key={item.name} component={Link} to={item.path} onClick={handleCloseShopMenu}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ) : (
                  <Link key={page.name} to={page.path} style={{ textDecoration: 'none' }}>
                    <Button sx={{ my: 2, color: 'black', display: 'flex', mx: 3 }}>
                      {page.name}
                    </Button>
                  </Link>

                )
              )}
            </Box>
          )}

          <Box sx={{ display: 'flex', alignItems: 'center' }}>


            <React.Fragment>

              <SearchIcon onClick={handleClickOpen} />

              <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                  component: 'form',
                  onSubmit: (event) => {


                    handleClose();
                  },
                }}
              >
                <DialogTitle>Search</DialogTitle>
                <DialogContent>

                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    name="search"
                    label="search here"
                    type="text"

                    variant="standard"
                    sx={{ width: "100%" }}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button type="submit">Search</Button>
                </DialogActions>
              </Dialog>
            </React.Fragment>

          </Box>




        </Toolbar>
      </Container>

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
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {pages.map((page) => (
          <MenuItem
            key={page.name}
            onClick={page.name === 'CONTACT US' ? () => { handleContactClick(); handleCloseNavMenu(); } : handleCloseNavMenu}
          >
            <Typography textAlign="center">{page.name}</Typography>
          </MenuItem>
        ))}
      </Menu>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 300 }} role="presentation">
          <Box>
            <img width="100%" src={logo} alt="Logo" />
          </Box>
          <Typography sx={{ ml: 3 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
          <Typography variant="h6" sx={{ p: 2 }}>
            Contact Us
          </Typography>
          <Typography sx={{ p: 2 }}>Your contact information goes here.</Typography>
          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '90%' } }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Message" variant="outlined" multiline rows={4} />
            <Stack spacing={2} sx={{ my: 2 }}>
              <Button variant="contained">Submit</Button>
            </Stack>
            <Box sx={{display:"flex",justifyContent:"space-around",mt:5}}>
              <IconButton
                href="#"
                sx={{ '&:hover': { color: '#3b5998' } }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="#"
                sx={{ '&:hover': { color: '#E1306C' } }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="#"
                sx={{ '&:hover': { color: '#1DA1F2' } }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                href="#"
                sx={{ '&:hover': { color: '#E60023' } }}
              >
                <PinterestIcon />
              </IconButton>
            </Box>
          </Box>
          <IconButton onClick={toggleDrawer(false)} sx={{ position: 'absolute', top: 10, right: 10 }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Appbar;
