import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'feed' | 'radar' | 'vault'>('feed');
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.logo}>CACHES <span style={styles.accent}>CINEMA</span></h1>
        <p style={styles.tagline}>Elite Visual Culture & Instant-Earn Engine</p>
      </div>

      {/* Navigation Tabs */}
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

      {/* Dynamic Content Area */}
      <div style={styles.contentArea}>
        {activeTab === 'feed' && (
          <div style={styles.grid}>
            <div style={styles.card}>
              <div style={styles.thumbnailWrapper}>
                <div style={styles.simulatedVideoPreview}>
                  <span style={styles.durationBadge}>3:45</span>
                </div>
              </div>
              <div style={styles.cardDetails}>
                <div>
                  <h4 style={styles.itemTitle}>Keep the Blade on the Side (Official Visualizer)</h4>
                  <p style={styles.creatorName}>Ytee</p>
                  <p style={styles.viewCount}>142K views • Zero-Fee Stream</p>
                </div>
                <button onClick={() => toggleLike('item_01')} style={styles.likeButton}>
                  {likedItems['item_01'] ? '❤️' : '🤍'}
                </button>
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.thumbnailWrapper}>
                <div style={{ ...styles.simulatedVideoPreview, background: 'linear-gradient(135deg, #2e1f1f 0%, #140f0f 100%)' }}>
                  <span style={styles.durationBadge}>12:20</span>
                </div>
              </div>
              <div style={styles.cardDetails}>
                <div>
                  <h4 style={styles.itemTitle}>Private Jet Session & Global Studio Tour</h4>
                  <p style={styles.creatorName}>Ytee</p>
                  <p style={styles.viewCount}>89K views • Zero-Fee Stream</p>
                </div>
                <button onClick={() => toggleLike('item_02')} style={styles.likeButton}>
                  {likedItems['item_02'] ? '❤️' : '🤍'}
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'radar' && (
          <div style={styles.radarContainer}>
            <h3 style={styles.radarTitle}>🌍 GLOBAL VIBE RADAR</h3>
            <p style={styles.radarSubtitle}>Autonomous telemetry tracking live creative energy worldwide</p>
            <div style={{ marginTop: '16px' }}>
              <div style={styles.nodeCard}>
                <strong>London, UK</strong> — UK Drill Studio Session & Visual Drop (+4.2K active)
              </div>
              <div style={{ ...styles.nodeCard, marginTop: '10px' }}>
                <strong>Lagos, Nigeria</strong> — Afrobeats Live Mastering & Global Stream (+8.9K active)
              </div>
            </div>
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
  grid: {
    display: 'grid' as const,
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '16px',
    overflow: 'hidden' as const,
    border: '1px solid rgba(255, 255, 255, 0.08)',
  },
  thumbnailWrapper: {
    position: 'relative' as const,
    width: '100%',
    height: '160px',
    backgroundColor: '#16161a',
  },
  simulatedVideoPreview: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #1f1f2e 0%, #0f0f14 100%)',
    display: 'flex' as const,
    alignItems: 'flex-end' as const,
    justifyContent: 'flex-end' as const,
    padding: '12px',
  },
  durationBadge: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    color: '#fff',
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '11px',
    fontWeight: 700,
  },
  cardDetails: {
    padding: '16px',
    display: 'flex' as const,
    justifyContent: 'space-between' as const,
    alignItems: 'flex-start' as const,
  },
  itemTitle: {
    fontSize: '14px',
    fontWeight: 700,
    margin: '0 0 4px 0',
    color: '#f0f0f5',
  },
  creatorName: {
    fontSize: '12px',
    color: '#007aff',
    margin: '0 0 2px 0',
    fontWeight: 600,
  },
  viewCount: {
    fontSize: '11px',
    color: '#888',
    margin: 0,
  },
  likeButton: {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    padding: '4px',
  },
  radarContainer: {
    backgroundColor: '#16161a',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    padding: '24px',
  },
  radarTitle: {
    fontSize: '16px',
    fontWeight: 800,
    margin: '0 0 4px 0',
  },
  radarSubtitle: {
    fontSize: '12px',
    color: '#888',
    margin: 0,
  },
  nodeCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '10px',
    padding: '12px',
    fontSize: '13px',
    color: '#ccc',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  feedBox: {
    padding: '25px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    textAlign: 'center' as const,
    backgroundColor: '#16161a',
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
  },
};
