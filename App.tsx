import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'feed' | 'studio' | 'vault' | 'radar'>('feed');
  const [walletBalance, setWalletBalance] = useState<number>(14250.80);
  const [isStreamingLive, setIsStreamingLive] = useState<boolean>(false);
  const [aiPrompt, setAiPrompt] = useState<string>('UK Drill beat with 808s & cinematic private jet visuals');
  const [aiOutputStatus, setAiOutputStatus] = useState<string>('Neural Core Standing By...');
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const executeAiMastering = () => {
    setAiOutputStatus('🚀 Synthesizing 4K Cinematic Assets & Neural Audio Mastering...');
    setTimeout(() => {
      setAiOutputStatus('✨ Success! 4K Master Generated & Distributed to Global Nodes.');
      setWalletBalance(prev => prev + 500); // Crypto reward bonus
    }, 1200);
  };

  return (
    <div style={styles.container}>
      {/* Header & Global Status */}
      <div style={styles.header}>
        <h1 style={styles.logo}>CACHES <span style={styles.accent}>CINEMA X</span></h1>
        <p style={styles.tagline}>Autonomous Neural Streaming, Crypto-Monetization & 4K Cinematic Grid</p>
        <div style={styles.liveBadgeContainer}>
          <span style={styles.livePulse}></span>
          <span style={styles.liveText}>NEURAL MAINNET: SECURE & ACTIVE</span>
        </div>
      </div>

      {/* Futuristic Navigation Hub */}
      <div style={styles.tabContainer}>
        <button 
          onClick={() => setActiveTab('feed')} 
          style={{ ...styles.tabButton, ...(activeTab === 'feed' ? styles.activeTabButton : {}) }}
        >
          🎬 4K Cinematic Feed
        </button>
        <button 
          onClick={() => setActiveTab('studio')} 
          style={{ ...styles.tabButton, ...(activeTab === 'studio' ? styles.activeTabButton : {}) }}
        >
          🤖 AI Studio & Upload
        </button>
        <button 
          onClick={() => setActiveTab('vault')} 
          style={{ ...styles.tabButton, ...(activeTab === 'vault' ? styles.activeTabButton : {}) }}
        >
          💎 Crypto & Vault ($)
        </button>
        <button 
          onClick={() => setActiveTab('radar')} 
          style={{ ...styles.tabButton, ...(activeTab === 'radar' ? styles.activeTabButton : {}) }}
        >
          🌍 Global Telemetry
        </button>
      </div>

      {/* Dynamic Main Workspace */}
      <div style={styles.contentArea}>
        {/* Tab 1: Cinematic Feed */}
        {activeTab === 'feed' && (
          <div style={styles.grid}>
            <div style={styles.card}>
              <div style={styles.thumbnailWrapper}>
                <div style={styles.simulatedVideoPreview}>
                  <div style={styles.ultraHdBadge}>ULTRA HD 4K • 120FPS</div>
                  <span style={styles.durationBadge}>3:45</span>
                </div>
              </div>
              <div style={styles.cardDetails}>
                <div>
                  <h4 style={styles.itemTitle}>Keep the Blade on the Side (Official Cinematic Visualizer)</h4>
                  <p style={styles.creatorName}>Ytee • <span style={{ color: '#00ffa3' }}>Verified Creator Node</span></p>
                  <p style={styles.viewCount}>142K views • Zero-Fee Payout Stream • 12.4 ETH Earned</p>
                </div>
                <button onClick={() => toggleLike('item_01')} style={styles.likeButton}>
                  {likedItems['item_01'] ? '❤️' : '🤍'}
                </button>
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.thumbnailWrapper}>
                <div style={{ ...styles.simulatedVideoPreview, background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)' }}>
                  <div style={styles.ultraHdBadge}>PRIVATE JET 8K STREAM</div>
                  <span style={styles.durationBadge}>14:20</span>
                </div>
              </div>
              <div style={styles.cardDetails}>
                <div>
                  <h4 style={styles.itemTitle}>Global Aviation Session & Studio Masterclass</h4>
                  <p style={styles.creatorName}>Ytee • <span style={{ color: '#00ffa3' }}>Verified Creator Node</span></p>
                  <p style={styles.viewCount}>89K views • High-End Aesthetics • 8.1 ETH Earned</p>
                </div>
                <button onClick={() => toggleLike('item_02')} style={styles.likeButton}>
                  {likedItems['item_02'] ? '❤️' : '🤍'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: AI Studio & MP4/4K Upload */}
        {activeTab === 'studio' && (
          <div style={styles.studioContainer}>
            <h3 style={styles.sectionTitle}>⚡ AI GENERATION & 4K UPLOAD SUITE</h3>
            <p style={styles.subText}>Harness autonomous neural engines to generate UK Drill / Afrobeats audio, lyrics, and cinematic visuals instantly.</p>
            
            <div style={styles.uploadDropzone}>
              <p style={{ color: '#00ffa3', fontWeight: 'bold', margin: '0 0 8px 0' }}>📂 Drag & Drop MP4 / 4K Cinematic Files Here</p>
              <p style={{ fontSize: '11px', color: '#888', margin: 0 }}>Instant cloud processing with zero compression loss</p>
            </div>

            <div style={{ marginTop: '20px' }}>
              <label style={styles.label}>AI Neural Prompt Generator</label>
              <textarea 
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                style={styles.textarea}
              />
              <button onClick={executeAiMastering} style={styles.actionButton}>
                ⚡ Execute AI Mastering & Mint Asset
              </button>
              <p style={{ marginTop: '12px', fontSize: '13px', color: '#00ffa3' }}>{aiOutputStatus}</p>
            </div>
          </div>
        )}

        {/* Tab 3: Crypto Wallet & Vault */}
        {activeTab === 'vault' && (
          <div style={styles.vaultContainer}>
            <div style={styles.balanceCard}>
              <p style={styles.vaultLabel}>TOTAL REVENUE VAULT (CRYPTO + FIAT)</p>
              <h2 style={styles.balanceAmount}>${walletBalance.toLocaleString()} USD</h2>
              <p style={styles.cryptoSub}>⚡ Instant Payouts Active via Autonomous Smart Contract</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '20px' }}>
              <div style={styles.statBox}>
                <p style={{ color: '#888', fontSize: '12px', margin: 0 }}>Anti-Cheat Defense</p>
                <p style={{ color: '#00ffa3', fontSize: '16px', fontWeight: 'bold', margin: '5px 0 0 0' }}>100% Secure</p>
              </div>
              <div style={styles.statBox}>
                <p style={{ color: '#888', fontSize: '12px', margin: 0 }}>Stream Commission</p>
                <p style={{ color: '#00ffa3', fontSize: '16px', fontWeight: 'bold', margin: '5px 0 0 0' }}>0% (Zero Fee)</p>
              </div>
            </div>

            <button onClick={() => alert('Initiating Instant Crypto Payout to Connected Wallet...')} style={{ ...styles.actionButton, marginTop: '20px' }}>
              💎 Claim Instant Payout
            </button>
          </div>
        )}

        {/* Tab 4: Global Vibe Radar */}
        {activeTab === 'radar' && (
          <div style={styles.radarContainer}>
            <h3 style={styles.sectionTitle}>🌍 GLOBAL TELEMETRY & VIBE NODES</h3>
            <p style={styles.subText}>Autonomous decentralized nodes tracking creative engagement worldwide.</p>
            <div style={{ marginTop: '16px' }}>
              <div style={styles.nodeCard}>
                <strong>London, UK Node</strong> — UK Drill & Visual Stream Active (+4.2K active stream sessions)
              </div>
              <div style={{ ...styles.nodeCard, marginTop: '10px' }}>
                <strong>Lagos, Nigeria Node</strong> — Afrobeats Masterclass & High-Fidelity Sync (+8.9K active stream sessions)
              </div>
              <div style={{ ...styles.nodeCard, marginTop: '10px' }}>
                <strong>Global Aviation Network</strong> — Luxury Jet Telemetry Node (Synchronized)
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#070709',
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
    fontSize: '32px',
    fontWeight: 900,
    letterSpacing: '2px',
    margin: 0,
    background: 'linear-gradient(90deg, #ffffff 0%, #00ffa3 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  accent: {
    color: '#00ffa3',
  },
  tagline: {
    color: '#888',
    fontSize: '12px',
    marginTop: '6px',
  },
  liveBadgeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '10px',
  },
  livePulse: {
    width: '8px',
    height: '8px',
    backgroundColor: '#00ffa3',
    borderRadius: '50%',
    boxShadow: '0 0 10px #00ffa3',
  },
  liveText: {
    fontSize: '10px',
    fontWeight: 800,
    color: '#00ffa3',
    letterSpacing: '1px',
  },
  tabContainer: {
    display: 'flex',
    gap: '8px',
    marginBottom: '24px',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
  },
  tabButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    color: '#ccc',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    padding: '10px 18px',
    borderRadius: '24px',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '13px',
    transition: 'all 0.3s ease',
  },
  activeTabButton: {
    backgroundColor: '#00ffa3',
    color: '#070709',
    borderColor: '#00ffa3',
    fontWeight: 800,
  },
  contentArea: {
    width: '100%',
    maxWidth: '850px',
  },
  grid: {
    display: 'grid' as const,
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    borderRadius: '16px',
    overflow: 'hidden' as const,
    border: '1px solid rgba(255, 255, 255, 0.06)',
  },
  thumbnailWrapper: {
    position: 'relative' as const,
    width: '100%',
    height: '180px',
    backgroundColor: '#121216',
  },
  simulatedVideoPreview: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #181824 0%, #0a0a0f 100%)',
    display: 'flex' as const,
    alignItem: 'flex-end' as const,
    justifyContent: 'space-between' as const,
    padding: '12px',
    position: 'relative' as const,
  },
  ultraHdBadge: {
    position: 'absolute' as const,
    top: '12px',
    left: '12px',
    backgroundColor: 'rgba(0, 255, 163, 0.2)',
    color: '#00ffa3',
    border: '1px solid #00ffa3',
    padding: '3px 8px',
    borderRadius: '4px',
    fontSize: '9px',
    fontWeight: 800,
  },
  durationBadge: {
    position: 'absolute' as const,
    bottom: '12px',
    right: '12px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
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
    color: '#aaa',
    margin: '0 0 2px 0',
  },
  viewCount: {
    fontSize: '11px',
    color: '#666',
    margin: 0,
  },
  likeButton: {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    padding: '4px',
  },
  studioContainer: {
    backgroundColor: '#121216',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    padding: '24px',
  },
  vaultContainer: {
    backgroundColor: '#121216',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    padding: '24px',
  },
  radarContainer: {
    backgroundColor: '#121216',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    padding: '24px',
  },
  sectionTitle: {
    fontSize: '16px',
    fontWeight: 800,
    margin: '0 0 6px 0',
    color: '#fff',
  },
  subText: {
    fontSize: '12px',
    color: '#888',
    margin: '0 0 16px 0',
    lineHeight: 1.4,
  },
  uploadDropzone: {
    border: '2px dashed rgba(0, 255, 163, 0.3)',
    borderRadius: '12px',
    padding: '25px',
    textAlign: 'center' as const,
    backgroundColor: 'rgba(0, 255, 163, 0.02)',
    cursor: 'pointer',
  },
  label: {
    fontSize: '12px',
    fontWeight: 600,
    color: '#aaa',
    display: 'block',
    marginBottom: '6px',
  },
  textarea: {
    width: '100%',
    height: '80px',
    backgroundColor: '#070709',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    padding: '10px',
    color: '#fff',
    fontSize: '13px',
    resize: 'none' as const,
  },
  actionButton: {
    width: '100%',
    backgroundColor: '#00ffa3',
    color: '#070709',
    border: 'none',
    padding: '12px',
    borderRadius: '8px',
    fontWeight: 800,
    fontSize: '13px',
    cursor: 'pointer',
    marginTop: '12px',
  },
  balanceCard: {
    backgroundColor: '#070709',
    borderRadius: '12px',
    padding: '20px',
    border: '1px solid rgba(0, 255, 163, 0.3)',
    textAlign: 'center' as const,
  },
  vaultLabel: {
    fontSize: '11px',
    color: '#888',
    letterSpacing: '1px',
    margin: '0 0 4px 0',
  },
  balanceAmount: {
    fontSize: '32px',
    fontWeight: 900,
    color: '#00ffa3',
    margin: '0 0 6px 0',
  },
  cryptoSub: {
    fontSize: '11px',
    color: '#aaa',
    margin: 0,
  },
  statBox: {
    backgroundColor: '#070709',
    borderRadius: '8px',
    padding: '12px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  nodeCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    borderRadius: '10px',
    padding: '12px',
    fontSize: '13px',
    color: '#ccc',
    border: '1px solid rgba(255, 255, 255, 0.04)',
  },
};
