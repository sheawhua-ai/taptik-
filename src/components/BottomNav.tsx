import { LayoutDashboard, Camera, BarChart2 } from 'lucide-react';

export default function BottomNav({ currentScreen, onNavigate }: { currentScreen: string, onNavigate: (s: string) => void }) {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-40 flex justify-around items-center px-6 pt-2 pb-8 bg-white/90 backdrop-blur-xl border-t border-gray-100">
      <button 
        onClick={() => onNavigate('dashboard')}
        className={`flex flex-col items-center justify-center w-16 h-12 transition-colors ${currentScreen === 'dashboard' ? 'text-[#5157a7]' : 'text-[#abb3b7]'}`}
      >
        <LayoutDashboard size={24} strokeWidth={currentScreen === 'dashboard' ? 2.5 : 2} />
        <span className={`text-[10px] mt-1 ${currentScreen === 'dashboard' ? 'font-bold' : 'font-medium'}`}>工作台</span>
      </button>
      
      <button 
        onClick={() => onNavigate('tasks')}
        className={`flex flex-col items-center justify-center w-16 h-12 transition-colors ${currentScreen === 'tasks' ? 'text-[#5157a7]' : 'text-[#abb3b7]'}`}
      >
        <Camera size={24} strokeWidth={currentScreen === 'tasks' ? 2.5 : 2} />
        <span className={`text-[10px] mt-1 ${currentScreen === 'tasks' ? 'font-bold' : 'font-medium'}`}>拍摄任务</span>
      </button>

      <button 
        onClick={() => onNavigate('data')}
        className={`flex flex-col items-center justify-center w-16 h-12 transition-colors ${currentScreen === 'data' ? 'text-[#5157a7]' : 'text-[#abb3b7]'}`}
      >
        <BarChart2 size={24} strokeWidth={currentScreen === 'data' ? 2.5 : 2} />
        <span className={`text-[10px] mt-1 ${currentScreen === 'data' ? 'font-bold' : 'font-medium'}`}>笔记数据</span>
      </button>
    </nav>
  );
}
