import React from 'react';
import avatarKady from '../assets/img/layout/avatar-kady.jpg';
import avatarAiysha from '../assets/img/layout/avatar-aiysha.jpg';
import avatarArthur from '../assets/img/layout/avatar-arthur.jpg';

export default function Testimonials() {
  return (
    <div className='testimonials-outer-container'>
      <div className='container flex column'>
        <h2>
          Delivering real results for top companies. Some of our <span>success stories.</span>
        </h2>
        <ul className='clean-list flex row'>
          <li>
            <div className='list-text'>
              <p> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
            </div>
            <div className='list-name'>Kady Baker</div>
            <div className='list-position'>Product Manager at Bookmark</div>
            <div className='list-user'>
              <img src={avatarKady} alt={avatarKady} />
            </div>
          </li>
          <li>
            <div className='list-text'>
              <p> “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
            </div>
            <div className='list-name'>Aiysha Reese</div>
            <div className='list-position'>Founder of Manage</div>
            <div className='list-user'>
              <img src={avatarAiysha} alt={avatarAiysha} />
            </div>
          </li>
          <li>
            <div className='list-text'>
              <p> “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
            </div>
            <div className='list-name'>Arthur Clarke</div>
            <div className='list-position'>Co-founder of MyPhysio</div>
            <div className='list-user'>
              <img src={avatarArthur} alt={avatarArthur} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
