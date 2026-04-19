import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mic, Camera, Sparkles, AlertCircle, TrendingUp, DollarSign, Tag, Check, X,
  Flame, Leaf, Target, Search, Zap, Shield, ChevronRight, Send, Lightbulb
} from 'lucide-react';

// --- Data Models ---
const ACTIVE_STRATEGIES = [
  { 
    id: 's1', 
    title: '五一档期高客单转化模型', 
    icon: Flame, 
    iconColor: 'text-[#ff4d4f]', 
    iconBg: 'bg-[#ff4d4f]/10',
    status: '运行中', 
    deliveredToday: 12,
    gradient: 'from-[#ff4d4f]/5 to-transparent'
  },
  { 
    id: 's2', 
    title: '春季全系新品种草模型', 
    icon: Leaf, 
    iconColor: 'text-[#52c41a]', 
    iconBg: 'bg-[#52c41a]/10',
    status: '运行中', 
    deliveredToday: 8,
    gradient: 'from-[#52c41a]/5 to-transparent'
  },
];

const NEW_IDEA_GOALS = [
  { id: 'g1', label: '种草曝光', icon: Zap },
  { id: 'g2', label: '搜索占位', icon: Search },
  { id: 'g3', label: '逼单转化', icon: Target },
  { id: 'g4', label: '竞品防御', icon: Shield },
];

export default function ContextHub() {
  const [selectedStrategy, setSelectedStrategy] = useState<any>(null);
  
  // Tuning state
  const [isTuningRecording, setIsTuningRecording] = useState(false);
  const [tuningStep, setTuningStep] = useState<'input' | 'processing' | 'result'>('input');
  
  // New Idea state
  const [isNewIdeaOpen, setIsNewIdeaOpen] = useState(false);
  const [newIdeaStep, setNewIdeaStep] = useState<'goal' | 'input' | 'processing' | 'proposal'>('goal');
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  // --- Handlers ---
  const handleStrategyClick = (strategy: any) => {
    setSelectedStrategy(strategy);
    setTuningStep('input');
  };

  const closeTuning = () => {
    setSelectedStrategy(null);
  };

  const handleTuningRecordClick = () => {
    if (tuningStep !== 'input') return;
    setIsTuningRecording(true);
    setTimeout(() => {
      setIsTuningRecording(false);
      setTuningStep('processing');
      setTimeout(() => setTuningStep('result'), 1500);
    }, 2000);
  };

  const openNewIdea = () => {
    setIsNewIdeaOpen(true);
    setNewIdeaStep('goal');
    setSelectedGoal(null);
  };

  const handleGoalSelect = (goalId: string) => {
    setSelectedGoal(goalId);
    setNewIdeaStep('input');
  };

  const submitNewIdeaInput = () => {
    setNewIdeaStep('processing');
    setTimeout(() => setNewIdeaStep('proposal'), 1500);
  };

  return (
    <div className="min-h-screen bg-[#f1f3f5] pt-8 px-4 pb-32 max-w-md mx-auto relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-100px] right-[-50px] w-64 h-64 bg-[#5157a7]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="mb-6 relative z-10 pl-2">
        <h1 className="text-2xl font-extrabold text-[#2b3437] tracking-tight flex items-center">
          <Sparkles className="text-[#5157a7] mr-2" size={24} />
          智能策略群
        </h1>
        <p className="text-xs text-[#8b959a] mt-1.5 font-medium">全局掌控 · 实时干预</p>
      </div>

      {/* Active Strategy Dashboard */}
      <div className="space-y-4 relative z-10">
        <h2 className="text-[13px] font-bold text-[#8b959a] uppercase tracking-wider pl-2">运行中模型 Active Models</h2>
        {ACTIVE_STRATEGIES.map((strategy) => (
          <motion.div
            key={strategy.id}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleStrategyClick(strategy)}
            className={`bg-white/80 backdrop-blur-xl border border-white/40 p-5 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden cursor-pointer bg-gradient-to-br ${strategy.gradient}`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`w-10 h-10 rounded-2xl ${strategy.iconBg} flex items-center justify-center`}>
                <strategy.icon className={strategy.iconColor} size={20} />
              </div>
              <div className="flex items-center space-x-1.5 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">
                <div className="w-1.5 h-1.5 rounded-full bg-[#52c41a] animate-pulse" />
                <span className="text-[10px] font-bold text-[#52c41a]">{strategy.status}</span>
              </div>
            </div>
            
            <h3 className="text-base font-bold text-[#2b3437] leading-snug mb-2 pr-4">{strategy.title}</h3>
            
            <div className="flex justify-between items-center mt-4">
              <div className="text-xs text-[#8b959a] font-medium flex items-center">
                今日下发 <span className="text-[#2b3437] font-bold mx-1 text-sm">{strategy.deliveredToday}</span> 篇
              </div>
              <div className="flex items-center text-[#5157a7] text-xs font-bold bg-[#f0f1ff] px-3 py-1.5 rounded-full">
                定向微调 <ChevronRight size={14} className="ml-0.5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Global Intent Generator FAB */}
      <motion.div 
        className="fixed bottom-[96px] right-6 z-30"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button 
          onClick={openNewIdea}
          className="bg-[#2b3437] text-white px-5 py-3.5 rounded-full shadow-2xl flex items-center font-bold text-[15px] space-x-2 border border-black/10"
        >
          <Lightbulb size={20} className="text-yellow-400" />
          <span>我有新想法</span>
        </button>
      </motion.div>

      {/* Tuning Bottom Sheet */}
      <AnimatePresence>
        {selectedStrategy && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeTuning}
              className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[32px] pt-6 px-6 pb-12 z-50 shadow-2xl flex flex-col max-h-[85vh] max-w-md mx-auto"
            >
              <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6 shrink-0 relative top-[-12px]" />
              
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <p className="text-xs text-[#8b959a] font-bold mb-1">正在微调模型</p>
                  <h3 className="text-lg font-extrabold text-[#2b3437] leading-tight">{selectedStrategy.title}</h3>
                </div>
                <button onClick={closeTuning} className="p-2 bg-gray-50 rounded-full text-gray-400">
                  <X size={18} />
                </button>
              </div>

              {tuningStep === 'input' && (
                 <div className="flex-1 flex flex-col items-center justify-center py-8">
                   <p className="text-sm text-[#586064] font-medium mb-8 text-center max-w-[240px]">
                     针对该模型，需要调整什么？<br/><span className="text-xs text-gray-400 mt-2 block">例如：“把主推款换成A货”</span>
                   </p>
                   
                   <motion.button 
                      animate={isTuningRecording ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ repeat: isTuningRecording ? Infinity : 0, duration: 1.5 }}
                      onClick={handleTuningRecordClick}
                      className={`w-24 h-24 rounded-full flex items-center justify-center transition-all shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative ${
                        isTuningRecording ? 'bg-[#5157a7] text-white shadow-[#5157a7]/30' : 'bg-[#f0f1ff] text-[#5157a7]'
                      }`}
                   >
                     {isTuningRecording && (
                        <div className="absolute inset-0 rounded-full border-[3px] border-[#5157a7] animate-ping opacity-20" />
                     )}
                     <Mic size={32} />
                   </motion.button>
                   <p className="text-xs font-bold text-[#5157a7] mt-6">
                     {isTuningRecording ? '正在聆听...' : '点击并长按说话'}
                   </p>
                 </div>
              )}

              {tuningStep === 'processing' && (
                <div className="flex-1 flex flex-col items-center justify-center py-12">
                   <div className="w-12 h-12 border-4 border-[#f0f1ff] border-t-[#5157a7] rounded-full animate-spin mb-4" />
                   <p className="text-sm font-bold text-[#2b3437]">AI 正在解析指令...</p>
                </div>
              )}

              {tuningStep === 'result' && (
                <div className="flex-1 flex flex-col py-2">
                  <div className="bg-[#f8f9fa] rounded-2xl p-5 mb-6 border border-gray-100">
                    <div className="flex items-center mb-3">
                      <Sparkles size={16} className="text-[#5157a7] mr-2" />
                      <span className="text-[13px] font-bold text-[#2b3437]">已提取调整变量</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded-xl shadow-sm">
                        <p className="text-[10px] text-[#8b959a] mb-1">动作 (Action)</p>
                        <p className="text-xs font-bold text-[#2b3437]">替换主推SKU</p>
                      </div>
                      <div className="bg-white p-3 rounded-xl shadow-sm">
                        <p className="text-[10px] text-[#8b959a] mb-1">目标 (Target)</p>
                        <p className="text-xs font-bold text-[#5157a7]">A货</p>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={closeTuning}
                    className="w-full py-4 bg-[#2b3437] text-white font-bold text-[15px] rounded-2xl flex items-center justify-center active:scale-[0.98] transition-all"
                  >
                    <Send size={18} className="mr-2" />
                    确认同步给操盘手
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* New Idea Flow (Full/Half Screen Modal) */}
      <AnimatePresence>
        {isNewIdeaOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsNewIdeaOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: '100%', opacity: 0.5 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0.5 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-x-0 bottom-0 bg-[#f8f9fa] h-[90vh] rounded-t-[32px] z-50 shadow-2xl flex flex-col max-w-md mx-auto overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4 bg-white rounded-t-[32px] shrink-0 border-b border-gray-100 relative z-20">
                <h3 className="text-lg font-extrabold text-[#2b3437] flex items-center">
                  <Lightbulb size={20} className="text-yellow-500 mr-2" />
                  新策略提报
                </h3>
                <button onClick={() => setIsNewIdeaOpen(false)} className="p-2 bg-gray-50 rounded-full text-gray-400">
                  <X size={18} />
                </button>
              </div>

              {/* Dynamic Content Body */}
              <div className="flex-1 overflow-y-auto p-6 relative z-10">
                {newIdeaStep === 'goal' && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h4 className="text-[15px] font-bold text-[#2b3437] mb-4">核心目标是什么？</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {NEW_IDEA_GOALS.map((goal) => (
                        <button
                          key={goal.id}
                          onClick={() => handleGoalSelect(goal.id)}
                          className="bg-white border border-transparent shadow-sm flex flex-col items-center justify-center py-8 rounded-[24px] active:scale-95 transition-all hover:border-[#5157a7]/30 hover:shadow-[0_8px_30px_rgba(81,87,167,0.1)] group"
                        >
                          <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-[#f0f1ff] transition-colors">
                            <goal.icon size={24} className="text-[#586064] group-hover:text-[#5157a7]" />
                          </div>
                          <span className="text-sm font-bold text-[#2b3437]">{goal.label}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {newIdeaStep === 'input' && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col h-full">
                    <h4 className="text-[15px] font-bold text-[#2b3437] mb-2">描述您的想法</h4>
                    <p className="text-xs text-[#8b959a] mb-4">畅所欲言，AI 会自动整理成专业策略指令。</p>
                    <textarea 
                      autoFocus
                      className="w-full flex-1 bg-white border border-gray-200 rounded-[24px] p-5 text-[15px] leading-relaxed text-[#2b3437] focus:outline-none focus:border-[#5157a7] focus:ring-4 focus:ring-[#5157a7]/10 resize-none shadow-inner"
                      placeholder="例如：看到对面竞品上了波西米亚风的裙子，我们也可以推一波那个流苏款，周末赶紧安排发几篇试一试..."
                    />
                    <div className="mt-6 flex gap-3 pb-6">
                      <button className="h-12 w-12 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm shrink-0">
                        <Mic size={20} className="text-[#8b959a]" />
                      </button>
                      <button 
                        onClick={submitNewIdeaInput}
                        className="h-12 flex-1 bg-[#2b3437] text-white rounded-full font-bold text-[15px] shadow-lg shadow-black/10 flex items-center justify-center"
                      >
                        生成策略结构
                      </button>
                    </div>
                  </motion.div>
                )}

                {newIdeaStep === 'processing' && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#f8f9fa] z-10 mt-[-20px]">
                     <Sparkles size={32} className="text-[#5157a7] animate-pulse mb-4" />
                     <p className="text-sm font-bold text-[#2b3437]">AI 正在生成策略提案...</p>
                  </div>
                )}

                {newIdeaStep === 'proposal' && (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                    {/* Strategy Proposal Card */}
                    <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden mb-6 relative">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-bl-[100px] pointer-events-none" />
                      <div className="bg-gradient-to-r from-[#2b3437] to-[#1a1f21] p-5 relative z-10">
                        <div className="flex items-center justify-between mb-2">
                           <span className="text-[10px] font-bold text-[#52c41a] bg-[#52c41a]/10 px-2 py-0.5 rounded border border-[#52c41a]/20 uppercase">
                             Draft Proposal
                           </span>
                           <Sparkles size={14} className="text-yellow-500" />
                        </div>
                        <h4 className="text-lg font-bold text-white">竞品拦截：流苏裙突围</h4>
                      </div>
                      
                      <div className="p-5 space-y-5 relative z-10">
                        <div>
                          <p className="text-[11px] text-[#8b959a] mb-1.5 font-medium">核心意图 (Intent)</p>
                          <p className="text-[13px] font-bold text-[#2b3437] bg-gray-50 p-3 rounded-xl border border-gray-100">
                            针对竞品波西米亚风服饰上新，主推流苏款进行流量拦截。
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                           <div>
                             <p className="text-[11px] text-[#8b959a] mb-1.5 font-medium">重点商品 (SKU)</p>
                             <div className="text-[12px] font-bold text-[#5157a7] flex items-center bg-[#f0f1ff] p-2 rounded-lg border border-[#e5e7ff]">
                               <Tag size={14} className="mr-1.5 shrink-0" />
                               <span className="truncate">春季流苏裙系列</span>
                             </div>
                           </div>
                           <div>
                             <p className="text-[11px] text-[#8b959a] mb-1.5 font-medium">时效性 (Urgency)</p>
                             <div className="text-[12px] font-bold text-[#ff4d4f] flex items-center bg-[#fff1f0] p-2 rounded-lg border border-[#ffccc7]">
                               <AlertCircle size={14} className="mr-1.5 shrink-0" />
                               <span className="truncate">本周末优先</span>
                             </div>
                           </div>
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={() => setIsNewIdeaOpen(false)}
                      className="w-full py-4.5 bg-[#5157a7] text-white font-bold text-[15px] rounded-2xl flex items-center justify-center active:scale-[0.98] transition-all shadow-xl shadow-[#5157a7]/20"
                    >
                      <Send size={18} className="mr-2" />
                      提交至云端操盘手评估
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
