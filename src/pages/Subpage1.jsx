import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Box, Typography, IconButton, Button } from '@mui/material'; 
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Card, CardMedia, CardContent, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const products = [
  
  {
    title: "Levi's",
    discount: "Up to 40% off",
    description: "Classic denim essentials",
    image: "https://i.pinimg.com/236x/a6/ac/17/a6ac17e3ed32cf12782d30739a037148.jpg",
    price: "$59.99",
  }
  
  
  , {
    title: "Gucci",
    discount: "Up to 15% off",
    description: "Luxury statement pieces",
    image: "https://i.pinimg.com/736x/e0/fb/20/e0fb209c214dfa0bc04b1cca977633fd.jpg",
    price: "$299.99",
  }
  
  , {
    title: "Calvin Klein",
    discount: "Up to 30% off",
    description: "Timeless designs for every occasion",
    image: "https://i.pinimg.com/736x/7f/a0/e0/7fa0e04333f9dada2aecf5e4c77043cd.jpg",
    price: "$99.99",
  }
  
  , {
 
  title: "TOMS",
  discount: "Up to 50% off",
  description: "Casual shoes with a cause",
  image: "https://i.pinimg.com/736x/28/a2/fb/28a2fbe47df45c0d07b3cc2321f54da9.jpg",
  price: "$39.99",
},
{
  title: "Nike Air jordan",
  discount: "20% off",
  description: "Comfortable and stylish sneakers for every occasion.",
  image: "https://i.pinimg.com/736x/0b/7a/3f/0b7a3f3b20ae5305a2457d072ec4cd86.jpg",
  price: "$119.99",
}
,{
  title: "Adidas Originals Hoodie walker",
  discount: "Up to 25% off",
  description: "Classic hoodie for casual comfort.",
  image: "https://i.pinimg.com/736x/06/0c/a6/060ca66b13a710b2f7cd7ff8402250e2.jpg",
  price: "$54.99",
}
,
{
  title: "H&M Chino Pants",
  discount: "Up to 30% off",
  description: "Stylish chinos for a polished look.",
  image: "https://i.pinimg.com/736x/e0/46/f3/e046f3876bb3d5be5272ac88df7af3ee.jpg",
  price: "$39.99",
}
,{
  title: "bell bottoms man jeans",
  discount: "Flat 30% off",
  description: "Durable running shoes for all terrains.",
  image: "https://i.pinimg.com/236x/3e/c9/ea/3ec9eaabd698d4b30eea00dde4164ba7.jpg",
  price: "$69.99",
}
,{
  title: "Zara Casual Blazer",
  discount: "Up to 50% off",
  description: "Smart and stylish for every occasion.",
  image: "https://i.pinimg.com/236x/2b/a3/5a/2ba35a00252988cf67147f6af79ad1c1.jpg",
  price: "$89.99",
}
,{
  title: "peter england Casual Shirt",
  discount: "Flat 40% off",
  description: "Trendy casual shirts for everyday wear.",
  image: "https://i.pinimg.com/236x/13/08/ff/1308ff72b678f13066d4f77aaa4d3192.jpg",
  price: "$34.99",
}
,{
  title: "DNJ Eagle Denim Jacket",
  discount: "Up to 30% off",
  description: "A timeless classic for all seasons.",
  image: "https://i.pinimg.com/736x/5e/83/84/5e838479a7208146fbeebaf3d493f0d5.jpg",
  price: "$69.99",
}
,{
  title: "Reebok Classic Sneakers",
  discount: "20% off",
  description: "Iconic style with modern comfort.",
  image: "https://i.pinimg.com/736x/3e/c9/f2/3ec9f2386826c579a8c63e346c2e7a6c.jpg",
  price: "$59.99",
}
,{
  title: "Tommy Hilfiger Polo Shirt",
  discount: "Flat 25% off",
  description: "Classic polo for a smart-casual look.",
  image: "https://i.pinimg.com/736x/33/d0/7d/33d07dd70fe21db181e0acb606ca0f77.jpg",
  price: "$49.99",
}
,{
  title: "Dockers Casual Khakis",
  discount: "Up to 35% off",
  description: "Comfortable khakis for everyday wear.",
  image: "https://i.pinimg.com/736x/2b/65/01/2b6501a72f69b0f4e448565e81ebf29d.jpg",
  price: "$44.99",
}
,{
  title: "Belstaff Waxed Jacket",
  discount: "Up to 20% off",
  description: "Durable and stylish for the outdoors.",
  image: "https://i.pinimg.com/736x/3a/10/f1/3a10f112c24f5d04fa3e162d95f9081e.jpg",
  price: "$499.99",
}
,{
  title: "Abercrombie & Fitch Crew Neck Sweater",
  discount: "30% off",
  description: "Cozy and stylish for chilly days.",
  image: "https://i.pinimg.com/736x/65/fa/c8/65fac8e473207ea01e08a3265dc6c363.jpg",
  price: "$59.99",
}
,{
  title: "Lacoste Long Sleeve Shirt",
  discount: "Flat 15% off",
  description: "Classic style with a comfortable fit.",
  image: "https://i.pinimg.com/236x/7b/69/81/7b698114b6cf4b6eafdf906f537091c8.jpg",
  price: "$89.99",
}
,{
  title: "Fossil Leather Wallet",
  discount: "Up to 20% off",
  description: "Sleek and stylish, perfect for everyday use.",
  image: "https://i.pinimg.com/736x/23/6e/3b/236e3b17f7a5428a5ece020e0a2a3faa.jpg",
  price: "$49.99",
}
,{
  title: "Vans Old Skool Sneakers",
  discount: "Flat 25% off",
  description: "Classic skate shoes with a timeless look.",
  image: "https://i.pinimg.com/736x/6c/eb/b6/6cebb6f3bd6509e9db0e4bbe9cd50d34.jpg",
  price: "$54.99",
}
,{
  title: "byford  Shirt",
  discount: "30% off",
  description: "Elevate your formal wardrobe with this stylish shirt.",
  image: "https://i.pinimg.com/236x/65/ef/b7/65efb73f5056b37deb4a5f0c7a3f248f.jpg",
  price: "$99.99",
}
,{
  title: "Polo Ralph Lauren Classic Fit T-Shirt",
  discount: "20% off",
  description: "A staple for every man's wardrobe.",
  image: "https://i.pinimg.com/736x/49/54/d3/4954d387597706aa0128f159de74b463.jpg",
  price: "$29.99",
}
,{
  title: "Banana Republic Chino Pants",
  discount: "Up to 30% off",
  description: "Versatile pants for work or casual outings.",
  image: "https://i.pinimg.com/736x/1e/cd/96/1ecd96d750748907e6d2df1acd6caf5b.jpg",
  price: "$59.99",
}
,{
  title: "H&M Fleece Hoodie",
  discount: "Flat 25% off",
  description: "Soft and cozy for colder days.",
  image: "https://i.pinimg.com/736x/75/29/fe/7529fe501bc612c7fa4f98c07387d073.jpg",
  price: "$39.99",
}
,{
  title: "J.Crew Ludlow Suit Jacket",
  discount: "30% off",
  description: "A tailored look for any occasion.",
  image: "https://i.pinimg.com/736x/60/05/df/6005df1d64a3768cc10356b9efef690c.jpg",
  price: "$249.99",
}
,{
  title: "Nordstrom Men's Cashmere Sweater",
  discount: "Up to 40% off",
  description: "Luxurious and warm for chilly days.",
  image: "https://i.pinimg.com/736x/3e/42/07/3e420758f43d64ae2ea7d6dba151861e.jpg",
  price: "$129.99",
}
,{
  title: "Diesel Slim Fit Jeans",
  discount: "Up to 25% off",
  description: "Stylish jeans for a modern look.",
  image: "https://i.pinimg.com/736x/4b/60/1d/4b601dd70a0bf17e077372a9fc566052.jpg",
  price: "$89.99",
}
,{
  title: "Express Performance Stretch Pants",
  discount: "30% off",
  description: "Comfortable and stylish for any occasion.",
  image: "https://i.pinimg.com/736x/c9/8b/41/c98b41c3cf974c120e18ddeb1324bdeb.jpg",
  price: "$59.99",
}
,{
  title: "Mavi Jeans Jake Slim Fit",
  discount: "20% off",
  description: "Versatile denim for everyday wear.",
  image: "https://i.pinimg.com/736x/34/fd/4f/34fd4f5b36ea806943f86abed123e79d.jpg",
  price: "$69.99",
}
,{
  title: "lemon ABC Pants",
  discount: "Flat 25% off",
  description: "Comfortable pants designed for movement.",
  image: "https://i.pinimg.com/736x/26/c4/4f/26c44f8a70e9dfe7524cded7a38a7062.jpg",
  price: "$89.99",
}
,{
  title: "C.P. Company Goggle Jacket",
  discount: "20% off",
  description: "Iconic design with practical features.",
  image: "https://i.pinimg.com/736x/b7/d6/d0/b7d6d0f1e2e99b3cc6eabab60a44928b.jpg",
  price: "$499.99",
}
,{
  title: "Abercrombie & Fitch Casual Button-Up",
  discount: "30% off",
  description: "Perfect for both casual and semi-formal occasions.",
  image: "https://i.pinimg.com/736x/88/15/a3/8815a3f9fcaa3f1cb5c40e9f24906dd9.jpg",
  price: "$54.99",
}
,{
  title: "Superdry Vintage Logo T-Shirt",
  discount: "25% off",
  description: "Casual t-shirt with a retro vibe.",
  image: "https://i.pinimg.com/736x/7e/97/de/7e97de572b2359aaf989a97af2c4247b.jpg",
  price: "$39.99",
}
,{
  title: "Puma Essentials Logo Hoodie",
  discount: "30% off",
  description: "Comfortable and stylish for everyday wear.",
  image: "https://i.pinimg.com/736x/80/45/c4/8045c4ac0f81d144997eff7672ab308d.jpg",
  price: "$49.99",
}
,{
  title: "Jack & Jones Regular Fit Blazer",
  discount: "40% off",
  description: "A versatile blazer for smart casual looks.",
  image: "https://i.pinimg.com/736x/24/70/07/247007860db7d83c0d3bf464683e1c99.jpg",
  price: "$99.99",
}
,{
  title: "Barbour Waxed Cotton Jacket",
  discount: "15% off",
  description: "Stylish and practical for outdoor adventures.",
  image: "https://i.pinimg.com/236x/c2/b2/dc/c2b2dc4778d64722a4daf4b05061bf07.jpg",
  price: "$299.99",
}
,{
  title: "New Balance 574 Sneakers",
  discount: "20% off",
  description: "Classic running shoes with a retro look.",
  image: "https://i.pinimg.com/236x/bf/ea/1c/bfea1ca7d6f735cba6e14671e96e36d3.jpg",
  price: "$79.99",
}



];
const ProductCard = ({ product }) => (
  <StyledCard sx={{ position: 'relative' }}>
    <CardMedia
      component="img"
      height="250"
      image={product.image}
      alt={product.title}
    />
    <PriceTag>{product.price}</PriceTag>
    <CardContent>
      <Typography gutterBottom variant="h6" component="div" align="center">
        {product.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        {product.discount}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center" sx={{ marginBottom: '15px' }}>
        {product.description}
      </Typography>
      <Box display="flex" justifyContent="center">
        <ShopButton variant="contained">Shop Now</ShopButton>
      </Box>
    </CardContent>
  </StyledCard>
);
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: 'auto',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.1)',
  },
}));

const PriceTag = styled(Box)(({ theme }) => ({
  backgroundColor: '#ff4d4f',
  color: '#fff',
  borderRadius: '20px',
  padding: '5px 10px',
  fontWeight: 'bold',
  display: 'inline-block',
  position: 'absolute',
  top: '10px',
  right: '10px',
  fontSize: '14px',
}));

const ShopButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ff4d4f',
  color: '#fff',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#ff7875',
  },
}));

function Subpage1() {
  return (
  <>
<Box sx={{ backgroundColor: '#f8f8ff', p: 5, borderRadius: 2 }}>
        <Grid container spacing={3} alignItems="center">
          
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
              Lowest Prices <br /> Best Quality Shopping
            </Typography>
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item>
                <Box display="flex" alignItems="center">
                  <LocalShippingIcon sx={{ color: '#9c27b0', mr: 1 }} />
                  <Typography>Free Delivery</Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box display="flex" alignItems="center">
                  <AttachMoneyIcon sx={{ color: '#9c27b0', mr: 1 }} />
                  <Typography>Cash on Delivery</Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box display="flex" alignItems="center">
                  <SwapHorizontalCircleIcon sx={{ color: '#9c27b0', mr: 1 }} />
                  <Typography>Easy Returns</Typography>
                </Box>
              </Grid>
            </Grid>
            <Button
              variant="contained"
             
              sx={{ backgroundColor: '#FF4D4F', borderRadius: 3 }}
            >
              Download the Fashion hub App
            </Button>
          </Grid>

       
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                backgroundColor: '#ffcc80',
                borderRadius: 2,
                textAlign: 'center',
                py: 4,
                px: 2,
                position: 'relative',
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 'bold', color: '#7e57c2', mb: 2 }}
              >
                Mega Blockbuster Sale
              </Typography>
              <Typography variant="body1" sx={{ color: '#f44336', mb: 2 }}>
                UP TO 80% OFF
              </Typography>
              <Typography variant="body2">Saal ke sabse kam daam</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
<Typography variant="h4" gutterBottom align="center" sx={{ paddingTop: '20px' }}>
        Covetable finds this Week
      </Typography>
      <Grid container spacing={9} sx={{ padding: '20px' }}>
        {products.map((product, index) => (
          <Grid sx={{}}
            item
            xs={12}

            sm={6}

            md={4}

            lg={3}
            key={index}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ backgroundColor: '#1e1e1e', color: '#fff', p: 3,mt:5, borderRadius: 2 }}>
      <Grid container spacing={3} alignItems="center">
      
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            Register as a fashion hub Supplier
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Sell your products to crores of customers at 0% commission
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Box display="flex" alignItems="center">
                <CheckCircleIcon sx={{ color: '#00e676', mr: 1 }} />
                <Typography>Grow your business 10x</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box display="flex" alignItems="center">
                <CheckCircleIcon sx={{ color: '#00e676', mr: 1 }} />
                <Typography>Enjoy 100% Profit</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box display="flex" alignItems="center">
                <CheckCircleIcon sx={{ color: '#00e676', mr: 1 }} />
                <Typography>Sell all over India</Typography>
              </Box>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="secondary"
            sx={{ backgroundColor: '#ff4d4f', borderRadius: 3, mt: 2 }}
          >
            Sign up now
          </Button>
        </Grid>

      
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://media.istockphoto.com/id/1216198470/photo/portrait-of-female-owner-of-fashion-store-checking-stock-in-clothing-store-with-digital-tablet.jpg?s=612x612&w=0&k=20&c=gDSD1viD9C6x3ZPh13otDEoKaYZ00YhFfCCOQ2aqYG0="
            alt=" Supplier"
            sx={{
              width: '100%',
              borderRadius: 2,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  </>
  )
}

export default Subpage1