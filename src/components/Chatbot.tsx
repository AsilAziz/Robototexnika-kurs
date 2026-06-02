import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, Languages, HelpCircle } from 'lucide-react';
import { LanguageKey, TranslationDict, ChatMessage } from '../types';

interface ChatbotProps {
  currentLanguage: LanguageKey;
  dict: TranslationDict;
}

export default function Chatbot({ currentLanguage, dict }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Load welcome greeting corresponding to currentLanguage
  useEffect(() => {
    setMessages([
      {
        id: 'greet',
        sender: 'bot',
        text: dict.chat.welcome,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  }, [currentLanguage, dict]);

  // Scroll to bottom daily when messages update
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, isOpen]);

  // Send message
  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: textToSend,
          lang: currentLanguage,
          history: messages
        })
      });

      if (response.ok) {
        const data = await response.json();
        const botReply: ChatMessage = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: data.text || 'Apologies, I did not catch that. Could you rephrase?',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botReply]);
      } else {
        throw new Error('Chat service unavailable');
      }
    } catch (err) {
      console.error(err);
      const errReply: ChatMessage = {
        id: `err-${Date.now()}`,
        sender: 'bot',
        text: currentLanguage === 'uz' ? 'Aloqa xatosi. Iltimos keyinroq urinib koʻring.' : currentLanguage === 'ru' ? 'Ошибка связи. Пожалуйста, попробуйте позже.' : 'Connection error. Please try again in secondary seconds.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errReply]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSuggestClick = (prompt: string) => {
    handleSendMessage(prompt);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* Floating Trigger Orb */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative h-14 w-14 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-350 cursor-pointer flex items-center justify-center group"
          title="Ask RoboBuddy"
        >
          {/* Ring wave pulsating aura */}
          <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-25 pointer-events-none" />
          <Bot className="w-6 h-6 animate-pulse group-hover:rotate-12 transition-transform" />
          
          {/* Little green notification light */}
          <span className="absolute top-0 right-0 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-white" />
        </button>
      )}

      {/* Expanded Messenger window dimensions */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[520px] rounded-3xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200/80 dark:border-slate-800 border-b-4 border-b-orange-500 flex flex-col justify-between overflow-hidden animate-in zoom-in-95 duration-200">
          
          {/* Messenger Header */}
          <div className="p-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-full bg-orange-500 flex items-center justify-center text-white relative">
                <Bot className="w-5 h-5" />
                <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-500 border border-slate-900" />
              </div>
              <div>
                <span className="block text-sm font-extrabold leading-tight">RoboBuddy</span>
                <span className="block text-[9px] text-emerald-400 font-bold uppercase tracking-widest leading-none">Online Advisor</span>
              </div>
            </div>

            {/* Close trigger button */}
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-slate-350 hover:text-white transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Conversation Core panel */}
          <div
            ref={scrollRef}
            className="flex-1 p-4 overflow-y-auto bg-slate-50 dark:bg-slate-950/40 space-y-4 text-xs"
          >
            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';
              return (
                <div
                  key={msg.id}
                  className={`flex items-end gap-2 max-w-[85%] ${isBot ? 'mr-auto' : 'ml-auto flex-row-reverse'}`}
                >
                  {isBot && (
                    <div className="h-6 w-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-[10px] shrink-0">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div className="space-y-1">
                    <div className={`p-3 rounded-2xl leading-relaxed text-sm ${
                      isBot
                        ? 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-800 shadow-xs rounded-bl-none'
                        : 'bg-orange-500 text-white rounded-br-none font-medium'
                    }`}>
                      {msg.text}
                    </div>
                    <span className={`block font-mono text-[8px] text-slate-400 ${isBot ? 'text-left' : 'text-right'}`}>
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Loading typing state indicators */}
            {isTyping && (
              <div className="flex items-end gap-2 max-w-[80%] mr-auto">
                <div className="h-6 w-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-[10px] shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl rounded-bl-none border border-slate-150 dark:border-slate-850 flex gap-1 items-center">
                  <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
          </div>

          {/* Prompt Suggestions footer */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200/40 dark:border-slate-850 space-y-1.5">
              <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                <HelpCircle className="w-3 h-3 text-orange-500" />
                <span>Suggested parent inquiries</span>
              </span>
              <div className="flex flex-col gap-1 text-left">
                <button
                  onClick={() => handleSuggestClick(dict.chat.suggestPrompt1)}
                  className="w-full text-left text-[11px] font-semibold text-slate-650 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 transition truncate"
                >
                  🤖 {dict.chat.suggestPrompt1}
                </button>
                <button
                  onClick={() => handleSuggestClick(dict.chat.suggestPrompt2)}
                  className="w-full text-left text-[11px] font-semibold text-slate-650 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 transition truncate"
                >
                  ⚡ {dict.chat.suggestPrompt2}
                </button>
                <button
                  onClick={() => handleSuggestClick(dict.chat.suggestPrompt3)}
                  className="w-full text-left text-[11px] font-semibold text-slate-650 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 transition truncate"
                >
                  🛠️ {dict.chat.suggestPrompt3}
                </button>
              </div>
            </div>
          )}

          {/* Form Input fields */}
          <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputText)}
              placeholder={dict.chat.placeholder}
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:bg-white text-slate-800 dark:text-white placeholder-slate-400 text-xs sm:text-sm outline-none focus:border-orange-500 transition"
              disabled={isTyping}
            />
            <button
              onClick={() => handleSendMessage(inputText)}
              disabled={isTyping || !inputText.trim()}
              className="p-2.5 bg-orange-500 hover:bg-orange-600 disabled:bg-slate-200 disabled:text-slate-400 text-white rounded-xl flex items-center justify-center cursor-pointer transition active:scale-95 shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
