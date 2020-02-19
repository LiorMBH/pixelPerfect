import React from 'react';

export default function Hero() {
  return (
    <div className='outer-component-container'>
      <div className='hero-container container flex'>
        <div className='flex-basis-55'>
          <h1>
            Find the best <span>talent</span>
          </h1>
        </div>

        <div className='flex-basis-40 flex align-end'>
          <p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
        </div>
      </div>
    </div>
  );
}
