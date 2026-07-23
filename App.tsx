import React from 'react';

export default function App() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.logo}>CACHES</h1>
        <p style={styles.tagline}>Elite Visual Culture & Instant-Earn Engine</p>
      </div>
      <div style={styles.feedBox}>
        <p style={styles.feedText}>Vibe Stream Initializing...</p>
        <p style={styles.subText}>Low-Data Streaming & Security Shield Active</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    minHeight: '100vh',
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '40px',
  },
  logo: {
    color: '#FFFFFF',
    fontSize: '32px',
    fontWeight: 'bold' as const,
    letterSpacing: '2px',
    margin: 0,
  },
  tagline: {
    color: '#A0A0A0',
    fontSize: '12px',
    marginTop: '5px',
  },
  feedBox: {
    padding: '20px',
    border: '1px solid #333333',
    borderRadius: '12px',
    textAlign: 'center' as const,
    backgroundColor: '#0A0A0A',
  },
  feedText: {
    color: '#00FFFF',
    fontSize: '16px',
    fontWeight: '600',
    margin: 0,
  },
  subText: {
    color: '#777777',
    fontSize: '11px',
    marginTop: '8px',
    marginBottom: 0,
  },
};
