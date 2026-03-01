'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import AdminNavbar from '@/component/admin/AdminNavbar';
import AnalyticsDashboard from '@/component/admin/AnalyticsDashboard';
import ProjectsManager from '@/component/admin/ProjectsManager';
import SkillsManager from '@/component/admin/SkillsManager';
import ContactsManager from '@/component/admin/ContactsManager';

type Tab = 'analytics' | 'projects' | 'skills' | 'contacts';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('analytics');
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { theme } = useTheme();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/admin/auth', { method: 'GET' });
      if (res.ok) {
        setAuthenticated(true);
      } else {
        router.push('/admin/login');
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      router.push('/admin/login');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="text-lg font-semibold">Loading...</div>
      </div>
    );
  }

  if (!authenticated) {
    return null;
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <AdminNavbar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={handleLogout} />
      
      <div className="pt-20 px-4 md:px-8 pb-8">
        <div className={`max-w-7xl mx-auto rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg p-6`}>
          {activeTab === 'analytics' && <AnalyticsDashboard />}
          {activeTab === 'projects' && <ProjectsManager />}
          {activeTab === 'skills' && <SkillsManager />}
          {activeTab === 'contacts' && <ContactsManager />}
        </div>
      </div>
    </div>
  );
}
