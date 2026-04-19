import React, { useState } from 'react';
import { User, Lock, LayoutGrid } from 'lucide-react';

export default function Login({ onLogin }: { onLogin: () => void }) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col items-center justify-center p-6 font-sans">
      <div className="w-full max-w-sm bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 flex flex-col items-center">
        
        {/* Logo */}
        <div className="w-24 h-24 mb-4 flex items-center justify-center">
          {/* 请将 src 替换为您上传的真实图片地址 */}
          <img 
            src="https://placehold.co/200x200/ffffff/5157a7?text=Logo" 
            alt="TapTik Logo" 
            className="w-full h-full object-contain" 
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-extrabold text-[#2b3437] mb-2 tracking-tight text-center">TapTik</h1>
        <p className="text-sm text-[#586064] mb-10 text-center">从一句话，到一套小红书 KOC 铺量矩阵</p>

        {/* Form */}
        <form onSubmit={handleLogin} className="w-full space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#2b3437] block">手机号</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User size={18} className="text-[#586064]" />
              </div>
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-[#f8f9fa] border border-transparent rounded-2xl text-sm text-[#2b3437] focus:outline-none focus:border-[#5157a7] focus:ring-1 focus:ring-[#5157a7] transition-all placeholder:text-[#abb3b7]"
                placeholder="请输入手机号"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-[#2b3437] block">密码</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock size={18} className="text-[#586064]" />
              </div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-[#f8f9fa] border border-transparent rounded-2xl text-sm text-[#2b3437] focus:outline-none focus:border-[#5157a7] focus:ring-1 focus:ring-[#5157a7] transition-all placeholder:text-[#abb3b7]"
                placeholder="请输入登录密码"
                required
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-3.5 bg-[#5157a7] text-white rounded-2xl font-bold text-base mt-4 active:scale-[0.98] transition-all shadow-lg shadow-[#5157a7]/20"
          >
            登录
          </button>
        </form>

        <button className="mt-6 text-sm font-bold text-[#586064] hover:text-[#2b3437] active:scale-95 transition-all">
          商户自助注册
        </button>
      </div>
    </div>
  );
}
