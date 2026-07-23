// Caches Real-Time Global Vibe & Trend Radar Component

import React, { useState, useEffect } from 'react';

export interface VibeNode {
  nodeId: string;
  cityName: string;
  activeActivity: string;
  viewerSurge: string;
  timestamp: string;
}

const initialVibeNodes: VibeNode[] = [
  {
    nodeId: 'node_01',
    cityName: 'London, UK',
    activeActivity: 'UK Drill Studio Session & Visual Drop',
    viewerSurge: '+4.2K active',
    timestamp: 'Just now',
  },
  {
    nodeId: 'node_02',
    cityName: 'Lagos, Nigeria',
    activeActivity: 'Afrobeats Live Mastering & Global Stream',
    viewerSurge: '+8.9K active',
    timestamp: '2m ago',
  },
  {
    nodeId: 'node_03',
    cityName: 'Tokyo, Japan',
    activeActivity: 'Aviation & High-End Visual Showcase',
    viewerSurge: '+3.1K active',
    timestamp: '5m ago',
  },
];

export const GlobalVibeRadar: React.FC = () => {
  const [nodes, setNodes] = useState<VibeNode[]>(initialVibeNodes);
  const [isLiveSyncActive, setIsLiveSyncActive] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time global activity updates
      setNodes(prev => prev.map(node => ({
        ...node,
        viewerSurge: `+${Math.floor(Math.random() * 5000) + 1000} active`
      })));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.radarContainer}>
      <div style={styles.radarHeader}>
        <div>
          <h3 style={styles.radarTitle}>🌍 GLOBAL VIBE RADAR</h3>
          <p style={styles.radarSubtitle}>Autonomous telemetry tracking live creative energy worldwide</p>
        </div>
        <button 
          onClick={() => setIsLiveSyncActive(!isLiveSyncActive)}
          style={{
            ...styles.syncButton,
            backgroundColor: isLiveSyncActive ? 'rgba(0, 122, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
            color: isLiveSyncActive ? '#007aff' : '#888',
          }}
        >
          {isLiveSyncActive ? '🟢 Live Sync Active' : '⏸ Paused'}
        </button>
      </div>

      <div style={styles.nodeGrid}>
        {nodes.map(node => (
          <div key={node.nodeId} style={styles.nodeCard}>
            <div style={styles.nodeTopRow}>
              <span style={styles.cityName}>{node.cityName}</span>
              <span style={styles.surgeBadge}>{node.viewerSurge}</span>
            </div>
            <p style={styles.activityText}>{node.activeActivity}</p>
            <span style={styles.timestampText}>Updated {node.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sleek dark-mode styling for the radar component
const styles = {
  radarContainer: {
    backgroundColor: '#0e0e12',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    padding: '24px',
    color: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    margin: '24px 0',
  },
  radarHeader: {
    display: 'flex' as const,
    justifyContent: 'space-between' as const,
    alignItems: 'center' as const,
    marginBottom: '20px',
    flexWrap: 'wrap' as const,
    gap: '12px',
  },
  radarTitle: {
    fontSize: '18px',
    fontWeight: 800,
    margin: '0 0 4px 0',
    letterSpacing: '0.5px',
  },
  radarSubtitle: {
    fontSize: '13px',
    color: '#888',
    margin: 0,
  },
  syncButton: {
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '6px 14px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: 600,
    transition: 'all 0.2s ease',
  },
  nodeGrid: {
    display: 'grid' as const,
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '16px',
  },
  nodeCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '12px',
    padding: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  nodeTopRow: {
    display: 'flex' as const,
    justifyContent: 'space-between' as const,
    alignItems: 'center' as const,
    marginBottom: '8px',
  },
  cityName: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#f0f0f5',
  },
  surgeBadge: {
    backgroundColor: 'rgba(48, 209, 88, 0.15)',
    color: '#30d158',
    padding: '2px 8px',
    borderRadius: '6px',
    fontSize: '11px',
    fontWeight: 700,
  },
  activityText: {
    fontSize: '13px',
    color: '#ccc',
    margin: '0 0 8px 0',
    lineHeight: 1.4,
  },
  timestampText: {
    fontSize: '11px',
    color: '#666',
  },
};
