import Image from 'next/image'

export default function CallToActionSection() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#141452', minHeight: '600px' }}>
      <div style={{ flexBasis: '60%', maxWidth: '600px', marginLeft: '5%' }}>
        <h2 className='text-white mb-5' style={{fontWeight: '700', fontSize: '30px', maxWidth: '480px'}}>Find the talent needed to get your business growing.</h2>
        <p className='text-white mb-3' style={{maxWidth: '500px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit egetas et in egestas dui eget egestas a erat leo nec quam pretium.</p>
        <input type="text" className='py-3 pl-16 pr-3' placeholder="Enter your business email" style={{margin: '10px 0', border: '1px solid #ccc', borderRadius: '25px', width: '700px' }} />
        <button style={{ padding: '10px 12px', backgroundColor: 'blue', color: 'white', borderRadius: '24px', position: 'absolute', marginTop: '-57px', marginLeft: '547px'}}>Hire a freelancer</button>
        <div style={{position: 'absolute', marginTop: '-47px', marginLeft: '19px'}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>
      </div>
      <div style={{ flexBasis: '40%' }}>
        <Image style={{height: '600px', width: '900px'}} src="https://assets-global.website-files.com/63becc2faa5fe5779ca9a7a5/63c177d527b50f55268d9382_find-the-talent-needed-to-get-your-business-image-workplace-x-webflow-template.jpg" alt="Person" width={500} height={300} />
      </div>
    </div>
  )
}
