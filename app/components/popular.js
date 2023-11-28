"use client"

import Image from 'next/image'
import React, {useState} from 'react';

export default function PopularCategories() {

  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    marginTop: '8px',
    padding: '10px',
    borderRadius: '25px',
    maxHeight: '50px',
    borderColor: 'black',
    borderWidth: '1px',
    transition: 'all 0.3s ease',
    backgroundColor: isHovered ? '#f0f0f0' : 'white', // Changes background color on hover
    transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Slightly enlarges the button on hover
    cursor: 'pointer'
  };

  return (
    <div style={{padding: '50px 0', backgroundColor: '#fff' }}>
      <div className='flex mx-0 pt-10' style={{justifyContent: 'space-evenly'}}>
        <h2 style={{ marginBottom: '30px', fontSize: '40px', fontWeight: '600', marginRight: '600px'}}>Our services</h2>
        <button 
          style={buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Browse all categories
        </button>
      </div>
      <div className='mx-36' style={{ display: 'flex', justifyContent: 'space-around' }}>
        {/* Category Card */}
        <div className="mx-3" style={{ width: '400px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          {/* Centering Image Container */}
          <div className="bg-blue-400" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px', borderTopRightRadius:'8px', borderTopLeftRadius: '8px' }}>
            <Image src="https://assets-global.website-files.com/63becc2faa5fe51a6fa9a7d7/63c027260c0d1c7a175d21cc_design-thumbnail-image-workplace-x-webflow-template.svg" alt="UGC for brands" width={350} height={200} objectFit="contain" />
          </div>
          <h3 className="pt-6 mx-5 mb-2" style={{fontSize: '30px', fontWeight: '700'}}>UGC for brands</h3>
          <p className='pb-8 mx-5'>Lorem ipsum dolor sit amet lorem non consectetur adipiscing elit amet.</p>
        </div>
        {/* Repeat for other categories */}
        <div className="mx-3" style={{ width: '400px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          {/* Centering Image Container */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px', backgroundColor: '#005dff', borderTopRightRadius:'8px', borderTopLeftRadius: '8px' }}>
            <Image src="https://assets-global.website-files.com/63becc2faa5fe51a6fa9a7d7/63c02734cfbc6c8ae72d8b8e_development-thumbnail-image-workplace-x-webflow-template.svg" alt="Find creators for you" width={350} height={200} objectFit="contain" />
          </div>
          <h3 className="pt-6 mx-5 mb-2" style={{fontSize: '30px', fontWeight: '700'}}>Find creators for you</h3>
          <p className='pb-8 mx-5'>Lorem ipsum dolor sit amet lorem non consectetur adipiscing elit amet.</p>
        </div>
        <div className="mx-3" style={{ width: '400px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          {/* Centering Image Container */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px', backgroundColor: '#6c38ff', borderTopRightRadius:'8px', borderTopLeftRadius: '8px' }}>
            <Image src="https://assets-global.website-files.com/63becc2faa5fe51a6fa9a7d7/63c0274233a4b85992dc2335_marketing-thumbnail-image-workplace-x-webflow-template.svg" alt="Work with you" width={350} height={200} objectFit="contain" />
          </div>
          <h3 className="pt-6 mx-5 mb-2" style={{fontSize: '30px', fontWeight: '700'}}>Work with you</h3>
          <p className='pb-8 mx-5'>Lorem ipsum dolor sit amet lorem non consectetur adipiscing elit amet.</p>
        </div>
      </div>
    </div>
  )
}
