import React from 'react';
import { User, Briefcase } from 'lucide-react';

export default function Login({ onLogin }: { onLogin: (role: 'employee' | 'smb_owner') => void }) {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-extrabold text-[#2b3437]">角色选择</h1>
          <p className="text-sm text-[#586064]">请选择您的模拟登录角色</p>
        </div>
        
        <div className="space-y-4">
          <button 
            onClick={() => onLogin('smb_owner')}
            className="w-full flex items-center p-4 rounded-2xl border-2 border-[#e0e0ff] hover:border-[#5157a7] active:scale-95 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#e0e0ff] flex items-center justify-center text-[#5157a7] group-hover:bg-[#5157a7] group-hover:text-white transition-colors">
              <Briefcase size={24} />
            </div>
            <div className="ml-4 text-left">
              <h3 className="font-bold text-[#2b3437] text-lg">店长 / 操盘手</h3>
              <p className="text-xs text-[#586064]">全局数据、活动管理、任务分发</p>
            </div>
          </button>

          <button 
            onClick={() => onLogin('employee')}
            className="w-full flex items-center p-4 rounded-2xl border-2 border-[#e3e9ec] hover:border-[#586064] active:scale-95 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#e3e9ec] flex items-center justify-center text-[#586064] group-hover:bg-[#586064] group-hover:text-white transition-colors">
              <User size={24} />
            </div>
            <div className="ml-4 text-left">
              <h3 className="font-bold text-[#2b3437] text-lg">店员 / 执行人</h3>
              <p className="text-xs text-[#586064]">待办任务流、素材拍摄、极简模式</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
