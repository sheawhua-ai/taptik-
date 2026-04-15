import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Tasks from './components/Tasks';
import Data from './components/Data';
import CameraView from './components/CameraView';
import Scoring from './components/Scoring';
import BottomNav from './components/BottomNav';

export type Screen = 'dashboard' | 'tasks' | 'data' | 'camera' | 'scoring';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#2b3437] font-sans pb-20 no-scrollbar overflow-y-auto overflow-x-hidden">
      {currentScreen === 'dashboard' && <Dashboard />}
      {currentScreen === 'tasks' && <Tasks onNavigate={setCurrentScreen} />}
      {currentScreen === 'data' && <Data />}
      {currentScreen === 'camera' && <CameraView onNavigate={setCurrentScreen} />}
      {currentScreen === 'scoring' && <Scoring onNavigate={setCurrentScreen} />}
      
      {['dashboard', 'tasks', 'data'].includes(currentScreen) && (
        <BottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
      )}
    </div>
  );
}
