import Image from 'next/image'

export default function Features() {
  return (
    <div style={{ backgroundColor: '#f7f8fc', padding: '50px 20px', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '20px', fontSize: '2rem' }}>What is included in Workplace X</h2>
      <p style={{ marginBottom: '50px' }}>Workplace X Webflow Template includes over 16 pages in total, with more than 32 sections.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {/* Feature Card */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '20px', width: '300px' }}>
          <Image src="/placeholder-image.png" alt="Feature Image" width={280} height={200} layout="responsive" />
          <h3 style={{ fontSize: '1.5rem' }}>24+ Pages</h3>
          <p>Details about the feature...</p>
        </div>
        <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '20px', width: '300px' }}>
          <Image src="/placeholder-image.png" alt="Feature Image" width={280} height={200} layout="responsive" />
          <h3 style={{ fontSize: '1.5rem' }}>24+ Pages</h3>
          <p>Details about the feature...</p>
        </div>
        <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '20px', width: '300px' }}>
          <Image src="/placeholder-image.png" alt="Feature Image" width={280} height={200} layout="responsive" />
          <h3 style={{ fontSize: '1.5rem' }}>24+ Pages</h3>
          <p>Details about the feature...</p>
        </div>
      </div>
    </div>
  )
}