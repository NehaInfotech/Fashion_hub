import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // import carousel styles
import { Box, Typography, IconButton, Button } from '@mui/material'; // Material-UI for styling
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Card, CardMedia, CardContent, Grid, Paper } from '@mui/material';
// import { Card, CardMedia, CardContent, Typography, Grid, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

const products = [
  {
    title: "Forever New",
    discount: "Up to 50% off",
    description: "Stylish & elegant dresses",
    image: "https://funkyforty.com/wp-content/uploads/2020/06/DSC_1804-scaled.jpeg", // Replace with actual image URL
    price: "$79.99",
  },
  {
    title: "Twenty Dresses",
    discount: "Up to 50% off",
    description: "8 till late needs",
    image: "https://images-static.nykaa.com/media/catalog/product/5/e/5e5bc1cDR011640_1.jpg", // Replace with actual image URL
    price: "$49.99",
  },
  {
    title: "Biba",
    discount: "Up to 65% off",
    description: "Contemporary ethnics",
    image: "https://etimg.etb2bimg.com/thumb/msid-112837566,imgsize-73336,width-1200,height=765,overlay-etbrandequity/advertising/kriti-sanon-embraces-tradition-confidently-into-the-future-with-biba.jpg", // Replace with actual image URL
    price: "$89.99",
  },
  {
    title: "Puma",
    discount: "Min 40% off",
    description: "Dynamic athletic styles",
    image: "https://img01.ztat.net/article/spp-media-p1/6ade89fbbcef42eda7ce65901277f8b2/48a431b4e8eb4597afd4cfe6c8271b94.jpg?imwidth=1800", // Replace with actual image URL
    price: "$59.99",
  },
  {
    title: "Cider",
    discount: "Up to 35% off",
    description: "Gen-Z dresses across US",
    image: "https://i.pinimg.com/736x/78/b7/f0/78b7f006f98a028db9ad521495708de4.jpg", // Replace with actual image URL
    price: "$39.99",
  },
  {
    title: "Levi's",
    discount: "Up to 40% off",
    description: "Classic denim essentials",
    image: "https://i.pinimg.com/236x/a6/ac/17/a6ac17e3ed32cf12782d30739a037148.jpg", // Replace with actual image URL
    price: "$59.99",
  },
  {
    title: "H&M",
    discount: "Flat 30% off",
    description: "Trendy styles for every season",
    image: "https://i.pinimg.com/736x/78/1a/56/781a56a1fb934142c53b9d535cd9327c.jpg", // Replace with actual image URL
    price: "$34.99",
  }
  ,
  {
    title: "Zara",
    discount: "Up to 50% off",
    description: "Sophisticated modern apparel",
    image: "https://i.pinimg.com/736x/34/bc/14/34bc1471d1858b38ee0cbb79110d5e40.jpg", // Replace with actual image URL
    price: "$89.99",
  }
  , {
    title: "Nike",
    discount: "Flat 20% off",
    description: "Performance wear for athletes",
    image: "https://i.pinimg.com/736x/28/7d/d2/287dd2a99c30999e10fb2cee420372e7.jpg", // Replace with actual image URL
    price: "$69.99",
  }
  , {
    title: "Adidas",
    discount: "Up to 45% off",
    description: "Activewear for all occasions",
    image: "https://i.pinimg.com/736x/a3/89/5b/a3895b451bdd0e388541ca1a725b5da2.jpg", // Replace with actual image URL
    price: "$54.99",
  }
  , {
    title: "Forever 21",
    discount: "Up to 55% off",
    description: "Affordable fashion for everyone",
    image: "https://i.pinimg.com/736x/de/a7/ad/dea7ad0369b7a91f02ff031260d5d665.jpg", // Replace with actual image URL
    price: "$29.99",
  }
  , {
    title: "Mango",
    discount: "Up to 60% off",
    description: "Chic and casual for every day",
    image: "https://i.pinimg.com/736x/44/54/f1/4454f15430125cbe05e6bcc67a53708d.jpg", // Replace with actual image URL
    price: "$74.99",
  }
  , {
    title: "Urban Outfitters",
    discount: "Up to 25% off",
    description: "Vintage-inspired streetwear",
    image: "https://i.pinimg.com/736x/25/e3/b9/25e3b9cf4d431444384f112a1d757b0f.jpg", // Replace with actual image URL
    price: "$49.99",
  }
  , {
    title: "Gucci",
    discount: "Up to 15% off",
    description: "Luxury statement pieces",
    image: "https://i.pinimg.com/736x/e0/fb/20/e0fb209c214dfa0bc04b1cca977633fd.jpg", // Replace with actual image URL
    price: "$299.99",
  }
  , {
    title: "ASOS",
    discount: "Flat 50% off",
    description: "Bold looks for the new season",
    image: "https://i.pinimg.com/736x/33/ed/c9/33edc9ca6ab5559859f5def25e5480e6.jpg", // Replace with actual image URL
    price: "$39.99",
  }
  , {
    title: "Shein",
    discount: "Up to 70% off",
    description: "Affordable trends for everyone",
    image: "https://i.pinimg.com/736x/ff/de/25/ffde2564d0c57401e045acbfa1f2ec8c.jpg", // Replace with actual image URL
    price: "$19.99",
  }
  , {
    title: "Aldo",
    discount: "Up to 30% off",
    description: "Sleek and modern footwear",
    image: "https://i.pinimg.com/736x/c8/bb/ec/c8bbec9d56408c72d25528690c7ec229.jpg", // Replace with actual image URL
    price: "$89.99",
  }
  , {
    title: "Birkenstock",
    discount: "Up to 20% off",
    description: "Comfortable and stylish sandals",
    image: "https://i.pinimg.com/736x/b8/b7/14/b8b7143d9ea247810ba68a8e228c6326.jpg", // Replace with actual image URL
    price: "$49.99",
  }
  , {
    title: "The North Face",
    discount: "Flat 35% off",
    description: "Outdoor gear for adventure",
    image: "https://i.pinimg.com/736x/5f/3c/fc/5f3cfc7764205f4b601a5d5deac7015e.jpg", // Replace with actual image URL
    price: "$129.99",
  }
  , {
    title: "Vans",
    discount: "Flat 25% off",
    description: "Iconic skater shoes & apparel",
    image: "https://i.pinimg.com/736x/75/a1/9f/75a19f8134cb96d37704f0fd27e7286e.jpg", // Replace with actual image URL
    price: "$44.99",
  }
  , {
    title: "Under Armour",
    discount: "Up to 40% off",
    description: "High-performance activewear",
    image: "https://i.pinimg.com/736x/01/a9/f2/01a9f29c0c284f9081708b5382d23f4d.jpg", // Replace with actual image URL
    price: "$59.99",
  }
  , {
    title: "Calvin Klein",
    discount: "Up to 30% off",
    description: "Timeless designs for every occasion",
    image: "https://i.pinimg.com/736x/7f/a0/e0/7fa0e04333f9dada2aecf5e4c77043cd.jpg", // Replace with actual image URL
    price: "$99.99",
  }
  , {
    title: "Ray-Ban",
    discount: "Up to 20% off",
    description: "Classic sunglasses & eyewear",
    image: "https://i.pinimg.com/736x/6b/4c/fa/6b4cfab2b51d8d7c57a008f828c9a942.jpg", // Replace with actual image URL
    price: "$139.99",
  }
  , {
    title: "TOMS",
    discount: "Up to 50% off",
    description: "Casual shoes with a cause",
    image: "https://i.pinimg.com/736x/28/a2/fb/28a2fbe47df45c0d07b3cc2321f54da9.jpg", // Replace with actual image URL
    price: "$39.99",
  }


];

// Custom styled components
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

const images = [
  { src: 'https://imgeng.jagran.com/webstories/68031/rashmika-mandanna-saree-photo--2--1698904080.jpeg', alt: 'Image 1' },
  { src: 'https://i.pinimg.com/originals/3e/17/3b/3e173bd41ce727bea5c3cbce136105d9.jpg', alt: 'Image 4' },
  { src: 'https://i.pinimg.com/736x/3d/9b/1f/3d9b1f31ed0448d71b707a578885906f.jpg', alt: 'Image 6' },
  { src: 'https://assets.vogue.in/photos/62a32c536bb7a4cfc219108c/2:3/w_2560%2Cc_limit/284144099_738269134286250_297850895949670180_n.jpg', alt: 'Image 3' },
  { src: 'https://i.pinimg.com/736x/b0/17/4d/b0174d1bc0783a05e8fad76c9c87fe52.jpg', alt: 'Image 2' },
  { src: 'https://i.pinimg.com/736x/95/24/56/9524563686b1ef48283b8343ed649d41.jpg', alt: 'Image 5' },

  { src: 'https://middaycdn.s.llnwi.net/Radiocity-images/images/uploads/web-stories/Tiger-Shroffs-edgy-wardrobe-collection-1_ws.jpg', alt: 'Image 7' },
  { src: 'https://i.pinimg.com/736x/43/69/84/4369849af10e3f17277d4c982cad978a.jpg', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/736x/07/ab/3c/07ab3c829434456faaad0266999d9ed4.jpg', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/736x/30/c3/f1/30c3f1b86bcc87a71040d21a7c0d53a6.jpg', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/736x/82/ac/d4/82acd48a3e8aae4de8ae961f17a38427.jpg', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/736x/d3/e6/05/d3e605fcdcf58b448bc5b9763f218d85.jpg', alt: 'Image 8' },
];

// Add your image URLs and optional captions
const slides = [
  {
    img: 'https://img.freepik.com/free-psd/black-friday-banner-template_23-2149094785.jpg?w=900&t=st=1727413218~exp=1727413818~hmac=664b5e9b230374a60e0c6faef3872d49cdfef8ab118796104cbea46fbdb16779',
    caption: 'Slide 1: Nature vs Synthetic'
  },
  {
    img: 'https://img.freepik.com/free-psd/fashion-concept-banner-template-style_23-2148582738.jpg?t=st=1727413160~exp=1727416760~hmac=9d05d371ba236131afd0575150214001cbef31f2512ad463a6402b51048db262&w=740',
    caption: 'Slide 2: Personal Shopper'
  },
  {
    img: 'https://img.freepik.com/free-psd/fashion-concept-horizontal-banner_23-2148582739.jpg',
    caption: 'Slide 3: Exploring New Ideas'
  },
  {
    img: 'https://img.freepik.com/free-psd/natural-cosmetics-template-banner_23-2148671399.jpg?w=900&t=st=1727411418~exp=1727412018~hmac=c96d9863623a6c93fc8bb0c1fc2ef5b320eb424092a9c02563117c3d4c26edee',
    caption: 'Slide 4: Minimalism'
  },
  {
    img: 'https://img.freepik.com/free-psd/banner-fashion-store-ad-template_23-2148675209.jpg?ga=GA1.1.439435672.1716038743',
    caption: 'Slide 5: Urban Adventures'
  },
  {
    img: 'https://img.freepik.com/free-psd/beautiful-model-banner-template_23-2148986055.jpg?w=900&t=st=1727412603~exp=1727413203~hmac=9973d80ed696d01ad7f8ddb179a0c897696b86f9864750fd30d610c876a6720f',
    caption: 'Slide 6: Modern Living'
  }
];
const categories = [
  {
    title: 'Men',
    img: 'https://media.istockphoto.com/id/864505242/photo/mens-clothing-and-personal-accessories.jpg?s=612x612&w=0&k=20&c=TaJuW3UY9IZMijRrj1IdJRwd6iWzXBlrZyQd1uyBzEY=', // Replace with actual image URL
    description: 'Explore the latest collection of men’s clothing and accessories.'
  },
  {
    title: 'Women',
    img: 'https://img.freepik.com/free-photo/spring-wardrobe-switch-still-life_23-2150176694.jpg', // Replace with actual image URL
    description: 'Discover trending fashion for women in all sizes and styles.'
  },
  {
    title: 'Children',
    img: 'https://softsensbaby.com/cdn/shop/articles/1_f5a36eac-9baf-480c-a450-40f401287bb2.jpg?v=1633599012', // Replace with actual image URL
    description: 'Shop comfortable and stylish clothes for children of all ages.'
  }
];



const latestCollectionItems = [
  {
    img: 'https://m.media-amazon.com/images/I/51OEUSjxfZL._AC_UY1100_.jpg', // Add actual image path or URL
    brand: 'BRAND:GEEK',
    title: 'Viscose-Cashmere Scarf',
    price: '$450.00',
    rating: 3.5, // Rating out of 5
    sale: '13%',
    isNew: true
  },
  {
    img: 'https://img.joomcdn.net/91b487db301181bee5097072e10ae01f853ad6c3_original.jpeg', // Add actual image path or URL
    brand: 'BRAND:GEEK',
    title: 'Woolen Throw Blanket',
    price: '$320.00',
    rating: 4, // Rating out of 5
    sale: '20%',
    isNew: true
  },
  {
    img: 'https://fashionnaari.com/cdn/shop/products/5_1_34a793ae-f921-43aa-a0d4-9f1d0d3f9467_650x.jpg?v=1604996638', // Add actual image path or URL
    brand: 'BRAND:GEEK',
    title: 'Silk Evening Gown',
    price: '$1,200.00',
    rating: 4.5, // Rating out of 5
    sale: '5%',
    isNew: false
  }
  ,
  {
    img: 'https://img.joomcdn.net/4a3a88bee8885a84067289047d4243cb0b1d58ea_original.jpeg', // Add actual image path or URL
    brand: 'BRAND:GEEK',
    title: 'Leather Handbag',
    price: '$950.00',
    rating: 4.2, // Rating out of 5
    sale: '10%',
    isNew: true
  },
  {
    img: 'https://www.citycentredeira.com/-/media/blogs/2020/july/deira/5-summer-trends/gettyimages-1249681549.jpg', // Add actual image path or URL
    brand: 'BRAND:GEEK',
    title: 'Linen Summer Dress',
    price: '$300.00',
    rating: 3.8, // Rating out of 5
    sale: '15%',
    isNew: false
  },
  {
    img: 'https://i.ytimg.com/vi/Uzoxnh9lykA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCCWIQWWwQJZMIRlP6vYIHPxkmR2g', // Add actual image path or URL
    brand: 'BRAND:GEEK',
    title: 'Winter Wool Coat',
    price: '$700.00',
    rating: 4.6, // Rating out of 5
    sale: '25%',
    isNew: true
  },
  {
    img: 'https://getketchadmin.getketch.com/product/8905980307120/660/HLSW000067_1.JPG', // Add actual image path or URL
    brand: 'BRAND:GEEK',
    title: 'Round Neack Swater',
    price: '$700.00',
    rating: 4.6, // Rating out of 5
    sale: '25%',
    isNew: true
  },
  {
    img: 'https://zwin.io/react/stoon/assets/img/arrival/1.png', // Add actual image path or URL
    brand: 'BRAND:GEEK',
    title: 'Faxon Canvas Low-Top Sneaker',
    price: '$450.00',
    rating: 4.6, // Rating out of 5
    sale: '25%',
    isNew: true
  }

];
function HomePage() {
  return (
    <>
      <Box sx={{ background: "#FAECE1", py: 4 }}>
        <Box
          sx={{
            width: { xs: '95%', sm: '90%', md: '80%', lg: '70%' },
            margin: 'auto',
            borderRadius: '20px',
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.3)', // Enhanced shadow for depth
            overflow: 'hidden',
            position: 'relative',
            transition: 'transform 0.5s ease', // Smooth transition for hover effects
            '&:hover': {
              transform: 'scale(1.02)', // Slight zoom on hover
            },
          }}
        >
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={3000} // Speed up transition to 3 seconds
            showStatus={false} // Hide the status indicator
            stopOnHover={false} // Keep playing even on hover for more flow
            transitionTime={1000} // Smooth slide transition
            emulateTouch={true} // Enable swipe for mobile
            renderArrowPrev={(clickHandler, hasPrev) => (
              <IconButton
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: 10,
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  color: 'white',
                  borderRadius: '50%', // Circular arrow
                  p: 1, // Padding inside the button
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Hover effect
                    color: 'black',
                  },
                }}
                onClick={clickHandler}
                disabled={!hasPrev}
              >
                <ArrowBackIosIcon />
              </IconButton>
            )}
            renderArrowNext={(clickHandler, hasNext) => (
              <IconButton
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: 10,
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  color: 'white',
                  borderRadius: '50%',
                  p: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    color: 'black',
                  },
                }}
                onClick={clickHandler}
                disabled={!hasNext}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            )}
          >
            {slides.map((slide, index) => (
              <Box key={index} sx={{ position: 'relative' }}>
                <img
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    filter: 'brightness(90%) contrast(105%)', // Enhance image look
                    borderRadius: '20px',
                    transition: 'transform 0.4s ease', // Smooth hover zoom
                  }}
                />
                {/* Overlay gradient and caption */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background for text
                    color: 'white',
                    padding: '10px 20px',
                    boxSizing: 'border-box',
                    textAlign: 'left',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)', // Text shadow for better readability
                      animation: 'slideIn 1s ease-out', // Simple text animation
                      '@keyframes slideIn': {
                        from: {
                          transform: 'translateY(20px)',
                          opacity: 0,
                        },
                        to: {
                          transform: 'translateY(0)',
                          opacity: 1,
                        }
                      }
                    }}
                  >
                    {slide.caption}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Box>
      <Box sx={{ background: "#FAECE1", py: 4 }}>
        <Box sx={{ width: { xs: '95%', sm: '90%', md: '80%', lg: '70%' }, margin: "auto" }}>
          {/* Carousel can be inserted here */}
        </Box>

        {/* Cards Section */}
        <Box sx={{ py: 5 }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              mb: 4,
              fontWeight: 'bold',
              color: '#333',
              textTransform: 'uppercase',
              letterSpacing: 2,
            }}
          >
            Shop by Category
          </Typography>

          {/* Cards Grid */}
          <Grid container spacing={3} justifyContent="center">
            {categories.map((category, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    maxWidth: 345,
                    margin: "auto",
                    borderRadius: '15px',
                    boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)', // Slight zoom on hover
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={category.img}
                    alt={category.title}
                  />
                  <CardContent>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                      {category.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                      {category.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box>
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            mb: 4,
            mt: 8,
            fontWeight: 'bold',
            color: '#333',
            textTransform: 'uppercase',
            letterSpacing: 2,
          }}
        >
          latest collection
        </Typography>
        <Box sx={{ py: 5, background: "#FAECE2" }}>


          <Grid container spacing={6} justifyContent="centler">
            {latestCollectionItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    maxWidth: 345,
                    margin: "auto",
                    borderRadius: '15px',
                    boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)', // Slight zoom on hover
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={item.img}
                    alt={item.title}
                  />
                  <CardContent>
                    {item.isNew && <Typography sx={{ color: '#2ECC71', fontWeight: 'bold' }}>NEW</Typography>}
                    <Typography sx={{ color: '#E74C3C', fontWeight: 'bold' }}>SALE! {item.sale}</Typography>
                    <Typography variant="body2" sx={{ color: '#888' }}>
                      {item.brand}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="h5" sx={{ color: '#E74C3C' }}>
                      {item.price}
                    </Typography>
                    <Typography>
                      {'★'.repeat(Math.floor(item.rating)) + (item.rating % 1 ? '½' : '')} ★★★☆☆
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box sx={{ py: 5 }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            mb: 4,
            mt: 2,
            fontWeight: 'bold',
            color: '#333',
            textTransform: 'uppercase',
            letterSpacing: 2,
          }}
        >
          <Button  size="large" sx={{background:"#FF4D4F",color:"#fff"}}>
            View more→
          </Button>
        </Typography>
      </Box>
      <Paper
        sx={{
          backgroundImage: 'url(https://richborn.s3.ap-south-1.amazonaws.com/background-fashion.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: { xs: '30px 0', sm: '40px 0', md: '50px 0' },  // Responsive padding
          borderRadius: { xs: '0', md: '900px 0 0 900px' },        // Responsive borderRadius
        }}
      >
        <Grid container justifyContent="start">
          <Grid item xs={12} md={7} sm={12}>
            <Box
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: { xs: '15px', sm: '20px' },
                borderRadius: { xs: '0', md: '900px 0 0 900px' },
                ml: { xs: 2, md: 10 },
                position: 'relative',
              }}
            >
              <Box sx={{ ml: { xs: 1, md: 6 }, p: { xs: 1, md: 2 } }}> {/* Responsive margin and padding */}
                <Typography variant="h4" color="primary" gutterBottom>
                  Who We Are
                </Typography>
                <Typography variant="h6" color="secondary" paragraph>
                  Pellentesque odio nisi, euismod pharetra a ultricies in diam. Sed arcu. Cras consequat.
                </Typography>
                <Typography variant="body1" paragraph>
                  Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.
                  Suspendisse potenti. Sed egestas, ante et vulputate volutpat, uctus metus libero eu augue.
                </Typography>
                <Button sx={{background:"#FF4D4F",color:"#fff"}} >
                  VIEW OUR NEWS→
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Box
        sx={{
          background: "linear-gradient(90deg, rgba(198,236,247,1) 0%, rgba(255,255,255,1) 100%)",
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: { xs: "auto", md: "200px" }, // Auto height on small screens
          mt: 10,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          overflow: "hidden",
          width: "100%",
          maxWidth: "100vw",
          flexDirection: { xs: "column", md: "row" }, // Stack items vertically on small screens
          textAlign: { xs: "center", md: "left" },
          pt: 6,
          pb: 6
        }}
      >
        {/* Left Icon */}
        <Box mb={{ xs: 2, md: 0 }}> {/* Add margin bottom on small screens */}
          <img
            src="https://i.pinimg.com/originals/4c/1e/67/4c1e679883d1355b9ee0aa0fd832ee4f.png"
            width="220px"
            alt="Icon Left"
            style={{
              transform: "scale(1.1)",
              borderRadius: "50%",
              width: { xs: "100px", md: "150px" } // Smaller size for mobile
            }}
          />
        </Box>

        {/* Center Content */}
        <Box sx={{ textAlign: { xs: "center", md: "center" }, alignItems: "center" }}>
          <Typography variant="h4" sx={{
            fontWeight: 'bold',
            mb: 1,
            fontSize: { xs: "1.5rem", md: "2rem" } // Responsive font size
          }}>
            Personal Shopper
          </Typography>
          <Typography sx={{
            color: 'gray',
            mb: 2,
            fontSize: { xs: "0.9rem", md: "1rem" }  // Adjust font size for smaller screens
          }}>
            What's your style? Let us help you find it.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#FF4d4F",
              padding: { xs: "8px 12px", md: "10px 15px" }, // Smaller padding for mobile
              borderRadius: "5px",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: { xs: "0.75rem", md: "1rem" }, // Adjust button font size
            }}
          >
            Book Your Advisor→
          </Button>
        </Box>

        {/* Right Icon */}
        <Box mt={{ xs: 2, md: 0 }} sx={{ mb: 0 }}> {/* Add margin top on small screens */}
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/034/028/820/small_2x/fashion-model-girl-in-beige-wear-png.png"
            // width="140px"
            alt="Icon Right"
            style={{
              transform: "scale(1.1)",
              width: { xs: "90px", md: "200px" } // Smaller size for mobile
            }}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h5" sx={{
          color: 'pink', mt: 6, mb: 1, mr: 2,
          fontSize: { xs: "0.8rem", md: "1.8rem" }
        }}>@ FOLLOW US ON  </Typography>
        <Typography variant="h5" sx={{
          color: "#570220", mt: 6, mb: 1,
          fontSize: { xs: "0.8rem", md: "1.8rem" }
        }}>  INSTAGRAM</Typography>
      </Box>
      <Box><Typography variant='h5' sx={{ textAlign: "center ", color: "gray", mb: 5 }}>shop our instagram</Typography></Box>
      <Box sx={{ padding: '20px' }}>
        <Grid container spacing={3}>
          {images.map((image, index) => (
            <Grid
              sx={{ alignItems: "center", display: "flex" }}
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <Box
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '10px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
                    transform: 'scale(1.02)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  },
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: '100%',
                    // height: 'auto',
                    // display: 'block',
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Typography variant="h4" gutterBottom align="center" sx={{ paddingTop: '20px' }}>
        Covetable finds this Week
      </Typography>
      <Grid container spacing={9} sx={{ padding: '20px' }}>
        {products.map((product, index) => (
          <Grid  sx={{
            '&:hover': {
              '& img': {
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
              },
            },
          }}
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
      <Box sx={{ position: 'relative', overflow: 'hidden', height: '90vh', mt: { md: 10, lg: 10, sm: 6, xs: 5 } }}>
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            zIndex: -1,
          }}
        >
          <source src="https://axtra-react-ecommerce.vercel.app/assets/video/hero-3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: '#fff',
            textAlign: 'center',
          }}
        >
          <Typography variant="h2" sx={{ fontSize: { md: "40px", sm: "20px", xs: "15px" }, fontWeight: 'bold', mb: 2 }}>
            Welcome to Fashion Hub
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Discover the latest trends and styles.
          </Typography>
           <Button  size="large" sx={{background:"#FF4D4F",color:"#fff"}}>
            View more→
          </Button>
        </Box>
      </Box>


      <Box sx={{ width: "95%", margin: "auto", }}>
        <Typography
          sx={{
            color: "pink",
            fontFamily: "var(--font-primary)",
            fontWeight: "700",
            letterSpacing: "5px",
            mb: 3,
            mt: 4,
            fontSize: { xs: "10px", sm: "15px", md: "23px" }, // Responsive font size
          }}
        >
          OUR SPECIALITIES
        </Typography>

        <Box
          sx={{
            background: "pink",
            height: "3px",
            width: "270px",
          }}
        ></Box>

        <Typography
          sx={{
            fontFamily: "inherit",
            fontSize: { xs: "40px", sm: "60px", md: "80px" }, // Responsive font size
            fontWeight: "600",
            mt: 2,
            display: "flex",
            flexWrap: "wrap", // Wrap text on small screens
          }}
        >
          <Typography
            sx={{
              color: "red",
              fontSize: { xs: "40px", sm: "60px", md: "80px" }, // Responsive font size
              fontWeight: "600",
              mr: 1,
            }}
          >
            Why
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "40px", sm: "60px", md: "80px" }, // Responsive font size
              fontWeight: "600",
            }}
          >
            You Should
          </Typography>
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "40px", sm: "60px", md: "80px" }, // Responsive font size
            fontWeight: "600",
          }}
        >
          Choose Us
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: '#f0f0f0', padding: '40px' }}>
  <Grid container spacing={2}>
    {/* Portfolio Section */}
    <Grid item xs={12}>
      <Box
        sx={{
          backgroundColor: '#fff',
          padding: '20px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100%'
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1055/1055672.png"
          alt="Portfolio Icon"
          style={{ width: '50px', marginBottom: '20px' }}
        />
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
          Our Portfolio
        </Typography>
        <Typography variant="body2">
          Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
        </Typography>
      </Box>
    </Grid>

    {/* Services Section */}
    <Grid item xs={12}>
      <Box
        sx={{
          backgroundColor: '#fff',
          padding: '20px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100%'
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1055/1055673.png"
          alt="Services Icon"
          style={{ width: '50px', marginBottom: '20px' }}
        />
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
          Our Services
        </Typography>
        <Typography variant="body2">
          Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
        </Typography>
      </Box>
    </Grid>

    {/* About Company Section */}
    <Grid item xs={12}>
      <Box
        sx={{
          backgroundColor: '#fff',
          padding: '20px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100%'
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1055/1055686.png"
          alt="Company Icon"
          style={{ width: '50px', marginBottom: '20px' }}
        />
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
          About Company
        </Typography>
        <Typography variant="body2">
          Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
        </Typography>
      </Box>
    </Grid>
  </Grid>
</Box>


    </>

  );

}

export default HomePage;