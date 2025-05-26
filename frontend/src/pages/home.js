import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * Home page – the landing page for the platform.
 */
// This is the Home page. I want users to land here and immediately understand what the platform is about. I include the Header and Footer for navigation and consistency.
const Home = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <h2>Welcome to Poultry Agritech Platform</h2>
        <p>Your one-stop solution for connecting farmers with markets, buyers, and community support.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
