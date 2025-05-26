import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div style={styles.headerContent}>
        <h1 style={styles.title}>Poultry Agritech Platform</h1>
        
        {/* Mobile menu button */}
        <button 
          style={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Navigation menu - responsive */}
        <nav style={{
          ...styles.nav,
          display: isMenuOpen ? 'flex' : 'none',
          '@media (min-width: 768px)': {
            display: 'flex'
          }
        }}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/marketplace" style={styles.link}>Marketplace</Link>
          <Link to="/community" style={styles.link}>Community</Link>
          <Link to="/profile" style={styles.link}>Profile</Link>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#4CAF50',
    padding: '1rem',
    color: '#fff',
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: '1.5rem',
    margin: 0,
  },
  menuButton: {
    display: 'block',
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '1.5rem',
    cursor: 'pointer',
    '@media (min-width: 768px)': {
      display: 'none',
    },
  },
  nav: {
    width: '100%',
    flexDirection: 'column',
    '@media (min-width: 768px)': {
      width: 'auto',
      flexDirection: 'row',
    },
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    '@media (min-width: 768px)': {
      display: 'inline-block',
    },
  },
};

export default Header;