import React from 'react';

const Info = () => {
    return (
    <div className='flex flex-row text-center jutify-between mx-5 text-white'>

  
  <div class="stat bg-gradient-to-b from-primary to-secondary  rounded-xl flex flex-row justify-center items-center">
  <svg style={{width:"86px",height:"86px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<div className='p-0 m-0'>
    <div class="stat-title font-bold  text-xl pb-4">Openening hours</div>
 
    <div class="stat-desc">We are opened to serve you 24*7</div>
    </div>

  
</div>



  
  <div class="stat bg-neutral rounded-xl mx-5 font-semi-bold flex flex-row justify-center items-center">
    
      <svg style={{width:"86px",height:"86px"}}  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
<div className='items-center justify-between'>
    <div class="stat-title">Visit Our Location</div>
    <div class="stat-desc">Chanpara,Uttarkhan,Uttara,Dhaka-1230</div>
    </div>
  
</div>
   
  
  <div class="stat bg-gradient-to-b from-primary to-secondary rounded-xl">
    <div class="stat-title">Contact Us</div>
   
    <div class="stat-desc">+880 1764037295</div>
  </div>
  
  
</div>
    
    );
};

export default Info;