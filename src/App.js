import React from 'react';
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';
import { scroller, Element } from 'react-scroll';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Achievement from './Components/Achievement';

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
      <Element name='welcome' className='element'>
        <Navbar scrollTo={scrollTo} />
        <div style={{ backgroundColor: '#f1eee9' }} className='shadow-sm mb-3'>
          <Landing />
        </div>
      </Element>
      <Element name='portfolio' className='element'>
        <Portfolio />
      </Element>
      <Element name='achievement' className='element'>
        <Achievement />
      </Element>
      <Element name='education' className='element'>
        <Education />
      </Element>
      <Element name='experience' className='element'>
        <Experience />
      </Element>
      <div style={{ backgroundColor: '#f1eee9' }} className='shadow-sm mt-3'>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
