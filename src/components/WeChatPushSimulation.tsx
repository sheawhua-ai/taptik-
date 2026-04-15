import React, { useState } from 'react';
import { MessageSquare, Bell } from 'lucide-react';

export default function WeChatPushSimulation({ onPushClick }: { onPushClick: () => void }) {
  const [showBanner, setShowBanner] = useState(false);

  const triggerPush = () => {
    setShowBanner(true);
    setTimeout(() => setShowBanner(false), 5000); // Auto hide after 5s
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={triggerPush}
        className="fixed bottom-24 right-4 z-50 bg-[#07c160] text-white p-3 rounded-full shadow-lg active:scale-95 transition-transform flex items-center justify-center"
      >
        <MessageSquare size={24} />
      </button>

      {/* WeChat Banner */}
      <div className={`fixed top-4 left-4 right-4 z-[100] transition-transform duration-300 ${showBanner ? 'translate-y-0' : '-translate-y-[150%]'}`}>
        <div 
          onClick={() => {
            setShowBanner(false);
            onPushClick();
          }}
          className="bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-gray-100 flex items-start gap-3 cursor-pointer active:scale-95 transition-transform"
        >
          <div className="w-10 h-10 bg-[#07c160] rounded-xl flex items-center justify-center flex-shrink-0 text-white">
            <Bell size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center mb-0.5">
              <h4 className="font-bold text-sm text-[#2b3437]">服务通知</h4>
              <span className="text-[10px] text-[#586064]">刚刚</span>
            </div>
            <p className="text-xs font-bold text-[#2b3437] truncate">收到新客资：香奈儿 CF Mini 寻货</p>
            <p className="text-[10px] text-[#586064] truncate mt-0.5">点击立即处理，AI已生成话术</p>
          </div>
        </div>
      </div>
    </>
  );
}
