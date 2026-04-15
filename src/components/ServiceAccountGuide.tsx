import React, { useState } from 'react';
import { QrCode, AlertCircle, CheckCircle2, ScanFace } from 'lucide-react';

export default function ServiceAccountGuide({ onComplete }: { onComplete: () => void }) {
  const [simulating, setSimulating] = useState(false);

  const handleSimulateFollow = () => {
    setSimulating(true);
    setTimeout(() => {
      onComplete();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="bg-[#fff1f0] p-6 flex flex-col items-center text-center border-b border-[#ffccc7]">
          <div className="w-14 h-14 bg-[#ffccc7] rounded-full flex items-center justify-center mb-4 text-[#ff4d4f]">
            <AlertCircle size={28} />
          </div>
          <h2 className="text-xl font-extrabold text-[#2b3437] mb-2">重要提醒</h2>
          <p className="text-sm text-[#cf1322] font-bold leading-relaxed">
            为确保您能收到客资分佣提醒，请务必长按识别关注官方服务号。未关注将导致无法接单。
          </p>
        </div>
        
        <div className="p-8 flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="w-48 h-48 bg-[#f8f9fa] rounded-2xl border-2 border-dashed border-[#abb3b7] flex flex-col items-center justify-center relative overflow-hidden">
              <QrCode size={80} className="text-[#2b3437] mb-2 opacity-80" />
              <span className="text-xs text-[#586064] font-medium">服务号二维码</span>
            </div>
            
            {/* Scanning animation overlay when simulating */}
            {simulating && (
              <div className="absolute inset-0 bg-[#07c160]/10 rounded-2xl overflow-hidden">
                <div className="w-full h-1 bg-[#07c160] shadow-[0_0_10px_#07c160] animate-[scan_1.5s_ease-in-out_infinite]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-3 shadow-lg text-[#07c160]">
                    <CheckCircle2 size={32} />
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <button 
            onClick={handleSimulateFollow}
            disabled={simulating}
            className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
              simulating 
                ? 'bg-[#f0f0f0] text-[#abb3b7]' 
                : 'bg-[#07c160] text-white active:scale-95 shadow-lg shadow-[#07c160]/20'
            }`}
          >
            {simulating ? (
              '正在识别...'
            ) : (
              <>
                <ScanFace size={18} />
                模拟长按识别并关注
              </>
            )}
          </button>
          
          <p className="text-[10px] text-[#abb3b7] text-center">
            （原型演示：点击按钮模拟微信长按识别二维码成功）
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { transform: translateY(0); }
          50% { transform: translateY(192px); }
          100% { transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
