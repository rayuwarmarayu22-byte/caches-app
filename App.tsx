import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'feed' | 'shorts' | 'live' | 'news' | 'travel' | 'ai' | 'vault'>('feed');
  const [walletBalance, setWalletBalance] = useState<number>(24850.50);
  const [comments, setComments] = useState<string[]>([
    '🔥 Ytee is changing the entire music industry forever!',
    '🚀 This zero-fee streaming tech leaves YouTube in the dust.',
    '🌍 London to Lagos nodes synchronized perfectly.'
  ]);
  const [newComment, setNewComment] = useState<string>('');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [subCount, setSubCount] = useState<number>(450);
  const [liveStreamChat, setLiveStreamChat] = useState<string[]>([
    'Viewer_01: That 4K cinematic drop is insane!',
    'AviationFan: Private jet flight telemetry looks unreal.',
    'DrillMaster: Keep the blade on the side streaming worldwide!'
  ]);
  const [liveInput, setLiveInput] = useState<string>('');

  const addComment = () => {
    if (!newComment.trim()) return;
    setComments([newComment, ...comments]);
    setNewComment('');
  };

  const toggleSubscribe = () => {
    if (isSubscribed) {
      setIsSubscribed(false);
      setSubCount(prev => prev - 1);
    } else {
      setIsSubscribed(true);
      setSubCount(prev => prev + 1);
    }
  };

  const sendLiveMessage = () => {
    if (!liveInput.trim()) return;
    setLiveStreamChat([...liveStreamChat, `Ytee (Creator): ${liveInput}`]);
    setLiveInput('');
  };

  return (
    <div style={styles.container}>
      {/* Ultimate Global Header */}
      <div style={styles.header}>
        <div style={styles.topBar}>
          <div>
            <h1 style={styles.logo}>CACHES <span style={styles.accent}>UNIVERSE X</span></h1>
            <p style={styles.tagline}>Global Omnipresent Media, Live Global Streams, AI Research & Crypto Economy</p>
          </div>
          <div style={styles.subContainer}>
            <button 
              onClick={toggleSubscribe} 
              style={{ ...styles.subscribeBtn, ...(isSubscribed ? styles.subscribedActive : {}) }}
            >
              {isSubscribed ? '🔔 SUBSCRIBED' : '⚡ SUBSCRIBE'}
            </button>
            <span style={styles.subBadge}>{subCount}K Nodes</span>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Navigation Bar */}
      <div style={styles.navBar}>
        <button onClick={() => setActiveTab('feed')} style={{ ...styles.navTab, ...(activeTab === 'feed' ? styles.activeTab : {}) }}>🎬 Cinema & Music</button>
        <button onClick={() => setActiveTab('shorts')} style={{ ...styles.navTab, ...(activeTab === 'shorts' ? styles.activeTab : {}) }}>⚡ Quantum Shorts</button>
        <button onClick={() => setActiveTab('live')} style={{ ...styles.navTab, ...(activeTab === 'live' ? styles.activeTab : {}) }}>🔴 24/7 Global Live</button>
        <button onClick={() => setActiveTab('news')} style={{ ...styles.navTab, ...(activeTab === 'news' ? styles.activeTab : {}) }}>📰 World News & Tech</button>
        <button onClick={() => setActiveTab('travel')} style={{ ...styles.navTab, ...(activeTab === 'travel' ? styles.activeTab : {}) }}>✈️ Aviation & Space</button>
        <button onClick={() => setActiveTab('ai')} style={{ ...styles.navTab, ...(activeTab === 'ai' ? styles.activeTab : {}) }}>🤖 AI Research Studio</button>
        <button onClick={() => setActiveTab('vault')} style={{ ...styles.navTab, ...(activeTab === 'vault' ? styles.activeTab : {}) }}>💎 Crypto Vault ($)</button>
      </div>

      {/* Dynamic Content Workspace */}
      <div style={styles.workspace}>
        
        {/* TAB 1: CINEMA & MUSIC (YouTube/Audiomack Killer) */}
        {activeTab === 'feed' && (
          <div style={styles.grid}>
            <div style={styles.videoCard}>
              <div style={styles.playerFrame}>
                <div style={styles.overlay4K}>ULTRA 4K CINEMATIC STREAM • 120 FPS</div>
                <div style={styles.playIconOverlay}>▶</div>
              </div>
              <div style={styles.videoInfo}>
                <h3 style={styles.videoTitle}>Keep the Blade on the Side (Official 4K Visualizer)</h3>
                <p style={styles.creatorName}>Ytee • <span style={{ color: '#00ffa3' }}>Verified Global Artist</span> • 142K views</p>
                
                {/* Comments & Interaction Section */}
                <div style={styles.commentSection}>
                  <h4 style={{ fontSize: '13px', color: '#aaa', margin: '0 0 8px 0' }}>💬 Global Community Feed ({comments.length})</h4>
                  <div style={styles.commentInputBox}>
                    <input 
                      type="text" 
                      placeholder="Add a world-class comment..." 
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      style={styles.inputField}
                    />
                    <button onClick={addComment} style={styles.sendBtn}>Post</button>
                  </div>
                  <div style={styles.commentList}>
                    {comments.map((c, i) => (
                      <div key={i} style={styles.commentItem}>{c}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: QUANTUM SHORTS (TikTok Killer) */}
        {activeTab === 'shorts' && (
          <div style={styles.shortsContainer}>
            <div style={styles.shortPhoneMockup}>
              <div style={styles.shortVideoOverlay}>
                <div style={styles.shortHeader}>⚡ Ytee Short #01 • Luxury Jet Session</div>
                <div style={styles.shortRightActions}>
                  <button style={styles.shortActionBtn}>❤️ 45K</button>
                  <button style={styles.shortActionBtn}>💬 1.2K</button>
                  <button style={styles.shortActionBtn}>🔗 Share</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: 24/7 GLOBAL LIVE STREAMING */}
        {activeTab === 'live' && (
          <div style={styles.liveDashboard}>
            <div style={styles.liveMainScreen}>
              <div style={styles.liveBroadcastBox}>
                <span style={styles.blinkingLive}>● LIVE NOW</span>
                <h3 style={{ margin: '10px 0 5px 0' }}>Ytee Global Studio Session & Private Jet Telemetry Broadcast</h3>
                <p style={{ color: '#aaa', fontSize: '12px', margin: 0 }}>Broadcasting simultaneously across London, Lagos, and Global Satellites.</p>
              </div>
              <div style={styles.liveChatContainer}>
                <h4 style={{ fontSize: '12px', color: '#00ffa3', margin: '0 0 8px 0' }}>🔴 Live Global Chat Stream</h4>
                <div style={styles.chatLog}>
                  {liveStreamChat.map((msg, idx) => (
                    <div key={idx} style={styles.chatMsg}>{msg}</div>
                  ))}
                </div>
                <div style={styles.commentInputBox}>
                  <input 
                    type="text" 
                    placeholder="Type live broadcast message..." 
                    value={liveInput}
                    onChange={(e) => setLiveInput(e.target.value)}
                    style={styles.inputField}
                  />
                  <button onClick={sendLiveMessage} style={styles.sendBtn}>Send</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: WORLD NEWS & RESEARCH */}
        {activeTab === 'news' && (
          <div style={styles.newsGrid}>
            <div style={styles.newsCard}>
              <h3 style={styles.newsTitle}>🌐 Global Tech & Autonomous AI Breakthroughs</h3>
              <p style={styles.newsSnippet}>Decentralized creators achieve record-breaking zero-fee monetization streams across international nodes.</p>
              <span style={styles.newsSource}>Caches Research Bureau • Updated 2m ago</span>
            </div>
            <div style={styles.newsCard}>
              <h3 style={styles.newsTitle}>🎵 International Music Industry Shift</h3>
              <p style={styles.newsSnippet}>UK Drill and Afrobeats cross-cultural collaborations dominate global streaming charts through autonomous distribution.</p>
              <span style={styles.newsSource}>Global Sound Telemetry • Updated 15m ago</span>
            </div>
          </div>
        )}

        {/* TAB 5: AVIATION & SPACE RESEARCH */}
        {activeTab === 'travel' && (
          <div style={styles.travelContainer}>
            <h3 style={styles.sectionTitle}>✈️ Global Aviation, Private Jets & Space Aesthetics</h3>
            <p style={styles.subText}>Real-time telemetry tracking supersonic jets, private aviation networks, and orbital space stations.</p>
            <div style={styles.grid}>
              <div style={styles.newsCard}>
                <h4 style={{ color: '#00ffa3', margin: '0 0 6px 0' }}>Supersonic Private Jet Route Alpha</h4>
                <p style={{ fontSize: '12px', color: '#ccc', margin: 0 }}>London (EGLL) ➔ Lagos (DNMM) • Telemetry Status: Optimal Mach 2.1</p>
              </div>
              <div style={styles.newsCard}>
                <h4 style={{ color: '#00ffa3', margin: '0 0 6px 0' }}>Orbital Space Station Visual Node</h4>
                <p style={{ fontSize: '12px', color: '#ccc', margin: 0 }}>Live 8K feed streaming orbital sunrise and atmospheric curvature.</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: AI RESEARCH STUDIO */}
        {activeTab === 'ai' && (
          <div style={styles.aiStudioBox}>
            <h3 style={styles.sectionTitle}>🤖 Quantum AI Research & Lyric Synthesizer</h3>
            <p style={styles.subText}>Advanced neural algorithms built to craft UK Drill anthems, cinematic prompts, and automated global publishing.</p>
            <textarea 
              placeholder="Enter complex AI generation query..." 
              style={styles.aiTextarea}
              defaultValue="Synthesize UK Drill beat structure with heavy 808 slides and cinematic private jet visualizer concept..."
            />
            <button onClick={() => alert('AI Neural Network successfully processed and published asset across all global nodes!')} style={styles.aiExecuteBtn}>
              ⚡ Execute Neural Generation & Global Deploy
            </button>
          </div>
        )}

        {/* TAB 7: CRYPTO VAULT & MONETIZATION */}
        {activeTab === 'vault' && (
          <div style={styles.vaultBox}>
            <div style={styles.vaultHeader}>
              <p style={{ color: '#888', fontSize: '11px', margin: 0, letterSpacing: '1px' }}>TOTAL AUTONOMOUS VAULT BALANCE</p>
              <h2 style={styles.vaultAmount}>${walletBalance.toLocaleString()} USD</h2>
              <p style={{ color: '#00ffa3', fontSize: '11px', margin: '5px 0 0 0' }}>⚡ Zero-Fee Smart Contract Payout Gateway Active</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginTop: '20px' }}>
              <div style={styles.metricBox}>
                <p style={{ color: '#888', fontSize: '11px', margin: 0 }}>Subscribers</p>
                <p style={{ color: '#fff', fontSize: '15px', fontWeight: 'bold', margin: '4px 0 0 0' }}>{subCount}K</p>
              </div>
              <div style={styles.metricBox}>
                <p style={{ color: '#888', fontSize: '11px', margin: 0 }}>Anti-Cheat Shield</p>
                <p style={{ color: '#00ffa3', fontSize: '15px', fontWeight: 'bold', margin: '4px 0 0 0' }}>Active</p>
              </div>
              <div style={styles.metricBox}>
                <p style={{ color: '#888', fontSize: '11px', margin: 0 }}>Stream Cut</p>
                <p style={{ color: '#00ffa3', fontSize: '15px', fontWeight: 'bold', margin: '4px 0 0 0' }}>0%</p>
              </div>
            </div>
            <button onClick={() => alert('Smart Contract Payout Dispatched Instantly to Creator Wallet!')} style={styles.claimVaultBtn}>
              💎 Claim Instant Crypto Payout
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#030305',
    color: '#ffffff',
    minHeight: '100vh',
    padding: '16px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    maxWidth: '900px',
    marginBottom: '14px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    paddingBottom: '12px',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
    gap: '12px',
  },
  logo: {
    fontSize: '26px',
    fontWeight: 900,
    letterSpacing: '1px',
    margin: 0,
    background: 'linear-gradient(90deg, #ffffff 0%, #00ffa3 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  accent: {
    color: '#00ffa3',
  },
  tagline: {
    color: '#777',
    fontSize: '11px',
    marginTop: '4px',
  },
  subContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  subscribeBtn: {
    backgroundColor: '#ff0055',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '20px',
    fontWeight: 800,
    fontSize: '12px',
    cursor: 'pointer',
    boxShadow: '0 0 15px rgba(255, 0, 85, 0.4)',
  },
  subscribedActive: {
    backgroundColor: '#00ffa3',
    color: '#030305',
    boxShadow: '0 0 15px rgba(0, 255, 163, 0.4)',
  },
  subBadge: {
    fontSize: '12px',
    fontWeight: 700,
    color: '#aaa',
  },
  navBar: {
    display: 'flex',
    gap: '8px',
    marginBottom: '20px',
    overflowX: 'auto' as const,
    width: '100%',
    maxWidth: '900px',
    paddingBottom: '8px',
  },
  navTab: {
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    color: '#aaa',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    padding: '8px 16px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '12px',
    whiteSpace: 'nowrap' as const,
  },
  activeTab: {
    backgroundColor: '#00ffa3',
    color: '#030305',
    borderColor: '#00ffa3',
    fontWeight: 800,
  },
  workspace: {
    width: '100%',
    maxWidth: '900px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
  },
  videoCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    overflow: 'hidden' as const,
  },
  playerFrame: {
    width: '100%',
    height: '240px',
    backgroundColor: '#0a0a0f',
    position: 'relative' as const,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #12121a 0%, #07070a 100%)',
  },
  overlay4K: {
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
  playIconOverlay: {
    fontSize: '48px',
    color: 'rgba(255, 255, 255, 0.8)',
  },
  videoInfo: {
    padding: '16px',
  },
  videoTitle: {
    fontSize: '15px',
    fontWeight: 700,
    margin: '0 0 6px 0',
    color: '#fff',
  },
  creatorName: {
    fontSize: '12px',
    color: '#888',
    margin: '0 0 16px 0',
  },
  commentSection: {
    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
    paddingTop: '14px',
  },
  commentInputBox: {
    display: 'flex',
    gap: '8px',
    marginBottom: '12px',
  },
  inputField: {
    flex: 1,
    backgroundColor: '#070709',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    padding: '8px 12px',
    color: '#fff',
    fontSize: '12px',
  },
  sendBtn: {
    backgroundColor: '#00ffa3',
    color: '#030305',
    border: 'none',
    padding: '0 16px',
    borderRadius: '8px',
    fontWeight: 800,
    fontSize: '12px',
    cursor: 'pointer',
  },
  commentList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '6px',
  },
  commentItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    padding: '8px 12px',
    borderRadius: '8px',
    fontSize: '12px',
    color: '#ccc',
  },
  shortsContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  shortPhoneMockup: {
    width: '300px',
    height: '500px',
    backgroundColor: '#12121a',
    borderRadius: '24px',
    border: '2px solid rgba(0, 255, 163, 0.3)',
    position: 'relative' as const,
    overflow: 'hidden' as const,
  },
  shortVideoOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '20px',
    background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  shortHeader: {
    fontSize: '13px',
    fontWeight: 700,
    color: '#fff',
  },
  shortRightActions: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
  },
  shortActionBtn: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.2)',
    padding: '6px 10px',
    borderRadius: '12px',
    fontSize: '11px',
    cursor: 'pointer',
  },
  liveDashboard: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '16px',
  },
  liveMainScreen: {
    backgroundColor: '#121216',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    padding: '20px',
  },
  liveBroadcastBox: {
    backgroundColor: '#070709',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '16px',
    border: '1px solid rgba(255, 0, 85, 0.3)',
  },
  blinkingLive: {
    color: '#ff0055',
    fontWeight: 900,
    fontSize: '11px',
    letterSpacing: '1px',
  },
  liveChatContainer: {
    backgroundColor: '#070709',
    borderRadius: '12px',
    padding: '16px',
  },
  chatLog: {
    height: '120px',
    overflowY: 'auto' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '6px',
    marginBottom: '12px',
  },
  chatMsg: {
    fontSize: '11px',
    color: '#aaa',
    backgroundColor: 'rgba(255,255,255,0.02)',
    padding: '4px 8px',
    borderRadius: '6px',
  },
  newsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '16px',
  },
  newsCard: {
    backgroundColor: '#121216',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    padding: '20px',
  },
  newsTitle: {
    fontSize: '14px',
    fontWeight: 700,
    margin: '0 0 6px 0',
    color: '#fff',
  },
  newsSnippet: {
    fontSize: '12px',
    color: '#aaa',
    margin: '0 0 12px 0',
    lineHeight: 1.4,
  },
  newsSource: {
    fontSize: '10px',
    color: '#00ffa3',
  },
  travelContainer: {
    backgroundColor: '#121216',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    padding: '20px',
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
  aiStudioBox: {
    backgroundColor: '#121216',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    padding: '20px',
  },
  aiTextarea: {
    width: '100%',
    height: '90px',
    backgroundColor: '#070709',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    padding: '12px',
    color: '#fff',
    fontSize: '12px',
    resize: 'none' as const,
    marginBottom: '12px',
  },
  aiExecuteBtn: {
    width: '100%',
    backgroundColor: '#00ffa3',
    color: '#030305',
    border: 'none',
    padding: '12px',
    borderRadius: '8px',
    fontWeight: 800,
    fontSize: '13px',
    cursor: 'pointer',
  },
  vaultBox: {
    backgroundColor: '#121216',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    padding: '24px',
  },
  vaultHeader: {
    backgroundColor: '#070709',
    borderRadius: '12px',
    padding: '20px',
    border: '1px solid rgba(0, 255, 163, 0.3)',
    textAlign: 'center' as const,
  },
  vaultAmount: {
    fontSize: '30px',
    fontWeight: 900,
    color: '#00ffa3',
    margin: '4px 0 0 0',
  },
  metricBox: {
    backgroundColor: '#070709',
    borderRadius: '8px',
    padding: '12px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    textAlign: 'center' as const,
  },
  claimVaultBtn: {
    width: '100%',
    backgroundColor: '#00ffa3',
    color: '#030305',
    border: 'none',
    padding: '14px',
    borderRadius: '10px',
    fontWeight: 900,
    fontSize: '13px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};
