import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function useAdmin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/admin/auth', { method: 'GET' });
      setIsAuthenticated(res.ok);
      if (!res.ok) {
        router.push('/admin/login');
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      setIsAuthenticated(false);
      router.push('/admin/login');
    } finally {
      setLoading(false);
    }
  };

  const login = async (password: string) => {
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        setIsAuthenticated(true);
        router.push('/admin/dashboard');
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    router.push('/admin/login');
  };

  return {
    isAuthenticated,
    loading,
    login,
    logout,
  };
}
