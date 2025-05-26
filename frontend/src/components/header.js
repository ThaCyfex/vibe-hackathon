import React from 'react';
import { Link } from 'react-router-dom';

/**
 * This is the Header component. I want users to be able to navigate easily, so I include links to all the main pages. I also style it to match the platform's theme.
 */
const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Poultry Agritech Platform</h1>
      <nav>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/marketplace" style={styles.link}>Marketplace</Link>
        <Link to="/community" style={styles.link}>Community</Link>
        <Link to="/profile" style={styles.link}>Profile</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#4CAF50',
    padding: '10px',
    color: '#fff',
    textAlign: 'center'
  },
  link: {
    margin: '0 10px',
    color: '#fff',
    textDecoration: 'none'
  }
};

export default Header;
