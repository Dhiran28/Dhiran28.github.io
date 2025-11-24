import React, { useState, useEffect } from 'react';
import { DataProvider } from './context/DataContext';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import VisionPage from './components/VisionPage';

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    if (currentHash.startsWith('#/dashboard')) {
      return <Dashboard />;
    }
    if (currentHash.startsWith('#/vision')) {
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