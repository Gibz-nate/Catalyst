import { useState, useEffect} from 'react';
import {Navbar, Footer} from './components';  // Import your Navbar component
// import {bg} from './assets/images';
import { Hero, Services, Companies, Comments } from './pages';
// import { text } from 'framer-motion/client';
import { motion } from 'framer-motion';


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
    
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen" >
      
      {/* Toggle Button for Dark Mode */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main className="flex-grow px-4 md:px-8 lg:px-16">
      
        <Hero />
        <motion.div
      animate={{ backgroundPosition: ['0% 0%', '40px 40px'] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      style={{
        backgroundColor: '#0a0a0a',
        backgroundImage: `linear-gradient(0deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
        height: 'full',
        width: 'full',
      }}
      isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}
      className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen"
    >
        <Services />
        <Companies />
        <Comments />
        </motion.div>
      </main>
      <Footer />  
      
    </div>
    
  );
};

export default App;
