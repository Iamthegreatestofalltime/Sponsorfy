"use client"

import Image from 'next/image'
import React, {useState} from 'react'

export default function VideoSection() {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    borderRadius: '35px',
    fontWeight: '600',
    backgroundColor: isHovered ? '#004c80' : '#007bff', // Darker blue on hover
    color: 'white',
    padding: '16px 32px', // p-4 equivalent
    transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Slightly enlarges the button on hover
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none' // Adds shadow on hover
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '2rem', backgroundColor: '#f0f0f0' }}>
      <div style={{ maxWidth: '600px' }}>
        <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '56.25%' }}>
          <Image src="/video-placeholder.jpg" alt="Video Placeholder" layout="fill" objectFit="cover" />
          {/* Normally you'd put an actual <video> tag here, or embed from a service like YouTube */}
          <button style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '2rem' }}>
            ▶️
          </button>
        </div>
      </div>
      <div className="py-16" style={{ maxWidth: '500px' }}>
        <h2 className="mb-6" style={{fontSize: '30px', fontWeight: '700'}}>A whole world of content creators at your fingertips.</h2>
        <div className="flex mb-4" style={{}}>
          <Image className="mr-3" width={100} height={100} src="https://assets-global.website-files.com/63becc2faa5fe5779ca9a7a5/63c048e6592e085cb4001c08_the-best-for-every-budget-image-workplace-x-webflow-template.svg" alt='best for budget'/>
          <div>
            <h3 className="mb-2" style={{fontSize: '17px', fontWeight: '600'}}>The best for every budget</h3>
            <p className="text-gray-700" style={{fontSize: '15px'}}>Lectus tempus massa faucibus velit tincidunt cras vulputate commodo mattis amet tempor arcu.</p>
          </div>
        </div>
        <div className="flex mt-8 mb-8">
          <Image className="mr-3" width={100} height={100} src="https://assets-global.website-files.com/63becc2faa5fe5779ca9a7a5/63c048e52d7ec5ac08d1a3ff_quality-work-done-quickly-workplace-x-webflow-template.svg" alt='best for budget'/>
          <div>
            <h3 className="mb-2" style={{fontSize: '17px', fontWeight: '600'}}>Quality work done quickly</h3>
            <p className="text-gray-700" style={{fontSize: '15px'}}>Bibendum odio habitasse quis a nulla est eu sed dictum in id facilisi urna maecenas semper non.</p>
          </div>
        </div>
        <button 
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Hire freelancer
          </button>
      </div>
    </div>
  )
}
