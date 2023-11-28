import Image from 'next/image'

export default function Freelancers() {
  // Assume we have an array of freelancers
  const freelancers = [
    { name: 'Andy Smith', role: 'Marketing', rate: '$120/hr', description: 'At donec morbi in urna nunc quis ac ipsum sem purus orci.', img: '/placeholder-profile-1.jpg' },
    // ... Add more freelancer objects
  ];

  return (
    <div style={{ padding: '50px 0' }}>
      <h2>Our freelancers</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {freelancers.map((freelancer, index) => (
          <div key={index} style={{ width: '250px', margin: '10px', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <Image src={freelancer.img} alt={freelancer.name} width={200} height={200} style={{ borderRadius: '50%' }} />
            <h3>{freelancer.name}</h3>
            <p>{freelancer.description}</p>
            <div style={{ backgroundColor: '#e6e6e6', borderRadius: '20px', display: 'inline-block', padding: '5px 15px', margin: '10px 0' }}>{freelancer.role}</div>
            <p>{freelancer.rate}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
