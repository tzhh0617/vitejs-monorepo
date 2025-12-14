export const storage = {
  // Local Storage methods
  setItem(key: string, value: any): void {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  },

  getItem<T>(key: string, defaultValue?: T): T | null {
    try {
      if (typeof window !== 'undefined') {
        const item = localStorage.getItem(key);
        if (item === null) {
          return defaultValue || null;
        }
        return JSON.parse(item);
      }
      return defaultValue || null;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return defaultValue || null;
    }
  },

  removeItem(key: string): void {
    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(key);
      }
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  },

  clear(): void {
    try {
      if (typeof window !== 'undefined') {
        localStorage.clear();
      }
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  },

  // Session Storage methods
  setSessionItem(key: string, value: any): void {
    try {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error('Error saving to sessionStorage:', error);
    }
  },

  getSessionItem<T>(key: string, defaultValue?: T): T | null {
    try {
      if (typeof window !== 'undefined') {
        const item = sessionStorage.getItem(key);
        if (item === null) {
          return defaultValue || null;
        }
        return JSON.parse(item);
      }
      return defaultValue || null;
    } catch (error) {
      console.error('Error reading from sessionStorage:', error);
      return defaultValue || null;
    }
  },

  removeSessionItem(key: string): void {
    try {
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem(key);
      }
    } catch (error) {
      console.error('Error removing from sessionStorage:', error);
    }
  },

  clearSession(): void {
    try {
      if (typeof window !== 'undefined') {
        sessionStorage.clear();
      }
    } catch (error) {
      console.error('Error clearing sessionStorage:', error);
    }
  },

  // Cookie methods
  setCookie(name: string, value: string, days = 7, path = '/'): void {
    if (typeof window !== 'undefined') {
      const expires = new Date();
      expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=${path}`;
    }
  },

  getCookie(name: string): string | null {
    if (typeof window === 'undefined') return null;

    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  },

  removeCookie(name: string, path = '/'): void {
    if (typeof window !== 'undefined') {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=${path}`;
    }
  },
};

// Predefined storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_PREFERENCES: 'user_preferences',
  THEME: 'theme',
  LANGUAGE: 'language',
  CART_ITEMS: 'cart_items',
  RECENT_SEARCHES: 'recent_searches',
  ONBOARDING_COMPLETED: 'onboarding_completed',
  DASHBOARD_LAYOUT: 'dashboard_layout',
} as const;