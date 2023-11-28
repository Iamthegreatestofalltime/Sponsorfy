"use client"

import React, {useState} from "react";

export default function HiringProcess() {

  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    marginTop: '20px',
    padding: '15px 25px',
    borderRadius: '35px',
    color: 'white',
    fontWeight: '700',
    backgroundColor: isHovered ? '#004c80' : '#007bff', // Darker blue on hover
    transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Slightly enlarges the button on hover
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none' // Adds shadow on hover
  };

    const steps = [
      {
        title: '1. Search for creators',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis rhoncus facilisi eu tempus et tempor velit viverra enim nibh.',
        icon: 'https://assets-global.website-files.com/63becc2faa5fe5779ca9a7a5/63c19083c6cf6a7f6eb18422_search-for-freelancers-icon-workplace-x-webflow-template.svg', // Replace with your icon path
      },
      {
        title: '2. Hire the best talent',
        description: 'Aliquam sed quam urna mauris laoreet non arcu tellus quisque volutpat enim aliquet et porttitor scelerisque arcu ultrices lorem.',
        icon: 'https://assets-global.website-files.com/63becc2faa5fe5779ca9a7a5/63c19083581058ebaee3c844_hire-the-best-talent-icon-workplace-x-webflow-template.svg', // Replace with your icon path
      },
      {
        title: '3. Get your task done',
        description: 'Nec mattis semper vel etiam eu nisi dolor interdum proin et urna consectetur amet et sit in viverra lectus vel at ut velit lacus.',
        icon: 'https://assets-global.website-files.com/63becc2faa5fe5779ca9a7a5/63c190833486b607e544efb2_get-your-task-done-icon-workplace-x-webflow-template.svg', // Replace with your icon path
      },
    ];
  
    return (
      <div style={{ padding: '50px 0', textAlign: 'center', backgroundColor: 'white' }}>
        <h2 className="mb-3" style={{fontSize: '35px', fontWeight: '600'}}>Meet our hiring process</h2>
        <p className="text-gray-600" style={{maxWidth: '590px', display: 'block', margin: 'auto'}}>Lorem ipsum dolor sit amet consectetur adipiscing elit vitae pretium nunc velit facilisis vulputate accumsan pellentesque ultricies.</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '20px' }}>
          {steps.map((step, index) => (
            <div key={index} className="py-10" style={{ backgroundColor: '#fff', borderRadius: '10px', width: '400px', textAlign: 'center', minHeight: '400px' }}>
              <img src={step.icon} alt={step.title} style={{ display: 'block', width: '150px', height: '150px', margin: 'auto' }} />
              <h3 className="mx-5 mt-10" style={{fontSize: '26px', fontWeight: '600'}}>{step.title}</h3>
              <p className="text-gray-600 mx-4 mt-4">{step.description}</p>
            </div>
          ))}
        </div>
        <button 
          style={buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Hire freelancer
        </button>
      </div>
    );
  }
  