import { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Mail, Phone, Download, TerminalSquare, Zap, Network, Flame, ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "资源有限时，如何进行需求评估与优先级排序？",
    a: "坚持三维评估：1. 用户导向优先（锁定留存与粘性，提升核心体验）；2. 市场前瞻性考察（评估市场验证潜力与商业化意愿）；3. 可实现性兜底（在资源约束下灵活调度，寻求最优解）。"
  },
  {
    q: "如何平衡业务目标（商业变现）与极致的用户体验？",
    a: "体验为基，商业为翼。始终将用户体验置于首位，因为留存是未来一切可能性的前提。在保障体验底线后，再精准发力业务目标。这是项目长远发展并在残酷市场中存活的唯一基石。"
  },
  {
    q: "评审或开发中产生较大分歧，如何推进与解决？",
    a: "采取“正式会议 + 颗粒度对齐”机制。召集各部门代表坦诚相见，合盘托出需求与资源限制；进行多轮细节探讨，对齐颗粒度并寻找折中方案。在协调各方诉求的前提下，推动项目拿到能力范围内的最佳结果。"
  }
];

function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const yOffset = useTransform(scrollYProgress, [0, 0.2], [0, 50]);
  
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // 统一弹性动画参数
  const springProps = { type: "spring" as const, stiffness: 100, damping: 20 };

  return (
    <div className="min-h-screen bg-[#F5F4F0] text-[#1A1A1A] font-['Space_Grotesk'] overflow-hidden selection:bg-[#E53935] selection:text-white">
      
      {/* Ambient Dotted Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-dotted-grid opacity-30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F4F0] via-transparent to-[#F5F4F0] opacity-80" />
        
        {/* Subtle crosshairs at corners */}
        <div className="absolute top-10 left-10 w-4 h-[1px] bg-zinc-300" />
        <div className="absolute top-10 left-10 w-[1px] h-4 bg-zinc-300" />
        <div className="absolute bottom-10 right-10 w-4 h-[1px] bg-zinc-300" />
        <div className="absolute bottom-10 right-10 w-[1px] h-4 bg-zinc-300" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-8 md:px-16 flex justify-between items-center nav-blur border-b border-zinc-200">
        <span className="font-['Archivo'] font-bold text-xl tracking-tighter text-[#1A1A1A]">WANG<span className="text-[#E53935]">.YAO</span></span>
        <div className="flex gap-8 text-sm font-bold tracking-wide hidden md:flex uppercase text-zinc-600">
          <a href="#about" className="hover:text-[#E53935] hover:-translate-y-0.5 transition-all">About</a>
          <a href="#arsenal" className="hover:text-[#E53935] hover:-translate-y-0.5 transition-all">Arsenal</a>
          <a href="#works" className="hover:text-[#E53935] hover:-translate-y-0.5 transition-all">Works</a>
          <a href="#experience" className="hover:text-[#E53935] hover:-translate-y-0.5 transition-all">Experience</a>
          <a href="#philosophy" className="hover:text-[#E53935] hover:-translate-y-0.5 transition-all">Philosophy</a>
          <a href="#contact" className="hover:text-[#E53935] hover:-translate-y-0.5 transition-all">Contact</a>
        </div>
      </nav>

      <main className="relative z-10 flex flex-col items-center">
        
        {/* HERO SECTION */}
        <section className="relative w-full min-h-screen flex flex-col justify-center px-8 md:px-16 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
            style={{ y: yOffset }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-[#E53935]"></div>
              <span className="text-[#E53935] tracking-[0.2em] text-sm md:text-base uppercase font-bold font-dot">Product Manager & Indie Developer</span>
            </div>
            
            <h1 className="font-dot text-6xl md:text-[8rem] leading-[0.9] tracking-tight mb-8 text-[#1A1A1A] drop-shadow-[2px_2px_0_rgba(229,57,53,0.1)]">
              BUILDING <br />
              <span className="italic font-['Archivo'] font-bold text-[#E53935]">VISIONARY</span> <br />
              PRODUCTS.
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-600 max-w-2xl leading-relaxed mb-12 font-medium">
              驱动于 <span className="text-black font-bold border-b-2 border-[#E53935]/30">AI 生产力</span>，聚焦于 <span className="text-black font-bold border-b-2 border-[#E53935]/30">商业化增长闭环</span>，并以严谨的 <span className="text-black font-bold border-b-2 border-[#E53935]/30">数据与风控思维</span> 为基石。
            </p>

            <motion.a 
              href="#works"
              whileHover={{ scale: 1.02, x: 5, y: -5, boxShadow: "8px 8px 0px 0px rgba(26,26,26,1)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-[#1A1A1A] text-white px-8 py-4 rounded-none font-bold tracking-wide transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(229,57,53,1)] hover:bg-[#E53935] border-2 border-transparent hover:border-[#1A1A1A]"
            >
              EXPLORE WORKS <ArrowRight size={20} />
            </motion.a>
          </motion.div>

          <motion.div style={{ opacity }} className="absolute bottom-12 left-8 md:left-16 flex flex-col gap-4 items-center">
            <span className="font-dot text-xs text-zinc-500 tracking-widest rotate-90 origin-left translate-x-3 translate-y-16">SCROLL_DOWN</span>
            <div className="w-[2px] h-16 bg-zinc-200 relative overflow-hidden mt-6">
              <motion.div 
                animate={{ y: [0, 64] }} 
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-1/2 bg-[#E53935]" 
              />
            </div>
          </motion.div>
        </section>

        {/* ABOUT & EXPERTISE */}
        <section id="about" className="w-full max-w-7xl px-8 md:px-16 py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={springProps}
            >
              <h2 className="font-['Archivo'] text-4xl md:text-5xl font-black tracking-tighter mb-12 uppercase">THE <span className="text-zinc-400">ENGINE.</span></h2>
              
              <div className="space-y-12">
                <div className="relative pl-8 border-l-2 border-zinc-200 hover:border-[#E53935] transition-colors duration-300">
                  <div className="absolute top-0 left-0 w-4 h-4 -translate-x-[9px] rounded-sm bg-[#1A1A1A] flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#E53935] animate-pulse"></div>
                  </div>
                  <h4 className="text-xl font-bold mb-2 font-['Archivo'] uppercase">AI 产品力</h4>
                  <p className="text-zinc-600 leading-relaxed font-medium">熟练使用 Opencode / Claude Code / Codex 等先进 AI 编程工具，具备独立构建现代化 Web 应用的全栈开发能力，掌握 Multiagents 敏捷协作的标准化开发 SOP。</p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-zinc-200 hover:border-[#E53935] transition-colors duration-300">
                  <div className="absolute top-0 left-0 w-4 h-4 -translate-x-[9px] rounded-sm bg-[#1A1A1A] flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#E53935]"></div>
                  </div>
                  <h4 className="text-xl font-bold mb-2 font-['Archivo'] uppercase">增长闭环与商业化体验</h4>
                  <p className="text-zinc-600 leading-relaxed font-medium">具备将 SaaS 产品从 0 到 1 成功跑通商业变现链路的实战经验。擅长利用小红书等社交媒体平台进行低成本流量获取，在半月内达成 130+ 订单付费转化的裂变实验。</p>
                </div>

                <div className="relative pl-8 border-l-2 border-zinc-200 hover:border-[#E53935] transition-colors duration-300">
                  <div className="absolute top-0 left-0 w-4 h-4 -translate-x-[9px] rounded-sm bg-[#1A1A1A] flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#E53935]"></div>
                  </div>
                  <h4 className="text-xl font-bold mb-2 font-['Archivo'] uppercase">专业背景与金融思维</h4>
                  <p className="text-zinc-600 leading-relaxed font-medium">西南财经大学金融硕士在读 (GPA 3.9/5)。具备严谨的量化数据分析与风险控制思维，能运用深度的行业研究方法论驱动产品决策。</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...springProps, delay: 0.2 }}
              className="glass-card glass-card-hover p-10 flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute right-0 top-0 w-16 h-16 border-b border-l border-zinc-200" />
              <div className="absolute left-0 bottom-0 w-16 h-16 border-t border-r border-zinc-200" />
              <div className="absolute top-4 right-4 text-xs font-dot text-zinc-400">DATA.NODE//01</div>
              
              <h3 className="font-['Archivo'] text-2xl font-black mb-8 uppercase flex items-center gap-3">
                <div className="w-2 h-2 bg-[#E53935]" /> 教育与荣誉
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h5 className="font-bold text-lg">西南财经大学 - 金融学院</h5>
                    <span className="text-[#E53935] font-dot text-sm bg-red-50 px-2 py-0.5 rounded-sm border border-red-100">2024 - 至今</span>
                  </div>
                  <p className="text-zinc-700 font-bold">信用管理 <span className="font-normal text-zinc-500">硕士研究生</span></p>
                </div>

                <div className="h-[1px] w-full bg-zinc-200 border-b border-dashed border-zinc-300" />

                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h5 className="font-bold text-lg">西南财经大学 - 金融学院</h5>
                    <span className="text-zinc-500 font-dot text-sm border border-zinc-200 px-2 py-0.5 rounded-sm">2020 - 2024</span>
                  </div>
                  <p className="text-zinc-600 font-medium">金融学 本科 • 学业成绩 GPA: <span className="font-bold text-black">3.9/5</span></p>
                </div>
                
                <div className="pt-4 bg-zinc-50 p-4 rounded-lg border border-zinc-200 mt-2">
                  <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                    <strong className="text-[#E53935]">荣誉奖项:</strong> 创新创业奖学金 • 国家励志奖学金 • 研究生学业奖学金 • 三好学生 • 优秀研究生
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* THE ARSENAL (Toolstack Bento Box) */}
        <section id="arsenal" className="w-full max-w-7xl px-8 md:px-16 py-32 border-t border-zinc-200">
          <div className="flex flex-col mb-16">
            <h2 className="font-['Archivo'] text-4xl md:text-5xl font-black tracking-tighter mb-4 uppercase">THE <span className="text-[#E53935]">ARSENAL.</span></h2>
            <p className="text-zinc-500 font-dot uppercase tracking-widest text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E53935] animate-pulse"></span>
              全栈技能图谱与工作流
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Idea & Prototyping */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...springProps, delay: 0.1 }}
              className="glass-card glass-card-hover p-8 relative flex flex-col group/card"
            >
               <h3 className="text-[#1A1A1A] font-black mb-8 flex items-center justify-between text-lg uppercase font-['Archivo']">
                 <div className="flex items-center gap-2"><Zap size={20} className="text-[#E53935]" /> 构思与原型</div>
                 <span className="text-xs font-dot text-zinc-400">PHASE.01</span>
               </h3>
               <div className="space-y-6 relative z-10 flex-grow">
                 <div className="flex items-center gap-4 group/item cursor-pointer">
                   <div className="w-12 h-12 flex items-center justify-center bg-zinc-50 border border-zinc-200 rounded-lg group-hover/item:border-[#E53935] transition-colors shadow-sm">
                     <img src="https://cdn.simpleicons.org/obsidian/1A1A1A" alt="Obsidian" className="w-6 h-6 group-hover/item:scale-110 transition-transform" />
                   </div>
                   <div>
                     <p className="font-bold text-zinc-900 group-hover/item:text-[#E53935] transition-colors">Obsidian</p>
                     <p className="text-xs font-medium text-zinc-500 mt-1">知识库与灵感生发</p>
                   </div>
                 </div>
                 <div className="w-full border-t border-dashed border-zinc-200"></div>
                 <div className="flex items-center gap-4 group/item cursor-pointer">
                   <div className="w-12 h-12 flex items-center justify-center bg-zinc-50 border border-zinc-200 rounded-lg group-hover/item:border-[#E53935] transition-colors shadow-sm">
                     <img src="/icons/Stitch.png" alt="Stitch" className="w-6 h-6 object-contain group-hover/item:scale-110 transition-transform grayscale contrast-200" />
                   </div>
                   <div>
                     <p className="font-bold text-zinc-900 group-hover/item:text-[#E53935] transition-colors">Stitch</p>
                     <p className="text-xs font-medium text-zinc-500 mt-1">产品原型落地</p>
                   </div>
                 </div>
               </div>
            </motion.div>

            {/* 2. MVP & Implementation */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...springProps, delay: 0.2 }}
              className="glass-card glass-card-hover p-8 relative flex flex-col"
            >
               <h3 className="text-[#1A1A1A] font-black mb-8 flex items-center justify-between text-lg uppercase font-['Archivo']">
                 <div className="flex items-center gap-2"><TerminalSquare size={20} className="text-[#E53935]" /> 落地实现</div>
                 <span className="text-xs font-dot text-zinc-400">PHASE.02</span>
               </h3>
               <div className="space-y-6 relative z-10 flex-grow">
                 <div className="flex items-center gap-4 group/item cursor-pointer">
                   <div className="w-12 h-12 flex items-center justify-center bg-zinc-50 border border-zinc-200 rounded-lg group-hover/item:border-[#E53935] transition-colors shadow-sm">
                     <img src="/icons/Opencode.png" alt="OpenCode" className="w-6 h-6 object-contain group-hover/item:scale-110 transition-transform drop-shadow-sm grayscale contrast-200" />
                   </div>
                   <div>
                     <p className="font-bold text-zinc-900 group-hover/item:text-[#E53935] transition-colors">OpenCode</p>
                     <p className="text-xs font-medium text-zinc-500 mt-1">主力终端开发环境</p>
                   </div>
                 </div>
                 <div className="w-full border-t border-dashed border-zinc-200"></div>
                 <div className="flex items-center gap-4 group/item cursor-pointer">
                   <div className="w-12 h-12 flex items-center justify-center bg-zinc-50 border border-zinc-200 rounded-lg group-hover/item:border-[#E53935] transition-colors shadow-sm">
                     <img src="/icons/Codex.png" alt="Codex" className="w-6 h-6 object-contain group-hover/item:scale-110 transition-transform grayscale contrast-200" />
                   </div>
                   <div>
                     <p className="font-bold text-zinc-900 group-hover/item:text-[#E53935] transition-colors">Codex</p>
                     <p className="text-xs font-medium text-zinc-500 mt-1">代码生成与辅助</p>
                   </div>
                 </div>
                 <div className="w-full border-t border-dashed border-zinc-200"></div>
                 <div className="flex items-center gap-4 group/item cursor-pointer">
                   <div className="w-12 h-12 flex items-center justify-center bg-zinc-50 border border-zinc-200 rounded-lg group-hover/item:border-[#E53935] transition-colors shadow-sm">
                     <img src="https://cdn.simpleicons.org/anthropic/1A1A1A" alt="Claude Code" className="w-6 h-6 group-hover/item:scale-110 transition-transform" />
                   </div>
                   <div>
                     <p className="font-bold text-zinc-900 group-hover/item:text-[#E53935] transition-colors">Claude Code</p>
                     <p className="text-xs font-medium text-zinc-500 mt-1">思路验证与迭代</p>
                   </div>
                 </div>
               </div>
            </motion.div>

            {/* 3. Deploy & Operation */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...springProps, delay: 0.3 }}
              className="glass-card glass-card-hover p-8 relative flex flex-col"
            >
               <h3 className="text-[#1A1A1A] font-black mb-8 flex items-center justify-between text-lg uppercase font-['Archivo']">
                 <div className="flex items-center gap-2"><Network size={20} className="text-[#E53935]" /> 部署与上线</div>
                 <span className="text-xs font-dot text-zinc-400">PHASE.03</span>
               </h3>
               <div className="space-y-6 relative z-10 flex-grow">
                 <div className="flex items-center gap-4 group/item cursor-pointer">
                   <div className="w-12 h-12 flex items-center justify-center bg-zinc-50 border border-zinc-200 rounded-lg group-hover/item:border-[#E53935] transition-colors shadow-sm">
                     <img src="https://cdn.simpleicons.org/github/1A1A1A" alt="GitHub" className="w-6 h-6 group-hover/item:scale-110 transition-transform" />
                   </div>
                   <div>
                     <p className="font-bold text-zinc-900 group-hover/item:text-[#E53935] transition-colors">GitHub</p>
                     <p className="text-xs font-medium text-zinc-500 mt-1">代码托管与版本控制</p>
                   </div>
                 </div>
                 <div className="w-full border-t border-dashed border-zinc-200"></div>
                 <div className="flex items-center gap-4 group/item cursor-pointer">
                   <div className="w-12 h-12 flex items-center justify-center bg-zinc-50 border border-zinc-200 rounded-lg group-hover/item:border-[#E53935] transition-colors shadow-sm">
                     <img src="https://cdn.simpleicons.org/vercel/1A1A1A" alt="Vercel" className="w-6 h-6 group-hover/item:scale-110 transition-transform" />
                   </div>
                   <div>
                     <p className="font-bold text-zinc-900 group-hover/item:text-[#E53935] transition-colors">Vercel</p>
                     <p className="text-xs font-medium text-zinc-500 mt-1">云端一键极速部署</p>
                   </div>
                 </div>
                 <div className="w-full border-t border-dashed border-zinc-200"></div>
                 <div className="flex items-center gap-4 group/item cursor-pointer">
                   <div className="w-12 h-12 flex items-center justify-center bg-zinc-50 border border-zinc-200 rounded-lg group-hover/item:border-[#E53935] transition-colors shadow-sm">
                     <img src="https://cdn.simpleicons.org/alibabacloud/1A1A1A" alt="Aliyun" className="w-6 h-6 group-hover/item:scale-110 transition-transform" />
                   </div>
                   <div>
                     <p className="font-bold text-zinc-900 group-hover/item:text-[#E53935] transition-colors">Aliyun</p>
                     <p className="text-xs font-medium text-zinc-500 mt-1">云端服务器与域名</p>
                   </div>
                 </div>
               </div>
            </motion.div>

            {/* 4. AI Workflows */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...springProps, delay: 0.4 }}
              className="glass-card glass-card-hover p-8 relative overflow-hidden lg:col-span-1 md:col-span-2 flex flex-col"
            >
               <div className="absolute top-0 right-0 w-full h-full bg-crosshair-grid opacity-30 pointer-events-none" />
               <h3 className="text-[#1A1A1A] font-black mb-8 flex items-center justify-between text-lg uppercase font-['Archivo']">
                 <div className="flex items-center gap-2"><Flame size={20} className="text-[#E53935]" /> 核心工作流</div>
                 <span className="text-xs font-dot text-zinc-400">ENGINE.CORE</span>
               </h3>
               <div className="space-y-6 relative z-10 flex-grow">
                 <div className="flex items-center gap-4 group/item cursor-pointer">
                   <div className="w-12 h-12 flex items-center justify-center bg-zinc-50 border border-zinc-200 rounded-lg group-hover/item:border-[#E53935] transition-colors shadow-sm">
                     <Zap size={20} strokeWidth={2} className="text-zinc-600 group-hover/item:text-[#E53935] group-hover/item:scale-110 transition-transform" />
                   </div>
                   <div>
                     <p className="font-bold text-zinc-900 group-hover/item:text-[#E53935] transition-colors">Superpowers</p>
                     <p className="text-xs font-dot text-zinc-500 mt-1">基于 Skills 的能力赋能流</p>
                   </div>
                 </div>
                 <div className="w-full border-t border-dashed border-zinc-200"></div>
                 <div className="flex items-center gap-4 group/item cursor-pointer">
                   <div className="w-12 h-12 flex items-center justify-center bg-zinc-50 border border-zinc-200 rounded-lg group-hover/item:border-[#E53935] transition-colors shadow-sm">
                     <Network size={20} strokeWidth={2} className="text-zinc-600 group-hover/item:text-[#E53935] group-hover/item:scale-110 transition-transform" />
                   </div>
                   <div>
                     <p className="font-bold text-zinc-900 group-hover/item:text-[#E53935] transition-colors">Everything Claude</p>
                     <p className="text-xs font-dot text-zinc-500 mt-1">基于 Subagent 的协作网络</p>
                   </div>
                 </div>
                 
                 <div className="mt-8 pt-4">
                   <div className="p-6 rounded-xl border-2 border-[#1A1A1A] bg-zinc-50 group/highlight hover:border-[#E53935] hover:shadow-[4px_4px_0px_0px_rgba(229,57,53,1)] transition-all duration-300 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-16 h-16 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#E53935_2px,#E53935_4px)] opacity-10" />
                     <div className="flex items-center justify-between mb-4 relative z-10">
                       <div className="flex items-center gap-3">
                         <div className="w-8 h-8 bg-[#1A1A1A] text-white flex items-center justify-center rounded-md group-hover/highlight:bg-[#E53935] transition-colors">
                           <Flame size={16} fill="currentColor" />
                         </div>
                         <h4 className="font-black text-[#1A1A1A] font-['Archivo'] text-xl uppercase tracking-wide group-hover/highlight:text-[#E53935] transition-colors">Get-shit-done</h4>
                       </div>
                       <span className="font-dot text-[10px] text-zinc-400 border border-zinc-200 px-2 py-1 bg-white">SYNERGY.SYS</span>
                     </div>
                     <p className="text-sm text-zinc-600 leading-relaxed relative z-10 font-medium">
                       复合型最强工作流，深度融合 <span className="text-[#1A1A1A] font-bold border-b-2 border-zinc-300 group-hover/highlight:border-[#E53935]/50 transition-colors">Skills</span> 与 <span className="text-[#1A1A1A] font-bold border-b-2 border-zinc-300 group-hover/highlight:border-[#E53935]/50 transition-colors">Subagents</span>，专为长期复杂项目的敏捷开发与维护打造。
                     </p>
                   </div>
                 </div>
               </div>
            </motion.div>

          </div>
        </section>

        {/* SELECTED WORKS (BENTO GRID) */}
        <section id="works" className="w-full max-w-7xl px-8 md:px-16 py-32">
          <div className="flex items-end justify-between mb-16">
            <h2 className="font-['Archivo'] text-4xl md:text-6xl font-black tracking-tighter uppercase">SELECTED <br/><span className="text-[#E53935]">WORKS.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[auto]">
            
            {/* Project 1 - SaaS (Expanded) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={springProps}
              className="md:col-span-12 group relative rounded-2xl overflow-hidden glass-card glass-card-hover p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-[#E53935]" />
              
              <div className="relative z-10 w-full md:w-[50%]">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-3 py-1 chamfered-badge bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-dot font-bold">2025.10 - 至今</span>
                  <span className="px-3 py-1 chamfered-badge bg-[#E53935]/10 text-[#E53935] text-xs font-bold font-dot">独立开发者</span>
                  <span className="px-3 py-1 chamfered-badge bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-dot font-bold">AI Agent Workflow</span>
                  <span className="px-3 py-1 chamfered-badge bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-dot font-bold">Vite + React + TS</span>
                </div>
                <h3 className="font-['Archivo'] text-4xl md:text-5xl font-black mb-6">论文排版 SaaS 网站</h3>
                <div className="text-zinc-600 space-y-4 leading-relaxed text-sm md:text-base pr-0 md:pr-4 font-medium">
                  <p>
                    <strong className="text-[#1A1A1A]">需求发现：</strong>洞察学术群体“排版效率低下、格式规范复杂”的痛点，定位<span className="font-bold text-[#1A1A1A] border-b-2 border-[#E53935]/30">轻量化中文学术排版工具</span>，上线 V1.0 验证 <span className="font-bold text-[#1A1A1A] bg-zinc-100 px-1 py-0.5 rounded border border-zinc-200">MVP</span>。通过社交媒体建立高价值用户反馈池，基于用户反馈确立“段距微调”等核心需求。
                  </p>
                  <p>
                    <strong className="text-[#1A1A1A]">产品设计与 AI 开发：</strong>突破单人开发瓶颈，基于 Vite+React+TS 架构构建响应式排版引擎。系统化建立 <span className="font-bold text-[#E53935] bg-[#E53935]/10 px-1 py-0.5 rounded">AI Coding Agent 工作流</span>：利用 Context Engineering 精准构建上下文，通过 <span className="font-bold text-[#1A1A1A] border-b-2 border-[#E53935]/30">Subagents 与 Skills</span> 编排拆解复杂组件开发，形成了“计划-复核-执行-验证-记录”的<span className="font-bold text-[#1A1A1A]">单人敏捷开发 SOP</span>。
                  </p>
                  <p>
                    <strong className="text-[#1A1A1A]">场景运营：</strong>主导小红书干货内容引流与转化策略，成功跑通 SaaS 产品从需求触达到商业变现的<span className="font-bold text-[#1A1A1A] border-b-2 border-[#E53935]/30">全链路闭环</span>。
                  </p>
                </div>
              </div>
              
              <div className="relative z-10 flex flex-col w-full md:w-[45%] gap-8">
                <div className="grid grid-cols-2 gap-x-4 gap-y-8 bg-zinc-50 border-2 border-zinc-200 p-6 md:p-8 rounded-xl relative shadow-inner">
                  <div className="absolute top-2 left-2 w-1 h-1 bg-zinc-300"></div>
                  <div className="absolute top-2 right-2 w-1 h-1 bg-zinc-300"></div>
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-zinc-300"></div>
                  <div className="absolute bottom-2 right-2 w-1 h-1 bg-zinc-300"></div>
                  
                  <div>
                    <div className="text-3xl md:text-4xl font-black text-[#1A1A1A] font-['Archivo']">60,000+</div>
                    <div className="text-xs text-zinc-500 font-dot mt-2">全网曝光</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-black text-[#1A1A1A] font-['Archivo']">6,000+</div>
                    <div className="text-xs text-zinc-500 font-dot mt-2">赞藏互动</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-black text-[#E53935] font-['Archivo'] drop-shadow-sm">130+</div>
                    <div className="text-xs text-zinc-500 font-dot mt-2">付费订单</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-black text-[#1A1A1A] font-['Archivo']">¥ 2,000+</div>
                    <div className="text-xs text-zinc-500 font-dot mt-2">出单金额</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 self-start md:self-end">
                  <a href="https://www.xiaohongshu.com/user/profile/60c97634000000000101d434" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black border-2 border-[#1A1A1A] hover:bg-[#E53935] hover:border-[#E53935] hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] font-bold">
                    <span className="text-sm tracking-widest uppercase">小红书主页</span>
                    <ArrowUpRight size={18} />
                  </a>
                  <a href="https://paiban.asaki.icu" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white border-2 border-[#1A1A1A] hover:bg-[#E53935] hover:border-[#E53935] hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(229,57,53,1)] font-bold">
                    <span className="text-sm tracking-widest uppercase">访问网站</span>
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 2 - Scheduling */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...springProps, delay: 0.1 }}
              className="md:col-span-7 group relative rounded-2xl overflow-hidden glass-card glass-card-hover p-8 md:p-12 flex flex-col justify-between"
            >
               <div className="absolute top-0 right-0 w-full h-full bg-crosshair-grid opacity-5 pointer-events-none" />
               <div className="absolute top-4 right-4 w-2 h-2 bg-[#E53935] animate-ping" />
               
               <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 chamfered-badge bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-dot font-bold">2024</span>
                  <span className="px-3 py-1 chamfered-badge bg-[#E53935]/10 text-[#E53935] text-xs font-bold font-dot">产品经理</span>
                </div>
                <h3 className="font-['Archivo'] text-3xl md:text-4xl font-black mb-4">AI 智能排班系统</h3>
                <div className="text-zinc-600 text-sm leading-relaxed mb-8 font-medium space-y-2">
                  <p>B 端 AI 智能排班：深度梳理 150+ 人团队的业务逻辑，将复杂的排班约束抽离为 4 项原子规则，实现了业务逻辑与代码实现的高度解耦。</p>
                  <p>熟练运用 AI Agent 工具独立完成系统架构与代码落地，支持冲突检测、可视化甘特图及多模态导出。</p>
                  <p>实现核心管理节点耗时由 3 小时降至 5 分钟内，整体排班效能提升 90% 以上。</p>
                </div>
                
                <div className="flex items-end gap-6">
                  <div>
                    <div className="text-4xl md:text-5xl font-black text-[#1A1A1A] font-['Archivo'] mb-1">90%+</div>
                    <div className="text-xs text-zinc-500 font-dot">排班效能提升</div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-black text-[#E53935] font-['Archivo'] mb-1">5m</div>
                    <div className="text-xs text-zinc-500 font-dot">排班管理耗时</div>
                  </div>
                </div>
               </div>

               <a href="https://schedule.asaki.icu" target="_blank" rel="noreferrer" className="absolute bottom-8 right-8 z-10 w-14 h-14 bg-[#1A1A1A] text-white flex items-center justify-center hover:bg-[#E53935] hover:scale-110 transition-all shadow-[4px_4px_0px_0px_rgba(26,26,26,0.2)]">
                  <ArrowUpRight size={24} />
               </a>
            </motion.div>

            {/* Project 3 - Flight Deal */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...springProps, delay: 0.2 }}
              className="md:col-span-5 group relative rounded-2xl overflow-hidden glass-card glass-card-hover p-8 md:p-10 flex flex-col items-start justify-between gap-8"
            >
              
              <div className="relative z-10 w-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 chamfered-badge bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-dot font-bold">2026</span>
                  <span className="px-3 py-1 chamfered-badge bg-[#E53935]/10 text-[#E53935] text-xs font-bold font-dot">全栈独立开发</span>
                </div>
                <h3 className="font-['Archivo'] text-2xl md:text-3xl font-black mb-4">特价机票发现平台</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-8 font-medium">
                  以移动端体验优先的低价机票发现平台。将航司复杂的退改签政策智能翻译为直观的购买决策建议，完成全栈开发与业务闭环。
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-[10px] font-bold text-[#1A1A1A] font-dot flex items-center gap-1 border border-zinc-200 px-2 py-1 bg-zinc-50"><div className="w-1 h-1 bg-[#E53935]"></div> NEXT.JS</span>
                  <span className="text-[10px] font-bold text-[#1A1A1A] font-dot flex items-center gap-1 border border-zinc-200 px-2 py-1 bg-zinc-50"><div className="w-1 h-1 bg-[#E53935]"></div> TAILWIND</span>
                  <span className="text-[10px] font-bold text-[#1A1A1A] font-dot flex items-center gap-1 border border-zinc-200 px-2 py-1 bg-zinc-50"><div className="w-1 h-1 bg-[#E53935]"></div> PAYLOAD</span>
                </div>
              </div>

              <div className="relative z-10 self-start mt-2">
                <a href="https://hangyi.asaki.icu" target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#1A1A1A] text-white flex items-center justify-center hover:bg-[#E53935] transition-all hover:scale-110 shadow-[4px_4px_0px_0px_rgba(26,26,26,0.2)]">
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </motion.div>

          </div>
        </section>

        {/* INTERNSHIP & EXPERIENCE */}
        <section id="experience" className="w-full max-w-7xl px-8 md:px-16 py-32 border-t border-zinc-200">
          <div className="flex items-end justify-between mb-16">
            <h2 className="font-['Archivo'] text-4xl md:text-6xl font-black tracking-tighter uppercase">PROFESSIONAL <br/><span className="text-[#E53935]">JOURNEY.</span></h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-[39px] top-10 bottom-10 w-[2px] bg-zinc-200 hidden md:block border-l border-dashed border-[#E53935]/50"></div>

            {/* Experience 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={springProps}
              className="glass-card glass-card-hover p-8 md:p-10 relative group md:ml-20"
            >
              <div className="absolute -left-[45px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#E53935] border-4 border-[#F5F4F0] hidden md:block z-20 shadow-[0_0_0_2px_rgba(26,26,26,1)]"></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4 relative z-10">
                <div>
                  <h3 className="text-2xl font-black font-['Archivo'] text-[#1A1A1A]">适趣悦读（西安）科技有限公司</h3>
                  <p className="text-[#E53935] mt-1 font-bold font-dot">产品经理</p>
                </div>
                <span className="px-4 py-1 chamfered-badge border border-zinc-200 text-xs font-dot font-bold bg-zinc-50 whitespace-nowrap self-start">2024.06 - 至今</span>
              </div>
              <p className="text-zinc-500 text-sm font-dot mb-4 border-b border-dashed border-zinc-300 pb-4 font-bold">增长闭环 / A-B Test / 智能排班系统 / 敏捷迭代</p>
              <ul className="text-zinc-600 space-y-4 leading-relaxed list-disc list-outside ml-4 mt-6 font-medium">
                <li><strong className="text-[#1A1A1A]">C端商业化增长策略闭环：</strong>针对口头促销造成的用户体感流失，重构转化链路并将促销策略实体化。输出高质量 PRD 与高保真原型，跨部门协调设计与研发资源推进敏捷迭代并进行 A/B Test。上线后跑通全链路，拉动前端付费转化链路互动率提升约 10%，核心渠道付费转化率提升 1.5%（常态付费率 10.5%）。</li>
                <li><strong className="text-[#1A1A1A]">B端 AI 智能排班效能工具：</strong>深度梳理 150+ 人团队的业务逻辑，将复杂的排班约束抽离为 4 项原子规则，实现了业务逻辑与代码实现的高度解耦；熟练运用 AI Agent 工具独立完成系统架构与代码落地。实现核心管理节点耗时由 3 小时降至 5 分钟内，整体排班效能提升 90% 以上。</li>
              </ul>
            </motion.div>

            {/* Experience 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...springProps, delay: 0.1 }}
              className="glass-card glass-card-hover p-8 md:p-10 relative group md:ml-20 mt-4"
            >
              <div className="absolute -left-[45px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#1A1A1A] border-4 border-[#F5F4F0] hidden md:block z-20 shadow-[0_0_0_2px_rgba(26,26,26,1)]"></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4 relative z-10">
                <div>
                  <h3 className="text-2xl font-black font-['Archivo'] text-[#1A1A1A]">金融街论坛中国数字金融独角兽榜单评选</h3>
                  <p className="text-zinc-600 mt-1 font-bold font-dot">绿色金融赛道核心成员 / 西财团队队长</p>
                </div>
                <span className="px-4 py-1 chamfered-badge border border-zinc-200 text-xs font-dot font-bold bg-zinc-50 whitespace-nowrap self-start">2025.08 - 2025.10</span>
              </div>
              <ul className="text-zinc-600 space-y-4 leading-relaxed list-disc list-outside ml-4 font-medium">
                <li>作为西财团队队长并把控进度，确保了 4 个子赛道调研结果的高质量交付。</li>
                <li>深度对接 B 端企业，负责建联、沟通及行业研究材料的获取与评审，完成赛道结果整合并交付至前沿金融监管科技研究院。</li>
              </ul>
            </motion.div>

            {/* Experience 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...springProps, delay: 0.2 }}
              className="glass-card glass-card-hover p-8 md:p-10 relative group md:ml-20 mt-4"
            >
              <div className="absolute -left-[45px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#1A1A1A] border-4 border-[#F5F4F0] hidden md:block z-20 shadow-[0_0_0_2px_rgba(26,26,26,1)]"></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4 relative z-10">
                <div>
                  <h3 className="text-2xl font-black font-['Archivo'] text-[#1A1A1A]">《数字金融》学科教材编写项目</h3>
                  <p className="text-zinc-600 mt-1 font-bold font-dot">核心成员</p>
                </div>
                <span className="px-4 py-1 chamfered-badge border border-zinc-200 text-xs font-dot font-bold bg-zinc-50 whitespace-nowrap self-start">2025.05 - 2025.08</span>
              </div>
              <ul className="text-zinc-600 space-y-4 leading-relaxed list-disc list-outside ml-4 font-medium">
                <li>负责行研报告、政策文件等的筛选、信息提取与结构化整合，完成内容撰写与多轮复核。</li>
                <li>对数字金融行业商业银行细分赛道进行深度调研，产出 20,000+ 字的结构化分析。</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* PM PHILOSOPHY */}
        <section id="philosophy" className="w-full max-w-7xl px-8 md:px-16 py-32 border-t border-zinc-200">
          <div className="flex flex-col mb-16">
            <h2 className="font-['Archivo'] text-4xl md:text-5xl font-black tracking-tighter mb-4 uppercase">PM <span className="text-[#E53935]">PHILOSOPHY.</span></h2>
            <p className="text-zinc-500 font-dot uppercase tracking-widest text-sm">产品方法论与思考</p>
          </div>

          <div className="flex flex-col gap-6">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`glass-card overflow-hidden transition-all duration-400 border ${isOpen ? 'border-[#E53935] shadow-[6px_6px_0px_0px_rgba(229,57,53,1)] -translate-y-1' : 'hover:border-zinc-400 hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,0.3)]'}`}
                >
                  <button 
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer outline-none bg-white"
                  >
                    <span className="font-bold text-lg md:text-xl pr-8 text-[#1A1A1A] font-['Space_Grotesk']">{faq.q}</span>
                    <motion.div 
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 ${isOpen ? 'border-[#E53935] bg-[#E53935] text-white' : 'border-zinc-300 bg-zinc-50 text-zinc-500'}`}
                    >
                      <ChevronDown size={20} strokeWidth={3} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-zinc-50 border-t border-dashed border-zinc-200"
                      >
                        <div className="px-6 md:px-8 py-8 text-zinc-600 leading-relaxed font-medium">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* FOOTER / CONTACT */}
        <section id="contact" className="w-full border-t border-zinc-300 relative overflow-hidden bg-white">
          <div className="absolute bottom-0 left-0 w-full h-[500px] bg-dotted-grid opacity-30 pointer-events-none mix-blend-multiply" />
          
          <div className="max-w-7xl mx-auto px-8 md:px-16 py-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-16 relative z-10">
            <div>
              <h2 className="font-['Archivo'] text-6xl md:text-8xl font-black tracking-tighter mb-6 text-[#1A1A1A] drop-shadow-[2px_2px_0_rgba(229,57,53,0.2)] uppercase">LET'S <br/> BUILD.</h2>
              <div className="flex flex-col gap-4 text-zinc-600 font-dot font-bold">
                <a href="mailto:2315808856@qq.com" className="flex items-center gap-3 hover:text-[#E53935] transition-colors w-max">
                  <Mail size={20} /> 2315808856@qq.com
                </a>
                <a href="tel:15114017934" className="flex items-center gap-3 hover:text-[#E53935] transition-colors w-max">
                  <Phone size={20} /> +86 15114017934
                </a>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto">
              <a 
                href="/王尧-简历.pdf" 
                download
                className="group flex items-center justify-between gap-8 bg-white border-2 border-[#1A1A1A] hover:bg-[#E53935] hover:border-[#E53935] hover:text-white px-6 py-4 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] w-full text-[#1A1A1A]"
              >
                <span className="font-bold tracking-wide uppercase font-['Archivo']">Download Resume</span>
                <span className="w-10 h-10 bg-[#1A1A1A] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#E53935] transition-colors">
                  <Download size={18} strokeWidth={3} />
                </span>
              </a>
              <a 
                href="/王尧-作品集.pdf" 
                download
                className="group flex items-center justify-between gap-8 bg-white border-2 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white px-6 py-4 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(229,57,53,1)] w-full text-[#1A1A1A]"
              >
                <span className="font-bold tracking-wide uppercase font-['Archivo']">Download Portfolio</span>
                <span className="w-10 h-10 bg-[#E53935] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#1A1A1A] transition-colors">
                  <Download size={18} strokeWidth={3} />
                </span>
              </a>
              <p className="text-zinc-400 text-xs font-dot font-bold mt-4 tracking-widest">&copy; {new Date().getFullYear()} WANG YAO. ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;