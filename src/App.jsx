import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';  // Import your Navbar component
import { Hero, Services } from './pages';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode by adding/removing the "dark" class on the HTML root element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      {/* Toggle Button for Dark Mode */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main className="flex-grow px-4 md:px-8 lg:px-16">
        <Hero />
        <Services />
      </main>
    </div>
  );
};

export default App;
