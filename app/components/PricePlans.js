export default function PricingPlans() {
    // Define your pricing plans here
    const pricingPlans = [
      {
        title: 'Basic Plan',
        price: '$99.00 USD',
        description: 'Lorem ipsum dolor sit amet consectetur id adipiscing elit faucibus nunc pharetra.',
        features: [
          '3 freelancer profiles',
          '1 project',
          'Get a few hiring process tips',
          'Normal support',
        ],
        buttonLabel: 'Purchase package',
      },
      {
        title: 'Starter Plan',
        price: '$499.00 USD',
        description: 'Lorem ipsum dolor sit amet consectetur id adipiscing elit faucibus nunc pharetra.',
        features: [
          '10 freelancer profiles',
          '2 projects',
          'We help you with the hiring process',
          'Premium support',
        ],
        buttonLabel: 'Purchase package',
      },
      {
        title: 'Business Plan',
        price: '$2,999.00 USD',
        description: 'Lorem ipsum dolor sit amet consectetur id adipiscing elit faucibus nunc pharetra.',
        features: [
          '20 freelancer profiles',
          '3 projects',
          'We manage the complete process',
          'Dedicated support',
        ],
        buttonLabel: 'Purchase package',
      },
    ];
  
    return (
      <div style={{ padding: '50px 0', backgroundColor: '#f7f7f7' }}>
        <h2 style={{ textAlign: 'center' }}>Pricing plans</h2>
        <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit non lorem morbi suscipit interdum cras vulputate amet arcu.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {pricingPlans.map((plan, index) => (
            <div key={index} style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '20px', textAlign: 'center', width: '300px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              <h3>{plan.title}</h3>
              <strong>{plan.price}</strong>
              <p>{plan.description}</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={{ textAlign: 'left' }}>{feature}</li>
                ))}
              </ul>
              <button style={{ marginTop: '20px', padding: '10px 20px', borderRadius: '5px', backgroundColor: '#007bff', color: 'white' }}>
                {plan.buttonLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }  