import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'feed' | 'earn'>('feed');
  const [statusText, setStatusText] = useState('Vibe Stream Initializing...');

  const handleStreamClick = () => {
    setStatusText('Connected! Streaming High-End Culture Feed.');
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.logo}>CACHES</h1>
        <p style={styles.tagline}>Elite Visual Culture & Instant-Earn Engine</p>
      </div>

      {/* Navigation Tabs */}
      <div style={styles.tabContainer}>
        <button 
          onClick={() => setActiveTab('feed')} 
          style={{ ...styles.tabButton, backgroundColor: activeTab === 'feed' ? '#00FFFF' : '#1A1A1A', color: activeTab === 'feed' ? '#000000' : '#FFFFFF' }}
        >
          Elite Feed
        </button>
        <button 
          onClick={() => setActiveTab('earn')} 
          style={{ ...styles.tabButton, backgroundColor: activeTab === 'earn' ? '#00FFFF' : '#1A1A1A', color: activeTab === 'earn' ? '#000000' : '#FFFFFF' }}
        >
          Instant-Earn
        </button>
      </div>

      {/* Main Dynamic Content Box */}
      {activeTab === 'feed' ? (
        <div style={styles.feedBox} onClick={handleStreamClick}>
          <p style={styles.feedText}>{statusText}</p>
          <p style={styles.subText}>Tap here to launch full visual streams & security shield</p>
        </div>
      ) : (
        <div style={styles.feedBox}>
          <p style={styles.feedText}>Engine Status: Active</p>
          <p style={styles.subText}>Low-Data Engagement Tracker & Payout Sync Ready</p>
        </div>
      )}
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
    padding: '20px',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '20px',
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
  tabContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  tabButton: {
    padding: '10px 20px',
    border: '1px solid #333333',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '14px',
  },
  feedBox: {
    padding: '25px',
    border: '1px solid #333333',
    borderRadius: '12px',
    textAlign: 'center' as const,
    backgroundColor: '#0A0A0A',
    maxWidth: '320px',
    width: '100%',
    cursor: 'pointer',
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
