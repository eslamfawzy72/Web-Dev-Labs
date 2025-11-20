import AiImage from '../assets/AiMan.png'; // rename the image import

function AiEra() {
  return (
    <div style={{
      backgroundColor: '#2d2f31',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '60px',
      borderRadius: '12px',
      margin: '40px'
    }}>
      <div style={{ maxWidth: '500px' }}>
        <h1 style={{ color: 'white', fontSize: '42px', margin: '0 0 16px 0', fontWeight: 'bold' }}>
          Reimagine your career with AI
        </h1>
        <p style={{ color: '#c0c0c0', fontSize: '18px', margin: '0 0 32px 0' }}>
          Future Proof your skills and get ready for what's ahead
        </p>

        <div style={{ display: 'flex', gap: '60px', marginBottom: '32px' }}>
          <div>
            <h3 style={{ color: 'white', fontSize: '16px', margin: '0 0 8px 0' }}>Learn</h3>
            <h3 style={{ color: 'white', fontSize: '16px', margin: 0 }}>be better</h3>
          </div>
          <div>
            <h3 style={{ color: 'white', fontSize: '16px', margin: '0 0 8px 0' }}>Learn</h3>
            <h3 style={{ color: 'white', fontSize: '16px', margin: 0 }}>be better</h3>
          </div>
        </div>

        <button style={{
          backgroundColor: 'white',
          color: '#2d2f31',
          padding: '12px 32px',
          fontSize: '16px',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Learn More
        </button>
      </div>

      <div>
        <img
          src={AiImage} // <-- use the renamed import
          alt="AI illustration"
          style={{
            width: '600px',
            height: '400px',
            objectFit: 'cover',
            borderRadius: '8px'
          }}
        />
      </div>
    </div>
  );
}

export default AiEra;
