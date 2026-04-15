import { Eye, Heart, Share, ChevronRight, Sparkles, Zap, Users, MapPin } from 'lucide-react';
import HeaderCapsule from './HeaderCapsule';

export default function Data() {
  return (
    <div className="pt-20 px-4 space-y-5 pb-32">
      <header className="fixed top-0 left-0 w-full z-50 bg-[#f8f9fa]/80 backdrop-blur-xl flex justify-between items-center px-4 h-16">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-extrabold text-[#4E54A4] tracking-tight">Merchant Hub</h1>
        </div>
        <HeaderCapsule />
      </header>

      <section>
        <div className="flex justify-between items-end mb-2.5">
          <h2 className="text-xl font-bold tracking-tight text-[#2b3437]">活动全局概览</h2>
          <span className="text-xs font-semibold text-[#4E54A4]">过去7天</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white p-3 rounded-xl shadow-sm border border-[#abb3b7]/10">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-medium text-[#605e62]">总曝光</span>
              <Eye size={14} className="text-[#4E54A4]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight">128.4k</span>
              <span className="text-[9px] font-bold text-green-600">+12.5%</span>
            </div>
          </div>
          <div className="bg-white p-3 rounded-xl shadow-sm border border-[#abb3b7]/10">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-medium text-[#605e62]">互动数</span>
              <Heart size={14} className="text-[#4E54A4] fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight">8,932</span>
              <span className="text-[9px] font-bold text-green-600">+5.2%</span>
            </div>
          </div>
          <div className="bg-white p-3 rounded-xl shadow-sm border border-[#abb3b7]/10">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-medium text-[#605e62]">分享数</span>
              <Share size={14} className="text-[#4E54A4]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight">452</span>
              <span className="text-[9px] font-bold text-[#9e3f4e]">-1.8%</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-2.5">
          <h3 className="text-base font-bold text-[#2b3437]">进行中的活动</h3>
          <ChevronRight size={18} className="text-[#605e62]" />
        </div>
        <div className="flex overflow-x-auto gap-4 no-scrollbar pb-2">
          {/* Card 1: No Poster with Questionnaire */}
          <div className="flex-shrink-0 w-36 bg-white rounded-xl overflow-hidden shadow-sm border border-[#abb3b7]/10 flex flex-col">
            <div className="w-full aspect-[3/4] bg-gradient-to-br from-[#e0e0ff] to-[#f8f9fa] p-4 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-[#5157a7]/10">
                <Sparkles size={80} />
              </div>
              <div className="flex justify-end relative z-10">
                <span className="bg-[#5157a7] text-white text-[9px] px-1.5 py-0.5 rounded font-bold">含问卷</span>
              </div>
              <div className="relative z-10">
                <p className="text-[10px] text-[#5157a7] font-bold mb-1">SS24</p>
                <h4 className="font-extrabold text-lg text-[#2b3437] leading-tight">中环旗舰店<br/>春夏新品</h4>
              </div>
            </div>
            <div className="p-3">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[9px] text-[#586064]">曝光量</span>
                  <span className="font-bold text-[11px] text-[#2b3437]">12.4k</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[9px] text-[#586064]">互动</span>
                  <span className="font-bold text-[11px] text-[#5157a7]">856</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Poster */}
          <div className="flex-shrink-0 w-36 bg-white rounded-xl overflow-hidden shadow-sm border border-[#abb3b7]/10 flex flex-col">
            <div className="w-full aspect-[3/4] bg-cover bg-center relative" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuChr4RnXZ157z7oovwYW79i9Oarcfxhpae40ItMTFZeEHLcYWKQZ5r1ZYrZ0z4Oohn4VwiFge0_bpQCQvVUG__AVf1Q9QGF3caUB8aBZbARoESdBcGbHxw29uLBc-PHFJQ1lUSmp3SqgB8QxKeUeSwjWKspRbz57gcwzoy3F7b7PYgB-XuGmFRClix9M16Wh7EJUcUN16b47MqN8HCAF2T6Kgr84W0Z5vV4bceVY5J1QuRa8EGF5sA5qblA19sBFoa3S-GjOrmF-SE')"}}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3">
                <h4 className="font-bold text-sm text-white leading-tight">稀有皮具展<br/>海港城</h4>
              </div>
            </div>
            <div className="p-3">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[9px] text-[#586064]">曝光量</span>
                  <span className="font-bold text-[11px] text-[#2b3437]">8.2k</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[9px] text-[#586064]">互动</span>
                  <span className="font-bold text-[11px] text-[#5157a7]">432</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Poster */}
          <div className="flex-shrink-0 w-36 bg-white rounded-xl overflow-hidden shadow-sm border border-[#abb3b7]/10 flex flex-col">
            <div className="w-full aspect-[3/4] bg-cover bg-center relative" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5gvTU1OA36J0mqwjmAKkQjsMshXjKpD8a9J0mqN_Based157uQ4VeBPyG_sX4xDNp432yGocaFcLkmP3EmUo0LEhCVogD0aq-YnPlqv2hYcnim3L7FP-gt-AqcE1gVHGSmYlVPt8z4qjpiV3apoFzrObLkaGmWvoLWWhgOLGi-Sz71vE_6ItiyuRyyy0U7wJkKiH3tjB2CobtrIti4ZGdf62R0LcYAH7MMWUUPusLbcv_MLShTY2_66v8gc6dn5xHhXLLWg-uvEY')"}}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3">
                <h4 className="font-bold text-sm text-white leading-tight">K11 Musea<br/>艺术展</h4>
              </div>
            </div>
            <div className="p-3">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[9px] text-[#586064]">曝光量</span>
                  <span className="font-bold text-[11px] text-[#2b3437]">5.6k</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[9px] text-[#586064]">互动</span>
                  <span className="font-bold text-[11px] text-[#5157a7]">218</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#4E54A4]/5 rounded-2xl p-4 border border-[#4E54A4]/10">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={20} className="text-[#4E54A4] fill-current" />
          <h3 className="text-base font-extrabold text-[#4E54A4]">潜在爆款识别</h3>
          <span className="ml-auto bg-[#4E54A4] text-white text-[8px] px-1.5 py-0.5 rounded-full font-bold">AI 实时</span>
        </div>
        <div className="space-y-3">
          <div className="flex gap-3 items-center bg-white p-2 rounded-xl shadow-sm">
            <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK9g5biVwF7AV7fDzXqb5bXIigstBz8oGrEvTMIVPILojPo-VzwmGhqVvnALpew_mWhVkXGWSs70Yi9gOt94gU4OSoA1QRvh54DyEsCxW3EORXIkTHGNyw2wxKTnRcBMSdkDOlO5rygxT-NAJOk8lr_1DihyG1lqBd5EPpFKlzX-BDvvE0G6hyVBJUsGh7a180hfb2gbStVJzSPZOzjxVXS9zjFmZOT9TMQ1ZgekZKPcPekBc8hMkW5pHrwCeghCOQDb3mD1Ohlj4" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow min-w-0">
              <h4 className="text-[11px] font-bold leading-tight mb-1 truncate">香港购物攻略：海港城必买清单...</h4>
              <div className="flex gap-2 text-[8px] font-bold text-[#605e62]">
                <span className="flex items-center gap-0.5"><Zap size={10} className="fill-current" />爆发率 92%</span>
                <span className="flex items-center gap-0.5 text-[#4E54A4]"><Users size={10} className="fill-current" />18-25岁</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center bg-white p-2 rounded-xl shadow-sm">
            <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtKKes6e6bLca-Wu9iob-rmzFEVtYNrK9w4t-ElmkewrXADRcHNchTwBU4aIZAarFqk7KcFCY6qS73Czery-m_ACff50JvbPpipVQ7Wb0lucwkWk5z_sCQSVIgzIM-Okk4CkY3412ITA_BJyXfS30KeYVbdTvMc1OgXEsFz22GrkYJmvxN2rSv4ohEaaBl5joIHofiS592dzHTD2bM9I8A0KjqrStWq1_B9sqrAyALIY-diM6ShC9dCKixvhhprctOuM63FUPmwuU" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow min-w-0">
              <h4 className="text-[11px] font-bold leading-tight mb-1 truncate">中古奢品探店：中环隐藏的宝藏店铺...</h4>
              <div className="flex gap-2 text-[8px] font-bold text-[#605e62]">
                <span className="flex items-center gap-0.5"><Zap size={10} className="fill-current" />爆发率 85%</span>
                <span className="flex items-center gap-0.5 text-[#4E54A4]"><MapPin size={10} className="fill-current" />本地探店</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-base font-bold mb-2.5 text-[#2b3437]">笔记明细</h3>
        <div className="space-y-1 bg-[#f1f4f6] rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between p-3 bg-white">
            <div className="flex items-center gap-2">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi9XupFUV-WwmHN_tme0ITWGm4SkbIBz6y3yczeRIEK6QxgiBCNkjL39qrDnzwQKMVoOzKu9wZChsmKu2gP2O-mtQi5seYxgtgQM-HW2mtIq16nXnpw9fnSrZ3P8kiFwJtQV-1iRrXaG4PvHAwvMdKBK_oFB_MOy5mHTYtX_fHXMXVIK8h-NYlevwr68ZZsnislWfiH6kBmlNcO_BUbslmhdf15YfG8jXyHuC2dtajwGKW5V41gWtQENexm2UF4kLVdTCGZsaoGRk" className="w-8 h-8 object-cover rounded-lg" />
              <div>
                <p className="text-[11px] font-bold">香奈儿 CF Mini 开箱</p>
                <p className="text-[8px] text-[#605e62]">2小时前</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-bold">4.2k 曝光</p>
              <p className="text-[8px] text-green-600 font-bold">4.5% 互动率</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-white">
            <div className="flex items-center gap-2">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfNYZKfqwNVZ0RFuyuvPB6nQey_OBae9v-N9zmyMzbqpTtWruNpMaZ0yV5ucoxYkaJaIB62sv7qlrYj2G1wAoaTeGjK2h66djtDzYPLyQTZyPiFsdFDnKBTjQUWDYd0q9MaTruw5Hs2ORW9rIYeMcl7bzMZ8JWJxH_RNqBMtgYjr6fvEYrxu_Ek89JOwWxqLmwqxL-6609LpL9g1jmw5MEt0Ld_zl2Za9ma3E7D5t2JRIbg6McKaSeeAxhhuvajYboZWpzRn6t2sc" className="w-8 h-8 object-cover rounded-lg" />
              <div>
                <p className="text-[11px] font-bold">劳力士迪通拿上手体验</p>
                <p className="text-[8px] text-[#605e62]">昨天 18:30</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-bold">12.8k 曝光</p>
              <p className="text-[8px] text-green-600 font-bold">6.1% 互动率</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-white">
            <div className="flex items-center gap-2">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT54vDS0vLcg9-H3XMgNRW-0jAAGPEGDHUluwQCPKHnq6QiE7WfmB5sTtcOSWEE0uCNMxqmyu3X7sVdQpwB-Np_Y3L3Hx1F6LjYgoUf-N7LO_lPxTjWi9E2NvHKSCD72XaGCtsuZlhsBOqsRZtmtUQUxVW7jkiM9l2UzFMUWvEh9BtWVlaPe1wMMxl3vxWWh_UuciPpr1ZM3rGG6P2nyzvkCWwLwUJdeYKBIWfrmjZBRFRu8e5CV8NQxc7DdbrdrVKUaUzUlXPzi0" className="w-8 h-8 object-cover rounded-lg" />
              <div>
                <p className="text-[11px] font-bold">香港半岛酒店下午茶打卡</p>
                <p className="text-[8px] text-[#605e62]">前天 09:15</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-bold">8.1k 曝光</p>
              <p className="text-[8px] text-[#605e62] font-bold">3.2% 互动率</p>
            </div>
          </div>
        </div>
        <button className="w-full py-2.5 mt-2.5 text-[11px] font-bold text-[#605e62] bg-[#f1f4f6] rounded-xl active:scale-95 transition-transform border border-[#abb3b7]/10">
          查看更多明细
        </button>
      </section>
    </div>
  );
}
