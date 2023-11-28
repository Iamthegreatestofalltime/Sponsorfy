"use client"

import React, {useState, useEffect} from 'react';
import Image from 'next/image'

export default function HeroSection() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    setLoaded(true);
  }, []);

  return (
    <>
      {/* Hero Banner */}
      <div className="bg-blue-50" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', gap: '2rem' }}>
      <div style={{ flex: 1, textAlign: 'left', marginLeft: '5rem', maxWidth: '50%', transform: loaded ? 'translateX(0)' : 'translateX(-100vw)', transition: 'transform 1s ease-out' }}>
          <h1 style={{fontWeight: '800', fontSize: '50px', transition: 'transform 0.3s ease', ':hover': { transform: 'scale(1.05)' }}}>Hire the best content creators in the industry</h1>
          <p className='text-gray-600' style={{ transition: 'opacity 0.3s ease', ':hover': { opacity: '0.8' }}}>We are the bridge between creators and brands. Make UGC and sponsorship easy with Sponsorly!</p>
          <button 
            className='mr-5' 
            style={{
              marginTop: '20px', 
              padding: '12px 20px', 
              borderRadius: '25px', 
              backgroundColor: '#007bff', 
              color: 'white', 
            }}
          >
            Hire Creator
          </button>

          <button 
            style={{
              padding: '11px 19px', 
              borderRadius: '25px', 
              borderColor: 'black', 
              borderWidth: '1px', 
            }}
          >
            Apply as Creator
          </button>
          {/*
          
          Add a Sign up or login button here too 
        
          */}
        </div>
        <div style={{ flex: 1, marginRight: '5rem', maxWidth: '50%', transform: loaded ? 'translateX(0)' : 'translateX(100vw)', transition: 'transform 1s ease-out', marginBottom: '-31px' }}>
          <Image style={{ transform: 'scale(1.0)', transition: 'transform 0.3s ease', ':hover': { transform: 'scale(1.05)' }}} src="https://assets-global.website-files.com/63becc2faa5fe5779ca9a7a5/63bf3f0b4092872e5f66850a_hire-the-best-freelances-in-the-tech-industry-main-image-workplace-x-webflow-template%20(1).png" alt="Person" width={500} height={600} />
        </div>
      </div>

      {/* Section Below Hero */}
      <div className="bg-gray-50" style={{ textAlign: 'center'}}>
        <h2 className='pt-20' style={{fontSize: '22px', fontWeight: '700', wordSpacing: '0.4px'}}>We are trusted by the world’s leading brands</h2>
        {/* Placeholder for brand logos */}
        <div className="mx-64 pb-24 pt-4" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
          {/* Repeat for each brand */}
          <div>
            <Image src="/placeholder-logo-1.png" alt="Agency" width={100} height={50} />
          </div>
          <div>
            <Image src="/placeholder-logo-2.png" alt="Business" width={100} height={50} />
          </div>
          <div>
            <Image src="/placeholder-logo-1.png" alt="Agency 1" width={100} height={50} />
          </div>
          <div>
            <Image src="/placeholder-logo-2.png" alt="Business 1" width={100} height={50} />
          </div>
          <div>
            <Image src="/placeholder-logo-1.png" alt="Agency 2" width={100} height={50} />
          </div>
          <div>
            <Image src="/placeholder-logo-2.png" alt="Business 2" width={100} height={50} />
          </div>
        </div>
      </div>
    </>
  )
}
