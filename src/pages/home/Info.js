import React from 'react';

const Info = () => {
    return (
    <div className='lg:flex flex-row md:flex flex-column sm:flex flex-column  text-center jutify-between mx-5 text-white'>
  <div className="stat mx-5 bg-gradient-to-l from-primary to-secondary  rounded-xl flex flex-row justify-center items-center">
  <svg style={{width:"86px",height:"86px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<div className=''>
    <div className="font-bold  text-xl pb-4">Openening hours</div>
 
    <div>We are opened to serve you 24*7</div>
    </div>

  
</div>



  
  <div className="stat bg-neutral rounded-xl font-semi-bold flex mx-5 flex-row justify-center items-center">
    
      <svg style={{width:"86px",height:"86px"}}  xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
<div className='items-center justify-between'>
    <div className="font-bold  text-xl pb-4">Visit Our Location</div>
    <div className="">Chanpara,Uttarkhan,Uttara,Dhaka</div>
    </div>
  
</div>
   
  
  <div className="stat bg-gradient-to-l from-primary to-secondary rounded-xl mx-5 font-semi-bold flex flex-row justify-center items-center">
  <svg style={{width:"86px",height:"86px"}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
</svg>
<div>
<div className="font-bold  text-xl pb-4">Contact Us</div>
   
   <div className="">+880 1764037295</div>
</div>
  </div>
  
  
</div>
    
    );
};

export default Info;