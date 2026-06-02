import React, { useState, useEffect } from 'react';
import { 
  X, Calendar, User, Phone, Briefcase, Activity, Clock, ShieldCheck, 
  RefreshCw, Trash2, Bot, Settings, Send, CheckCircle2, AlertCircle 
} from 'lucide-react';
import { Course } from '../types';

interface RecordItem {
  studentName: string;
  parentName: string;
  phone: string;
  age: string;
  course: string;
  schedule: string;
  timestamp: string;
}

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  courses: Course[];
  registrations: RecordItem[];
  fetchRegistrations: () => void;
}

export default function AdminRegistrationsModal({
  isOpen,
  onClose,
  courses,
  registrations,
  fetchRegistrations
}: AdminModalProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  // Telegram Integration State
  const [botToken, setBotToken] = useState('');
  const [chatId, setChatId] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ text: string; type: 'success' | 'error' | null }>({ text: '', type: null });

  useEffect(() => {
    if (isOpen) {
      fetchRegistrations();
      fetchTelegramConfig();
    }
  }, [isOpen]);

  const fetchTelegramConfig = async () => {
    try {
      const resp = await fetch('/api/telegram-config');
      if (resp.ok) {
        const data = await resp.json();
        setBotToken(data.botToken || '');
        setChatId(data.chatId || '');
        setIsEnabled(!!data.isEnabled);
      }
    } catch (err) {
      console.error("Error reading telegram configuration details:", err);
    }
  };

  const handleSaveConfig = async () => {
    setIsSaving(true);
    setStatusMessage({ text: '', type: null });
    try {
      const resp = await fetch('/api/telegram-config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ botToken, chatId, isEnabled })
      });
      if (resp.ok) {
        setStatusMessage({
          text: 'Telegram bot sozlamalari muvaffaqiyatli saqlandi! / Настройки сохранены!',
          type: 'success'
        });
        setTimeout(() => setStatusMessage({ text: '', type: null }), 5000);
      } else {
        const err = await resp.json();
        setStatusMessage({
          text: err.error || 'Failed to save settings.',
          type: 'error'
        });
      }
    } catch (err) {
      setStatusMessage({ text: 'Aloqa o\'rnatishda xatolik / Ошибка соединения.', type: 'error' });
    } finally {
      setIsSaving(false);
    }
  };

  const handleTestConnection = async () => {
    if (!botToken || !chatId) {
      setStatusMessage({
        text: 'Iltimos, avval Bot Token va Chat ID guruh raqamini kiriting! / Введите Token и Chat ID!',
        type: 'error'
      });
      return;
    }
    setIsTesting(true);
    setStatusMessage({ text: '', type: null });
    try {
      const resp = await fetch('/api/telegram-config/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ botToken, chatId })
      });
      const data = await resp.json();
      if (resp.ok) {
        setStatusMessage({
          text: 'Ulanish muvaffaqiyatli! Telegramga sinov xabari yuborildi. / Тест успешен!',
          type: 'success'
        });
      } else {
        setStatusMessage({
          text: data.error || 'Test xabari yuborilmadi / Ошибка отправки теста.',
          type: 'error'
        });
      }
    } catch (err) {
      setStatusMessage({ text: 'Muvaffaqiyatsiz ulanish / Не удалось соединиться.', type: 'error' });
    } finally {
      setIsTesting(false);
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchRegistrations();
    setTimeout(() => setIsRefreshing(false), 500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
        
        {/* Header bar */}
        <div className="flex justify-between items-center.5 pb-4 border-b border-slate-200/60 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="p-2 bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-xl">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-sans font-extrabold text-md sm:text-lg text-slate-900 dark:text-white flex items-center gap-1.5 leading-snug">
                <span>Enrollment Records desk</span>
                <span className="h-4 px-2 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-500 font-bold">
                  {registrations.length} total
                </span>
              </h3>
              <p className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-widest leading-none mt-1">
                Future Robotics Academy Registry Desk
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Refresh */}
            <button
              onClick={handleRefresh}
              className="p-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 cursor-pointer"
              title="Refresh Registry"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
            
            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Informational advice */}
        <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-normal font-normal">
          This panel displays real-time student trial seat applications submitted via the online admission portal. 
          The school registrar uses this board to configure class schedules and call parents for confirmations.
        </p>

        {/* Registers Table list */}
        <div className="space-y-4">
          {registrations.map((reg, idx) => {
            const courseMatch = courses.find(c => c.id === reg.course);
            const courseTitle = courseMatch ? courseMatch.title.en : reg.course.replace('-', ' ');
            const reservedDate = reg.timestamp 
              ? new Date(reg.timestamp).toLocaleDateString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
              : 'Recently_Submitted';

            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-850 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-sans text-xs"
              >
                <div className="flex gap-3.5 items-start">
                  
                  {/* Avatar/Intials Placeholder */}
                  <div className="h-10 w-10 shrink-0 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center font-sans font-extrabold text-sm border border-orange-500/20">
                    {reg.studentName ? reg.studentName.charAt(0) : 'S'}
                  </div>

                  {/* Core detail indices */}
                  <div className="space-y-1">
                    <span className="font-extrabold text-sm text-slate-900 dark:text-white leading-tight block">
                      {reg.studentName}
                    </span>
                    
                    <div className="flex flex-wrap items-center gap-y-1 gap-x-2.5 text-[11px] text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-slate-450" />
                        Parent: <strong className="text-slate-700 dark:text-slate-350">{reg.parentName}</strong>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <Activity className="w-3.5 h-3.5" />
                        Age: <strong>{reg.age} years</strong>
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-orange-655 dark:text-orange-400 font-bold pt-1 uppercase">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{courseTitle}</span>
                    </div>

                  </div>
                </div>

                {/* Right col metadata & contact dials */}
                <div className="sm:text-right space-y-1 w-full sm:w-auto shrink-0 border-t sm:border-0 border-slate-200/60 dark:border-slate-800 pt-2.5 sm:pt-0">
                  
                  <div className="flex items-center sm:justify-end gap-1.5 font-mono text-slate-800 dark:text-slate-200 font-extrabold text-xs sm:text-sm">
                    <Phone className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <a href={`tel:${reg.phone}`} className="hover:underline">{reg.phone}</a>
                  </div>

                  <div className="flex wrap items-center sm:justify-end gap-2 text-[10px] text-slate-400 font-mono">
                    <span className="flex items-center gap-1 uppercase">
                      <Clock className="w-3 h-3" />
                      Slot: {reg.schedule}
                    </span>
                    <span>|</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {reservedDate}
                    </span>
                  </div>

                </div>

              </div>
            );
          })}

          {registrations.length === 0 && (
            <div className="py-12 text-center text-slate-400 font-sans space-y-2">
              <ShieldCheck className="w-12 h-12 text-slate-300 mx-auto" />
              <p className="text-sm font-semibold">No active student bookings found.</p>
              <p className="text-xs">Fill out the online form on the homepage to register trial seats!</p>
            </div>
          )}
        </div>

        {/* Telegram Bot Integration Card */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 font-sans space-y-4">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white">
            <span className="p-1.5 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg">
              <Bot className="w-4 h-4" />
            </span>
            <div className="grow">
              <h4 className="font-extrabold text-xs sm:text-sm">Telegram Bot Bildirishnomalari (Notifications)</h4>
              <p className="text-[10px] text-slate-400">Yangi arizalar haqida Telegram guruh yoki botingizga ogohlantirishlar yuboring</p>
            </div>
            
            {/* Master isEnabled switch toggle */}
            <label className="relative inline-flex items-center cursor-pointer select-none">
              <input 
                type="checkbox" 
                checked={isEnabled} 
                onChange={(e) => setIsEnabled(e.target.checked)}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-slate-250 dark:bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-700 dark:text-slate-350">
            <div className="space-y-1">
              <label className="flex items-center gap-1">
                <span>Bot Token</span>
                <span className="text-[9px] text-slate-400 font-mono font-normal">(from @BotFather)</span>
              </label>
              <input
                type="password"
                value={botToken}
                onChange={(e) => setBotToken(e.target.value)}
                placeholder="123456789:ABCdefGhI..."
                className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-lg text-slate-800 dark:text-white font-medium outline-none text-xs focus:border-blue-500 transition"
              />
            </div>

            <div className="space-y-1">
              <label className="flex items-center gap-1">
                <span>Chat ID</span>
                <span className="text-[9px] text-slate-400 font-mono font-normal">(User or group ID)</span>
              </label>
              <input
                type="text"
                value={chatId}
                onChange={(e) => setChatId(e.target.value)}
                placeholder="-100xxxxxxxxx yoki 12345678"
                className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-lg text-slate-800 dark:text-white font-medium outline-none text-xs focus:border-blue-500 transition"
              />
            </div>
          </div>

          <div className="text-[10px] text-slate-500 dark:text-slate-405 leading-normal font-normal bg-white dark:bg-slate-900/60 p-3 rounded-lg border border-slate-200/50 dark:border-slate-800/50">
            <span>💡 <strong>Sozlash bosqichlari / Шаги настройки:</strong></span>
            <ul className="list-disc pl-4 space-y-1 mt-1">
              <li>Telegramda <strong>@BotFather</strong> orqali bot oching.</li>
              <li>Botni guruh yoki kanalingizga admin qilib qo'shing.</li>
              <li>Bot tokeni va suhbat raqamini (Chat ID) kiritib, <strong>Test Connection</strong> orqali tekshiring va <strong>Save Settings</strong> qiling!</li>
            </ul>
          </div>

          {/* Status Message */}
          {statusMessage.text && (
            <div className={`p-3 rounded-lg flex items-center gap-2 text-xs font-medium leading-relaxed ${
              statusMessage.type === 'success' 
                ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' 
                : 'bg-red-50 dark:bg-red-500/10 text-red-500 dark:text-red-400 border border-red-500/20'
            }`}>
              {statusMessage.type === 'success' ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
              <span>{statusMessage.text}</span>
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-end gap-2 text-xs">
            <button
              type="button"
              disabled={isTesting || isSaving}
              onClick={handleTestConnection}
              className="px-3 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-lg transition inline-flex items-center gap-1 disabled:opacity-50 cursor-pointer"
            >
              <Send className={`w-3.5 h-3.5 ${isTesting ? 'animate-pulse' : ''}`} />
              <span>{isTesting ? 'Yuborilmoqda...' : 'Test Connection'}</span>
            </button>

            <button
              type="button"
              disabled={isTesting || isSaving}
              onClick={handleSaveConfig}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition inline-flex items-center gap-1 disabled:opacity-50 cursor-pointer shadow-md"
            >
              <Settings className={`w-3.5 h-3.5 ${isSaving ? 'animate-spin' : ''}`} />
              <span>{isSaving ? 'Saqlanmoqda...' : 'Save Settings'}</span>
            </button>
          </div>
        </div>

        {/* Footer actions */}
        <div className="h-[1px] bg-slate-100 dark:bg-slate-800 my-2" />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-xl cursor-pointer shadow-md"
          >
            Acknowledge Desk
          </button>
        </div>

      </div>
    </div>
  );
}
