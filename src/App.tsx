import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Tasks from './components/Tasks';
import Data from './components/Data';
import CameraView from './components/CameraView';
import Scoring from './components/Scoring';
import ActivityDetail from './components/ActivityDetail';
import BottomNav from './components/BottomNav';
import LeadDetail from './components/LeadDetail';
import WeChatPushSimulation from './components/WeChatPushSimulation';
import ServiceAccountGuide from './components/ServiceAccountGuide';

export type Screen = 'dashboard' | 'tasks' | 'data' | 'camera' | 'scoring' | 'activity_detail' | 'lead_detail';

export default function App() {
  const [hasFollowed, setHasFollowed] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');
  const [previousScreen, setPreviousScreen] = useState<Screen>('dashboard');

  const navigateTo = (screen: Screen) => {
    setPreviousScreen(currentScreen);
    setCurrentScreen(screen);
  };

  const handlePushClick = () => {
    navigateTo('lead_detail');
  };

  const showBottomNav = ['dashboard', 'tasks', 'data'].includes(currentScreen);

  return (
    <div className={`min-h-screen bg-[#f8f9fa] text-[#2b3437] font-sans ${showBottomNav ? 'pb-20' : ''} no-scrollbar overflow-y-auto overflow-x-hidden relative`}>
      {!hasFollowed && <ServiceAccountGuide onComplete={() => setHasFollowed(true)} />}
      
      {currentScreen === 'dashboard' && <Dashboard onNavigate={navigateTo} />}
      {currentScreen === 'tasks' && <Tasks onNavigate={navigateTo} />}
      {currentScreen === 'data' && <Data />}
      {currentScreen === 'camera' && <CameraView onNavigate={navigateTo} />}
      {currentScreen === 'scoring' && <Scoring onNavigate={navigateTo} />}
      {currentScreen === 'activity_detail' && <ActivityDetail onNavigate={navigateTo} />}
      {currentScreen === 'lead_detail' && <LeadDetail onBack={() => setCurrentScreen(previousScreen)} />}
      
      {showBottomNav && (
        <BottomNav currentScreen={currentScreen} onNavigate={navigateTo} />
      )}

      <WeChatPushSimulation onPushClick={handlePushClick} />
    </div>
  );
}
