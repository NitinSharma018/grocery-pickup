import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

export default function Home() {
  const containerStyle = {
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
    paddingTop: '1.5rem', // reduced padding
    paddingBottom: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: "'Segoe UI', sans-serif",
    color: '#fff',
    backgroundSize: 'cover',
    backgroundImage:
      'url(https://thumbs.dreamstime.com/b/empty-wooden-table-blurred-supermarket-background-minimalist-design-ai-image-344400326.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: 1,
    textAlign: 'center',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 0,
  };

  const contentWrapper = {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    padding: '0 1rem',
    maxWidth: '1200px',
  };

  const titleStyle = {
    fontSize: '2.7rem', // reduced size
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#000000ff',
  };

  const subtitleStyle = {
    fontSize: '1.5rem', // smaller
    fontWeight: 'bold',
    maxWidth: '700px',
    margin: '0 auto 1rem', // reduced margin
    color: '#000000ff',
  };

  const buttonContainer = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '2rem',
  };

  const cardGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem',
  };

  const card = {
    background: 'linear-gradient(to bottom right, #fefce8, #e0f2fe)',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.15)',
    color: '#2d3748',
    textAlign: 'center',
  };

  const carouselItems = [
    {
      title: 'Fresh Deals!',
      image: 'https://cdn-icons-png.flaticon.com/128/2909/2909765.png',
      caption: 'Up to 40% off on mangoes & melons!',
    },
    {
      title: 'Daily Essentials',
      image: 'https://cdn-icons-png.flaticon.com/128/590/590685.png',
      caption: 'Milk, bread, and more — delivered fast!',
    },
    {
      title: 'Farm Picks',
      image: 'https://cdn-icons-png.flaticon.com/128/3534/3534033.png',
      caption: 'Fresh veggies straight from the farm.',
    },
  ];

  const productTemplate = (item) => (
    <div
      style={{
        background: 'linear-gradient(to bottom right, #fff1f2, #e0f2fe)',
        padding: '1rem',
        borderRadius: '12px',
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      }}
    >
      <img src={item.image} alt={item.title} style={{ height: '60px', marginBottom: '1rem' }} />
      <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>{item.title}</h3>
      <p style={{ color: '#4a5568' }}>{item.caption}</p>
    </div>
  );

  const categories = [
    {
      title: 'Fresh Produce',
      image: 'https://cdn-icons-png.flaticon.com/128/7667/7667623.png',
      text: 'Seasonal fruits and vegetables picked daily.',
    },
    {
      title: 'Dairy Products',
      image: 'https://cdn-icons-png.flaticon.com/128/3534/3534033.png',
      text: 'Milk, cheese, yogurt, and more from local farms.',
    },
    {
      title: 'Bakery Items',
      image: 'https://cdn-icons-png.flaticon.com/128/1046/1046784.png',
      text: 'Freshly baked bread, rolls & pastries daily.',
    },
  ];

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentWrapper}>
        <motion.h1
          style={titleStyle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to <span style={{ color: '#22c55e' }}>Happy Grocers</span>
        </motion.h1>

        <motion.p
          style={subtitleStyle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Order fresh groceries online and pick them up locally — easy, fast & contactless!
        </motion.p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            marginBottom: '1.5rem', // reduced spacing
          }}
        >
          <div
            style={{
              background: 'linear-gradient(to right, #c5fcb9ff, #e5f7dfff)',
              padding: '2rem',
              borderRadius: '16px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
              maxWidth: '600px',
              width: '100%',
            }}
          >
            <h2 style={{ marginBottom: '1.5rem', color: '#31b121ff' }}>🛍 Featured Offers</h2>
            <Carousel
              value={carouselItems}
              numVisible={1}
              numScroll={1}
              itemTemplate={productTemplate}
              circular
              autoplayInterval={4000}
            />
          </div>
        </div>

        <div style={buttonContainer}>
          <Link to="/login">
            <Button
              label="Login"
              icon="pi pi-sign-in"
              className="p-button-lg p-button-info p-button-raised"
            />
          </Link>
          <Link to="/register">
            <Button
              label="Register"
              icon="pi pi-user-plus"
              className="p-button-lg p-button-success p-button-raised"
            />
          </Link>
          <Link to="/dashboard">
            <Button
              label="Shop Now"
              icon="pi pi-shopping-cart"
              className="p-button-lg p-button-warning p-button-raised"
            />
          </Link>
        </div>

        <div style={cardGrid}>
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              style={card}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={cat.image} alt={cat.title} style={{ height: '72px', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.2rem', color: '#14b8a6' }}>{cat.title}</h3>
              <p style={{ fontSize: '0.95rem', color: '#374151' }}>{cat.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
