import React from 'react';
import personIcon from '../assets/img/layout/icon-person.svg';
import cogIcon from '../assets/img/layout/icon-cog.svg';
import chartIcon from '../assets/img/layout/icon-chart.svg';

export default function WhatWeDo() {
  return (
    <div className='whatWeDo-outer-container'>
      <div className='container flex'>
        <div className='text-wrapper flex-basis-40'>
          <h2>Build & manage distributed teams like no one else.</h2>
        </div>

        <div className='flex-basis-45'>
          <ul className='clean-list'>
            <li>
              <div className='list-icon'>
                <img src={personIcon} alt={personIcon} />
              </div>
              <div className='list-content'>
                <h3 className='list-title'>Experienced Individuals</h3>
                <div className='list-description'>
                  <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                </div>
              </div>
            </li>
            <li>
              <div className='list-icon'>
                <img src={cogIcon} alt={cogIcon} />
              </div>
              <div className='list-content'>
                <h3 className='list-title'>Easy to Implement</h3>
                <div className='list-description'>
                  <p>Our processes have been refined over years of implementation meaning our teams always deliver. </p>
                </div>
              </div>
            </li>
            <li>
              <div className='list-icon'>
                <img src={chartIcon} alt={chartIcon} />
              </div>
              <div className='list-content'>
                <h3 className='list-title'>Enhanced Productivity</h3>
                <div className='list-description'>
                  <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
