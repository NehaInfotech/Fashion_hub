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
    title: "Ray-Ban",
    discount: "Up to 20% off",
    description: "Classic sunglasses & eyewear",
    image: "https://i.pinimg.com/736x/6b/4c/fa/6b4cfab2b51d8d7c57a008f828c9a942.jpg",
    price: "$139.99",
  },
  {
    title: "Nike Air Max Sneakers",
    discount: "Up to 30% off",
    description: "Stylish and comfortable for active kids.",
    image: "https://i.pinimg.com/736x/00/36/c5/0036c5e11e8668f95300eb295cc52f17.jpg",
    price: "$89.99",
  }
  , {
    title: "Adidas Superstar Kids",
    discount: "25% off",
    description: "Classic sneakers with a modern twist.",
    image: "https://i.pinimg.com/236x/4b/5b/60/4b5b6054efce457c4fe61cdcd5e7fea9.jpg",
    price: "$64.99",
  }
  , {
    title: "H&M Kids Graphic T-Shirt",
    discount: "Flat 30% off",
    description: "Fun designs for everyday wear.",
    image: "https://i.pinimg.com/236x/da/90/b9/da90b9e7138e120a0edba11ec9ff5834.jpg",
    price: "$14.99",
  }
  , {
    title: "Zara Kids Denim Jacket",
    discount: "20% off",
    description: "Trendy jacket for layering.",
    image: "https://i.pinimg.com/736x/57/f7/52/57f75255f13d2350b015c34ff5d70b5f.jpg",
    price: "$49.99",
  }
  , {
    title: "Gap Kids Hoodie",
    discount: "Up to 25% off",
    description: "Cozy and stylish for cooler days.",
    image: "https://i.pinimg.com/236x/84/4f/ad/844fad1acda0ebeb40a34c31790510e7.jpg",
    price: "$34.99",
  }
  ,
  {
    title: "Puma Kids Track Pants",
    discount: "30% off",
    description: "Comfortable pants for playtime.",
    image: "https://i.pinimg.com/236x/51/d2/ed/51d2ed41d06d42e67b1949cff18a4b53.jpg ",
    price: "$29.99",
  }
  , {
    title: "Old Navy Kids Shorts",
    discount: "Flat 40% off",
    description: "Perfect for summer adventures.",
    image: "https://i.pinimg.com/236x/03/dd/35/03dd358fd2d636d5e973837666787dbb.jpg",
    price: "$19.99",
  }
  , {
    title: "Children's Place Graphic Dress",
    discount: "30% off",
    description: "Cute and colorful for everyday wear.",
    image: "https://i.pinimg.com/236x/7b/b6/96/7bb6965e398c201e2c364682c729521e.jpg",
    price: "$24.99",
  }
  , {
    title: "OshKosh B'Gosh Overalls",
    discount: "Up to 50% off",
    description: "Classic style for little ones.",
    image: "https://i.pinimg.com/736x/67/3c/34/673c3443a2491d3cefc8db902aab852a.jpg",
    price: "$34.99",
  }
  , {
    title: "Tommy Hilfiger Kids Polo",
    discount: "25% off",
    description: "Classic polo for a preppy look.",
    image: "https://i.pinimg.com/236x/be/7a/75/be7a7509b032d85e16919c413d01a95d.jpg",
    price: "$39.99",
  }
  , {
    title: "Converse Chuck Taylor All Star",
    discount: "Flat 20% off",
    description: "Timeless sneakers for every kid.",
    image: "https://i.pinimg.com/236x/06/6e/84/066e842470c2ff64e8de894fe6d3c8cc.jpg",
    price: "$49.99",
  }
  , {
    title: "Cat & Jack Swim Trunks",
    discount: "30% off",
    description: "Bright colors for beach days.",
    image: "https://i.pinimg.com/736x/a5/d6/a0/a5d6a0e41e050a85e2ce70098309e7e6.jpg",
    price: "$14.99",
  }
  , {
    title: "Lands' End Kids Rash Guard",
    discount: "Up to 40% off",
    description: "Sun protection for pool days.",
    image: "https://i.pinimg.com/736x/e5/51/8d/e5518d70ad33f56a5e8c420e312274f4.jpg",
    price: "$29.99",
  }
  , {
    title: "Carters Baby Bodysuit",
    discount: "Flat 25% off",
    description: "Soft and cozy for little ones.",
    image: "https://i.pinimg.com/236x/c1/51/74/c1517420fa4362ec6da7e3a44f604c15.jpg",
    price: "$12.99",
  }
  , {
    title: "Lego Wear Waterproof Jacket",
    discount: "20% off",
    description: "Perfect for rainy days and adventures.",
    image: "https://i.pinimg.com/736x/25/3e/08/253e08d74e6c069ab2d9b380449a2162.jpg",
    price: "$59.99",
  }
  , {
    title: "Skechers Light-Up Sneakers",
    discount: "Up to 30% off",
    description: "Fun shoes that light up with every step.",
    image: "https://i.pinimg.com/236x/68/40/4c/68404c11bf98cc24d8440ce2f8bcd568.jpg",
    price: "$54.99",
  }
  , {
    title: "Disney Princess Dress",
    discount: "Flat 20% off",
    description: "Transform into a princess for dress-up fun.",
    image: "https://i.etsystatic.com/15283347/r/il/b40012/1689047721/il_570xN.1689047721_2cb5.jpg",
    price: "$39.99",
  }
  , {
    title: "Gymboree Cute Graphic Leggings",
    discount: "30% off",
    description: "Comfortable and fun for playtime.",
    image: "https://i.pinimg.com/236x/73/c6/aa/73c6aa9cc3c4ea2ebb7af63193f68dbb.jpg",
    price: "$19.99",
  }
  , {
    title: "Chicco Snowsuit",
    discount: "Up to 40% off",
    description: "Warm and cozy for winter days.",
    image: "https://i.pinimg.com/736x/9e/67/71/9e67718aeda46ed47924970c52040e0e.jpg",
    price: "$69.99",
  }
  , {
    title: "Peppa Pig Pajama Set",
    discount: "Flat 20% off",
    description: "Cozy pajamas for bedtime fun.",
    image: "https://i.pinimg.com/736x/8d/78/dc/8d78dc2ce4e644545cacb417142075cf.jpg",
    price: "$24.99",
  }
  , {
    title: "Under Armour Kids Athletic Shorts",
    discount: "25% off",
    description: "Breathable shorts for active play.",
    image: "https://i.pinimg.com/236x/44/63/5f/44635f50e8765b058a33cfba29d38b7a.jpg",
    price: "$24.99",
  }
  , {
    title: "Crewcuts Plaid Shirt",
    discount: "30% off",
    description: "Classic style for any occasion.",
    image: "https://i.pinimg.com/736x/74/3b/90/743b9059057eae941201b623125abf67.jpg",
    price: "$39.99",
  }
  , {
    title: "Lands' End Kids Swimwear",
    discount: "20% off",
    description: "Durable and stylish for pool parties.",
    image: "https://i.pinimg.com/736x/df/5a/54/df5a54bb633c7ab828b8256f47d4223c.jpg",
    price: "$29.99",
  }

  , {
    title: "Polo Ralph Lauren Kids Pullover",
    discount: "Flat 25% off",
    description: "Classic and cozy for any occasion.",
    image: "https://i.pinimg.com/736x/b4/b0/43/b4b04356087016c3f5c318e6cf975776.jpg",
    price: "$54.99",
  }
  , {
    title: "Mini Boden Printed T-Shirt",
    discount: "30% off",
    description: "Bright and fun designs for kids.",
    image: "https://i.pinimg.com/236x/32/1b/7d/321b7dd7ed9418cf1f89d1d1600f06cc.jpg",
    price: "$28.99",
  }
  , {
    title: "Tea Collection Kids Dress",
    discount: "25% off",
    description: "Stylish and comfortable for every day.",
    image: "https://i.pinimg.com/736x/f3/f8/61/f3f8611de4587829a035753cd00b08f0.jpg",
    price: "$49.99",
  }
  , {
    title: "Roxy Girls Beach Cover-Up",
    discount: "Flat 30% off",
    description: "Perfect for fun in the sun.",
    image: "https://i.pinimg.com/736x/f5/76/0a/f5760a59b4e969d0a7ac0ac16ccb372e.jpg",
    price: "$34.99",
  }
  , {
    title: "Hanna Andersson Pajama Set",
    discount: "20% off",
    description: "Soft and cozy for bedtime.",
    image: "https://i.pinimg.com/736x/03/d0/da/03d0daf3557c1f3942dce0f4cada811b.jpg",
    price: "$49.99",
  }
  , {
    title: "Bonpoint Kids Dress",
    discount: "Flat 15% off",
    description: "Elegant and stylish for special occasions.",
    image: "https://i.pinimg.com/236x/db/74/33/db7433fe745604b2b7469d66523ea988.jpg",
    price: "$149.99",
  }
  , {
    title: "Uniqlo Kids Ultra Light Down Jacket",
    discount: "25% off",
    description: "Warmth without the bulk.",
    image: "https://i.pinimg.com/736x/91/de/d3/91ded3598c0489fbb79aba1a414d9dda.jpg",
    price: "$49.99",
  }

  , {
    title: "Kappa Kids Tracksuit",
    discount: "20% off",
    description: "Cool tracksuit for sporty kids.",
    image: "https://i.pinimg.com/736x/c2/9d/1a/c29d1a3b97d5d1e4e974b275ed0b5f8d.jpg",
    price: "$59.99",
  }
  , {
    title: "Boys' Uniqlo Graphic Tee",
    discount: "Flat 20% off",
    description: "Fun graphics for everyday wear.",
    image: "https://i.pinimg.com/736x/56/36/6e/56366e3c6595bba6715af36743bca44a.jpg",
    price: "$14.99",
  }
  , {
    title: "Rugged Bear Kids Winter Coat",
    discount: "30% off",
    description: "Warm and durable for winter fun.",
    image: "https://i.pinimg.com/736x/cc/d6/ca/ccd6caf931801cbe45a78a68cb486084.jpg",
    price: "$79.99",
  }
  , {
    title: "L.L. Bean Kids Waterproof Boots",
    discount: "20% off",
    description: "Perfect for wet and muddy days.",
    image: "https://i.pinimg.com/236x/d6/0e/df/d60edf976022f8a16177349deb7329d1.jpg",
    price: "$59.99",
  }
  , {
    title: "Nike Kids Track Jacket",
    discount: "25% off",
    description: "Lightweight and stylish for athletic wear.",
    image: "https://i.pinimg.com/736x/6d/0b/bf/6d0bbfd24b680d49c6427fa594efb747.jpg",
    price: "$39.99",
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

function Subpage3() {
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

export default Subpage3