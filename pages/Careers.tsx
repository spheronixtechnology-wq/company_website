
import React from 'react';
import { JOB_OPENINGS } from '../constants';
import { MapPin, Briefcase, Clock, ArrowRight, Heart, Zap, Globe, Sparkles, Cpu, Code, Star } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <div className="pb-32 bg-[#020617] neural-grid overflow-hidden relative">
      {/* Background Ambience */}
       <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
         <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-fuchsia-900/10 rounded-full blur-[120px] animate-float"></div>
         <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero */}
      <section className="pt-40 pb-32 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="reveal-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-400 text-xs font-bold uppercase tracking-widest mb-8">
                    <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse"></span>
                    We are Hiring
                  </div>
                  <h1 className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-[0.9] tracking-tight">
                    Forge the <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 italic">Unknown.</span>
                  </h1>
                  <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium max-w-lg border-l-2 border-fuchsia-500/30 pl-6">
                    We don't just write code; we architect the nervous systems of tomorrow's machines. Join a team where 'impossible' is just a constraint to be optimized.
                  </p>
                  <a href="#jobs" className="bg-white text-violet-950 px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    Explore Roles <ArrowRight size={20} />
                  </a>
               </div>
               
               <div className="relative reveal-right hidden md:block">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 blur-[60px] rounded-full animate-pulse"></div>
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                     <div className="space-y-4 translate-y-8">
                        <div className="glass p-2 rounded-2xl border-white/10 rotate-[-2deg] hover:rotate-0 transition-transform duration-500 group">
                           <div className="relative overflow-hidden rounded-xl">
                             <div className="absolute inset-0 bg-violet-600/20 group-hover:opacity-0 transition-opacity z-10"></div>
                             <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400" className="w-full grayscale group-hover:grayscale-0 transition-all duration-500" alt="Team" />
                           </div>
                        </div>
                        <div className="glass p-4 rounded-2xl border-white/10 flex flex-col items-center justify-center text-center aspect-square rotate-[2deg] hover:rotate-0 transition-transform duration-500 bg-slate-900/60">
                           <div className="text-4xl font-bold text-white mb-1">4.9/5</div>
                           <div className="text-xs text-slate-400 uppercase tracking-widest">Glassdoor</div>
                           <div className="flex text-amber-400 gap-1 mt-2">
                             {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                           </div>
                        </div>
                     </div>
                     <div className="space-y-4">
                        <div className="glass p-4 rounded-2xl border-white/10 flex flex-col items-center justify-center text-center aspect-square bg-gradient-to-br from-violet-600/20 to-transparent rotate-[3deg] hover:rotate-0 transition-transform duration-500">
                           <Code size={40} className="text-violet-400 mb-2" />
                           <div className="text-2xl font-bold text-white">Shippers</div>
                           <div className="text-xs text-slate-400 uppercase tracking-widest">Only</div>
                        </div>
                         <div className="glass p-2 rounded-2xl border-white/10 rotate-[-3deg] hover:rotate-0 transition-transform duration-500 group">
                           <div className="relative overflow-hidden rounded-xl">
                             <div className="absolute inset-0 bg-fuchsia-600/20 group-hover:opacity-0 transition-opacity z-10"></div>
                             <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400" className="w-full grayscale group-hover:grayscale-0 transition-all duration-500" alt="Team" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-40">
        <div className="text-center mb-16 reveal">
           <h2 className="text-4xl font-bold text-white mb-4">Why Engineers Choose Spheronix</h2>
           <p className="text-slate-400 text-lg">We provide the infrastructure for your best work.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { icon: <Heart size={24} />, title: "Radical Wellness", desc: "Unlimited PTO, premium healthcare, and mandatory recharge weeks. Burnout is a bug, not a feature.", color: "text-red-400", border: "hover:border-red-500/30" },
             { icon: <Cpu size={24} />, title: "Hardware Access", desc: "Every engineer gets a $5k rig budget and unrestricted access to our robotics lab and GPU cluster.", color: "text-violet-400", border: "hover:border-violet-500/30" },
             { icon: <Globe size={24} />, title: "Border-less Work", desc: "Remote-first culture with localized hubs in major tech cities. Work where you feel most alive.", color: "text-emerald-400", border: "hover:border-emerald-500/30" }
           ].map((benefit, i) => (
              <div key={i} className={`glass p-8 rounded-[2.5rem] border-white/5 ${benefit.border} transition-all duration-500 hover:-translate-y-2 group reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
                 <div className={`w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center ${benefit.color} mb-6 shadow-xl group-hover:scale-110 transition-transform`}>
                    {benefit.icon}
                 </div>
                 <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                 <p className="text-slate-400 text-sm leading-relaxed font-medium">{benefit.desc}</p>
              </div>
           ))}
        </div>
      </section>

      {/* Jobs */}
      <section id="jobs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 reveal">
            <div>
              <h2 className="text-5xl font-bold text-white mb-4">Open Missions</h2>
              <p className="text-slate-400 font-medium">Select your deployment.</p>
            </div>
            <div className="flex gap-4">
               <button className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-slate-300 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all">Filter: All</button>
            </div>
         </div>
         
         <div className="glass rounded-[2.5rem] border-white/5 overflow-hidden reveal">
            {JOB_OPENINGS.map((job, idx) => (
               <div key={job.id} className="p-8 border-b border-white/5 last:border-0 hover:bg-white/5 transition-all group flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                     <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">{job.title}</h3>
                     <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                        <span className="flex items-center gap-1.5"><MapPin size={14} /> {job.location}</span>
                        <span className="flex items-center gap-1.5"><Briefcase size={14} /> {job.department}</span>
                        <span className="flex items-center gap-1.5"><Clock size={14} /> {job.type}</span>
                     </div>
                  </div>
                  <button className="w-full md:w-auto px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-violet-600 hover:border-violet-500 transition-all flex items-center justify-center gap-2 group-hover:scale-105">
                     Apply <ArrowRight size={16} />
                  </button>
               </div>
            ))}
         </div>
      </section>
      
      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-40 relative z-10">
         <div className="reveal relative rounded-[3rem] overflow-hidden p-12 lg:p-16 text-center border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-600/20 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
               <h2 className="text-3xl font-bold text-white mb-6">Don't fit the mold?</h2>
               <p className="text-slate-400 mb-10 leading-relaxed font-medium">
                 We hire outliers. If you have a specific skillset in low-level optimization, neural architecture, or robotics that we haven't listed, pitch us.
               </p>
               <a href="mailto:careers@spheronix.com" className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 font-bold text-2xl hover:scale-105 transition-transform border-b-2 border-violet-500/30 hover:border-violet-500">
                 careers@spheronix.com
               </a>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Careers;
