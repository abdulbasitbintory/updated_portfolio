'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface Stats {
  contactCount: number;
  unreadCount: number;
  totalPageViews: number;
  totalVisitors: number;
  totalProjectClicks: number;
  topProjects: any[];
}

export default function AnalyticsDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { theme } = useTheme();

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const res = await fetch('/api/admin/analytics');
      const data = await res.json();

      if (res.ok) {
        setStats(data.stats);
      } else {
        setError(data.error || 'Failed to fetch analytics');
      }
    } catch (err) {
      setError('Error fetching analytics');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading analytics...</div>;
  }

  if (error) {
    return <div className={`text-center py-8 text-red-500`}>{error}</div>;
  }

  const cards = [
    {
      label: 'Total Page Views',
      value: stats?.totalPageViews || 0,
      color: 'from-blue-500 to-blue-600',
    },
    {
      label: 'Unique Visitors',
      value: stats?.totalVisitors || 0,
      color: 'from-green-500 to-green-600',
    },
    {
      label: 'Contact Submissions',
      value: stats?.contactCount || 0,
      color: 'from-purple-500 to-purple-600',
    },
    {
      label: 'Unread Messages',
      value: stats?.unreadCount || 0,
      color: 'from-red-500 to-red-600',
    },
    {
      label: 'Project Clicks',
      value: stats?.totalProjectClicks || 0,
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Analytics Overview
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className={`p-6 rounded-lg bg-gradient-to-br ${card.color} text-white shadow-lg`}
          >
            <p className="text-sm font-medium opacity-90 mb-2">{card.label}</p>
            <p className="text-3xl font-bold">{card.value.toLocaleString()}</p>
          </div>
        ))}
      </div>

      {/* Top Projects */}
      <div>
        <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Top Projects by Views
        </h3>
        <div className={`rounded-lg border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} overflow-hidden`}>
          <table className="w-full">
            <thead className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <tr>
                <th className={`px-4 py-3 text-left text-sm font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
                  Project ID
                </th>
                <th className={`px-4 py-3 text-left text-sm font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
                  Views
                </th>
                <th className={`px-4 py-3 text-left text-sm font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
                  Clicks
                </th>
              </tr>
            </thead>
            <tbody>
              {stats?.topProjects?.map((project) => (
                <tr
                  key={project.id}
                  className={`border-t ${theme === 'dark' ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'} transition-colors`}
                >
                  <td className={`px-4 py-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {project.id}
                  </td>
                  <td className={`px-4 py-3 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {project.views}
                  </td>
                  <td className={`px-4 py-3 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {project.clicks}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={fetchAnalytics}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-medium"
        >
          Refresh Analytics
        </button>
      </div>
    </div>
  );
}
