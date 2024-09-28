import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // import carousel styles
import { Box, Typography, IconButton, Button } from '@mui/material'; // Material-UI for styling
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Card, CardMedia, CardContent, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system'
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
  { src: 'https://i.pinimg.com/736x/d3/e6/05/d3e605fcdcf58b448bc5b9763f218d85.jpg', alt: 'Image 8' } ,
  { src: 'https://i.pinimg.com/736x/87/45/12/874512dbb3ef4f43bf79318d14c88486.jpg', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/736x/ff/84/09/ff84093970b8cdaad77238ad2596d43a.jpg', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/736x/7d/b1/d8/7db1d895e6ee79f42138e21044619be5.jpg', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/736x/1d/c0/70/1dc0700daf3e97730a0d30d78514790c.jpg', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/736x/99/2a/26/992a2615e3dc1e9d68c7a877ddce56c3.jpg', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/736x/ab/1a/34/ab1a3472b81b3c0caef4bda503c8616b.jpg', alt: 'Image 8' },
  { src: '  https://i.pinimg.com/736x/61/0c/8b/610c8b9ced6924cb98955977028f3427.jpg', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/736x/43/03/64/430364ebb5db5b5ef7cc170f4c899352.jpg', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/736x/8f/8b/7d/8f8b7d310b616677d22eddb7ecadf2a5.jpg', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/736x/43/fc/cf/43fccf55808ff8a05a4af9f5ad95354b.jpg', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/736x/06/a4/55/06a4556bc58421c2192d7ede3afd6249.jpg', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/736x/31/38/00/31380002a60a27d6a7dad0357d5ae3a5.jpg', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/736x/6e/d5/97/6ed5978a487923f5862c1d3de5c075b4.jpg', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/736x/82/78/0b/82780b6c9cd6a8acbfdfa9c6e16de4ea.jpg', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/736x/ec/20/3b/ec203bb9f4038336ab757cfab1f63dfc.jpg', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/736x/62/ca/c1/62cac186e3f5a7108e0873d965960daa.jpg', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/736x/81/b0/ec/81b0ec688098a53059cb1cb7e7078993.jpg', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/736x/1e/4b/0d/1e4b0d3623ef97d0e74020bc253a25bd.jpg', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/736x/b9/91/94/b991943ce4559a6ce0af847fa5da3070.jpg', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/736x/b8/3b/a2/b83ba251145f2297efdfcf2c6884afbc.jpg ', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/736x/40/00/65/4000653406ec4a85a5ba34234d04742d.jpg', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/736x/e7/f9/0b/e7f90ba5a254fd03badcbb836cdacec5.jpg', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/736x/cb/02/80/cb0280e088c0c86d0fbb9f133075f4bf.jpg', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/736x/87/9a/00/879a002be3da4127bb1cdd4da4062083.jpg', alt: 'Image 8' },

  
];



function ShopGrid() {
  return (
    <>
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
    </>
  )
}

export default ShopGrid