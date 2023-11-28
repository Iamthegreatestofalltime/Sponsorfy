"use client"

import React, {useState} from "react";

export default function CtaCards() {

  const [applyHovered, setApplyHovered] = useState(false);
  const [hireHovered, setHireHovered] = useState(false);

  const applyButtonStyle = {
    backgroundColor: applyHovered ? '#0056b3' : 'white',
    color: applyHovered ? 'white' : '#007bff',
    border: 'none',
    padding: '15px 25px',
    borderRadius: '45px',
    cursor: 'pointer',
    fontWeight: '700',
    transform: applyHovered ? 'scale(1.05)' : 'scale(1)',
    transition: 'all 0.3s ease'
  };

  const hireButtonStyle = {
    backgroundColor: hireHovered ? '#1a1e21' : '#23272b',
    color: 'white',
    padding: '15px 25px',
    borderRadius: '35px',
    cursor: 'pointer',
    borderWidth: '1px',
    borderColor: 'white',
    fontWeight: '700',
    transform: hireHovered ? 'scale(1.05)' : 'scale(1)',
    transition: 'all 0.3s ease'
  };

  return (
    <div className="mx-72" style={{ display: 'flex', gap: '20px', padding: '50px 0' }}>
      {/* Apply as a freelancer card */}
      <div className="p-10" style={{ backgroundColor: '#007bff', color: '#ffffff', borderRadius: '8px', width: '450px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
          {/* Placeholder for icon */}
          <Image src="https://assets-global.website-files.com/63becc2faa5fe5779ca9a7a5/63c1baf56ff95ca056943ef9_apply-as-a-freelancer-icon-workplace-x-webflow-template.svg" alt="Apply" style={{ width: '150px', height: '150px' }} />
        </div>
        <h3 className="mb-4" style={{ fontSize: '30px', fontWeight: '700' }}>Apply as a creator</h3>
        <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipiscing elit egestas et in egestas dui eget egestas a erat leo.</p>
        <button 
          style={applyButtonStyle}
          onMouseEnter={() => setApplyHovered(true)}
          onMouseLeave={() => setApplyHovered(false)}
        >
          Apply now
        </button>
      </div>

      {/* Hire a freelancer card */}
      <div className="p-10" style={{ backgroundColor: '#343a40', color: '#ffffff', borderRadius: '8px', width: '450px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
          {/* Placeholder for icon */}
          <Image src="https://assets-global.website-files.com/63becc2faa5fe5779ca9a7a5/63c1baf5aea560fbca9a4916_hire-a-freelancer-icon-workplace-x-webflow-template.svg" alt="Hire" style={{ width: '150px', height: '150px' }} />
        </div>
        <h3 className="mb-4" style={{ fontSize: '30px', fontWeight: '700' }}>Hire a creator</h3>
        <p className="mb-6">Nisl lacus purus pellentesque neque dui enim sed nam phasellus morbi sodales morbi gravida tristique.</p>
        <button 
          style={hireButtonStyle}
          onMouseEnter={() => setHireHovered(true)}
          onMouseLeave={() => setHireHovered(false)}
        >
          Hire now
        </button>
      </div>
    </div>
  );
}
