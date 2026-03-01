'use client';

import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { theme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(data.error || 'Failed to send message');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className={`p-8 rounded-xl border backdrop-blur-sm ${
        theme === 'dark'
          ? 'border-[#7042f861] bg-gradient-to-r from-[#030014]/80 to-[#030014]/80'
          : 'border-purple-300/50 bg-gradient-to-r from-white/80 to-white/80'
      }`}>
        {success && (
          <div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500">
            <p className="text-green-500 font-medium">Message sent successfully! I'll get back to you soon.</p>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500">
            <p className="text-red-500 font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className={`w-full px-4 py-2 rounded-lg border transition-all ${
                  theme === 'dark'
                    ? 'bg-[#0f0f1e] border-[#7042f861] text-white placeholder-gray-500 focus:border-purple-500 focus:bg-[#1a1a2e]'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-200'
                } focus:outline-none`}
              />
            </div>
            <div>
              <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className={`w-full px-4 py-2 rounded-lg border transition-all ${
                  theme === 'dark'
                    ? 'bg-[#0f0f1e] border-[#7042f861] text-white placeholder-gray-500 focus:border-purple-500 focus:bg-[#1a1a2e]'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-200'
                } focus:outline-none`}
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className={`block text-sm font-medium mb-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Phone (Optional)
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              className={`w-full px-4 py-2 rounded-lg border transition-all ${
                theme === 'dark'
                  ? 'bg-[#0f0f1e] border-[#7042f861] text-white placeholder-gray-500 focus:border-purple-500 focus:bg-[#1a1a2e]'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-200'
              } focus:outline-none`}
            />
          </div>

          <div>
            <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              required
              className={`w-full px-4 py-2 rounded-lg border transition-all ${
                theme === 'dark'
                  ? 'bg-[#0f0f1e] border-[#7042f861] text-white placeholder-gray-500 focus:border-purple-500 focus:bg-[#1a1a2e]'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-200'
              } focus:outline-none`}
            />
          </div>

          <div>
            <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              rows={5}
              required
              className={`w-full px-4 py-2 rounded-lg border transition-all resize-none ${
                theme === 'dark'
                  ? 'bg-[#0f0f1e] border-[#7042f861] text-white placeholder-gray-500 focus:border-purple-500 focus:bg-[#1a1a2e]'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-200'
              } focus:outline-none`}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}
