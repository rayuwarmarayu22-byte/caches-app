import React, { useState } from 'react';

// Import from the exact nested security path
import { verifyUserDevice } from './security/antiCheat';

export default function App() {
  const [activeTab, setActiveTab] = useState<'feed' | 'radar' | 'vault'>('feed');
  const [status, setStatus] = useState('Tap below to test the security engine.');

  const runSecurityTest = () => {
    const check = verifyUserDevice('device_ytee_001', []);
    setStatus(check ? '✅ Security Check Passed: Device Secure' : '⚠️ Device Restricted');
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.logo}>CACHES <span style={styles.accent}>CINEMA</span></h1>
        <p style={styles.tagline}>Elite Visual Culture & Instant-Earn Engine</p>
      </div>

      <div style={styles.tabContainer}>
        <button 
          onClick={() => setActiveTab('feed')} 
          style={{ ...styles.tabButton, ...(activeTab === 'feed' ? styles.activeTabButton : {}) }}
        >
          Cinema Feed
        </button>
        <button 
          onClick={() => setActiveTab('radar')} 
          style={{ ...styles.tabButton, ...(activeTab === 'radar' ? styles.activeTabButton : {}) }}
        >
          Vibe Radar
        </button>
        <button 
          onClick={() => setActiveTab('vault')} 
          style={{ ...styles.tabButton, ...(activeTab === 'vault' ? styles.activeTabButton : {}) }}
        >
          Engines & Vault
        </button>
      </div>

      <div style={styles.contentArea}>
        {activeTab === 'feed' && (
          <div style={styles.feedBox}>
            <p style={styles.feedText}>🎬 Keep the Blade on the Side (Official Visualizer)</p>
            <p style={styles.subText}>Artist: Ytee • 142K views • Zero-Fee Stream</p>
          </div>
        )}

        {activeTab === 'radar' && (
          <div style={styles.feedBox}>
            <p style={styles.feedText}>🌍 Global Vibe Radar Active</p>
            <p style={styles.subText}>London UK Drill & Lagos Afrobeats studio nodes synchronized.</p>
          </div>
        )}

        {activeTab === 'vault' && (
          <div style={styles.feedBox} onClick={runSecurityTest}>
            <p style={styles.feedText}>⚡ Nested Security Folder Active</p>
            <p style={styles.subText}>{status}</p>
            <p style={{ ...styles.subText, color: '#007aff', marginTop: '12px' }}>Tap here to run code from the security folder</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#0a0a0c',
    color: '#ffffff',
    minHeight: '100vh',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '20px',
  },
  logo: {
    fontSize: '28px',
    fontWeight: 800,
    letterSpacing: '1px',
    margin: 0,
  },
  accent: {
    color: '#007aff',
  },
  tagline: {
    color: '#888',
    fontSize: '12px',
    marginTop: '4px',
  },
  tabContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '24px',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
  },
  tabButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: '#aaa',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '8px 16px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '13px',
  },
  activeTabButton: {
    backgroundColor: '#007aff',
    color: '#ffffff',
    borderColor: '#007aff',
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
    cursor: 'pointer',
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
