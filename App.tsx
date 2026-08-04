import React, { useState, useEffect } from 'react';
import { DataProvider } from './context/DataContext';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import VisionPage from './components/VisionPage';

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentHash(window.location.hash);
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const renderContent = () => {
    const hash = currentHash.toLowerCase();
    const path = currentPath.toLowerCase();

    if (
      hash.startsWith('#/dashboard') || 
      path.endsWith('/dashboard') || 
      path.endsWith('/dashboard/')
    ) {
      return <Dashboard />;
    }
    if (
      hash.startsWith('#/vision') || 
      path.endsWith('/vision') || 
      path.endsWith('/vision/')
    ) {
      return <VisionPage />;
    }
    return <Home />;
  };

  return (
    <DataProvider>
      {renderContent()}
    </DataProvider>
  );
};

export default App;