import re

with open('src/App.tsx', 'r') as f:
    text = f.read()

# 1. Split into preamble and sections
# Find start of Hero Section
hero_idx = text.find('        {/* HERO SECTION */}')

preamble = text[:hero_idx]
main_content = text[hero_idx:]

# Split main_content by section comments
markers = [
    ('hero', '        {/* HERO SECTION */}'),
    ('works', '        {/* SELECTED WORKS (BENTO GRID) */}'),
    ('experience', '        {/* INTERNSHIP & EXPERIENCE */}'),
    ('about', '        {/* ABOUT & EXPERTISE */}'),
    ('philosophy', '        {/* PM PHILOSOPHY */}'),
    ('arsenal', '        {/* THE ARSENAL (Toolstack Bento Box) */}'),
    ('contact', '        {/* FOOTER / CONTACT */}')
]

sections = {}
for i, (key, marker) in enumerate(markers):
    start_idx = main_content.find(marker)
    if i < len(markers) - 1:
        end_idx = main_content.find(markers[i+1][1])
        sections[key] = main_content[start_idx:end_idx]
    else:
        # contact goes to </main>
        end_idx = main_content.find('      </main>')
        sections[key] = main_content[start_idx:end_idx]

postamble = main_content[main_content.find('      </main>'):]

# 2. Update the arsenal icons
arsenal = sections['arsenal']

# Replace Stitch
stitch_old = r'''<Layers size={22} strokeWidth={1.5} className="group-hover/item:scale-110 transition-transform" />'''
stitch_new = r'''<img src="/icons/Stitch.png" alt="Stitch" className="w-6 h-6 object-contain group-hover/item:scale-110 transition-transform" />'''
arsenal = arsenal.replace(stitch_old, stitch_new)
# Clean up Stitch icon wrapper if it had text-white/80 group-hover/item:text-[#9d00ff]
arsenal = arsenal.replace('bg-white/5 rounded-lg group-hover/item:bg-white/10 transition-colors text-white/80 group-hover/item:text-[#9d00ff]', 'bg-white/5 rounded-lg group-hover/item:bg-white/10 transition-colors')

# Replace OpenCode
opencode_old = r'''<div className="w-10 h-10 flex items-center justify-center bg-[#00f3ff]/10 text-[#00f3ff] rounded-lg neon-glow-blue">
                     <TerminalSquare size={22} strokeWidth={1.5} className="group-hover/item:scale-110 transition-transform" />
                   </div>'''
opencode_new = r'''<div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg group-hover/item:bg-white/10 transition-colors">
                     <img src="/icons/Opencode.png" alt="OpenCode" className="w-6 h-6 object-contain group-hover/item:scale-110 transition-transform neon-glow-blue" />
                   </div>'''
arsenal = arsenal.replace(opencode_old, opencode_new)

# Replace Codex
codex_old = r'''<img src="https://cdn.simpleicons.org/openai/FFFFFF" alt="Codex" className="w-6 h-6 group-hover/item:scale-110 transition-transform" />'''
codex_new = r'''<img src="/icons/Codex.png" alt="Codex" className="w-6 h-6 object-contain group-hover/item:scale-110 transition-transform" />'''
arsenal = arsenal.replace(codex_old, codex_new)

# Split Aliyun & Cloudflare
aliyun_cf_old = r'''<div className="flex items-center gap-4 group/item">
                   <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg group-hover/item:bg-white/10 transition-colors">
                     <div className="flex -space-x-2">
                       <img src="https://cdn.simpleicons.org/alibabacloud/FF6A00" alt="Aliyun" className="w-5 h-5 rounded-full border border-zinc-900 group-hover/item:scale-110 transition-transform z-10" />
                       <img src="https://cdn.simpleicons.org/cloudflare/F38020" alt="Cloudflare" className="w-5 h-5 rounded-full border border-zinc-900 group-hover/item:scale-110 transition-transform" />
                     </div>
                   </div>
                   <div>
                     <p className="font-bold text-zinc-200">Aliyun & CF</p>
                     <p className="text-xs text-zinc-500 mt-1">域名解析与网络加速</p>
                   </div>
                 </div>'''

aliyun_cf_new = r'''<div className="flex items-center gap-4 group/item">
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
                 </div>'''
arsenal = arsenal.replace(aliyun_cf_old, aliyun_cf_new)

sections['arsenal'] = arsenal

# 3. Reorder the sections
# Target order:
# 1. Hero
# 2. About (The engine / 教育与荣誉)
# 3. Arsenal (工具卡片)
# 4. Works (作品卡片)
# 5. Experience (实习经历)
# 6. Philosophy (产品经理问答)
# 7. Contact (联系方式)

new_order = ['hero', 'about', 'arsenal', 'works', 'experience', 'philosophy', 'contact']

new_content = preamble + ''.join([sections[k] for k in new_order]) + postamble

with open('src/App.tsx', 'w') as f:
    f.write(new_content)

print("Reorder and update complete.")
