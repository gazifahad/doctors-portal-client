import React from 'react';
import Banner from './Banner';
import MakeAppointment from './MakeAppointment';

import Services from './Services/Services';
import Testimonials from './Testimonials';
import Footer from "./Footer";

const Home = () => {
    return (
        <div className='w-full px-5'>
            <Banner />
            <Services />
            <MakeAppointment/>
            <Testimonials/>
            {/* <ContactUS /> add korbo  */}
            <Footer />
        </div>
    );
};

export default Home;