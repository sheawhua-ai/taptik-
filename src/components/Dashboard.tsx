import { Bell, LayoutDashboard, Camera, Utensils, Video, MessageCircle } from 'lucide-react';
import HeaderCapsule from './HeaderCapsule';

export default function Dashboard() {
  return (
    <div className="pt-20 px-5 space-y-8 pb-32">
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-5 h-16 bg-white/80 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#e3e9ec] flex items-center justify-center overflow-hidden">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDws9G4fSvH4t-6d61odxe4P8M52L2uV08F2x82X1BaAhwFCQ5QHCpPftM_B0aXSTcA8z79ofQxyquE8jyovb7YBi4bam_478kz5MjlUgBtJ0XPT3LocFcal3y4YFMIAdJ4S0lGKWQKTMDdLKuqil6b-jYVuisd9vT2v6UJOwz83rrCdE1A02fUiCtHxe8YqjrvH1Q2AAw6OO_9Nv6H4kdA5riaabfYd9emuM1Phg8kitsw8_Ud7xDup0bXFLoGCqbA6FzXVWv3L94" alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-[#586064] font-medium">早安，商户主管</span>
            <h1 className="font-bold text-lg text-[#2b3437] leading-tight">商户管理</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-[#5157a7] hover:opacity-80 active:scale-95 transition-all">
            <Bell size={24} />
          </button>
          <HeaderCapsule />
        </div>
      </header>

      <section className="bg-[#e0e0ff] rounded-3xl p-6 relative overflow-hidden">
        <div className="relative z-10 space-y-1">
          <h2 className="text-[#444a99] text-2xl font-bold">今日工作台</h2>
          <p className="text-[#444a99] opacity-80 text-sm">您有 3 项待办拍摄任务和 2 条高意向咨询。</p>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-10 text-[#444a99]">
          <LayoutDashboard size={120} />
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex justify-between items-end">
          <h3 className="font-bold text-xl text-[#2b3437]">当前活动</h3>
          <span className="text-[#5157a7] text-sm font-semibold">查看全部</span>
        </div>
        <div className="flex overflow-x-auto gap-4 no-scrollbar pb-2">
          <div className="flex-shrink-0 w-48 bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="h-64 relative">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAANIpx1BibL9UpKYkL5RHU-umlhl7z1_Xk-LDacbmzDPDObIrR9lG42enP6hjb0IrcTyh6tw7Uqw7n7Z6qh4sTBiaRV0m0UjqwO1j3h1A56EnBOmC_2w6YQphPJck6bi8t2ocMUysw-LJKud3Qyp60kWhpIbYmcEl1fksJUFDUwoT5ZOHW8vlQUsWDRQ-ewdzd2RlmWm2aQ11V_5PlP9P7qacwAo2HVTxp0D4_ORJlZrKxVk0qaDPrOowAe4CX3XCJ3YT3WY8nML0" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <p className="font-bold text-base">森林奇境</p>
                <p className="text-[10px] opacity-80 uppercase tracking-wider">Forest Fantasy</p>
              </div>
            </div>
            <div className="p-3 flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-[10px] text-[#586064]">浏览量</span>
                <span className="font-bold text-sm">1.2k</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-[#586064]">互动</span>
                <span className="font-bold text-sm text-[#5157a7]">85</span>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-48 bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="h-64 relative">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlgdchApaO9MqUr4L2gAlW-6E387m0X3Z96DtUHmOkpbUSk7B7xru-r6slr9-9YRNpNzFC74u4iLipxFk7K3d7QN4omLiSy4pl-rD8YpQ6dUDlFA8ErPifQmsF9lPwEPDwK7rIX5kbnbs6qUYct7Da78abctp_UZzdHGAfwfwEwWeQpl9soR_fYk4fU4Dclmxhj8qBMXfxqHPRCIbaFxcsZsQUXh2nThprkmjzUJRVP5sGl7yJuWbmLWxFD-Js06-OQflBub2U6AI" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <p className="font-bold text-base">极简奢华</p>
                <p className="text-[10px] opacity-80 uppercase tracking-wider">Minimalist Luxe</p>
              </div>
            </div>
            <div className="p-3 flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-[10px] text-[#586064]">浏览量</span>
                <span className="font-bold text-sm">948</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-[#586064]">互动</span>
                <span className="font-bold text-sm text-[#5157a7]">52</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-bold text-xl text-[#2b3437]">待办拍摄任务</h3>
        <div className="bg-[#f1f4f6] rounded-3xl p-2 space-y-1">
          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-[#e0e0ff] flex items-center justify-center text-[#5157a7]">
              <Camera size={24} />
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm text-[#2b3437]">宴会大厅全景拍摄</p>
              <p className="text-xs text-[#586064]">截止日期: 5月10日</p>
            </div>
            <span className="px-2 py-1 rounded-full bg-[#e5e1e6] text-[#525155] text-[10px] font-bold">待处理</span>
          </div>
          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-[#e0e0ff] flex items-center justify-center text-[#5157a7]">
              <Utensils size={24} />
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm text-[#2b3437]">招牌菜品近景特写</p>
              <p className="text-xs text-[#586064]">截止日期: 5月12日</p>
            </div>
            <span className="px-2 py-1 rounded-full bg-[#e5e1e6] text-[#525155] text-[10px] font-bold">制作中</span>
          </div>
          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-[#e0e0ff] flex items-center justify-center text-[#5157a7]">
              <Video size={24} />
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm text-[#2b3437]">新娘套房细节视频</p>
              <p className="text-xs text-[#586064]">截止日期: 5月15日</p>
            </div>
            <span className="px-2 py-1 rounded-full bg-[#e5e1e6] text-[#525155] text-[10px] font-bold">待处理</span>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-bold text-xl text-[#2b3437]">重点评论回复</h3>
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-3xl shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9OoBnWTT8MOfKiMoIBp0mMJn05jphvcwLuBf5upmnipdDZ_aJjf5Tf4_UU3aTBPyo5lHlYohm-wrRSOIYGg8HTEPxogv4t-N_6hrzgYTLbQw-fI_pwhrmudJnDQlftiA2sWKEq-sDsusRAMlVvKhDDcLBXzPzjmWEy6726a5Mle1w5jS4_lpJFhWmx_geq0PD-Rzl_KvyXYrafKHlNeINE-thKZ4FuLSSop67RwSrvTQRR12wTHMfqBC7fdHXzgvEtXQk-6ZXSj4" className="w-full h-full object-cover" />
                </div>
                <span className="font-bold text-sm text-[#2b3437]">小红书用户_2931</span>
              </div>
              <span className="text-[10px] text-[#586064]">10分钟前</span>
            </div>
            <div className="bg-[#f1f4f6] p-4 rounded-2xl">
              <p className="text-sm leading-relaxed text-[#2b3437]">“请问5月20号还有档期吗？想要咨询一下具体的预定细节和优惠政策。”</p>
            </div>
            <button className="w-full py-3 bg-[#5157a7] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all">
              <MessageCircle size={16} />
              跳转笔记回复
            </button>
          </div>
          <div className="bg-white p-5 rounded-3xl shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfFMotTbNgrV5QGOeLpmL8cPXl49_jbT7uL68I_gYucV0zT2gM6DuW-Zt_pg75HtTaqxLq_TacCmTPkVXwnhLBrFmSd22GdGobWBEu_J5NT9nAQyP6DTKVT6oTomx0SrzkQby-qZPgCr26CF8EvcEpD_PtHA9C9uDXeVv6xdQckwbxCW5HTKnKHWa4zeRlFuII775puNKQLyp9vevXFJmTMahlFC-AifGuwVyaXodxRqNXSuxTYSp_pfyXZVlbM5L4NCjKiwunRQk" className="w-full h-full object-cover" />
                </div>
                <span className="font-bold text-sm text-[#2b3437]">备婚记_王先生</span>
              </div>
              <span className="text-[10px] text-[#586064]">1小时前</span>
            </div>
            <div className="bg-[#f1f4f6] p-4 rounded-2xl">
              <p className="text-sm leading-relaxed text-[#2b3437]">“请问20桌起订是什么价格？包含婚房和简单的场布吗？”</p>
            </div>
            <button className="w-full py-3 bg-[#5157a7] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all">
              <MessageCircle size={16} />
              跳转笔记回复
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
