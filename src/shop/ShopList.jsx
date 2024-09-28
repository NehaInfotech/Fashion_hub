import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Card, CardMedia, CardContent } from '@mui/material';
import { Fade } from '@mui/material'; // For fade-in effect
import  { useEffect, useState } from 'react';
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

const images = [
  { src: 'https://www.habkorea.net/wp-content/uploads/2018/02/Gyeongbokgung-Hanbok-Photo-Shoot.jpg', alt: 'Image 1' },
  { src: 'https://getethnic.com/wp-content/uploads/2020/05/muslim-pakistani-wedding-photography-nikkah-reception-dallas-20.jpg', alt: 'Image 4' },
  { src: 'https://i.pinimg.com/originals/d6/8c/ae/d68caef9ce2616755f5e1e49d845369a.jpg', alt: 'Image 6' },
  { src: 'https://sun9-84.userapi.com/impg/jaLtYIGLidiTxQmZ-JYq3ba6icc2ChGmhgVwPA/e_QPuiDlBGY.jpg?size=1280x852&quality=96&sign=433111b8ee2dafdfcbeb0d0ddd773d86&c_uniq_tag=XllHXCjPD25hB7fyJjMYHxA_s7BTQ4sUlFjogxUo4C4&type=album', alt: 'Image 3' },
  { src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/priyanka-chopra-nick-jonas-1544790907.jpg', alt: 'Image 2' },
  { src: 'https://1.bp.blogspot.com/---LzaJlGJxE/W5scsEwnRaI/AAAAAAAAMFU/SphmJLOIBycTjAj4aAHD4hpz4V6ozAm2ACLcBGAs/w1200-h630-p-k-no-nu/602_9804L.jpg', alt: 'Image 5' },
  { src: 'https://www.nonograms.ru/files/user/upload/133167_412de30d5cfc453ed19064fb0aba519d.jpg', alt: 'Image 7' },
  { src: 'https://images.news18.com/ibnlive/uploads/2023/11/image-2023-11-c37300b68522e5e6b143198f49f19a72-16x9.jpg', alt: 'Image 8' },
  { src: 'https://attuale.ru/wp-content/uploads/2018/11/AnnaTimur_086.jpg', alt: 'Image 8' },
  { src: 'https://i.pinimg.com/originals/42/22/1a/42221ad93ab5712a612b241bd8bcbd77.jpg', alt: 'Image 8' },
  { src: 'https://i.ytimg.com/vi/PbiR5Pysqpo/maxresdefault.jpg', alt: 'Image 8' },
  { src: 'https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/wi/art/5cab1ee2443fd.jpeg', alt: 'Image 8' },
];

const categories = [
  {
    title: 'Men',
    img: 'https://media.istockphoto.com/id/864505242/photo/mens-clothing-and-personal-accessories.jpg?s=612x612&w=0&k=20&c=TaJuW3UY9IZMijRrj1IdJRwd6iWzXBlrZyQd1uyBzEY=',
    description: 'Explore the latest collection of men’s clothing and accessories.'
  },
  {
    title: 'Women',
    img: 'https://img.freepik.com/free-photo/spring-wardrobe-switch-still-life_23-2150176694.jpg',
    description: 'Discover trending fashion for women in all sizes and styles.'
  },
  {
    title: 'Children',
    img: 'https://softsensbaby.com/cdn/shop/articles/1_f5a36eac-9baf-480c-a450-40f401287bb2.jpg?v=1633599012',
    description: 'Shop comfortable and stylish clothes for children of all ages.'
  }
];
const headers = [
  "Travel Adventures",
  "Discover Amazing Views",
  "Capture Your Memories",
  "Family Moments",
  " Life Events",
  "Everyday Life",
  "Seasonal Memories",
  "Creative Photography Tips",
  "Memory Keepsakes"

];
function ShopList() {
  const [headerIndex, setHeaderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeaderIndex((prevIndex) => (prevIndex + 1) % headers.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <>
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
                    transform: 'scale(1.09)',
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
      <Box sx={{ position: 'relative', mb: 5 }}>
        <Fade in timeout={1000}>
          <Typography
            variant="h4"
            sx={{
             textAlign:"center",
              top: 20,
              left: 20,
              color: '#FF4D4F',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              zIndex: 10,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              transition: 'opacity 1s ease-in-out',
              opacity: headerIndex === 0 ? 1 : 0,
            }}
          >
           
           "{headers[headerIndex]}"
          </Typography>
        </Fade>
      </Box>
      <Box sx={{ width: { xs: '95%', sm: '90%', md: '100%' }, margin: "auto", position: 'relative', mb: 5 }}>

        <Fade in timeout={1000}>
          <Typography
            variant="h4"
            sx={{
              position: 'absolute',
              top: 20,
              left: 20,
              color: 'white',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              zIndex: 10,
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}
          >
            Pre wedding fashion clothes
          </Typography>
        </Fade>
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          transitionTime={400}
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          swipeable={true}
        >
          {images.map((image, index) => (
            <div key={index} style={{ width: '1300px', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={image.src} alt={image.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </Carousel>
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
    </>
  );
}

export default ShopList;
