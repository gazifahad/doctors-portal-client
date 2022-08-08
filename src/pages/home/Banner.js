import React from 'react';
import chair from '../../assets/images/chair.png';
import bgImage from '../../assets/images/bg.png';
import Info from './Info';

const Banner = () => {
    return (
        <div className="hero min-h-screen "  >
        <div style={{backgroundImage: `url(${bgImage})`, backgroundSize:"cover"}} className="hero-content flex-col lg:flex-row-reverse px-20" >
          <img src={chair} className="max-w-sm rounded-lg h-100 shadow-2xl" alt='' />
          <div className='px-5 '>
            <h1 className="text-5xl font-bold">Your smile starts shining here!</h1>
            <p className="py-6 pr-10">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary uppercase font-bold bg-gradient-to-r from-primary to-secondary">Get Started</button>
          </div>
        </div>
        
      </div>
    );
};

export default Banner;