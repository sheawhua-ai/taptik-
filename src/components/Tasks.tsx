import { Utensils, Bed, Clock, CheckCircle2, CloudUpload } from 'lucide-react';
import HeaderCapsule from './HeaderCapsule';

export default function Tasks({ onNavigate }: { onNavigate: (s: string) => void }) {
  return (
    <div className="pt-20 px-6 space-y-8 pb-32">
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-5 h-16 bg-[#f8f9fa]/80 backdrop-blur-xl">
        <div className="flex flex-col">
          <h1 className="text-xl font-extrabold tracking-tight text-[#2b3437]">拍摄任务</h1>
        </div>
        <HeaderCapsule />
      </header>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold tracking-tight">进行中任务</h2>
          <span className="bg-[#e0e0ff] text-[#444a99] text-[10px] px-2.5 py-0.5 rounded-full font-bold">3 个待办</span>
        </div>
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-5 shadow-sm transition-transform active:scale-[0.98]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-[#2b3437] leading-tight">宴会厅布置确认</h3>
                <div className="flex gap-2 mt-2">
                  <span className="bg-[#eaeff1] text-[#586064] text-[11px] px-2 py-0.5 rounded-md font-medium">宴会部</span>
                  <span className="bg-[#eaeff1] text-[#586064] text-[11px] px-2 py-0.5 rounded-md font-medium">执行人：王晓明</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-[#e0e0ff]/50 flex items-center justify-center">
                <Utensils className="text-[#5157a7]" size={24} />
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-[#eaeff1]">
              <div className="flex items-center text-[#586064] text-xs">
                <Clock size={14} className="mr-1" />
                <span>今日 18:00 截止</span>
              </div>
              <button 
                onClick={() => onNavigate('camera')}
                className="bg-[#5157a7] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-[#5157a7]/20 active:opacity-90"
              >
                去拍摄
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm transition-transform active:scale-[0.98]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-[#2b3437] leading-tight">新娘套房实拍</h3>
                <div className="flex gap-2 mt-2">
                  <span className="bg-[#eaeff1] text-[#586064] text-[11px] px-2 py-0.5 rounded-md font-medium">客房部</span>
                  <span className="bg-[#eaeff1] text-[#586064] text-[11px] px-2 py-0.5 rounded-md font-medium">执行人：李美华</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-[#e0e0ff]/50 flex items-center justify-center">
                <Bed className="text-[#5157a7]" size={24} />
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-[#eaeff1]">
              <div className="flex items-center text-[#586064] text-xs">
                <Clock size={14} className="mr-1" />
                <span>明天 12:00 截止</span>
              </div>
              <button 
                onClick={() => onNavigate('camera')}
                className="bg-[#5157a7] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-[#5157a7]/20 active:opacity-90"
              >
                去拍摄
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold tracking-tight">已完成任务</h2>
          <button className="text-[#5157a7] text-sm font-semibold">查看全部</button>
        </div>
        <div className="space-y-4">
          <div className="bg-[#f1f4f6]/50 rounded-xl p-5 opacity-80">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-[#2b3437]/70 leading-tight">市场部推广素材采集</h3>
                <div className="flex gap-2 mt-2">
                  <span className="bg-[#e3e9ec] text-[#586064] text-[11px] px-2 py-0.5 rounded-md font-medium">市场部</span>
                  <span className="bg-[#e3e9ec] text-[#586064] text-[11px] px-2 py-0.5 rounded-md font-medium">执行人：赵敏</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <CheckCircle2 className="text-[#586064]/40 fill-current" size={24} />
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-[#e3e9ec]">
              <div className="text-[#586064] text-xs font-medium">完成日期：2023.10.24</div>
              <div className="flex items-center text-[#4E54A4] text-xs font-bold bg-[#4E54A4]/10 px-3 py-1 rounded-full">
                <CloudUpload size={14} className="mr-1" />
                已同步
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden bg-[#5157a7] rounded-2xl p-6 text-white">
            <div className="relative z-10">
              <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1">今日拍摄提示</p>
              <h4 className="text-xl font-extrabold mb-4 leading-tight">抓住下午 4 点的<br/>自然光影效果</h4>
              <div className="bg-white/20 backdrop-blur-md inline-block px-4 py-2 rounded-xl text-xs font-bold">
                查看光影指南
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-8 -mb-8 blur-xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
