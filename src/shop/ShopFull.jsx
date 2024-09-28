import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // import carousel styles
import { Box, Typography, IconButton, Button } from '@mui/material'; // Material-UI for styling
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Card, CardMedia, CardContent, Grid, Paper } from '@mui/material';
// import { Card, CardMedia, CardContent, Typography, Grid, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
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

function ProductCard({ product }) {
  return (
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
}


function ShopFull() {
  
  return (
 <>
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
 </>
  )
}

export default ShopFull