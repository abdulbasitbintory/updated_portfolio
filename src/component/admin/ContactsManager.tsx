'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { FiTrash2, FiEye } from 'react-icons/fi';

interface Contact {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  created_at: string;
}

export default function ContactsManager() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState<'all' | 'unread' | 'archived'>('all');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchContacts();
  }, [filter]);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/contacts?filter=${filter}`);
      const data = await res.json();

      if (res.ok) {
        setContacts(data.data);
      } else {
        setError(data.error || 'Failed to fetch contacts');
      }
    } catch (err) {
      setError('Error fetching contacts');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (id: number, currentRead: boolean) => {
    try {
      const res = await fetch('/api/admin/contacts', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, read: !currentRead }),
      });

      if (res.ok) {
        setContacts(
          contacts.map((c) => (c.id === id ? { ...c, read: !currentRead } : c))
        );
      }
    } catch (err) {
      console.error('Mark read error:', err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this contact?')) return;

    try {
      const res = await fetch(`/api/admin/contacts?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setContacts(contacts.filter((c) => c.id !== id));
        setSelectedContact(null);
      }
    } catch (err) {
      console.error('Delete error:', err);
      setError('Error deleting contact');
    }
  };

  if (loading && !contacts.length) {
    return <div className="text-center py-8">Loading contacts...</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Contacts List */}
      <div className="lg:col-span-2 space-y-4">
        <div className="flex gap-2">
          {['all', 'unread', 'archived'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as typeof filter)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === f
                  ? 'bg-purple-500 text-white'
                  : theme === 'dark'
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {error && (
          <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg">
            <p className="text-red-500 text-sm">{error}</p>
          </div>
        )}

        <div className="space-y-3">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => setSelectedContact(contact)}
              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                selectedContact?.id === contact.id
                  ? theme === 'dark'
                    ? 'border-purple-500 bg-purple-500/10'
                    : 'border-purple-500 bg-purple-50'
                  : theme === 'dark'
                  ? 'border-gray-700 bg-gray-700/30 hover:border-gray-600'
                  : 'border-gray-200 bg-gray-50 hover:border-gray-300'
              } ${!contact.read ? 'border-l-4 border-l-purple-500' : ''}`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {contact.name}
                  </h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {contact.email}
                  </p>
                  <p className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {contact.subject}
                  </p>
                </div>
                {!contact.read && (
                  <span className="ml-2 px-2 py-1 bg-purple-500 text-white text-xs rounded-full">
                    Unread
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Details */}
      {selectedContact && (
        <div className={`p-6 rounded-lg border ${theme === 'dark' ? 'border-gray-700 bg-gray-700/50' : 'border-gray-200 bg-gray-50'}`}>
          <div className="space-y-4">
            <div>
              <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {selectedContact.name}
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {selectedContact.email}
              </p>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                {new Date(selectedContact.created_at).toLocaleString()}
              </p>
            </div>

            <div>
              <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                Subject
              </h4>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {selectedContact.subject}
              </p>
            </div>

            <div>
              <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                Message
              </h4>
              <p className={`text-sm whitespace-pre-wrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {selectedContact.message}
              </p>
            </div>

            <div className="flex gap-2 pt-4">
              <button
                onClick={() => handleMarkAsRead(selectedContact.id, selectedContact.read)}
                className="flex-1 p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
              >
                <FiEye className="w-4 h-4" />
                {selectedContact.read ? 'Mark Unread' : 'Mark Read'}
              </button>
              <button
                onClick={() => handleDelete(selectedContact.id)}
                className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
              >
                <FiTrash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
