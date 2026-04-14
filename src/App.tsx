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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#09090B] text-[#FAFAFA] font-['Space_Grotesk'] overflow-hidden selection:bg-[#00f3ff] selection:text-black">
      
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#9d00ff]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#00f3ff]/10 blur-[120px]" />
        <div className="absolute top-[40%] left-[60%] w-[20%] h-[20%] rounded-full bg-[#00ff9d]/5 blur-[100px]" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-8 md:px-16 flex justify-between items-center mix-blend-difference">
        <span className="font-['Archivo'] font-bold text-xl tracking-tighter">WANG<span className="text-[#00f3ff]">YAO</span></span>
        <div className="flex gap-6 text-sm font-medium tracking-wide hidden md:flex">
          <a href="#about" className="hover:text-[#00ff9d] transition-colors">关于我</a>
          <a href="#arsenal" className="hover:text-[#f43f5e] transition-colors">工具库</a>
          <a href="#works" className="hover:text-[#00f3ff] transition-colors">核心作品</a>
          <a href="#experience" className="hover:text-[#9d00ff] transition-colors">实习与经历</a>
          <a href="#philosophy" className="hover:text-[#00f3ff] transition-colors">产品思考</a>
          <a href="#contact" className="hover:text-white transition-colors">联系方式</a>
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
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#00f3ff]"></div>
              <span className="text-[#00f3ff] tracking-[0.2em] text-sm md:text-base uppercase font-semibold">产品经理 & 独立开发者</span>
            </div>
            
            <h1 className="font-['Archivo'] text-6xl md:text-[8rem] leading-[0.9] font-black tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40">
              BUILDING <br />
              <span className="italic font-light opacity-90">VISIONARY</span> <br />
              PRODUCTS.
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed mb-12 font-light">
              驱动于 <span className="text-white font-medium">AI 生产力</span>，聚焦于 <span className="text-white font-medium">商业化增长闭环</span>，并以严谨的 <span className="text-white font-medium">数据与风控思维</span> 为基石。
            </p>

            <motion.a 
              href="#works"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold tracking-wide hover:bg-[#00f3ff] transition-all duration-300 neon-glow-blue"
            >
              探索作品 <ArrowRight size={20} />
            </motion.a>
          </motion.div>

          <motion.div style={{ opacity }} className="absolute bottom-12 left-8 md:left-16 flex flex-col gap-2">
            <span className="text-xs text-zinc-500 uppercase tracking-widest rotate-90 origin-left translate-x-3 translate-y-12">向下滑动</span>
            <div className="w-[1px] h-16 bg-zinc-800 relative overflow-hidden">
              <motion.div 
                animate={{ y: [0, 64] }} 
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#00f3ff]" 
              />
            </div>
          </motion.div>
        </section>

        {/* ABOUT & EXPERTISE */}
        <section id="about" className="w-full max-w-7xl px-8 md:px-16 py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="font-['Archivo'] text-4xl md:text-5xl font-bold tracking-tighter mb-12">THE <span className="text-zinc-500">ENGINE.</span></h2>
              
              <div className="space-y-12">
                <div className="relative pl-8 border-l border-zinc-800">
                  <div className="absolute top-0 left-0 w-3 h-3 -translate-x-[6.5px] rounded-full bg-[#9d00ff]" />
                  <h4 className="text-xl font-bold mb-2">AI 产品力</h4>
                  <p className="text-zinc-400 leading-relaxed">熟练使用 Opencode / Claude Code / Codex 等先进 AI 编程工具，具备独立构建现代化 Web 应用的全栈开发能力，掌握 Multiagents 敏捷协作的标准化开发 SOP。</p>
                </div>
                
                <div className="relative pl-8 border-l border-zinc-800">
                  <div className="absolute top-0 left-0 w-3 h-3 -translate-x-[6.5px] rounded-full bg-[#00f3ff]" />
                  <h4 className="text-xl font-bold mb-2">增长闭环与商业化体验</h4>
                  <p className="text-zinc-400 leading-relaxed">具备将 SaaS 产品从 0 到 1 成功跑通商业变现链路的实战经验。擅长利用小红书等社交媒体平台进行低成本流量获取，在半月内达成 130+ 订单付费转化的裂变实验。</p>
                </div>

                <div className="relative pl-8 border-l border-zinc-800">
                  <div className="absolute top-0 left-0 w-3 h-3 -translate-x-[6.5px] rounded-full bg-[#00ff9d]" />
                  <h4 className="text-xl font-bold mb-2">专业背景与金融思维</h4>
                  <p className="text-zinc-400 leading-relaxed">西南财经大学金融硕士在读 (GPA 3.9/5)。具备严谨的量化数据分析与风险控制思维，能运用深度的行业研究方法论驱动产品决策。</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-10 flex flex-col justify-center">
              <h3 className="font-['Archivo'] text-2xl font-bold mb-8">教育与荣誉</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h5 className="font-bold text-lg">西南财经大学 - 金融学院</h5>
                    <span className="text-zinc-500 font-mono text-sm">2024 - 至今</span>
                  </div>
                  <p className="text-[#c084fc]">信用管理 硕士研究生</p>
                </div>

                <div className="h-[1px] w-full bg-zinc-800" />

                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h5 className="font-bold text-lg">西南财经大学 - 金融学院</h5>
                    <span className="text-zinc-500 font-mono text-sm">2020 - 2024</span>
                  </div>
                  <p className="text-zinc-400">金融学 本科 • 学业成绩 GPA: 3.9/5</p>
                </div>
                
                <div className="pt-4">
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    <span className="text-zinc-300">荣誉奖项:</span> 创新创业奖学金 • 国家励志奖学金 • 研究生学业奖学金 • 三好学生 • 优秀研究生
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE ARSENAL (Toolstack Bento Box) */}
        <section id="arsenal" className="w-full max-w-7xl px-8 md:px-16 py-32 border-t border-white/5">
          <div className="flex flex-col mb-16">
            <h2 className="font-['Archivo'] text-4xl md:text-5xl font-bold tracking-tighter mb-4">THE <span className="text-zinc-500">ARSENAL.</span></h2>
            <p className="text-zinc-400 font-mono">全栈技能图谱与工作流</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Idea & Prototyping */}
            <div className="glass-card p-8 group hover:border-[#9d00ff]/40 transition-colors relative overflow-hidden flex flex-col">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#9d00ff]/10 rounded-full blur-[50px] pointer-events-none" />
               <h3 className="text-[#9d00ff] font-bold mb-8 flex items-center gap-2 text-lg"><Zap size={20} /> 构思与原型</h3>
               <div className="space-y-8 relative z-10 flex-grow">
                 <div className="flex items-center gap-4 group/item">
                   <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg group-hover/item:bg-white/10 transition-colors">
                     <img src="https://cdn.simpleicons.org/obsidian/7B61FF" alt="Obsidian" className="w-6 h-6 group-hover/item:scale-110 transition-transform" />
                   </div>
                   <div>
                     <p className="font-bold text-zinc-200">Obsidian</p>
                     <p className="text-xs text-zinc-500 mt-1">知识库与灵感生发</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4 group/item">
                   <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg group-hover/item:bg-white/10 transition-colors">
                     <img src="/icons/Stitch.png" alt="Stitch" className="w-6 h-6 object-contain group-hover/item:scale-110 transition-transform" />
                   </div>
                   <div>
                     <p className="font-bold text-zinc-200">Stitch</p>
                     <p className="text-xs text-zinc-500 mt-1">产品原型落地</p>
                   </div>
                 </div>
               </div>
            </div>

            {/* 2. MVP & Implementation */}
            <div className="glass-card p-8 group hover:border-[#00f3ff]/40 transition-colors relative overflow-hidden flex flex-col">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f3ff]/10 rounded-full blur-[50px] pointer-events-none" />
               <h3 className="text-[#00f3ff] font-bold mb-8 flex items-center gap-2 text-lg"><TerminalSquare size={20} /> 落地实现</h3>
               <div className="space-y-8 relative z-10 flex-grow">
                 <div className="flex items-center gap-4 group/item">
                   <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg group-hover/item:bg-white/10 transition-colors">
                     <img src="/icons/Opencode.png" alt="OpenCode" className="w-6 h-6 object-contain group-hover/item:scale-110 transition-transform neon-glow-blue" />
                   </div>
                   <div>
                     <p className="font-bold text-zinc-200">OpenCode</p>
                     <p className="text-xs text-zinc-500 mt-1">主力终端开发环境</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4 group/item">
                   <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg group-hover/item:bg-white/10 transition-colors">
                     <img src="/icons/Codex.png" alt="Codex" className="w-6 h-6 object-contain group-hover/item:scale-110 transition-transform" />
                   </div>
                   <div>
                     <p className="font-bold text-zinc-200">Codex</p>
                     <p className="text-xs text-zinc-500 mt-1">代码生成与辅助</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4 group/item">
                   <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg group-hover/item:bg-white/10 transition-colors">
                     <img src="https://cdn.simpleicons.org/anthropic/D1ABA1" alt="Claude Code" className="w-6 h-6 group-hover/item:scale-110 transition-transform" />
                   </div>
                   <div>
                     <p className="font-bold text-zinc-200">Claude Code</p>
                     <p className="text-xs text-zinc-500 mt-1">思路验证与迭代</p>
                   </div>
                 </div>
               </div>
            </div>

            {/* 3. Deploy & Operation */}
            <div className="glass-card p-8 group hover:border-[#00ff9d]/40 transition-colors relative overflow-hidden flex flex-col">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff9d]/10 rounded-full blur-[50px] pointer-events-none" />
               <h3 className="text-[#00ff9d] font-bold mb-8 flex items-center gap-2 text-lg"><Network size={20} /> 部署与上线</h3>
               <div className="space-y-8 relative z-10 flex-grow">
                 <div className="flex items-center gap-4 group/item">
                   <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg group-hover/item:bg-white/10 transition-colors">
                     <img src="https://cdn.simpleicons.org/github/FFFFFF" alt="GitHub" className="w-6 h-6 group-hover/item:scale-110 transition-transform" />
                   </div>
                   <div>
                     <p className="font-bold text-zinc-200">GitHub</p>
                     <p className="text-xs text-zinc-500 mt-1">代码托管与版本控制</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4 group/item">
                   <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg group-hover/item:bg-white/10 transition-colors">
                     <img src="https://cdn.simpleicons.org/vercel/FFFFFF" alt="Vercel" className="w-6 h-6 group-hover/item:scale-110 transition-transform" />
                   </div>
                   <div>
                     <p className="font-bold text-zinc-200">Vercel</p>
                     <p className="text-xs text-zinc-500 mt-1">云端一键极速部署</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4 group/item">
                   <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg group-hover/item:bg-white/10 transition-colors">
                     <img src="https://cdn.simpleicons.org/alibabacloud/FF6A00" alt="Aliyun" className="w-6 h-6 group-hover/item:scale-110 transition-transform" />
                   </div>
                   <div>
                     <p className="font-bold text-zinc-200">Aliyun</p>
                     <p className="text-xs text-zinc-500 mt-1">云端服务器与域名</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4 group/item">
                   <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg group-hover/item:bg-white/10 transition-colors">
                     <img src="https://cdn.simpleicons.org/cloudflare/F38020" alt="Cloudflare" className="w-6 h-6 group-hover/item:scale-110 transition-transform" />
                   </div>
                   <div>
                     <p className="font-bold text-zinc-200">Cloudflare</p>
                     <p className="text-xs text-zinc-500 mt-1">DNS 解析与加速防护</p>
                   </div>
                 </div>
               </div>
            </div>

            {/* 4. AI Workflows */}
            <div className="glass-card p-8 group hover:border-[#f43f5e]/40 transition-colors relative overflow-hidden lg:col-span-1 md:col-span-2 flex flex-col">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#f43f5e]/10 rounded-full blur-[50px] pointer-events-none" />
               <h3 className="text-[#f43f5e] font-bold mb-8 flex items-center gap-2 text-lg"><Flame size={20} /> 核心工作流</h3>
               <div className="space-y-6 relative z-10 flex-grow">
                 <div className="flex items-center gap-4 group/item">
                   <div className="w-10 h-10 flex items-center justify-center bg-yellow-500/10 text-yellow-400 rounded-lg">
                     <Zap size={20} strokeWidth={2} className="group-hover/item:scale-110 transition-transform" />
                   </div>
                   <div>
                     <p className="font-bold text-zinc-200">Superpowers</p>
                     <p className="text-xs text-zinc-500 mt-1">基于 Skills 的能力赋能流</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4 group/item">
                   <div className="w-10 h-10 flex items-center justify-center bg-purple-500/10 text-purple-400 rounded-lg">
                     <Network size={20} strokeWidth={2} className="group-hover/item:scale-110 transition-transform" />
                   </div>
                   <div>
                     <p className="font-bold text-zinc-200">Everything Claude</p>
                     <p className="text-xs text-zinc-500 mt-1">基于 Subagent 的协作网络</p>
                   </div>
                 </div>
                 
                 <div className="mt-6">
                   <div className="p-5 rounded-xl border border-[#f43f5e]/30 bg-[#f43f5e]/10 group/highlight hover:bg-[#f43f5e]/20 transition-all duration-300 relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/highlight:translate-x-full transition-transform duration-1000 ease-in-out" />
                     <div className="flex items-center gap-3 mb-3 relative z-10">
                       <Flame className="text-[#f43f5e] animate-pulse" size={20} />
                       <p className="font-bold text-[#f43f5e] tracking-wide">Get-shit-done</p>
                     </div>
                     <p className="text-xs text-zinc-300 leading-relaxed relative z-10">
                       复合型最强工作流，深度融合 Skills 与 Subagents，专为长期复杂项目的敏捷开发与维护打造。
                     </p>
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </section>

        {/* SELECTED WORKS (BENTO GRID) */}
        <section id="works" className="w-full max-w-7xl px-8 md:px-16 py-32">
          <div className="flex items-end justify-between mb-16">
            <h2 className="font-['Archivo'] text-4xl md:text-6xl font-bold tracking-tighter">SELECTED <br/><span className="text-zinc-500">WORKS.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[auto]">
            
            {/* Project 1 - SaaS (Expanded) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="md:col-span-12 group relative rounded-[2rem] overflow-hidden glass-card p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 hover:border-[#9d00ff]/50 transition-colors duration-500 neon-glow-purple"
            >
              <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-bl from-[#9d00ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 w-full md:w-[50%]">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-mono">2025.10 - 至今</span>
                  <span className="px-3 py-1 rounded-full border border-[#9d00ff]/30 text-[#9d00ff] bg-[#9d00ff]/10 text-xs font-mono">独立开发者</span>
                  <span className="px-3 py-1 rounded-full border border-[#00f3ff]/30 text-[#00f3ff] bg-[#00f3ff]/10 text-xs font-mono">AI Agent Workflow</span>
                  <span className="px-3 py-1 rounded-full border border-[#00ff9d]/30 text-[#00ff9d] bg-[#00ff9d]/10 text-xs font-mono">Vite + React + TS</span>
                </div>
                <h3 className="font-['Archivo'] text-4xl md:text-5xl font-bold mb-6">论文排版 SaaS 网站</h3>
                <div className="text-zinc-400 space-y-4 leading-relaxed text-sm md:text-base pr-0 md:pr-4">
                  <p>
                    <strong className="text-zinc-200">需求发现：</strong>洞察学术群体“排版效率低下、格式规范复杂”的痛点，定位轻量化中文学术排版工具，上线 V1.0 验证 MVP。通过社交媒体建立高价值用户反馈池，基于用户反馈确立“段距微调”等核心需求。
                  </p>
                  <p>
                    <strong className="text-zinc-200">产品设计与 AI 开发：</strong>突破单人开发瓶颈，基于 Vite+React+TS 架构构建响应式排版引擎。系统化建立 AI Coding Agent 工作流：利用 Context Engineering 精准构建上下文，通过 Subagents 与 Skills 编排拆解复杂组件开发，形成了“计划-复核-执行-验证-记录”的单人敏捷开发 SOP。
                  </p>
                  <p>
                    <strong className="text-zinc-200">场景运营：</strong>主导小红书干货内容引流与转化策略，成功跑通 SaaS 产品从需求触达到商业变现的全链路闭环。
                  </p>
                </div>
              </div>
              
              <div className="relative z-10 flex flex-col w-full md:w-[45%] gap-8">
                <div className="grid grid-cols-2 gap-x-4 gap-y-8 bg-black/40 p-6 md:p-8 rounded-3xl border border-white/5">
                  <div>
                    <div className="text-3xl md:text-4xl font-black text-white">60,000+</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider mt-2">全网曝光</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-black text-white">6,000+</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider mt-2">赞藏互动</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-black text-[#9d00ff]">130+</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider mt-2">付费订单</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-black text-[#00f3ff]">¥ 2,000+</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider mt-2">出单金额</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 self-start md:self-end">
                  <a href="https://www.xiaohongshu.com/user/profile/60c97634000000000101d434" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#ff2442]/10 text-[#ff2442] border border-[#ff2442]/30 hover:bg-[#ff2442] hover:text-white transition-all whitespace-nowrap">
                    <span className="font-bold text-sm tracking-widest">小红书主页</span>
                    <ArrowUpRight size={18} />
                  </a>
                  <a href="https://paiban.asaki.icu" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-[#9d00ff] hover:text-white transition-all whitespace-nowrap">
                    <span className="font-bold text-sm tracking-widest">访问网站</span>
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 2 - Scheduling */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="md:col-span-5 group relative rounded-[2rem] overflow-hidden glass-card p-8 md:p-12 flex flex-col justify-between hover:border-[#00f3ff]/50 transition-colors duration-500"
            >
               <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#00f3ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               
               <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-mono">2024</span>
                  <span className="px-3 py-1 rounded-full border border-[#00f3ff]/30 text-[#00f3ff] bg-[#00f3ff]/10 text-xs font-mono">产品经理</span>
                </div>
                <h3 className="font-['Archivo'] text-2xl font-bold mb-4">AI 智能排班系统</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  为 150+ 人团队打造内部 B 端效能工具。解耦复杂排班约束逻辑，自动执行冲突检测并支持甘特图可视化展示。
                </p>
                <div className="text-2xl font-bold text-white">90%+</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider">排班效能提升</div>
               </div>

               <a href="https://schedule.asaki.icu" target="_blank" rel="noreferrer" className="relative z-10 self-end w-12 h-12 rounded-full bg-zinc-800 text-white flex items-center justify-center hover:scale-110 hover:bg-[#00f3ff] hover:text-black transition-all">
                  <ArrowUpRight size={24} />
               </a>
            </motion.div>

            {/* Project 3 - Flight Deal */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="md:col-span-7 group relative rounded-[2rem] overflow-hidden glass-card p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:border-[#00ff9d]/50 transition-colors duration-500"
            >
              <div className="absolute left-0 bottom-0 w-[40%] h-[150%] bg-gradient-to-tr from-[#00ff9d]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rotate-12" />
              
              <div className="relative z-10 max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-mono">2026</span>
                  <span className="px-3 py-1 rounded-full border border-[#00ff9d]/30 text-[#00ff9d] bg-[#00ff9d]/10 text-xs font-mono">全栈开发独立项目</span>
                </div>
                <h3 className="font-['Archivo'] text-3xl font-bold mb-4">特价机票发现平台</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  以移动端体验优先的低价机票发现平台。将航司复杂的退改签政策智能翻译为直观的购买决策建议，完成从前端体验到 Payload CMS 后台管理的全栈开发与业务闭环。
                </p>
                <div className="flex flex-wrap gap-4 mt-auto">
                  <span className="text-sm font-medium text-white flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#00ff9d]"></div> Next.js</span>
                  <span className="text-sm font-medium text-white flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#00ff9d]"></div> Tailwind</span>
                  <span className="text-sm font-medium text-white flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#00ff9d]"></div> Payload CMS</span>
                </div>
              </div>

              <div className="relative z-10 self-end mt-4">
                <a href="https://hangyi.asaki.icu" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-zinc-800 text-white flex items-center justify-center hover:scale-110 hover:bg-[#00ff9d] hover:text-black transition-all group-hover:rotate-45">
                  <ArrowUpRight size={24} />
                </a>
              </div>
            </motion.div>

          </div>
        </section>

        {/* INTERNSHIP & EXPERIENCE */}
        <section id="experience" className="w-full max-w-7xl px-8 md:px-16 py-32 border-t border-white/5">
          <div className="flex items-end justify-between mb-16">
            <h2 className="font-['Archivo'] text-4xl md:text-6xl font-bold tracking-tighter">PROFESSIONAL <br/><span className="text-zinc-500">JOURNEY.</span></h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6 relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-10 top-10 bottom-10 w-[1px] bg-gradient-to-b from-[#00f3ff]/50 via-[#9d00ff]/50 to-[#00ff9d]/20 hidden md:block"></div>

            {/* Experience 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card p-8 md:p-10 relative overflow-hidden group hover:border-[#00f3ff]/40 transition-colors md:ml-20"
            >
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#09090B] border-4 border-[#00f3ff] hidden md:block group-hover:scale-125 transition-transform z-20"></div>
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#00f3ff] to-transparent opacity-50"></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold font-['Archivo']">适趣悦读（西安）科技有限公司</h3>
                  <p className="text-[#00f3ff] mt-1 tracking-wide font-medium">产品经理</p>
                </div>
                <span className="px-4 py-2 rounded-full border border-white/10 text-sm font-mono bg-white/5 whitespace-nowrap self-start">2024.06 - 至今</span>
              </div>
              <p className="text-zinc-300 text-sm font-mono mb-4 border-b border-white/5 pb-4">增长闭环 / A-B Test / 智能排班系统 / 敏捷迭代</p>
              <ul className="text-zinc-400 space-y-4 leading-relaxed list-disc list-outside ml-4 mt-6">
                <li><strong className="text-zinc-200">C端商业化增长策略闭环：</strong>针对口头促销造成的用户体感流失，重构转化链路并将促销策略实体化。输出高质量 PRD 与高保真原型，跨部门协调设计与研发资源推进敏捷迭代并进行 A/B Test。上线后跑通全链路，拉动前端付费转化链路互动率提升约 10%，核心渠道付费转化率提升 1.5%（常态付费率 10.5%）。</li>
                <li><strong className="text-zinc-200">B端 AI 智能排班效能工具：</strong>深度梳理 150+ 人团队的业务逻辑，将复杂的排班约束抽离为 4 项原子规则，实现了业务逻辑与代码实现的高度解耦；熟练运用 AI Agent 工具独立完成系统架构与代码落地。实现核心管理节点耗时由 3 小时降至 5 分钟内，整体排班效能提升 90% 以上。</li>
              </ul>
            </motion.div>

            {/* Experience 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card p-8 md:p-10 relative overflow-hidden group hover:border-[#9d00ff]/40 transition-colors md:ml-20 mt-6"
            >
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#09090B] border-4 border-[#9d00ff] hidden md:block group-hover:scale-125 transition-transform z-20"></div>
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#9d00ff] to-transparent opacity-50"></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold font-['Archivo']">金融街论坛中国数字金融独角兽榜单评选</h3>
                  <p className="text-[#9d00ff] mt-1 tracking-wide font-medium">绿色金融赛道核心成员 / 西财团队队长</p>
                </div>
                <span className="px-4 py-2 rounded-full border border-white/10 text-sm font-mono bg-white/5 whitespace-nowrap self-start">2025.08 - 2025.10</span>
              </div>
              <ul className="text-zinc-400 space-y-4 leading-relaxed list-disc list-outside ml-4">
                <li>作为西财团队队长并把控进度，确保了 4 个子赛道调研结果的高质量交付。</li>
                <li>深度对接 B 端企业，负责建联、沟通及行业研究材料的获取与评审，完成赛道结果整合并交付至前沿金融监管科技研究院。</li>
              </ul>
            </motion.div>

            {/* Experience 3 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card p-8 md:p-10 relative overflow-hidden group hover:border-[#00ff9d]/40 transition-colors md:ml-20 mt-6"
            >
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#09090B] border-4 border-[#00ff9d] hidden md:block group-hover:scale-125 transition-transform z-20"></div>
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#00ff9d] to-transparent opacity-50"></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold font-['Archivo']">《数字金融》学科教材编写项目</h3>
                  <p className="text-[#00ff9d] mt-1 tracking-wide font-medium">核心成员</p>
                </div>
                <span className="px-4 py-2 rounded-full border border-white/10 text-sm font-mono bg-white/5 whitespace-nowrap self-start">2025.05 - 2025.08</span>
              </div>
              <ul className="text-zinc-400 space-y-4 leading-relaxed list-disc list-outside ml-4">
                <li>负责行研报告、政策文件等的筛选、信息提取与结构化整合，完成内容撰写与多轮复核。</li>
                <li>对数字金融行业商业银行细分赛道进行深度调研，产出 20,000+ 字的结构化分析。</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* PM PHILOSOPHY */}
        <section id="philosophy" className="w-full max-w-7xl px-8 md:px-16 py-32 border-t border-white/5">
          <div className="flex flex-col mb-16">
            <h2 className="font-['Archivo'] text-4xl md:text-5xl font-bold tracking-tighter mb-4">PM <span className="text-zinc-500">PHILOSOPHY.</span></h2>
            <p className="text-zinc-400 font-mono">产品方法论与思考</p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 border ${isOpen ? 'border-[#00f3ff]/40 bg-white/[0.03]' : 'border-white/5 hover:border-white/10'}`}
                >
                  <button 
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer outline-none"
                  >
                    <span className="font-bold text-lg md:text-xl pr-8">{faq.q}</span>
                    <motion.div 
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full ${isOpen ? 'bg-[#00f3ff]/20 text-[#00f3ff]' : 'bg-white/5 text-zinc-400'}`}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 md:px-8 pb-8 pt-0 text-zinc-400 leading-relaxed">
                          <div className="w-full h-[1px] bg-white/5 mb-6" />
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
        <section id="contact" className="w-full border-t border-zinc-800 relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-[#00f3ff]/10 to-transparent pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-8 md:px-16 py-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-16 relative z-10">
            <div>
              <h2 className="font-['Archivo'] text-5xl md:text-8xl font-black tracking-tighter mb-6">LET'S <br/> BUILD.</h2>
              <div className="flex flex-col gap-4 text-zinc-400 font-mono">
                <a href="mailto:2315808856@qq.com" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail size={20} /> 2315808856@qq.com
                </a>
                <a href="tel:15114017934" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone size={20} /> +86 15114017934
                </a>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-4">
              <a 
                href="/王尧-简历.pdf" 
                download
                className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:border-[#00f3ff]/50 px-6 py-4 rounded-full transition-all duration-300 backdrop-blur-md w-full md:w-auto justify-between"
              >
                <span className="font-bold tracking-wide">下载简历 (PDF)</span>
                <span className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-[#00f3ff] transition-colors">
                  <Download size={18} />
                </span>
              </a>
              <a 
                href="/王尧-作品集.pdf" 
                download
                className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:border-[#9d00ff]/50 px-6 py-4 rounded-full transition-all duration-300 backdrop-blur-md w-full md:w-auto justify-between"
              >
                <span className="font-bold tracking-wide">下载作品集 (PDF)</span>
                <span className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-[#9d00ff] transition-colors">
                  <Download size={18} />
                </span>
              </a>
              <p className="text-zinc-600 text-sm font-mono mt-4">&copy; {new Date().getFullYear()} WANG YAO. 保留所有权利.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;