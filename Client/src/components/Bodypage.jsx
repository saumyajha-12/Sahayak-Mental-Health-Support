import React from 'react';

const WellnessPage = () => {
  return (
    <div style={styles.page}>
      

      {/* Daily Chat Section */}
      <section style={styles.section}>
        <h2>Daily Chat</h2>
        <p>Talk to a compassionate chatbot or schedule a session with a listener.</p>
        <button>Start Chat</button>
      </section>

      {/* Exercise / Meditation Corner */}
      <section style={styles.section}>
        <h2>Exercise / Meditation Corner</h2>
        <ul>
          <li><a href="#">5-Minute Guided Meditation</a></li>
          <li><a href="#">Stretching Routine</a></li>
          <li><a href="#">Breathing Exercises</a></li>
        </ul>
      </section>

      {/* Blog Section */}
      <section style={styles.section}>
        <h2>From Our Blog</h2>
        <article>
          <h3>Overcoming the Fog: My Journey with Anxiety</h3>
          <p>“It started with racing thoughts... but I found tools that helped.”</p>
          <a href="#">Read more</a>
        </article>
      </section>

      {/* Song Section  */}
       <section style={styles.section}>
        <h2>Soothing Songs</h2>
        <ul>
          <li><a href="#">"Weightless" - Marconi Union</a></li>
          <li><a href="#">"Sunset Lover" - Petit Biscuit</a></li>
          <li><a href="#">Calm Playlist on Spotify</a></li>
        </ul>
      </section>
{/* <h2>Daily Uplifting Quote</h2> */}
      {/* Quotes Section */}
      {/* <section style={styles.section}>
        <h2>Daily Uplifting Quote</h2>
        <blockquote style={styles.quote}>
        “You don’t have to control your thoughts. You just have to stop letting them control you.” – Dan Millman
        </blockquote>
      </section> */}

      {/* <footer style={styles.footer}>
        <p>You're not alone. Reach out. Talk. Breathe. Heal.</p>
      </footer> */}
    </div>
  );
};

// Simple inline styles for layout
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

export default WellnessPage;