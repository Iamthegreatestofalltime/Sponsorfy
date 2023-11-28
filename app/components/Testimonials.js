"use client"

import { useState } from 'react';
import Image from 'next/image';

export default function Testimonials() {

  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);

  const svgStyle = (isHovered) => ({
    width: '56px', 
    height: '56px',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    stroke: isHovered ? '#007bff' : 'currentColor', // Change color on hover
  });

  const testimonials = [
    {image: '/path-to-your-first-image.jpg', name: 'John Doe', quote: 'I love this site so much!'},
    {image: '/path-to-your-second-image.jpg', name: 'Jane Doe', quote: 'The service is outstanding!'},
    {image: '/path-to-your-second-image.jpg', name: 'Jane Doe', quote: 'The service is outstanding! 1'},
    {image: '/path-to-your-second-image.jpg', name: 'Jane Doe', quote: 'The service is outstanding! 2'},
    {image: '/path-to-your-second-image.jpg', name: 'Jane Doe', quote: 'The service is outstanding! 3'},
    {image: '/path-to-your-second-image.jpg', name: 'Jane Doe', quote: 'The service is outstanding! 4'},
    {image: '/path-to-your-second-image.jpg', name: 'Jane Doe', quote: 'The service is outstanding! 5'},
    {image: '/path-to-your-second-image.jpg', name: 'Jane Doe', quote: 'The service is outstanding! 6'},
    // ... more testimonials
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const scrollLeft = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1));
  };

  const scrollRight = () => {
    setActiveIndex((prevIndex) => (prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0));
  };

  // Adjusting the offset calculation
  const offset = activeIndex * -100 / testimonials.length;

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2 style={{ marginBottom: '2rem', fontSize: '30px', fontWeight: '600' }}>Here’s what our great customers say</h2>
      <div style={{ overflow: 'hidden', maxWidth: '800px', margin: 'auto' }}>
        <div style={{ display: 'flex', width: `${100 * testimonials.length}%`, transition: 'transform 0.3s ease-out', transform: `translateX(${offset}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex" style={{ width: '100%', padding: '1rem', boxSizing: 'border-box', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              {testimonial.image && <Image src={testimonial.image} alt={testimonial.name} width={160} height={160} style={{ borderRadius: '50%', marginBottom: '1rem' }} />}
              <span>⭐️⭐️⭐️⭐️⭐️</span>
              <div>
                <p style={{ fontSize: '1rem', fontStyle: 'italic', margin: '1rem 0' }}>{testimonial.quote}</p>
                <p style={{ fontWeight: 'bold', margin: 0 }}>{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-64" style={{ display: 'flex', marginTop: '2rem', justifyContent: 'space-between' }}>
        <button 
          onClick={scrollLeft} 
          style={{ cursor: 'pointer' }}
          onMouseEnter={() => setLeftHovered(true)}
          onMouseLeave={() => setLeftHovered(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} style={svgStyle(leftHovered)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        <button 
          onClick={scrollRight} 
          style={{ cursor: 'pointer' }}
          onMouseEnter={() => setRightHovered(true)}
          onMouseLeave={() => setRightHovered(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} style={svgStyle(rightHovered)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
