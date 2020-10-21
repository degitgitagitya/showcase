import React from 'react';
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';
import { scroller, Element } from 'react-scroll';

const App = () => {
  const scrollTo = (param) => {
    scroller.scrollTo(param, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <React.Fragment>
      <div style={{ backgroundColor: '#f1eee9' }} className='shadow-sm mb-3'>
        <Navbar scrollTo={scrollTo} />
        <Landing />
      </div>
      <Element name='portfolio' className='element'>
        <Portfolio />
      </Element>
      <div style={{ backgroundColor: '#f1eee9' }} className='shadow-sm mt-3'>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
