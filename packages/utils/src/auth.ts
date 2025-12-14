import type { User } from '@workspace/types';
import { storage, STORAGE_KEYS } from './storage';
import { isValidUUID } from './validation';

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  confirmPassword?: string;
}

export class AuthService {
  private static instance: AuthService;

  private constructor() {}

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  // Initialize auth state from storage
  initializeAuth(): AuthState {
    try {
      const token = storage.getItem<string>(STORAGE_KEYS.AUTH_TOKEN);
      const userData = storage.getItem<User>('user_data');

      if (!token || !userData) {
        return {
          user: null,
          token: null,
          isAuthenticated: false,
          isLoading: false,
        };
      }

      // Validate token format (basic check)
      if (!isValidUUID(token)) {
        this.clearAuth();
        return {
          user: null,
          token: null,
          isAuthenticated: false,
          isLoading: false,
        };
      }

      return {
        user: userData,
        token,
        isAuthenticated: true,
        isLoading: false,
      };
    } catch (error) {
      console.error('Error initializing auth:', error);
      return {
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      };
    }
  }

  // Login method
  async login(credentials: LoginCredentials): Promise<AuthState> {
    try {
      // In a real app, this would make an API call
      // For demo purposes, we'll simulate a successful login
      const mockUser: User = {
        id: '123e4567-e89b-12d3-a456-426614174000',
        email: credentials.email,
        name: 'John Doe',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const mockToken = '123e4567-e89b-12d3-a456-426614174000';

      // Store in local storage
      storage.setItem(STORAGE_KEYS.AUTH_TOKEN, mockToken);
      storage.setItem('user_data', mockUser);

      return {
        user: mockUser,
        token: mockToken,
        isAuthenticated: true,
        isLoading: false,
      };
    } catch (error) {
      throw new Error('Login failed');
    }
  }

  // Register method
  async register(data: RegisterData): Promise<AuthState> {
    try {
      // In a real app, this would make an API call
      // For demo purposes, we'll simulate a successful registration
      const mockUser: User = {
        id: '123e4567-e89b-12d3-a456-426614174001',
        email: data.email,
        name: data.name,
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const mockToken = '123e4567-e89b-12d3-a456-426614174001';

      // Store in local storage
      storage.setItem(STORAGE_KEYS.AUTH_TOKEN, mockToken);
      storage.setItem('user_data', mockUser);

      return {
        user: mockUser,
        token: mockToken,
        isAuthenticated: true,
        isLoading: false,
      };
    } catch (error) {
      throw new Error('Registration failed');
    }
  }

  // Logout method
  logout(): AuthState {
    this.clearAuth();
    return {
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
    };
  }

  // Update user profile
  async updateProfile(updates: Partial<User>): Promise<AuthState> {
    try {
      const currentState = this.initializeAuth();

      if (!currentState.user || !currentState.isAuthenticated) {
        throw new Error('User not authenticated');
      }

      const updatedUser: User = {
        ...currentState.user,
        ...updates,
        updatedAt: new Date(),
      };

      // Update storage
      storage.setItem('user_data', updatedUser);

      return {
        ...currentState,
        user: updatedUser,
      };
    } catch (error) {
      throw new Error('Profile update failed');
    }
  }

  // Change password
  async changePassword(currentPassword: string, newPassword: string): Promise<void> {
    try {
      const currentState = this.initializeAuth();

      if (!currentState.isAuthenticated) {
        throw new Error('User not authenticated');
      }

      // In a real app, this would make an API call
      // For demo purposes, we'll just return success
      console.log('Password changed successfully');
    } catch (error) {
      throw new Error('Password change failed');
    }
  }

  // Reset password
  async resetPassword(email: string): Promise<void> {
    try {
      // In a real app, this would make an API call
      // For demo purposes, we'll just log it
      console.log(`Password reset email sent to: ${email}`);
    } catch (error) {
      throw new Error('Password reset failed');
    }
  }

  // Refresh token
  async refreshToken(): Promise<AuthState | null> {
    try {
      const currentState = this.initializeAuth();

      if (!currentState.token || !currentState.isAuthenticated) {
        return null;
      }

      // In a real app, this would make an API call to refresh the token
      // For demo purposes, we'll return the current state
      return currentState;
    } catch (error) {
      this.clearAuth();
      return null;
    }
  }

  // Clear auth data
  private clearAuth(): void {
    storage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    storage.removeItem('user_data');
  }

  // Get authorization header
  getAuthHeader(): { Authorization: string } | {} {
    const token = storage.getItem<string>(STORAGE_KEYS.AUTH_TOKEN);
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  // Check if user has specific role
  hasRole(role: User['role']): boolean {
    const currentState = this.initializeAuth();
    return currentState.user?.role === role;
  }

  // Check if user is admin
  isAdmin(): boolean {
    return this.hasRole('admin');
  }
}

// Export singleton instance
export const authService = AuthService.getInstance();