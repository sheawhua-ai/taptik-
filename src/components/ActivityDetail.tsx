import { X, QrCode, Send, Share, Copy, CheckCircle2, Eye, Heart, Activity } from 'lucide-react';
import { useState } from 'react';
import HeaderCapsule from './HeaderCapsule';
import NoteActionModal from './NoteActionModal';

export default function ActivityDetail({ onNavigate }: { onNavigate: (s: string) => void }) {
  const [showQR, setShowQR] = useState(false);
  const [showPublished, setShowPublished] = useState(false);
  const [showPending, setShowPending] = useState(false);
  const [actionModal, setActionModal] = useState<{type: string, note: any} | null>(null);

  return (
    <div className="bg-[#f8f9fa] text-[#2b3437] antialiased min-h-screen pb-24">
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl flex justify-between items-center px-6 h-16">
        <div className="flex items-center gap-3">
          <button onClick={() => onNavigate('dashboard')} className="text-[#2b3437] active:scale-95 transition-transform">
            <X size={24} />
          </button>
          <span className="text-lg font-bold text-slate-900">活动详情</span>
        </div>
        <HeaderCapsule />
      </header>

      <main className="pt-16">
        <div className="px-6 pt-6 pb-4 bg-white border-b border-gray-100">
          <h1 className="font-bold text-2xl text-[#2b3437] mb-1">中环旗舰店 - 春夏新品</h1>
          <p className="text-xs text-[#586064] uppercase tracking-wider">SS24 Collection Preview</p>
        </div>

        <div className="px-5 mt-6 space-y-6">
          <div className="bg-white p-5 rounded-2xl shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-base text-[#2b3437]">笔记发布进度</h3>
              <span className="text-xs font-bold text-[#5157a7] bg-[#e0e0ff] px-2 py-1 rounded-full">目标: 50 篇</span>
            </div>
            <div className="flex gap-4">
              <div 
                onClick={() => setShowPublished(true)}
                className="flex-1 bg-[#f1f4f6] p-4 rounded-xl flex flex-col items-center justify-center active:scale-95 transition-transform cursor-pointer border border-transparent hover:border-gray-200"
              >
                <span className="text-xs text-[#586064] mb-1">已发布</span>
                <span className="font-bold text-2xl text-[#2b3437]">32</span>
              </div>
              <div 
                onClick={() => setShowPending(true)}
                className="flex-1 bg-[#e0e0ff]/50 p-4 rounded-xl flex flex-col items-center justify-center active:scale-95 transition-transform cursor-pointer border border-transparent hover:border-[#5157a7]/20"
              >
                <span className="text-xs text-[#5157a7] mb-1">待发布</span>
                <span className="font-bold text-2xl text-[#5157a7]">18</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => {}} 
              className="flex flex-col items-center justify-center gap-2 bg-[#5157a7] text-white p-4 rounded-2xl active:scale-95 transition-transform shadow-lg shadow-[#5157a7]/20"
            >
              <Send size={24} />
              <span className="font-bold text-sm">一键发笔记</span>
              <span className="text-[10px] opacity-80">使用kos账号发布</span>
            </button>
            
            <button 
              onClick={() => setShowQR(true)} 
              className="flex flex-col items-center justify-center gap-2 bg-white border-2 border-[#5157a7] text-[#5157a7] p-4 rounded-2xl active:scale-95 transition-transform"
            >
              <QrCode size={24} />
              <span className="font-bold text-sm">展示邀请码</span>
              <span className="text-[10px] opacity-80">客户扫码发布</span>
            </button>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-base text-[#2b3437]">最新发布记录</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9OoBnWTT8MOfKiMoIBp0mMJn05jphvcwLuBf5upmnipdDZ_aJjf5Tf4_UU3aTBPyo5lHlYohm-wrRSOIYGg8HTEPxogv4t-N_6hrzgYTLbQw-fI_pwhrmudJnDQlftiA2sWKEq-sDsusRAMlVvKhDDcLBXzPzjmWEy6726a5Mle1w5jS4_lpJFhWmx_geq0PD-Rzl_KvyXYrafKHlNeINE-thKZ4FuLSSop67RwSrvTQRR12wTHMfqBC7fdHXzgvEtXQk-6ZXSj4" className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-[#2b3437]">Kiki_奢品买手</span>
                    <span className="text-xs text-[#586064]">10分钟前</span>
                  </div>
                </div>
                <CheckCircle2 size={18} className="text-green-500" />
              </div>
              <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfFMotTbNgrV5QGOeLpmL8cPXl49_jbT7uL68I_gYucV0zT2gM6DuW-Zt_pg75HtTaqxLq_TacCmTPkVXwnhLBrFmSd22GdGobWBEu_J5NT9nAQyP6DTKVT6oTomx0SrzkQby-qZPgCr26CF8EvcEpD_PtHA9C9uDXeVv6xdQckwbxCW5HTKnKHWa4zeRlFuII775puNKQLyp9vevXFJmTMahlFC-AifGuwVyaXodxRqNXSuxTYSp_pfyXZVlbM5L4NCjKiwunRQk" className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-[#2b3437]">香港旅游攻略_Mandy</span>
                    <span className="text-xs text-[#586064]">2小时前</span>
                  </div>
                </div>
                <CheckCircle2 size={18} className="text-green-500" />
              </div>
              <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDws9G4fSvH4t-6d61odxe4P8M52L2uV08F2x82X1BaAhwFCQ5QHCpPftM_B0aXSTcA8z79ofQxyquE8jyovb7YBi4bam_478kz5MjlUgBtJ0XPT3LocFcal3y4YFMIAdJ4S0lGKWQKTMDdLKuqil6b-jYVuisd9vT2v6UJOwz83rrCdE1A02fUiCtHxe8YqjrvH1Q2AAw6OO_9Nv6H4kdA5riaabfYd9emuM1Phg8kitsw8_Ud7xDup0bXFLoGCqbA6FzXVWv3L94" className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-[#2b3437]">VIP_陈女士</span>
                    <span className="text-xs text-[#586064]">昨天 15:30</span>
                  </div>
                </div>
                <CheckCircle2 size={18} className="text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {showQR && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-6">
          <div className="bg-white rounded-3xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 text-center space-y-4">
              <h3 className="font-bold text-xl text-[#2b3437]">邀请客户发布</h3>
              <p className="text-sm text-[#586064]">让客户使用小红书扫描下方二维码，将自动带入活动话题与门店定位。</p>
              
              <div className="bg-[#f8f9fa] p-4 rounded-2xl inline-block mx-auto">
                <div className="w-48 h-48 bg-white rounded-xl flex items-center justify-center border-2 border-dashed border-gray-200">
                  <QrCode size={64} className="text-[#5157a7]/40" />
                </div>
              </div>
              
              <div className="flex justify-center gap-4 pt-2">
                <button className="flex items-center gap-1.5 text-sm font-bold text-[#5157a7] bg-[#e0e0ff] px-4 py-2 rounded-full active:scale-95 transition-transform">
                  <Share size={16} /> 分享
                </button>
                <button className="flex items-center gap-1.5 text-sm font-bold text-[#586064] bg-gray-100 px-4 py-2 rounded-full active:scale-95 transition-transform">
                  <Copy size={16} /> 复制链接
                </button>
              </div>
            </div>
            <button 
              onClick={() => setShowQR(false)}
              className="w-full py-4 border-t border-gray-100 font-bold text-[#2b3437] hover:bg-gray-50 active:bg-gray-100 transition-colors"
            >
              关闭
            </button>
          </div>
        </div>
      )}

      {/* Published Notes Modal */}
      {showPublished && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-[#f8f9fa] animate-in slide-in-from-bottom-full duration-300">
          <header className="bg-white px-5 h-16 flex items-center justify-between border-b border-gray-100 shrink-0">
            <div className="flex items-center gap-3">
              <button onClick={() => setShowPublished(false)} className="text-[#2b3437] active:scale-95 transition-transform">
                <X size={24} />
              </button>
              <span className="font-bold text-lg">已发布笔记 (32)</span>
            </div>
          </header>
          <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
            {[
              { author: "Kiki_奢品买手", time: "10分钟前", views: "1.2k", likes: "128", monitor: "实时监控中", burstStatus: "viral" },
              { author: "香港旅游攻略_Mandy", time: "2小时前", views: "8.5k", likes: "432", monitor: "4小时/次", burstStatus: "potential" },
              { author: "时尚达人_小A", time: "3小时前", views: "5.6k", likes: "245", monitor: "实时监控中", burstStatus: "climbing" },
              { author: "VIP_陈女士", time: "昨天 15:30", views: "12.4k", likes: "856", monitor: "1天/次", burstStatus: "steady" }
            ].map((note, i) => {
              const config = {
                steady: { label: '平稳表现', color: 'bg-gray-100 text-gray-600', action: '查看明细', actionStyle: 'bg-gray-100 text-gray-500', actionType: 'details' },
                climbing: { label: '流量爬升中', color: 'bg-green-100 text-green-700', action: '优化评论区', actionStyle: 'bg-green-50 text-green-600 border border-green-200', actionType: 'comments' },
                potential: { label: '高潜爆款', color: 'bg-orange-100 text-orange-700', action: '🔥 建议投流', actionStyle: 'bg-orange-500 text-white shadow-sm shadow-orange-500/20', actionType: 'ads' },
                viral: { label: '极速爆发', color: 'bg-red-100 text-red-700 animate-pulse', action: '🚨 紧急截流', actionStyle: 'bg-red-500 text-white shadow-md shadow-red-500/30 animate-pulse', actionType: 'leads' },
              }[note.burstStatus as 'steady' | 'climbing' | 'potential' | 'viral'];

              return (
                <div key={i} className={`bg-white p-4 rounded-2xl shadow-sm border ${note.burstStatus === 'viral' ? 'order-first border-red-200' : 'border-gray-100'} space-y-3`}>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                      <div>
                        <h4 className="font-bold text-sm text-[#2b3437]">{note.author}</h4>
                        <p className="text-[10px] text-[#586064]">{note.time}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <div className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] font-bold ${config.color}`}>
                        <Activity size={12} />
                        {config.label}
                      </div>
                      <span className="text-[8px] text-[#586064]">AI监控: {note.monitor}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-gray-50">
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1.5 text-xs text-[#586064]">
                        <Eye size={14} /> {note.views} 曝光
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-[#586064]">
                        <Heart size={14} /> {note.likes} 互动
                      </div>
                    </div>
                    <button 
                      onClick={() => setActionModal({ type: config.actionType, note })}
                      className={`text-[10px] font-bold px-3 py-1.5 rounded-lg active:scale-95 transition-transform ${config.actionStyle}`}
                    >
                      {config.action}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Pending Notes Modal */}
      {showPending && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-[#f8f9fa] animate-in slide-in-from-bottom-full duration-300">
          <header className="bg-white px-5 h-16 flex items-center justify-between border-b border-gray-100 shrink-0">
            <div className="flex items-center gap-3">
              <button onClick={() => setShowPending(false)} className="text-[#2b3437] active:scale-95 transition-transform">
                <X size={24} />
              </button>
              <span className="font-bold text-lg">待发布笔记 (18)</span>
            </div>
          </header>
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {[
              { title: "K11 Musea 探店打卡", status: "素材采集中", assignee: "王晓明" },
              { title: "春夏新品穿搭推荐", status: "AI文案生成中", assignee: "李华" },
              { title: "限量款包包测评", status: "待KOS确认", assignee: "张伟" }
            ].map((note, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-sm text-[#2b3437] mb-1">{note.title}</h4>
                  <p className="text-xs text-[#586064]">执行人: {note.assignee}</p>
                </div>
                <span className="text-[10px] font-bold bg-[#f1f4f6] text-[#586064] px-2 py-1 rounded">
                  {note.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {actionModal && (
        <NoteActionModal 
          actionType={actionModal.type} 
          note={actionModal.note} 
          onClose={() => setActionModal(null)} 
        />
      )}
    </div>
  );
}
