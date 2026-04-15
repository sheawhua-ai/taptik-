import React, { useState } from 'react';
import { X, MessageCircle, TrendingUp, Users, Sparkles, Send, Copy, CheckCircle2 } from 'lucide-react';

export default function NoteActionModal({ actionType, note, onClose }: { actionType: string, note: any, onClose: () => void }) {
  const [aiReply, setAiReply] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerateAI = (type: string) => {
    if (type === 'first_comment') {
      setAiReply('🔥这款目前现货充足，支持专柜验货！需要的姐妹直接私信我留货哦~');
    } else if (type === 'lead_reply') {
      setAiReply('您好👋！广东道门店目前还有少量现货，建议您确定行程后提前与我们联系为您预留。');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(aiReply).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center">
      <div className="bg-[#f8f9fa] w-full sm:w-[400px] sm:rounded-3xl rounded-t-3xl h-[80vh] sm:h-[600px] flex flex-col animate-in slide-in-from-bottom-full sm:zoom-in duration-300">
        <header className="bg-white px-5 h-16 flex items-center justify-between border-b border-gray-100 shrink-0 rounded-t-3xl">
          <span className="font-bold text-lg text-[#2b3437]">
            {actionType === 'details' && '笔记明细'}
            {actionType === 'comments' && '评论区优化'}
            {actionType === 'ads' && '投流建议'}
            {actionType === 'leads' && '未读客资截流'}
          </span>
          <button onClick={onClose} className="text-[#2b3437] active:scale-95 transition-transform">
            <X size={24} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-5">
          {/* Comments Optimization */}
          {actionType === 'comments' && (
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-2xl shadow-sm space-y-3">
                <h3 className="font-bold text-sm flex items-center gap-2"><MessageCircle size={16}/> 铺设首评钩子</h3>
                <p className="text-xs text-[#586064]">AI检测到该笔记流量正在攀升，建议立即发布首评引导转化。</p>
                <button onClick={() => handleGenerateAI('first_comment')} className="w-full py-2.5 bg-[#e0e0ff] text-[#5157a7] rounded-xl text-xs font-bold flex items-center justify-center gap-1 active:scale-95 transition-transform">
                  <Sparkles size={14} /> AI 生成首评话术
                </button>
                {aiReply && (
                  <div className="bg-[#f8f9fa] p-3 rounded-xl border border-gray-100 mt-2 animate-in fade-in zoom-in duration-300">
                    <p className="text-sm text-[#2b3437] mb-3">{aiReply}</p>
                    <button onClick={handleCopy} className="w-full py-2.5 bg-[#5157a7] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1 active:scale-95 transition-transform shadow-md shadow-[#5157a7]/20">
                      {copied ? <CheckCircle2 size={14} /> : <Copy size={14} />} {copied ? '已复制，去小红书评论' : '复制并去评论'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Leads Interception */}
          {actionType === 'leads' && (
            <div className="space-y-4">
              <div className="bg-red-50 p-3 rounded-xl border border-red-100 text-red-600 text-xs font-bold flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                发现 3 条高意向未读客资，请立即回复！
              </div>
              
              <div className="bg-white p-4 rounded-2xl shadow-sm space-y-3">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfFMotTbNgrV5QGOeLpmL8cPXl49_jbT7uL68I_gYucV0zT2gM6DuW-Zt_pg75HtTaqxLq_TacCmTPkVXwnhLBrFmSd22GdGobWBEu_J5NT9nAQyP6DTKVT6oTomx0SrzkQby-qZPgCr26CF8EvcEpD_PtHA9C9uDXeVv6xdQckwbxCW5HTKnKHWa4zeRlFuII775puNKQLyp9vevXFJmTMahlFC-AifGuwVyaXodxRqNXSuxTYSp_pfyXZVlbM5L4NCjKiwunRQk" className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-bold">Mandy_</p>
                      <p className="text-[10px] text-[#586064]">刚刚</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[#2b3437]">请问广东道门店有现货吗？下周去香港旅游顺便去逛逛。</p>
                <button onClick={() => handleGenerateAI('lead_reply')} className="py-2 px-3 bg-[#e0e0ff] text-[#5157a7] rounded-xl text-xs font-bold flex items-center gap-1 active:scale-95 transition-transform">
                  <Sparkles size={12} /> AI 推荐回复
                </button>
                {aiReply && (
                  <div className="bg-[#f8f9fa] p-3 rounded-xl border border-gray-100 mt-2 animate-in fade-in zoom-in duration-300">
                    <p className="text-sm text-[#2b3437] mb-3">{aiReply}</p>
                    <button onClick={handleCopy} className="w-full py-2.5 bg-[#5157a7] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1 active:scale-95 transition-transform shadow-md shadow-[#5157a7]/20">
                      {copied ? <CheckCircle2 size={14} /> : <Copy size={14} />} {copied ? '已复制，去小红书回复' : '复制并去回复'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Ads Suggestion */}
          {actionType === 'ads' && (
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-2xl border border-orange-200">
                <h3 className="font-bold text-orange-800 flex items-center gap-2 mb-2"><TrendingUp size={18}/> 聚光平台投放建议</h3>
                <p className="text-xs text-orange-700 mb-4 leading-relaxed">该笔记具备极高爆款潜力，当前自然流量转化率达 8.5%，建议立即介入商业流量放大收益。</p>
                <div className="bg-white p-4 rounded-xl space-y-3 mb-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#586064]">建议投放金额</span>
                    <span className="font-bold text-[#2b3437] text-sm">¥ 500.00</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#586064]">预计增加曝光</span>
                    <span className="font-bold text-[#2b3437] text-sm">15,000+</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#586064]">投放目标</span>
                    <span className="font-bold text-[#2b3437] text-sm">商品/客资收集</span>
                  </div>
                </div>
                <button className="w-full py-3.5 bg-orange-500 text-white rounded-xl text-sm font-bold shadow-lg shadow-orange-500/20 active:scale-95 transition-transform">
                  一键创建投放计划
                </button>
              </div>
            </div>
          )}

          {/* Details */}
          {actionType === 'details' && (
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl shadow-sm space-y-4">
                <div className="flex gap-3">
                  <img src={note?.image || 'https://lh3.googleusercontent.com/aida-public/AB6AXuCK9g5biVwF7AV7fDzXqb5bXIigstBz8oGrEvTMIVPILojPo-VzwmGhqVvnALpew_mWhVkXGWSs70Yi9gOt94gU4OSoA1QRvh54DyEsCxW3EORXIkTHGNyw2wxKTnRcBMSdkDOlO5rygxT-NAJOk8lr_1DihyG1lqBd5EPpFKlzX-BDvvE0G6hyVBJUsGh7a180hfb2gbStVJzSPZOzjxVXS9zjFmZOT9TMQ1ZgekZKPcPekBc8hMkW5pHrwCeghCOQDb3mD1Ohlj4'} className="w-20 h-20 rounded-xl object-cover" />
                  <div>
                    <h3 className="font-bold text-sm line-clamp-2">{note?.title || note?.author + '的笔记'}</h3>
                    <p className="text-xs text-[#586064] mt-1">发布于 {note?.time || '近期'}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#f8f9fa] p-3 rounded-xl">
                    <p className="text-[10px] text-[#586064]">累计曝光</p>
                    <p className="font-bold text-lg">{note?.views || note?.rate || '12.5k'}</p>
                  </div>
                  <div className="bg-[#f8f9fa] p-3 rounded-xl">
                    <p className="text-[10px] text-[#586064]">互动量</p>
                    <p className="font-bold text-lg">{note?.likes || '452'}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
