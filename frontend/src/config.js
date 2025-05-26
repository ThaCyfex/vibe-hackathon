// Configuration for API endpoints
const config = {
  API_URL: process.env.NODE_ENV === 'production' 
    ? '/api' // In production, use relative path
    : 'http://localhost:5000/api' // In development, use localhost
};

export default config;