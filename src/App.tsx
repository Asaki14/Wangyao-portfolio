import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Mail, Phone, Download } from 'lucide-react';

function App() {
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

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
          <a href="#works" className="hover:text-[#00f3ff] transition-colors">核心作品</a>
          <a href="#about" className="hover:text-[#9d00ff] transition-colors">关于我</a>
          <a href="#contact" className="hover:text-[#00ff9d] transition-colors">联系方式</a>
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

        {/* SELECTED WORKS (BENTO GRID) */}
        <section id="works" className="w-full max-w-7xl px-8 md:px-16 py-32">
          <div className="flex items-end justify-between mb-16">
            <h2 className="font-['Archivo'] text-4xl md:text-6xl font-bold tracking-tighter">SELECTED <br/><span className="text-zinc-500">WORKS.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[400px]">
            
            {/* Project 1 - SaaS */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="md:col-span-8 group relative rounded-[2rem] overflow-hidden glass-card p-8 md:p-12 flex flex-col justify-between hover:border-[#9d00ff]/50 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-bl from-[#9d00ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-mono">2025</span>
                  <span className="px-3 py-1 rounded-full border border-[#9d00ff]/30 text-[#9d00ff] bg-[#9d00ff]/10 text-xs font-mono">独立开发者</span>
                </div>
                <h3 className="font-['Archivo'] text-3xl md:text-4xl font-bold mb-4">论文排版 SaaS 网站</h3>
                <p className="text-zinc-400 max-w-md leading-relaxed">
                  轻量化中文学术排版工具。基于 Vite+React+TS 架构，通过系统化 AI Coding Agent 工作流从 0 到 1 独立开发，实现自动化排版引擎。
                </p>
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                  <div>
                    <div className="text-3xl font-bold text-white">60,000+</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">全网曝光</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">130+</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">付费转化 (半月内)</div>
                  </div>
                </div>
                
                <a href="https://paiban.asaki.icu" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 hover:bg-[#9d00ff] hover:text-white transition-all">
                  <ArrowUpRight size={24} />
                </a>
              </div>
            </motion.div>

            {/* Project 2 - Scheduling */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 group relative rounded-[2rem] overflow-hidden glass-card p-8 md:p-12 flex flex-col justify-between hover:border-[#00f3ff]/50 transition-colors duration-500"
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
              className="md:col-span-12 group relative rounded-[2rem] overflow-hidden glass-card p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:border-[#00ff9d]/50 transition-colors duration-500"
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
                <div className="flex gap-4">
                  <span className="text-sm font-medium text-white flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#00ff9d]"></div> Next.js</span>
                  <span className="text-sm font-medium text-white flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#00ff9d]"></div> Tailwind</span>
                  <span className="text-sm font-medium text-white flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#00ff9d]"></div> Payload CMS</span>
                </div>
              </div>

              <div className="relative z-10">
                <a href="https://hangyi.asaki.icu" target="_blank" rel="noreferrer" className="w-16 h-16 rounded-full border border-zinc-700 flex items-center justify-center hover:scale-110 hover:border-[#00ff9d] hover:text-[#00ff9d] transition-all group-hover:rotate-45">
                  <ArrowUpRight size={32} />
                </a>
              </div>
            </motion.div>

          </div>
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