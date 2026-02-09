
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { getChatResponse } from '../services/gemini';
import { STORE_NAME } from '../constants';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const aiResponse = await getChatResponse(userMsg, history);
    setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 gold-bg rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 float"
        >
          <MessageSquare className="w-8 h-8 text-black" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[95vw] md:w-[450px] h-[650px] glass rounded-3xl shadow-2xl z-50 flex flex-col border border-white/10 overflow-hidden">
          {/* Header */}
          <div className="p-6 gold-bg flex justify-between items-center text-black">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">مساعد إيفرست الذكي</h3>
                <p className="text-xs opacity-70">بواسطة {STORE_NAME}</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 p-2 rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {messages.length === 0 && (
              <div className="text-center text-gray-400 mt-10">
                <Bot className="w-12 h-12 mx-auto mb-4 opacity-20" />
                <p>مرحباً بك في {STORE_NAME}! <br /> كيف يمكنني مساعدتك اليوم؟</p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl flex gap-3 ${
                  msg.role === 'user' 
                    ? 'bg-[#D4AF37] text-black rounded-bl-none' 
                    : 'bg-white/5 text-white border border-white/10 rounded-br-none'
                }`}>
                  <div className="shrink-0 pt-1">
                    {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4 gold-text" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] leading-relaxed break-words whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-black/40">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="اكتب رسالتك..."
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 pr-12 focus:outline-none focus:border-[#D4AF37] transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 gold-text hover:bg-white/5 rounded-lg transition-colors"
              >
                <Send className="w-5 h-5 rotate-180" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;
