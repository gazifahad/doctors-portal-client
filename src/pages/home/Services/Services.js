import React from 'react';
import Service from './service/Service';
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import treatment from '../../../assets/images/treatment.png'

const Services = () => {
    return (
        <div className='text-center flex flex-col'>
            <section>
            <h2 className='text-primary font-bold text-lg'>Our Services</h2>
            <h1 className="text-2xl"> Services We Provide</h1>
            </section>
            <section className='flex flex-wrap justify-around mt-16'>
                <Service image={cavity} title={'Cavity'} details={'We offer you professional Cavity treatment by dentists'} />
                <Service image={fluoride} title={'Fluoride'} details={'We offer you professional fluoride treatment by dentists'} />
                <Service image={whitening} title={'Whitening'} details={'We offer you whitening service with affordable price'} />
            </section>
            <section className='mt-10'>
                <div className=" flex flex-wrap justify-between bg-base-100 shadow-xl mx-auto w-4/6">
                    <figure className=''><img className='border rounded h-96  mx-auto' src={treatment} alt="Movie" /></figure>
                
                    <div className="card-body w-3/5 text-start h-3/5 pr-36 gap-6 py-auto my-auto">
                        <h2 className="card-title text-2xl text-slate-500 font-bold">Exceptional Dental Care, experience mixed witgh expertise!</h2>
                        <p className='font-sans text-black hidden lg:block'>If you are suffering from dental problems for a long time, And looking for a permanent solution,You are i the right place,Just tell us your problem.</p>
                            <button className="w-32 btn btn-primary text-white">get started</button>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;