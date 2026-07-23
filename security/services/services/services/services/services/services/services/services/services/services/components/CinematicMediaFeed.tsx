// Caches Cinematic Ultra-Modern UI & Dynamic Media Layout Component

import React, { useState } from 'react';

export interface MediaCardItem {
  id: string;
  title: string;
  creatorName: string;
  thumbnailUrl: string;
  viewCount: string;
  duration: string;
  category: 'MUSIC_DROP' | 'CINEMATIC_VLOG' | 'LIVE_STREAM';
}

const sampleMediaItems: MediaCardItem[] = [
  {
    id: 'item_01',
    title: 'Keep the Blade on the Side (Official Visualizer)',
    creatorName: 'Ytee',
    thumbnailUrl: 'https://caches.app/thumbs/drill-visualizer.jpg',
    viewCount: '142K views',
    duration: '3:45',
    category: 'MUSIC_DROP',
  },
  {
    id: 'item_02',
    title: 'Private Jet Session & Global Studio Tour',
    creatorName: 'Ytee',
    thumbnailUrl: 'https://caches.app/thumbs/jet-session.jpg',
    viewCount: '89K views',
    duration: '12:20',
    category: 'CINEMATIC_VLOG',
  },
];

export const CinematicMediaFeed: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ALL' | 'MUSIC_DROP' | 'CINEMATIC_VLOG'>('ALL');
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredItems = activeTab === 'ALL' 
    ? sampleMediaItems 
    : sampleMediaItems.filter(item => item.category === activeTab);

  return (
    <div style={styles.container}>
      {/* Sleek Navigation Bar */}
      <div style={styles.header}>
        <h2 style={styles.logoText}>CACHES <span style={styles.accent}>CINEMA</span></h2>
        <div style={styles.tabContainer}>
          {(['ALL', 'MUSIC_DROP', 'CINEMATIC_VLOG'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                ...styles.tabButton,
                ...(activeTab === tab ? styles.activeTabButton : {}),
              }}
            >
              {tab.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Modern Grid Feed (Cleaner and Faster than YouTube) */}
      <div style={styles.grid}>
        {filteredItems.map(item => (
          <div key={item.id} style={styles.card}>
            <div style={styles.thumbnailWrapper}>
              <div style={styles.simulatedVideoPreview}>
                <span style={styles.durationBadge}>{item.duration}</span>
              </div>
            </div>
            <div style={styles.cardDetails}>
              <div>
                <h4 style={styles.itemTitle}>{item.title}</h4>
                <p style={styles.creatorName}>{item.creatorName}</p>
                <p style={styles.viewCount}>{item.viewCount} • Zero-Fee Stream</p>
              </div>
              <button 
                onClick={() => toggleLike(item.id)}
                style={{
                  ...styles.likeButton,
                  color: likedItems[item.id] ? '#ff3b30' : '#888',
                }}
              >
                {likedItems[item.id] ? '❤️' : '🤍'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Ultra-modern dark mode glassmorphism styling
const styles = {
  container: {
    backgroundColor: '#0a0a0c',
    color: '#ffffff',
    minHeight: '100vh',
    padding: '24px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  header: {
    display: 'flex' as const,
    justifyContent: 'space-between' as const,
    alignItems: 'center' as const,
    marginBottom: '32px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    paddingBottom: '16px',
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 800,
    letterSpacing: '1px',
    margin: 0,
  },
  accent: {
    color: '#007aff',
  },
  tabContainer: {
    display: 'flex' as const,
    gap: '12px',
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
    transition: 'all 0.2s ease',
  },
  activeTabButton: {
    backgroundColor: '#007aff',
    color: '#ffffff',
    borderColor: '#007aff',
  },
  grid: {
    display: 'grid' as const,
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '24px',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '16px',
    overflow: 'hidden' as const,
    border: '1px solid rgba(255, 255, 255, 0.08)',
    transition: 'transform 0.2s ease',
  },
  thumbnailWrapper: {
    position: 'relative' as const,
    width: '100%',
    height: '180px',
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
    fontSize: '15px',
    fontWeight: 700,
    margin: '0 0 6px 0',
    color: '#f0f0f5',
  },
  creatorName: {
    fontSize: '13px',
    color: '#007aff',
    margin: '0 0 4px 0',
    fontWeight: 600,
  },
  viewCount: {
    fontSize: '12px',
    color: '#888',
    margin: 0,
  },
  likeButton: {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    padding: '4px',
  },
};
