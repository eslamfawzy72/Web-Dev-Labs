function CompanyLogo() {
  return (
    <div style={{ 
      padding: '60px 40px',
      textAlign: 'center',
      backgroundColor: '#f7f9fa'
    }}>
      <p style={{ 
        fontSize: '18px', 
        color: '#666',
        marginBottom: '40px'
      }}>
        Trusted by over 17,000 companies and millions of learners around the world
      </p>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center',
        gap: '60px',
        flexWrap: 'wrap'
      }}>
        <img src="/logos/vw.png" alt="Volkswagen" style={{ height: '40px' }} />
        <img src="/logos/samsung.png" alt="Samsung" style={{ height: '40px' }} />
        <img src="/logos/cisco.png" alt="Cisco" style={{ height: '40px' }} />
        <img src="/logos/vimeo.png" alt="Vimeo" style={{ height: '40px' }} />
        <img src="/logos/pg.png" alt="P&G" style={{ height: '40px' }} />
        <img src="/logos/hp.png" alt="HP" style={{ height: '40px' }} />
        <img src="/logos/citi.png" alt="Citi" style={{ height: '40px' }} />
        <img src="/logos/ericsson.png" alt="Ericsson" style={{ height: '40px' }} />
      </div>
    </div>
  );
}

export default CompanyLogo;