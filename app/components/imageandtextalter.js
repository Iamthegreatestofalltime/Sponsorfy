import Image from 'next/image'

export default function AlternatingFeatures() {
  // Array of features for demonstration
  const features = [
    { id: 1, title: '3 Headers and Footers', description: 'With a total of 3 different headers and footers, you can easily customize the Workplace X Webflow Template to fit your company needs and requirements.', img: '/placeholder-image-1.png', reverse: false },
    // Add more features as needed
    { id: 2, title: 'Feature Title 2', description: 'Description for feature 2...', img: '/placeholder-image-2.png', reverse: true },
    { id: 3, title: 'Feature Title 3', description: 'Description for feature 3...', img: '/placeholder-image-3.png', reverse: false },
  ];

  return (
    <div>
      {features.map((feature) => (
        <div key={feature.id} style={{ display: 'flex', flexDirection: feature.reverse ? 'row-reverse' : 'row', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <div style={{ flex: 1, padding: '1rem' }}>
            <Image src={feature.img} alt={feature.title} width={500} height={300} />
          </div>
          <div style={{ flex: 1, padding: '1rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{feature.title}</h2>
            <p style={{ marginBottom: '1rem' }}>{feature.description}</p>
            <button style={{ backgroundColor: '#005DFF', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Buy template</button>
          </div>
        </div>
      ))}
    </div>
  )
}
