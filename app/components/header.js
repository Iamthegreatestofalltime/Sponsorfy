"use client"

import Image from 'next/image'

export default function BannerHero() {
  return (
    <div className="bg-gray-50 w-full">
      {/* Header */}
      <header style={{ backgroundColor: '#fff', padding: '1rem 0', boxShadow: '0 2px 4px rgba(0,0,0,.1)' }}>
        <nav className="mx-64" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1230px', margin: '0 auto', padding: '0 1rem' }}>
          <div>
            {/* Placeholder for logo */}
            <Image src="https://i.imgur.com/4VTx6ji.jpeg" alt="Logo" width={150} height={50} />
          </div>
          <div style={{marginRight: '200px'}}>
            <a href="#" style={{ margin: '0 1rem' }}>Pricing</a>
            <a href="#" style={{ margin: '0 1rem' }}>Contact</a>
            <a href="#" style={{ margin: '0 1rem' }}>About</a>
            <a href="#" style={{ margin: '0 1rem' }}>Blog</a>
          </div>
          <div className='flex'>
            <button className='mr-5' style={{marginTop: '5px', padding: '12px 20px', borderRadius: '25px', backgroundColor: '#007bff', color: 'white', minWidth: '200px', transition: 'all 0.3s ease', boxShadow: '0 2px 4px rgba(0,0,0,.2)'}} onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,.3)'} onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,.2)'}>Hire freelancer</button>
            <button style={{ marginTop:'5px', borderRadius: '25px', borderColor: 'black', borderWidth: '1px', minWidth: '200px', transition: 'all 0.3s ease', boxShadow: '0 2px 4px rgba(0,0,0,.2)'}} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Apply as freelancer</button>
          </div>
        </nav>
      </header>
    </div>
  );
}