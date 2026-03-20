import { motion } from 'motion/react';
import { ArrowRight, Check, ShieldCheck, Zap, Bot, Map, Repeat, Target } from 'lucide-react';
import React, { useRef, useState } from 'react';

// Magnetic Button Component
const MagneticButton = ({ children, className, href }: { children: React.ReactNode, className?: string, href?: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.25, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative overflow-hidden flex items-center justify-center gap-2.5 bg-accent-main text-white font-heading font-bold text-sm sm:text-base md:text-lg px-9 py-4 rounded-xl transition-shadow hover:shadow-[0_14px_40px_rgba(79,142,247,0.5),0_0_0_1px_rgba(79,142,247,0.3)] shadow-[0_6px_28px_rgba(79,142,247,0.35),0_0_0_1px_rgba(79,142,247,0.2)] animate-shine group ${className}`}
    >
      {children}
    </motion.a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans text-text-main selection:bg-accent-main/30">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-accent-main via-[#6B9FFF] to-accent-main animate-shimmer py-2 px-5 text-center text-xs font-semibold text-white tracking-wide relative z-50">
        ⚡ <strong className="font-extrabold">FREE BONUSES</strong> when you join through this page &nbsp;·&nbsp; 100% Money-Back Guarantee &nbsp;·&nbsp; Instant Access
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 px-4 sm:px-8 md:px-12 py-3.5 flex items-center justify-between bg-bg-main/85 backdrop-blur-xl border-b border-border-main">
        <a href="#" className="font-heading text-sm font-bold text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-main shadow-[0_0_10px_var(--color-accent-main)] animate-blink"></span>
          AI Business Mastery
        </a>
        <a href="https://aibusinessmastery.me/go/aff_D407A2" target="_blank" rel="noopener noreferrer" className="bg-accent-main text-white font-bold text-xs tracking-wider px-5 py-2 rounded-lg hover:opacity-90 hover:-translate-y-px transition-all">
          Get Access →
        </a>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-16 pb-20 px-4 sm:px-8 md:px-10 text-center max-w-3xl mx-auto overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.12)_0%,transparent_65%)] blur-[40px] pointer-events-none z-0"></div>

          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 bg-text-main/5 border border-border-accent rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-widest uppercase text-accent-2 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-main shadow-[0_0_6px_var(--color-accent-main)] animate-blink"></span>
              Watch Before You Do Anything Else
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-[1.08] tracking-tight text-white mb-4"
            >
              The Ones Who Act Now<br />
              Will Own The<br />
              <span className="text-accent-main relative inline-block">
                AI Economy.
                <motion.span 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-accent-main to-accent-2 origin-left"
                ></motion.span>
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm sm:text-base md:text-[17px] text-text-muted leading-relaxed mb-9 max-w-xl mx-auto"
            >
              While most people are still watching tutorials,<br />
              a few are launching real AI offers and earning. <strong className="text-white">This is how they did it.</strong>
            </motion.p>

            {/* Video Player */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[380px] mx-auto mb-8 sm:max-w-[340px]"
              onContextMenu={(e) => e.preventDefault()}
            >
              {/* Glow rings */}
              <div className="absolute -inset-[3px] rounded-[19px] bg-gradient-to-br from-accent-main via-accent-main/30 to-accent-2 blur-[1px] -z-10"></div>
              <div className="absolute -inset-[12px] rounded-[26px] bg-[radial-gradient(ellipse,rgba(79,142,247,0.15)_0%,transparent_70%)] blur-[16px] -z-20"></div>
              
              <div className="relative z-10 rounded-[17px] overflow-hidden bg-bg-2 aspect-[9/16] max-h-[520px] sm:max-h-[600px]">
                {/* Invisible overlay to block right-clicking on the top section (where YouTube title/share buttons appear) */}
                <div className="absolute top-0 left-0 right-0 h-20 z-20 bg-transparent" onContextMenu={(e) => e.preventDefault()}></div>
                <iframe
                  src="https://www.youtube.com/embed/eC8pPWcLk2s?rel=0&modestbranding=1&playsinline=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&playlist=eC8pPWcLk2s"
                  title="AI Business Mastery — Watch This First"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="w-full h-full border-none"
                ></iframe>
              </div>
              <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 z-30 bg-bg-main/80 backdrop-blur-md border border-border-main rounded-full px-4 py-1.5 flex items-center gap-2 text-[11px] font-semibold text-text-muted whitespace-nowrap pointer-events-none">
                <span>🔒</span> Exclusive Training Video
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <MagneticButton href="https://aibusinessmastery.me/go/aff_D407A2" className="w-full max-w-[440px] mb-3.5">
                Start Your AI Journey Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
              
              <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-text-main/65 font-semibold px-2">
                <span className="flex items-center gap-1.5"><span className="text-accent-main text-[8px]">●</span> Join thousands of students</span>
                <span className="flex items-center gap-1.5"><span className="text-accent-main text-[8px]">●</span> Instant Access</span>
                <span className="flex items-center gap-1.5"><span className="text-accent-main text-[8px]">●</span> Secure Checkout</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-5 px-4 sm:px-8 md:px-10 max-w-3xl mx-auto">
          <div className="flex flex-col gap-3">
            {[
              { text: <><strong>No Coding Required</strong> — Everything is point, click, and launch</> },
              { text: <><strong>Free AI Tools Only</strong> — Zero subscription costs to get started</> },
              { text: <><strong>Works on Smartphone</strong> — No laptop or desktop needed</> },
              { text: <><strong>72-Hour Sprint System</strong> — From zero to live offer in 3 days</> },
              { text: <><strong>Repeatable Process</strong> — Launch once, then repeat as many times as you want</> },
            ].map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3.5 bg-bg-3 border border-border-main rounded-xl p-4 transition-colors hover:border-border-accent hover:bg-bg-4"
              >
                <div className="w-8 h-8 rounded-full bg-accent-main/10 border border-border-accent flex items-center justify-center shrink-0 text-accent-main">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div className="text-sm font-medium text-text-muted flex-1">
                  {feat.text}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Proof Strip */}
        <div className="bg-bg-2 border-y border-border-main py-8 px-4 sm:px-8 overflow-hidden relative">
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-bg-2 to-transparent z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-bg-2 to-transparent z-10"></div>
          
          <div className="flex animate-scroll whitespace-nowrap w-max">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-text-main/65 px-6">AI Business Mastery</span>
                <span className="text-gold px-3 text-xs">★★★★★</span>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-text-main/65 px-6">72-Hour Launch Sprint</span>
                <span className="text-gold px-3 text-xs">★★★★★</span>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-text-main/65 px-6">Zero to First Income</span>
                <span className="text-gold px-3 text-xs">★★★★★</span>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-text-main/65 px-6">No Coding Needed</span>
                <span className="text-gold px-3 text-xs">★★★★★</span>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-text-main/65 px-6">Free Tools Only</span>
                <span className="text-gold px-3 text-xs">★★★★★</span>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-text-main/65 px-6">Works on Smartphone</span>
                <span className="text-gold px-3 text-xs">★★★★★</span>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-text-main/65 px-6">Proven System</span>
                <span className="text-gold px-3 text-xs">★★★★★</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* What You Get */}
        <section className="py-16 px-4 sm:px-8 md:px-10 max-w-3xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[11px] font-bold tracking-[0.38em] uppercase text-accent-2 mb-3.5 flex items-center justify-center gap-2.5 before:content-[''] before:flex-1 before:max-w-[40px] before:h-px before:bg-border-accent after:content-[''] after:flex-1 after:max-w-[40px] after:h-px after:bg-border-accent"
          >
            What's Inside
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-2xl sm:text-3xl md:text-[38px] font-extrabold leading-[1.1] tracking-tight text-white mb-3.5"
          >
            Everything you need.<br />
            <em className="italic text-accent-main not-italic">Nothing you don't.</em>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[15px] text-text-muted leading-[1.8] mb-11 max-w-[440px] mx-auto"
          >
            ABM gives you a complete, ordered system — not a library of videos to figure out yourself.
          </motion.p>

          <div className="flex flex-col gap-3.5 text-left">
            {[
              { icon: <Zap className="w-5 h-5" />, title: "The 72-Hour Launch Sprint", desc: "A day-by-day action plan. Day 1 you build, Day 2 you set up, Day 3 you launch. No guessing, no getting stuck." },
              { icon: <Bot className="w-5 h-5" />, title: "AI Copywriting System", desc: "Your offer, your funnel, your launch messages — all written with AI. No staring at a blank page ever." },
              { icon: <Map className="w-5 h-5" />, title: "Complete Funnel Roadmap", desc: "Know exactly where to send people and what happens next at every single step of your funnel." },
              { icon: <Repeat className="w-5 h-5" />, title: "Unlimited Repeat Launches", desc: "The system is designed to be repeatable. Finish your first offer — then build a second, third, and tenth with the same process." },
              { icon: <Target className="w-5 h-5" />, title: "Context Engineering Framework", desc: "The insider AI prompting system that makes your output 10x better than everyone else's — without extra effort." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-bg-3 border border-border-main rounded-[14px] p-5 sm:p-6 flex items-start gap-4 transition-all hover:border-border-accent hover:translate-x-1.5"
              >
                <div className="w-11 h-11 rounded-xl bg-accent-main/10 border border-border-accent flex items-center justify-center shrink-0 text-accent-main">
                  {item.icon}
                </div>
                <div>
                  <div className="font-heading text-[15px] font-bold text-white mb-1 leading-[1.3]">{item.title}</div>
                  <p className="text-[13px] text-text-muted leading-[1.7]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Guarantee */}
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 mx-4 sm:mx-auto max-w-[640px] bg-bg-3 border border-border-main rounded-2xl p-7 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left"
        >
          <div className="text-4xl shrink-0">
            <ShieldCheck className="w-10 h-10 text-gold" />
          </div>
          <div>
            <div className="font-heading text-[15px] font-bold text-gold mb-1">100% Money-Back Guarantee</div>
            <p className="text-[13px] text-text-muted leading-[1.7]">Follow the steps. If it doesn't work for you, you get every single penny back. No questions asked. Your investment is completely protected.</p>
          </div>
        </motion.div>

        {/* Closing CTA */}
        <section className="py-16 sm:py-20 px-4 sm:px-8 md:px-10 text-center max-w-3xl mx-auto relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.08)_0%,transparent_70%)] blur-[30px] pointer-events-none"></div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-[26px] sm:text-3xl md:text-[44px] font-extrabold leading-[1.1] tracking-tight text-white mb-4 relative z-10"
          >
            Ready to Future-Proof<br />
            <em className="italic text-accent-main not-italic">Your Income?</em>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[15px] text-text-muted leading-[1.8] mb-9 max-w-[420px] mx-auto relative z-10"
          >
            Every day you wait is a day someone else gets ahead. The AI window is open right now. Step through it.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            <MagneticButton href="https://aibusinessmastery.me/go/aff_D407A2" className="w-full max-w-[420px]">
              Get Instant Access
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            
            <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-text-main/65 font-semibold mt-3 px-2">
              <span className="flex items-center gap-1.5"><span className="text-accent-main text-[8px]">●</span> Secure Checkout</span>
              <span className="flex items-center gap-1.5"><span className="text-accent-main text-[8px]">●</span> Instant Access</span>
              <span className="flex items-center gap-1.5"><span className="text-accent-main text-[8px]">●</span> Money-Back Guarantee</span>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-bg-main border-t border-border-main py-7 px-4 sm:px-8 text-center">
        <div className="font-heading text-[13px] font-bold text-text-main/80 mb-2">AI Business Mastery</div>
        <div className="flex items-center justify-center gap-5 flex-wrap mb-2.5">
          <a href="#" className="text-[13px] text-text-main/55 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-[13px] text-text-main/55 hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="text-[13px] text-text-main/55 hover:text-white transition-colors">Contact</a>
        </div>
        <p className="text-xs text-text-main/45 leading-[1.7] max-w-lg mx-auto">
          © {new Date().getFullYear()} AI Business Mastery. All rights reserved.<br />
          Results may vary. Individual outcomes depend on effort and consistent application of the system.
        </p>
      </footer>
    </div>
  );
}
