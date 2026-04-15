import React, { useState } from 'react';
import { X, Copy, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function LeadDetail({ onBack }: { onBack: () => void }) {
  const [copied, setCopied] = useState(false);
  const aiSuggestion = "Mandy您好👋！感谢您关注我们。目前广东道门店香奈儿 CF Mini 黑牛皮还有少量现货哦👜！由于该款式非常抢手🔥，建议您确定行程后提前与我们联系，我们可以为您预留24小时⏳。祝您香港之旅愉快✈️，期待您的光临✨！";

  const handleCopy = () => {
    navigator.clipboard.writeText(aiSuggestion).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col pb-10">
      <header className="bg-white px-5 h-16 flex items-center justify-between border-b border-gray-100 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="text-[#2b3437] active:scale-95 transition-transform">
            <X size={24} />
          </button>
          <span className="font-bold text-lg">线索处理</span>
        </div>
      </header>

      <div className="p-5 space-y-6 flex-1">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfFMotTbNgrV5QGOeLpmL8cPXl49_jbT7uL68I_gYucV0zT2gM6DuW-Zt_pg75HtTaqxLq_TacCmTPkVXwnhLBrFmSd22GdGobWBEu_J5NT9nAQyP6DTKVT6oTomx0SrzkQby-qZPgCr26CF8EvcEpD_PtHA9C9uDXeVv6xdQckwbxCW5HTKnKHWa4zeRlFuII775puNKQLyp9vevXFJmTMahlFC-AifGuwVyaXodxRqNXSuxTYSp_pfyXZVlbM5L4NCjKiwunRQk" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <h3 className="font-bold text-sm text-[#2b3437]">香港旅游攻略_Mandy</h3>
                <p className="text-[10px] text-[#586064]">刚刚来自小红书</p>
              </div>
            </div>
            <span className="bg-[#e0e0ff] text-[#5157a7] text-[10px] px-2 py-1 rounded font-bold">高意向客资</span>
          </div>
          
          <div className="bg-[#f8f9fa] p-4 rounded-xl text-sm text-[#2b3437] leading-relaxed">
            "请问广东道门店有香奈儿 CF Mini 黑牛皮现货吗？下周去香港旅游顺便去逛逛。"
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-4">
          <div className="flex items-center gap-2">
            <MessageCircle size={18} className="text-[#5157a7]" />
            <h3 className="font-bold text-sm text-[#2b3437]">AI 推荐回复</h3>
          </div>
          <div className="bg-[#e0e0ff]/30 p-4 rounded-xl text-sm text-[#2b3437] leading-relaxed border border-[#5157a7]/10">
            {aiSuggestion}
          </div>
          
          <button 
            onClick={handleCopy}
            className="w-full py-3.5 bg-[#5157a7] text-white rounded-xl font-bold text-sm active:scale-95 transition-transform flex items-center justify-center gap-2 shadow-lg shadow-[#5157a7]/20"
          >
            {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
            {copied ? '已复制，去小红书回复' : '复制并跳转小红书'}
          </button>
        </div>
      </div>
    </div>
  );
}
