import React from 'react';
import NavBar from './NavBar';
import siteLogo from '../assets/img/layout/logo.svg';

import fbLogo from '../assets/img/layout/icon-facebook.svg';
import ptLogo from '../assets/img/layout/icon-pinterest.svg';
import twLogo from '../assets/img/layout/icon-twitter.svg';

export default function Footer() {
  return (
    <div className='bkg-secondary-five'>
      <div className='footer-container container flex space-between'>
        <div className='site-controls'>
          <img src={siteLogo} alt={siteLogo} />
          <NavBar></NavBar>
        </div>
        <ul className='clean-list'>
          <li>987 Hillcrest Lane</li>
          <li>Irvine, CA</li>
          <li>California 92714</li>
          <li>Call Us : 949-833-7432</li>
        </ul>
        <div className='site-social-links flex column space-between'>
          <ul className='clean-list flex justify-end'>
            <li className='social-img'>
              <img src={fbLogo} alt={'fbLogo'} />
            </li>
            <li className='social-img'>
              <img src={ptLogo} alt={'ptLogo'} />
            </li>
            <li className='social-img'>
              <img src={twLogo} alt={'twLogo'} />
            </li>
          </ul>
          <small>Copyright 2020. All Rights Reserved</small>
        </div>
      </div>
    </div>
  );
}
