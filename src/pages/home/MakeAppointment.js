import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from './shared/PrimaryButton';

const MakeAppointment = () => {
    return (
      <section style={{
        background:`url(${appointment})`
      }} className='flex justify-center items-center mt-16'>
        <div className='flex-1 hidden lg:block '>
            <img className='mt-[-100px]' src={doctor} alt="" />
        </div>
        <div className='flex-1 text-white px-10'>
            <h4 className='text-primary font-bold'>
                Appointment
            </h4>
            <h2 className='text-3xl'>
        Make an appointment right now!
        </h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam maiores sint, ab nesciunt laudantium ducimus quos sapiente? Pariatur deserunt ea dignissimos odit at, neque fugiat quis esse quos quibusdam! Animi eos dolorem dignissimos est eaque praesentium deserunt quos officia!
        </p>
        <PrimaryButton>make an appointment</PrimaryButton>
        </div>
        
      </section>
    );
};

export default MakeAppointment;