import React from 'react';
import FirstHeroSection from './components/firstHeroSection/firstHeroSection';
import './App.css';
import SecondHeroSection from './components/SecondHeroSection/SecondHeroSection';
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App ">
      <FirstHeroSection />
      <SecondHeroSection />
      <Footer />
    </div>
  );
}

export default App;
