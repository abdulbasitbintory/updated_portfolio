'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  short_description: string;
  technologies: string[];
  views: number;
  clicks: number;
}

export default function ProjectsManager() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    short_description: '',
    technologies: '',
  });
  const { theme } = useTheme();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/admin/projects');
      const data = await res.json();

      if (res.ok) {
        setProjects(data.data);
      } else {
        setError(data.error || 'Failed to fetch projects');
      }
    } catch (err) {
      setError('Error fetching projects');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      const res = await fetch(`/api/admin/projects?id=${id}`, { method: 'DELETE' });

      if (res.ok) {
        setProjects(projects.filter((p) => p.id !== id));
      } else {
        setError('Failed to delete project');
      }
    } catch (err) {
      console.error('Delete error:', err);
      setError('Error deleting project');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implementation for create/update
  };

  if (loading) {
    return <div className="text-center py-8">Loading projects...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Projects
        </h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-medium"
        >
          {showForm ? 'Cancel' : 'Add Project'}
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
              placeholder="Project Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className={`w-full px-4 py-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
              required
            />
            <textarea
              placeholder="Description"
              value={formData.short_description}
              onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
              className={`w-full px-4 py-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
              rows={3}
            />
            <input
              type="text"
              placeholder="Technologies (comma separated)"
              value={formData.technologies}
              onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
              className={`w-full px-4 py-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            />
            <button
              type="submit"
              className="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-medium"
            >
              {editingId ? 'Update' : 'Create'} Project
            </button>
          </div>
        </form>
      )}

      <div className={`rounded-lg border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} overflow-hidden`}>
        <table className="w-full">
          <thead className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <tr>
              <th className={`px-4 py-3 text-left text-sm font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
                Title
              </th>
              <th className={`px-4 py-3 text-left text-sm font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
                Technologies
              </th>
              <th className={`px-4 py-3 text-left text-sm font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
                Views
              </th>
              <th className={`px-4 py-3 text-left text-sm font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr
                key={project.id}
                className={`border-t ${theme === 'dark' ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'} transition-colors`}
              >
                <td className={`px-4 py-3 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                  {project.title}
                </td>
                <td className={`px-4 py-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.technologies?.join(', ') || '-'}
                </td>
                <td className={`px-4 py-3 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.views}
                </td>
                <td className="px-4 py-3 text-sm flex gap-2">
                  <button
                    onClick={() => setEditingId(project.id)}
                    className="p-2 text-blue-500 hover:bg-blue-500/20 rounded-lg transition-colors"
                  >
                    <FiEdit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
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
