import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'feed' | 'radar' | 'vault'>('feed');

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
          style={{ ...styles.tabButton, backgroundColor: activeTab === 'feed' ? '#007aff' : '#1A1A1A', color: '#FFFFFF' }}
        >
          Cinema Feed
        </button>
        <button 
          onClick={() => setActiveTab('radar')} 
          style={{ ...styles.tabButton, backgroundColor: activeTab === 'radar' ? '#007aff' : '#1A1A1A', color: '#FFFFFF' }}
        >
          Vibe Radar
        </button>
        <button 
          onClick={() => setActiveTab('vault')} 
          style={{ ...styles.tabButton, backgroundColor: activeTab === 'vault' ? '#007aff' : '#1A1A1A', color: '#FFFFFF' }}
        >
          Engines & Vault
        </button>
      </div>

      {/* Dynamic Content Area */}
      <div style={styles.contentArea}>
        {activeTab === 'feed' && (
          <div style={styles.feedBox}>
            <p style={styles.feedText}>🎬 Caches Cinema Feed Active</p>
            <p style={styles.subText}>Streaming UK Drill visuals, high-end private jet sessions, and global culture.</p>
          </div>
        )}

        {activeTab === 'radar' && (
          <div style={styles.feedBox}>
            <p style={styles.feedText}>🌍 Global Vibe Radar Active</p>
            <p style={styles.subText}>London, Lagos, and Tokyo studio nodes synchronized.</p>
          </div>
        )}

        {activeTab === 'vault' && (
          <div style={styles.feedBox}>
            <p style={styles.feedText}>⚡ Autonomous Security Vault Online</p>
            <p style={styles.subText}>Anti-cheat protection, instant payout gateway, and neural encryption active.</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    minHeight: '100vh',
    backgroundColor: '#0a0a0c',
    alignItems: 'center',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    padding: '20px',
    color: '#ffffff',
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
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
  },
  tabButton: {
    padding: '10px 20px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '13px',
  },
  contentArea: {
    width: '100%',
    maxWidth: '800px',
  },
  feedBox: {
    padding: '25px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    textAlign: 'center' as const,
    backgroundColor: '#16161a',
    marginBottom: '20px',
  },
  feedText: {
    color: '#007aff',
    fontSize: '16px',
    fontWeight: '600',
    margin: '0 0 8px 0',
  },
  subText: {
    color: '#aaaaaa',
    fontSize: '12px',
    margin: 0,
    lineHeight: 1.4,
  },
};
