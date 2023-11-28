import Image from 'next/image'

export default function ResultsBanner() {
    // You might want to fetch these stats from your API or define them elsewhere
    const stats = [
      { number: '40%', label: 'More efficient staffing', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.' },
      { number: '60%', label: 'Lower risks', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.' },
      { number: '3.6X', label: 'High project satisfaction', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.' },
    ];
  
    return (
      <div className="mx-10 py-24" style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#f7f7f7' }}>
          <div style={{maxWidth:'490px'}}>
            <h1 style={{fontSize: '30px', fontWeight: '700'}}>Our results speak for themselves.</h1>
            <p style={{fontSize: '15px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit vestibulum scelerisque id risus nisl scelerisque malesuada quis.</p>
          </div>
          <div className="ml-20" style={{ maxWidth: '400px', padding: '1rem' }}>
            <Image width={25} height={25} src="https://assets-global.website-files.com/63becc2faa5fe5779ca9a7a5/63c0c476f02e2d535b6f5df0_more-eficient-staffing-icon-workplace-x-webflow-template.svg" alt='more efficient staffing'/>
            <span style={{ fontSize: '48px', fontWeight: '700' }}>40%</span>
            <h3 style={{fontWeight: '700', fontSize: '17px'}}>More efficient staffing</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>
          <div className="bg-gray-300" style={{width: '1.5px', height:'200px'}}></div>
          <div className="ml-6" style={{ maxWidth: '400px', padding: '1rem' }}>
            <Image width={25} height={25} src="https://assets-global.website-files.com/63becc2faa5fe5779ca9a7a5/63c0c4902b5c7872820fbd72_lower-risks-icon-workplace-x-webflow-template.svg" alt='more efficient staffing'/>
            <span style={{ fontSize: '48px', fontWeight: '700' }}>60%</span>
            <h3 style={{fontWeight: '700', fontSize: '17px'}}>Lower risks</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>
          <div className="bg-gray-300" style={{width: '1.5px', height:'200px'}}></div>
          <div className="ml-6" style={{ padding: '1rem', maxWidth: '400px' }}>
            <Image width={25} height={25} src="https://assets-global.website-files.com/63becc2faa5fe5779ca9a7a5/63c0c476f02e2d99656f5df1_high-project-satisfaction-icon-workplace-x-webflow-template.svg" alt='more efficient staffing'/>
            <span style={{ fontSize: '48px', fontWeight: '700' }}>3.6X</span>
            <h3 style={{fontWeight: '700', fontSize: '17px'}}>High project satisfaction</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>
      </div>
    );
  }
  