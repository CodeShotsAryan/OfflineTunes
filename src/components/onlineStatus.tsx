import { useEffect, useState } from 'react';

// Define the OnlineStatus component
export default function OnlineStatus() {
  // Initialize state for online status
  const [isOnline, setIsOnline] = useState<boolean>(true);

  // Effect to handle browser online status
  useEffect(() => {
    // Check if `navigator` is available (client-side)
    if (typeof window !== 'undefined') {
      const updateOnlineStatus = () => {
        setIsOnline(navigator.onLine);
      };

      // Add event listeners
      window.addEventListener('online', updateOnlineStatus);
      window.addEventListener('offline', updateOnlineStatus);

      // Set initial status
      setIsOnline(navigator.onLine);

      // Cleanup event listeners on unmount
      return () => {
        window.removeEventListener('online', updateOnlineStatus);
        window.removeEventListener('offline', updateOnlineStatus);
      };
    }
  }, []); // Empty dependency array to run only on mount and unmount

  // Render component based on online status
  return (
    <div>
      {isOnline ? 'You are online' : 'You are offline'}
    </div>
  );
}
