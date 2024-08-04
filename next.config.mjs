// Import the necessary modules using ES module syntax
import nextPWA from 'next-pwa';

// Define PWA configuration options
const pwaConfig = {
  dest: 'public', // Destination directory for the PWA files
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
  register: true, // Register the PWA service worker
  skipWaiting: true, // Skip waiting for service worker activation
};

// Define Next.js configuration object
const nextConfig = {
  reactStrictMode: true, // Enable React strict mode for improved error handling
  swcMinify: true, // Enable SWC minification for improved performance
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development', // Remove console.log in production
  },
};

// Export the combined configuration for Next.js with PWA support
export default nextPWA(pwaConfig)(nextConfig);
