import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Tasks from './components/Tasks';
import Data from './components/Data';
import CameraView from './components/CameraView';
import Scoring from './components/Scoring';
import ActivityDetail from './components/ActivityDetail';
import BottomNav from './components/BottomNav';
import Login from './components/Login';
import LeadDetail from './components/LeadDetail';
import WeChatPushSimulation from './components/WeChatPushSimulation';

export type Screen = 'dashboard' | 'tasks' | 'data' | 'camera' | 'scoring' | 'activity_detail' | 'lead_detail';
export type Role = 'employee' | 'smb_owner' | null;

export default function App() {
  const [role, setRole] = useState<Role>(null);
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');
  const [previousScreen, setPreviousScreen] = useState<Screen>('dashboard');

  const handleLogin = (selectedRole: Role) => {
    setRole(selectedRole);
    if (selectedRole === 'employee') {
      setCurrentScreen('tasks');
    } else {
      setCurrentScreen('dashboard');
    }
  };

  const navigateTo = (screen: Screen) => {
    setPreviousScreen(currentScreen);
    setCurrentScreen(screen);
  };

  const handlePushClick = () => {
    navigateTo('lead_detail');
  };

  if (!role) {
    return <Login onLogin={handleLogin} />;
  }

  const showBottomNav = role === 'smb_owner' && ['dashboard', 'tasks', 'data'].includes(currentScreen);

  return (
    <div className={`min-h-screen bg-[#f8f9fa] text-[#2b3437] font-sans ${showBottomNav ? 'pb-20' : ''} no-scrollbar overflow-y-auto overflow-x-hidden relative`}>
      {currentScreen === 'dashboard' && <Dashboard onNavigate={navigateTo} />}
      {currentScreen === 'tasks' && <Tasks onNavigate={navigateTo} role={role} />}
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
