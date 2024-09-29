import React, { useState } from 'react';
import { Box, Typography, Modal, Button, Grid } from '@mui/material';

function AboutPage() {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const images = [
    "https://i.pinimg.com/736x/e6/9a/aa/e69aaa758f5622b19a037d278697406c.jpg",
    "https://cdn.shopify.com/s/files/1/0582/2827/7407/products/product-image-1748640414.jpg?v=1645451779",
    "https://i.pinimg.com/736x/b2/1e/cc/b21ecc18ca2e8b3612d21e0133bc5b03.jpg",
    "https://i.pinimg.com/736x/c8/27/4c/c8274ca3d36fd35e0e0d0dbc5d084d8e.jpg",
    "https://cs6.livemaster.ru/storage/de/b3/7ebe7082605d7343a946d17a97mq.jpg",
    "https://i.pinimg.com/736x/e5/9f/fb/e59ffb93884e47a29686e40ef66eb04f.jpg"
  ];
  return (
    <>
      <Box
        sx={{
          backgroundColor: '#FAECE1',
          py: { xs: 6, sm: 8, md: 10 },
          textAlign: 'center',
          px: { xs: 2, sm: 3, md: 5 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontFamily: "initial"
          }}
        >
          Welcome to Fashion Hub
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mt: 2,
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            fontFamily: "initial"
          }}
        >
          Where Fashion Meets Passion! Discover clothing that lets you express your true style with confidence.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 4,
            gap: 2,
            flexWrap: 'wrap',
            '& > div': {
              position: 'relative', 
              width: '300px',
              height: '300px',
              backgroundColor: '#f0f0f0',
              overflow: 'hidden',
              cursor: 'pointer',
            },
          }}
        >
          {images.slice(0, 3).map((image, index) => (
            <Box
              key={index}
              onMouseEnter={() => handleMouseEnter(image)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={image}
                alt={`Fashion ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: hoveredImage === image ? 'scale(1.1)' : 'scale(1)', 
                  transition: 'transform 0.3s ease', 
                }}
              />
              {hoveredImage === image && (
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '80px',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <Typography variant="h6" sx={{
                    textAlign: 'center', fontFamily: "initial"
                  }}>
                    Explore More Fashion Trends
                  </Typography>
                </Box>
              )}
            </Box>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{
            fontWeight: 'bold', mb: 2, fontFamily: "initial"
          }}>
            Branding Collactions
          </Typography>
          <Typography variant="body1" sx={{
            color: '#757575', fontFamily: "initial"
          }}>
            Explore the latest trends from top fashion brands around the world.
          </Typography>
        </Box>

       
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            flexWrap: 'wrap',
            '& > div': {
              position: 'relative', 
              width: '300px',
              height: '300px',
              backgroundColor: '#f0f0f0',
              overflow: 'hidden',
              cursor: 'pointer',
            },
          }}
        >
          {images.slice(3, 6).map((image, index) => (
            <Box
              key={index}
              onMouseEnter={() => handleMouseEnter(image)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={image}
                alt={`Fashion ${index + 4}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: hoveredImage === image ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.3s ease',
                }}
              />
              {hoveredImage === image && (
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '80px',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <Typography variant="h6" sx={{ textAlign: 'center' }}>
                    Explore More Fashion Trends
                  </Typography>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>


      <Box
        sx={{
          background: 'linear-gradient(135deg, #f0f4ff 0%, #fff5f7 100%)',
          py: { xs: 8, sm: 10, md: 12 },
          px: { xs: 3, sm: 5, md: 7 },
          textAlign: 'center',
          borderRadius: '0 0 50px 50px',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            textAlign: 'center',
            mb: 5,
            fontFamily: "'Playfair Display', serif",
            color: '#333',
          }}
        >
          Our Journey to Fashion Excellence
        </Typography>

      
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            mb: 6,
            color: "#555",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Fashion Hub began as a humble dream to revolutionize fashion. Today, we are a global brand offering the finest
          fabrics, trendsetting designs, and a fashion-forward community. We are more than just a clothing store; we are a place
          where you find inspiration, individuality, and empowerment through fashion.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 4,
            mt: 4,
          }}
        >
          <Box
            sx={{
              maxWidth: '300px',
              textAlign: 'center',
              backgroundColor: '#fff',
              borderRadius: '15px',
              p: 3,
              transition: 'transform 0.3s ease-in-out',
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.05)',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/035/672/927/non_2x/green-industry-line-icon-symbol-illustration-free-png.png"
              alt="Sustainability Icon"
              style={{ width: '50px', marginBottom: '15px' }}
            />
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', color: '#333', mb: 2, fontFamily: "'Playfair Display', serif" }}
            >
              Sustainability & Quality
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', fontFamily: "'Roboto', sans-serif" }}>
              Our clothes are crafted with care for people and the planet. Every piece is designed to last, without sacrificing
              style or comfort.
            </Typography>
          </Box>

          <Box
            sx={{
              maxWidth: '300px',
              textAlign: 'center',
              backgroundColor: '#fff',
              borderRadius: '15px',
              p: 3,
              transition: 'transform 0.3s ease-in-out',
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.05)',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <img
              src="https://png.pngtree.com/png-vector/20220711/ourmid/pngtree-innovative-logo-design-creative-content-png-image_5855115.png"
              alt="Creativity Icon"
              style={{ width: '50px', marginBottom: '15px' }}
            />
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', color: '#333', mb: 2, fontFamily: "'Playfair Display', serif" }}
            >
              Creativity & Innovation
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', fontFamily: "'Roboto', sans-serif" }}>
              Inspired by art, culture, and street style, our collections break away from the ordinary, bringing you bold,
              fresh designs.
            </Typography>
          </Box>

          <Box
            sx={{
              maxWidth: '300px',
              textAlign: 'center',
              backgroundColor: '#fff',
              borderRadius: '15px',
              p: 3,
              transition: 'transform 0.3s ease-in-out',
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.05)',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <img
              src="https://png.pngtree.com/png-vector/20220718/ourmid/pngtree-youth-empowerment-abstract-concept-vector-illustration-png-image_5914434.png"
              alt="Inclusivity Icon"
              style={{ width: '50px', marginBottom: '15px' }}
            />
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', color: '#333', mb: 2, fontFamily: "'Playfair Display', serif" }}
            >
              Inclusivity & Empowerment
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', fontFamily: "'Roboto', sans-serif" }}>
              We celebrate every body, every identity. Our diverse range of sizes and styles ensures everyone finds their perfect fit.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: '#fdece4',
          mt: { md: 10, sm: 5 },
          borderRadius: { xs: '0', md: '900px 0 0 900px' }, 
          padding: { xs: '30px 0', md: '50px 0' }, 
        }}
      >
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
       
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: { xs: 'center', md: 'left' }, 
            }}
          >
            <Box
              sx={{
                padding: { xs: '10px', md: '20px' }, 
                ml: { md: 4 }, 
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                  fontSize: { xs: '2rem', md: '3rem' }, 
                }}
              >
                Join Our Fashion Community
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: '#555',
                  fontSize: { xs: '1rem', md: '1.25rem' }, 
                }}
              >
                At Fashion Hub, fashion is more than clothing. It’s a movement. Join us on our journey to create a world where style knows no boundaries.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#e91e63',
                  color: '#fff',
                  padding: { xs: '8px 16px', md: '10px 20px' }, 
                  borderRadius: '30px',
                  fontSize: { xs: '0.875rem', md: '1rem' },
                }}
              >
                SHOP NOW →
              </Button>
            </Box>
          </Grid>

     
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: 'center', 
              mt: { xs: 4, md: 0 }, 
            }}
          >
            <Box>
              <img
                src="https://img.freepik.com/free-photo/donation-community-service-volunteer-support_53876-121174.jpg?w=826&t=st=1727276473~exp=1727277073~hmac=859fe28c05c24d34ab79e15eb728e5644b76f7a6a309fb7c9f70550f4a155679"
                alt="Fashion Community"
                style={{
                  maxWidth: '100%',
                  borderRadius: '900px 10px 10px 900px',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ textAlign: 'center', mb: 4,mt:5 }}>
          <Typography variant="h4" sx={{
            fontWeight: 'bold', mb: 2, fontFamily: "initial"
          }}>
       Most popular brands
          </Typography>
          <Typography variant="body1" sx={{
            color: '#757575', fontFamily: "initial"
          }}>
            Explore the latest trends from top fashion brands around the world.
          </Typography>
        </Box>

      
      <Box
        sx={{
          backgroundColor: '#000',
          display: "flex",    
          textAlign: 'center',
          position: 'relative',
          pb:4,
          mt:5
          ,borderRadius:"150px 0 150px 0"
        }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{
            margin: '0 auto',
            position: 'relative',
            maxWidth: '1200px' 
          }}
        >

        
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            <Box>
              <img
                src="https://image.isu.pub/170214145958-9969485cb04ff2e7b4caefbbc394f00d/jpg/page_1.jpg"
                alt="Fashion Community"
                style={{
                  width: '100%', 
                  height: 'auto',
                  borderRadius: '40px 0px 40px 0px',
                }}
              />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
          >
            <Box sx={{ padding: '10px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3,color:"red" }}>
              "Crafted for the Fearless."

              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: '#fff ' }}>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eligendi exercitationem facilis dicta maxime itaque magnam officia, labore facere neque vel commodi doloremque nam velit expedita perferendis aspernatur quas debitis?
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#e91e63',
                  color: '#fff',
                  padding: '10px 20px',
                  borderRadius: '30px'
                }}
              >
                SHOP NOW →
              </Button>
            </Box>
          </Grid>

         
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            <Box>
              <img
                src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/02/03121512/featured-59.jpeg?tr=w-1200,h-900"
                alt="Fashion Community"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '40px 0px 40px 0px',
                }}
              />
            </Box>
          </Grid>

        </Grid>
      </Box>


      <Box
        sx={{
          backgroundColor: '#000',
          display: "flex",    
          textAlign: 'center',
          position: 'relative',
          pb:4,
          
          mt:5
          ,borderRadius:"150px 0 150px 0"

        }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{
            margin: '0 auto',
            position: 'relative',
            maxWidth: '1200px' 
          }}
        >

        
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: { md: 'block' },margin:"auto" }}
          >
            <Box>
              <img
                src="https://fabfashionfix.com/wp-content/uploads/2013/09/Normal.jpg"
                alt="Fashion Community"
                style={{
                  width: '100%', 
                  height: 'auto',
                  borderRadius: '40px 0 40px 0px',
                }}
              />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
          >
            <Box sx={{ padding: '10px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3,color:"red" }}>
              Your Style, Your Statement
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: '#fff ' }}>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eligendi exercitationem facilis dicta maxime itaque magnam officia, labore facere neque vel commodi doloremque nam velit expedita perferendis aspernatur quas debitis?
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#e91e63',
                  color: '#fff',
                  padding: '10px 20px',
                  borderRadius: '30px'
                }}
              >
                SHOP NOW →
              </Button>
            </Box>
          </Grid>

         
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: { xs: 'block', md: 'block', } }}
          >
            <Box>
              <img
                src="https://i.pinimg.com/736x/c4/5a/44/c45a44a7c933d5d6915f790ed3407086.jpg"
                alt="Fashion Community"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '40px 0px 40px 0px',
                }}
              />
            </Box>
          </Grid>

        </Grid>
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
            fontSize: { xs: "10px", sm: "15px", md: "23px" }, 
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
            fontSize: { xs: "40px", sm: "60px", md: "80px" }, 
            fontWeight: "600",
            mt: 2,
            display: "flex",
            flexWrap: "wrap", 
          }}
        >
          <Typography
            sx={{
              color: "red",
              fontSize: { xs: "40px", sm: "60px", md: "80px" }, 
              fontWeight: "600",
              mr: 1,
            }}
          >
            Why
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "40px", sm: "60px", md: "80px" },
              fontWeight: "600",
            }}
          >
            You Should
          </Typography>
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "40px", sm: "60px", md: "80px" }, 
            fontWeight: "600",
          }}
        >
          Choose Us
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: '#f0f0f0', padding: '40px' }}>
  <Grid container spacing={2}>
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
  )
}

export default AboutPage