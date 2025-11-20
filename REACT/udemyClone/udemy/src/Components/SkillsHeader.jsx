function SkillsHeader() {
  const tabs = [
    'Artificial Intelligence (AI)',
    'Python',
    'Microsoft Excel',
    'AI Agents & Agentic AI',
    'Digital Marketing',
    'Amazon AWS'
  ];

  const courses = [
    {
      title: 'The AI Engineer Course 2025: Complete AI Engineer Bootcamp',
      author: '365 Careers',
      badge: 'Bestseller',
      rating: '4.6',
      reviews: '10,801 ratings',
      price: 'E£349.99',
      image: 'https://via.placeholder.com/250x150'
    },
    {
      title: 'Intro to AI Agents and Agentic AI',
      author: '365 Careers',
      badge: 'Bestseller',
      rating: '4.4',
      reviews: '895 ratings',
      price: 'E£349.99',
      image: 'https://via.placeholder.com/250x150'
    },
    {
      title: 'Artificial Intelligence (AI) Foundations for Developers',
      author: 'Rahul Rajat Singh',
      badge: 'Highest Rated',
      rating: '5.0',
      reviews: '21 ratings',
      price: 'E£349.99',
      image: 'https://via.placeholder.com/250x150'
    },
    {
      title: 'The Complete Guide To AI Powered Salesforce Development',
      author: 'Matt Gerry',
      badge: 'Hot & New',
      rating: '4.8',
      reviews: '74 ratings',
      price: 'E£349.99',
      image: 'https://via.placeholder.com/250x150'
    }
  ];

  return (
    <div style={{ padding: '40px' }}>
      <h1 style={{ fontSize: '32px', margin: '0 0 8px 0' }}>
        Skills to transform your career and life
      </h1>
      
      <p style={{ color: '#666', margin: '0 0 24px 0' }}>
        From critical skills to technical topics, Udemy supports your professional development.
      </p>
      
      <div style={{ display: 'flex', gap: '24px', borderBottom: '1px solid #ddd', marginBottom: '40px' }}>
        {tabs.map((tab, index) => (
          <button key={index} style={{
            background: 'none',
            border: 'none',
            padding: '12px 0',
            fontSize: '14px',
            fontWeight: index === 0 ? 'bold' : 'normal',
            borderBottom: index === 0 ? '2px solid black' : 'none',
            cursor: 'pointer'
          }}>
            {tab}
          </button>
        ))}
      </div>

      <div style={{ 
        display: 'flex', 
        gap: '20px',
        overflowX: 'scroll'
      }}>
        {courses.map((course, index) => (
          <div key={index} style={{
            width: '250px',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}>
            <img src={course.image} alt={course.title} style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover'
            }} />
            
            <div style={{ padding: '12px' }}>
              <h3 style={{ fontSize: '16px', margin: '0 0 8px 0' }}>
                {course.title}
              </h3>
              
              <p style={{ fontSize: '12px', color: '#666', margin: '0 0 8px 0' }}>
                {course.author}
              </p>
              
              <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                <span style={{
                  backgroundColor: course.badge === 'Bestseller' ? '#eceb98' : course.badge === 'Hot & New' ? '#ffc9c9' : '#d4edda',
                  padding: '4px 8px',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  {course.badge}
                </span>
                <span>⭐ {course.rating}</span>
                <span style={{ color: '#666', fontSize: '12px' }}>({course.reviews})</span>
              </div>
              
              <p style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>
                {course.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <button style={{
        background: 'none',
        border: 'none',
        color: '#5624d0',
        fontSize: '16px',
        fontWeight: 'bold',
        marginTop: '20px',
        cursor: 'pointer'
      }}>
        Show all Artificial Intelligence (AI) courses →
      </button>
    </div>
  );
}

export default SkillsHeader;