import { useState , useEffect } from "react";

export default function OnlineStatus(){
    const [isOnline , setIsOnline] = useState(navigator.onLine)
    useEffect(() => {
        const updateOnlineStatus = () => {
          setIsOnline(navigator.onLine);
        };
    
        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);
    
        return () => {
          window.removeEventListener('online', updateOnlineStatus);
          window.removeEventListener('offline', updateOnlineStatus);
        };
      }, []);

      return (
        <div style={{ position: 'fixed', top: 10, right: 10 }}>
          {isOnline ? (
            <span style={{ color: 'green' }}>Online</span>
          ) : (
            <span style={{ color: 'red' }}>Offline</span>
          )}
        </div>
      );
    
}