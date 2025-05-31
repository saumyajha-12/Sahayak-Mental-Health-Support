import React from 'react'

const Head = () => {
  return (
    <div><header style={styles.header}>
        <h1>Sahayak</h1>
        <p>Hello Friend! me and my team always love to help you</p>
      </header></div>
  )
}

const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    background: '#f0f4f8',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    paddingBottom: '20px',
  },
  section: {
    background: '#ffffff',
    padding: '15px',
    margin: '15px 0',
    borderRadius: '8px',
    boxShadow: '0 0 5px rgba(0,0,0,0.1)',
  },
  footer: {
    textAlign: 'center',
    marginTop: '30px',
    fontSize: '0.9em',
    color: '#666',
  },
  quote: {
    fontStyle: 'italic',
    color: '#555',
  },
};
export default Head;