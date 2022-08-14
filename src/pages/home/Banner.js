import React from 'react';
import chair from '../../assets/images/chair.png';
import bgImage from '../../assets/images/bg.png';
import Info from './Info';
import PrimaryButton from './shared/PrimaryButton';

const Banner = () => {
  return (
    <div className='min-h-screen mt-20 '>
      <div className="hero"  >
        <div style={{ backgroundImage: `url(${bgImage})`}} className="hero-content flex-col lg:flex-row-reverse px-20" >
          <img src={chair} className="max-w-sm rounded-lg h-100 shadow-2xl" alt='' />
          <div className='px-5 '>
            <h1 className="text-5xl font-bold">Your smile starts shining here!</h1>
            <p className="py-6 pr-10">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <PrimaryButton >get started</PrimaryButton>         </div>
        </div>
      </div>
      <section className='mt-20'>
        <Info />
      </section>
    </div>
  );
};

export default Banner;