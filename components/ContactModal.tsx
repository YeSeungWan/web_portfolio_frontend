'use client';

import { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({ sender_name: '', sender_email: '', message: '' });
  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; msg: string }>({
    type: 'idle',
    msg: '',
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.sender_name || !formData.sender_email || !formData.message) {
      setStatus({ type: 'error', msg: '모든 필드를 입력해 주세요.' });
      return;
    }

    setStatus({ type: 'loading', msg: '보내는 중...' });

    try {
      const response = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({ type: 'success', msg: '✉️ 전송 성공! 확인 후 연락드릴게요.' });
        setFormData({ sender_name: '', sender_email: '', message: '' });
        setTimeout(() => {
          setStatus({ type: 'idle', msg: '' });
          onClose();
        }, 2000);
      } else {
        setStatus({ type: 'error', msg: result.error || '전송 실패' });
      }
    } catch (error) {
      setStatus({ type: 'error', msg: '백엔드 연결 실패' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[360px] sm:w-[400px] border border-zinc-800 bg-zinc-950/95 shadow-2xl rounded-lg font-mono text-zinc-300 overflow-hidden">
      <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex justify-between items-center select-none">
        <span className="text-xs font-bold text-green-400">// New Message (Contact)</span>
        <button onClick={onClose} className="text-zinc-500 hover:text-white text-sm transition-colors p-1">✕</button>
      </div>

      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        <div>
          <label className="block text-[10px] text-zinc-500 mb-1">From (이름)</label>
          <input
            type="text"
            name="sender_name"
            value={formData.sender_name}
            onChange={handleChange}
            disabled={status.type === 'loading'}
            className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-green-400 disabled:opacity-50"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block text-[10px] text-zinc-500 mb-1">Reply-To (이메일)</label>
          <input
            type="email"
            name="sender_email"
            value={formData.sender_email}
            onChange={handleChange}
            disabled={status.type === 'loading'}
            className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-green-400 disabled:opacity-50"
            placeholder="your-email@example.com"
          />
        </div>

        <div>
          <label className="block text-[10px] text-zinc-500 mb-1">Message (내용)</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            disabled={status.type === 'loading'}
            rows={4}
            className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-xs text-white resize-none focus:outline-none focus:border-green-400 disabled:opacity-50"
            placeholder="내용을 적어주세요..."
          />
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-zinc-900">
          <span className={`text-[11px] ${status.type === 'error' ? 'text-red-400' : 'text-green-400'}`}>{status.msg}</span>
          <button
            type="submit"
            disabled={status.type === 'loading' || status.type === 'success'}
            className="bg-green-400 hover:bg-green-300 disabled:bg-zinc-800 text-zinc-950 font-bold text-xs px-4 py-2 rounded transition-colors disabled:text-zinc-600 select-none cursor-pointer"
          >
            {status.type === 'loading' ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
}