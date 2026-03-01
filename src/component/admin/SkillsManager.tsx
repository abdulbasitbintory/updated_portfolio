'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { FiTrash2 } from 'react-icons/fi';

interface Skill {
  id: number;
  skill_name: string;
  category: string;
  proficiency: number;
  endorsements: number;
}

export default function SkillsManager() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    skill_name: '',
    category: '',
    proficiency: 50,
  });
  const { theme } = useTheme();

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const res = await fetch('/api/admin/skills');
      const data = await res.json();

      if (res.ok) {
        setSkills(data.data);
      } else {
        setError(data.error || 'Failed to fetch skills');
      }
    } catch (err) {
      setError('Error fetching skills');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this skill?')) return;

    try {
      const res = await fetch(`/api/admin/skills?id=${id}`, { method: 'DELETE' });

      if (res.ok) {
        setSkills(skills.filter((s) => s.id !== id));
      } else {
        setError('Failed to delete skill');
      }
    } catch (err) {
      console.error('Delete error:', err);
      setError('Error deleting skill');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implementation for create skill
  };

  if (loading) {
    return <div className="text-center py-8">Loading skills...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Skills
        </h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-medium"
        >
          {showForm ? 'Cancel' : 'Add Skill'}
        </button>
      </div>

      {error && (
        <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg">
          <p className="text-red-500 text-sm">{error}</p>
        </div>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className={`p-6 rounded-lg border ${theme === 'dark' ? 'border-gray-700 bg-gray-700' : 'border-gray-200 bg-gray-50'}`}>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Skill Name"
              value={formData.skill_name}
              onChange={(e) => setFormData({ ...formData, skill_name: e.target.value })}
              className={`w-full px-4 py-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
              required
            />
            <input
              type="text"
              placeholder="Category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className={`w-full px-4 py-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
              required
            />
            <div>
              <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Proficiency: {formData.proficiency}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={formData.proficiency}
                onChange={(e) => setFormData({ ...formData, proficiency: parseInt(e.target.value) })}
                className="w-full"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-medium"
            >
              Add Skill
            </button>
          </div>
        </form>
      )}

      <div className={`rounded-lg border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} overflow-hidden`}>
        <table className="w-full">
          <thead className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <tr>
              <th className={`px-4 py-3 text-left text-sm font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
                Skill
              </th>
              <th className={`px-4 py-3 text-left text-sm font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
                Category
              </th>
              <th className={`px-4 py-3 text-left text-sm font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
                Proficiency
              </th>
              <th className={`px-4 py-3 text-left text-sm font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
                Endorsements
              </th>
              <th className={`px-4 py-3 text-left text-sm font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => (
              <tr
                key={skill.id}
                className={`border-t ${theme === 'dark' ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'} transition-colors`}
              >
                <td className={`px-4 py-3 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                  {skill.skill_name}
                </td>
                <td className={`px-4 py-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {skill.category}
                </td>
                <td className={`px-4 py-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div className="flex items-center gap-2">
                    <div className={`flex-1 h-2 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                    <span className="w-10">{skill.proficiency}%</span>
                  </div>
                </td>
                <td className={`px-4 py-3 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {skill.endorsements}
                </td>
                <td className="px-4 py-3 text-sm">
                  <button
                    onClick={() => handleDelete(skill.id)}
                    className="p-2 text-red-500 hover:bg-red-500/20 rounded-lg transition-colors"
                  >
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
