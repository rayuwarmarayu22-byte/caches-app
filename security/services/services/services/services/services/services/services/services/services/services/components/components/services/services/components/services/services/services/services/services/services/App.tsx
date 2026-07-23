// Caches Master Application Root - Live Ecosystem Activation

import React, { useState } from 'react';
import { CinematicMediaFeed } from './components/CinematicMediaFeed';
import { GlobalVibeRadar } from './components/GlobalVibeRadar';
import { CachesCommandCenter } from './components/CachesCommandCenter';
import { scheduleGlobalMusicRelease } from './services/globalDistributionSyncEngine';
import { dispatchToUniversalDsps } from './services/universalDspSyncEngine';
import { linkAndCastToTvStation } from './services/tvStationBroadcastLinker';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<'COMMAND_CENTER' | 'MEDIA_FEED' | 'VIBE_RADAR'>('COMMAND_CENTER');
  const [notification, setNotification] = useState<string>('Ecosystem Fully Initialized & Live');

  // Test running your distribution and TV casting live from the app
  const testLiveSystemLaunch = () => {
    const release = scheduleGlobalMusicRelease('Keep the Blade on the Side', 'UK_DRILL');
    const dsp = dispatchToUniversalDsps('Ytee', release.songTitle, ['VEVO_GLOBAL', 'SPOTIFY', 'AUDIOMACK']);
    const tvCast = linkAndCastToTvStation('Ytee', release.songTitle, 'SMART_TV_4K');

    setNotification(`Live! Synced ${dsp.releaseTitle} to VEVO/Spotify & Casting to ${tvCast.targetDisplay}`);
  };

  return (
    <div style={styles.appContainer}>
      {/* Top Live Status Bar */}
      <div style={styles.statusBar}>
        <span style={styles.brandTitle}>CACHES <span style={styles.liveBadge}>● LIVE ECOSYSTEM</span></span>
        <span style={styles.notificationText}>{notification}</span>
        <button onClick={testLiveSystemLaunch} style={styles.testButton}>
          🚀 Test Live DSP & TV Broadcast
        </button>
      </div>

      {/* Screen Navigation Bar */}
      <div style={styles.navBar}>
        <button 
          onClick={() => setActiveScreen('COMMAND_CENTER')}
          style={{ ...styles.navBtn, ...(activeScreen === 'COMMAND_CENTER' ? styles.activeNavBtn : {}) }}
        >
          ⚡ Command Center
        </button>
        <button 
          onClick={() => setActiveScreen('MEDIA_FEED')}
          style={{ ...styles.navBtn, ...(activeScreen === 'MEDIA_FEED' ? styles.activeNavBtn : {}) }}
        >
          🎬 Cinematic Feed
        </button>
        <button 
          onClick={() => setActiveScreen('VIBE_RADAR')}
          style={{ ...styles.navBtn, ...(activeScreen === 'VIBE_RADAR' ? styles.activeNavBtn : {}) }}
        >
          🌍 Global Vibe Radar
        </button>
      </div>

      {/* Dynamic Screen View */}
      <div style={styles.screenContent}>
        {activeScreen === 'COMMAND_CENTER' && <CachesCommandCenter />}
        {activeScreen === 'MEDIA_FEED' && <CinematicMediaFeed />}
        {activeScreen === 'VIBE_RADAR' && <GlobalVibeRadar />}
      </div>
    </div>
  );
}

const styles = {
  appContainer: {
    backgroundColor: '#050507',
    color: '#ffffff',
    minHeight: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  statusBar: {
    display: 'flex' as const,
    justifyContent: 'space-between' as const,
    alignItems: 'center' as const,
    padding: '12px 24px',
    backgroundColor: '#0e0e12',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    flexWrap: 'wrap' as const,
    gap: '12px',
  },
  brandTitle: {
    fontSize: '15px',
    fontWeight: 800,
    letterSpacing: '0.5px',
  },
  liveBadge: {
    color: '#30d158',
    fontSize: '12px',
  },
  notificationText: {
    fontSize: '13px',
    color: '#007aff',
    fontWeight: 600,
  },
  testButton: {
    backgroundColor: '#007aff',
    color: '#fff',
    border: 'none',
    padding: '6px 14px',
    borderRadius: '8px',
    fontWeight: 600,
    cursor: 'pointer',
    fontSize: '12px',
  },
  navBar: {
    display: 'flex' as const,
    gap: '8px',
    padding: '16px 24px 0 24px',
  },
  navBtn: {
    backgroundColor: 'transparent',
    color: '#888',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    padding: '8px 16px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '13px',
  },
  activeNavBtn: {
    backgroundColor: 'rgba(0, 122, 255, 0.15)',
    color: '#007aff',
    borderColor: '#007aff',
  },
  screenContent: {
    padding: '0 8px',
  },
};
