
import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { Crown, Code, Palette, User, Globe, CheckCircle, ShieldCheck } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 blur-[160px] rounded-full -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4">قيادة <span className="gold-text">إيفرست</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">نحن هنا لنضمن لك تجربة شراء لا تُنسى، بقيادة العقول المبدعة خلف Everest Company.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {TEAM_MEMBERS.map((member, index) => (
            <div 
              key={index} 
              className={`relative glass p-10 rounded-[3rem] border transition-all duration-700 group w-full md:w-[380px] ${
                member.isLeader 
                ? 'border-[#D4AF37] shadow-[0_0_80px_rgba(212,175,55,0.25)] scale-110 z-20 bg-black/40' 
                : 'border-white/10 hover:border-white/30 bg-white/[0.02]'
              }`}
            >
              {/* Leader Special Badge */}
              {member.isLeader && (
                <div className="absolute -top-5 right-10 bg-[#D4AF37] text-black px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest flex items-center gap-2 shadow-xl">
                  <ShieldCheck className="w-3 h-3" />
                  VERIFIED LEADER
                </div>
              )}

              <div className="flex flex-col items-center text-center relative z-10">
                {/* Icon Container */}
                <div className={`w-28 h-28 rounded-3xl mb-8 flex items-center justify-center transition-all duration-500 group-hover:rotate-6 border-2 ${
                  member.isLeader ? 'border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.3)] bg-black' : 'border-white/10 bg-white/5'
                }`}>
                  {member.role.toLowerCase().includes('programmer') ? <Code className="w-14 h-14 gold-text" /> : 
                   member.isLeader ? <Palette className="w-14 h-14 gold-text" /> : <User className="w-14 h-14 gold-text" />}
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <h3 className={`text-3xl font-black ${member.isLeader ? 'gold-text' : 'text-white'}`}>{member.name}</h3>
                  {member.isLeader && <Crown className="w-6 h-6 text-[#D4AF37] animate-pulse" />}
                </div>
                
                {member.alias && (
                  <span className="text-lg font-bold text-gray-400 mb-6 block tracking-wider">@{member.alias}</span>
                )}
                
                <div className={`text-base mb-8 font-bold px-6 py-2 rounded-2xl inline-block ${
                  member.isLeader ? 'bg-[#D4AF37] text-black shadow-lg' : 'bg-white/5 text-gray-300'
                }`}>
                  {member.role}
                </div>

                <div className="w-full space-y-3">
                  <div className="flex items-center justify-center gap-3 text-sm text-gray-400 bg-black/60 py-3.5 rounded-2xl border border-white/5">
                    <Globe className="w-4 h-4 gold-text" />
                    <span className="font-bold tracking-wide">{member.country}</span>
                  </div>
                  
                  {member.discord && (
                    <div className="flex items-center justify-center gap-3 text-sm text-white bg-[#5865F2]/10 border border-[#5865F2]/20 py-3.5 rounded-2xl hover:bg-[#5865F2]/20 transition-all cursor-default">
                      <img src="https://cdn.simpleicons.org/discord/white" className="w-5 h-5" alt="Discord" />
                      <span className="font-mono font-bold tracking-tighter">Discord: {member.discord}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Unique glow for Abdalla Emad */}
              {member.isLeader && (
                <div className="absolute inset-0 rounded-[3rem] border-2 border-[#D4AF37]/20 pointer-events-none animate-pulse"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
