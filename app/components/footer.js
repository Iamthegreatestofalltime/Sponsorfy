export default function Footer() {
    return (
      <footer style={{ backgroundColor: '#f2f2f2', padding: '50px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
          {/* Brand Section */}
          <div>
            <h2>Workplace X</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit justo pellentesque.</p>
            {/* Buttons or Links */}
            <button>Hire freelancer</button>
            <button>Apply now</button>
          </div>
          {/* Column Sections */}
          <div>
            <strong>Main pages</strong>
            {/* List of links */}
            <p>Home</p>
            <p>Home (Sales)</p>
            {/* More links */}
          </div>
          <div>
            <strong>Utility pages</strong>
            {/* List of links */}
            <p>Start here</p>
            <p>Styleguide</p>
            {/* More links */}
          </div>
          <div>
            <strong>Freelance Categories</strong>
            {/* List of links */}
            <p>Design</p>
            <p>Development</p>
            {/* More links */}
          </div>
          {/* Social Icons */}
          <div>
            {/* Social icons would go here */}
            <p>Facebook</p>
            <p>Twitter</p>
            {/* More icons */}
          </div>
        </div>
        {/* Copyright */}
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <p>Copyright © Workplace X | Designed by BRIX Templates - Powered by Webflow</p>
        </div>
      </footer>
    );
  }  