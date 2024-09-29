import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

function Footer() {
  return (
    <Box 
      sx={{ 
        backgroundColor: '#1E1E1E', 
        color: '#fff', 
        py: 6, 
        px: 4,
        mt: 10,
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            About Us
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
            Discover the latest trends in fashion at our shop. We offer stylish and affordable clothes for everyone. Let us help you elevate your wardrobe with the best collections.
          </Typography>
        </Grid>

      
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Customer Service
          </Typography>
          <Link href="#" underline="hover" color="inherit" sx={{ display: 'block', mb: 1 }}>
            Shipping & Returns
          </Link>
          <Link href="#" underline="hover" color="inherit" sx={{ display: 'block', mb: 1 }}>
            FAQ
          </Link>
          <Link href="#" underline="hover" color="inherit" sx={{ display: 'block', mb: 1 }}>
            Contact Us
          </Link>
          <Link href="#" underline="hover" color="inherit" sx={{ display: 'block', mb: 1 }}>
            Privacy Policy
          </Link>
        </Grid>

       
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Follow Us
          </Typography>
          <Box>
            <IconButton 
              href="#" 
              sx={{ color: '#fff', '&:hover': { color: '#3b5998' } }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton 
              href="#" 
              sx={{ color: '#fff', '&:hover': { color: '#E1306C' } }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton 
              href="#" 
              sx={{ color: '#fff', '&:hover': { color: '#1DA1F2' } }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton 
              href="#" 
              sx={{ color: '#fff', '&:hover': { color: '#E60023' } }}
            >
              <PinterestIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

     
      <Box 
        sx={{ 
          mt: 4, 
          borderTop: '1px solid rgba(255, 255, 255, 0.2)', 
          pt: 2, 
          textAlign: 'center'
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} YourClothingShop. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
