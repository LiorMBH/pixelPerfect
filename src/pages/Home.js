import React, { Component } from 'react';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';

class Home extends Component {
  render() {
    return (
      <div className='main-page-container'>
        <Hero></Hero>
        <WhatWeDo></WhatWeDo>
        <Testimonials></Testimonials>
        <ContactUs></ContactUs>
      </div>
    );
  }
}

export default Home;
