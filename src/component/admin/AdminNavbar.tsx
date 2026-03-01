'use client';

import { useTheme } from '@/context/ThemeContext';
import ThemeToggle from '@/component/ThemeToggle';
import { IoLogOut } from 'react-icons/io5';

type Tab = 'analytics' | 'projects' | 'skills' | 'contacts';

interface AdminNavbarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  onLogout: () => void;
}

export default function AdminNavbar({ activeTab, setActiveTab, onLogout }: AdminNavbarProps) {
  const { theme } = useTheme();

  const tabs: { id: Tab; label: string }[] = [
    { id: 'analytics', label: 'Analytics' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contacts', label: 'Contacts' },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-40 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Admin Panel
            </h1>
            <div className="hidden md:flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                    activeTab === tab.id
                      ? 'bg-purple-500 text-white'
                      : theme === 'dark'
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={onLogout}
              className="p-2 rounded-lg hover:bg-red-500/20 text-red-500 transition-colors"
              title="Logout"
            >
              <IoLogOut className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile tabs */}
        <div className="md:hidden flex gap-2 pb-4 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 rounded-lg whitespace-nowrap transition-colors text-sm font-medium ${
                activeTab === tab.id
                  ? 'bg-purple-500 text-white'
                  : theme === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
