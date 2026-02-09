
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import { getAIResponse } from '../services/geminiService';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; text: string }[]>([
    { role: 'ai', text: 'أهلاً بك في متجر إيفرست! أنا مساعدك الذكي، كيف يمكنني مساعدتك اليوم بخصوص شحن الروبكس؟' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getAIResponse(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="gold-gradient p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center text-black"
        >
          <MessageSquare size={28} />
        </button>
      )}

      {isOpen && (
        <div className="bg-neutral-900 border border-neutral-800 w-80 md:w-96 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="gold-gradient p-4 flex justify-between items-center text-black font-bold">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <span>مساعد إيفرست الذكي</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-70">
              <X size={20} />
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="h-80 overflow-y-auto p-4 flex flex-col gap-4 bg-black/40"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-start gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`p-2 rounded-full ${msg.role === 'user' ? 'bg-amber-600' : 'bg-neutral-800'}`}>
                  {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                </div>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-amber-600 text-white rounded-tr-none' 
                    : 'bg-neutral-800 text-neutral-200 rounded-tl-none border border-neutral-700'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-2">
                <div className="p-2 rounded-full bg-neutral-800">
                  <Bot size={14} />
                </div>
                <div className="bg-neutral-800 p-3 rounded-2xl animate-pulse text-neutral-400 text-xs">
                  جاري التفكير...
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-neutral-800 bg-neutral-900 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="اكتب استفسارك هنا..."
              className="flex-1 bg-black border border-neutral-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-amber-500 transition-colors"
            />
            <button 
              onClick={handleSend}
              className="gold-gradient p-2 rounded-lg text-black hover:opacity-90 transition-opacity"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;
