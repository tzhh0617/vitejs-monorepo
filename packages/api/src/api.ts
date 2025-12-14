import type { ApiResponse, PaginationParams, User } from '@workspace/types'

export interface ApiClientConfig {
  baseURL?: string
  timeout?: number
  headers?: Record<string, string>
}

export class ApiClient {
  private baseURL: string
  private timeout: number
  private headers: Record<string, string>

  constructor(config: ApiClientConfig = {}) {
    this.baseURL = config.baseURL || '/api'
    this.timeout = config.timeout || 10000
    this.headers = config.headers || {}
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), this.timeout)

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...this.headers,
          ...options.headers,
        },
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return {
        success: true,
        data,
        message: 'Request successful',
      }
    } catch (error) {
      clearTimeout(timeoutId)
      return {
        success: false,
        data: null,
        message: error instanceof Error ? error.message : 'Unknown error occurred',
      }
    }
  }

  async get<T>(endpoint: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    const url = new URL(`${this.baseURL}${endpoint}`, window.location.origin)
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value))
        }
      })
    }

    return this.request<T>(url.pathname + url.search, {
      method: 'GET',
    })
  }

  async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  async patch<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'DELETE',
    })
  }
}

// Default API client instance
export const apiClient = new ApiClient()

// Convenience functions for common operations
export const api = {
  get: <T>(endpoint: string, params?: Record<string, any>) => apiClient.get<T>(endpoint, params),
  post: <T>(endpoint: string, data?: any) => apiClient.post<T>(endpoint, data),
  put: <T>(endpoint: string, data?: any) => apiClient.put<T>(endpoint, data),
  patch: <T>(endpoint: string, data?: any) => apiClient.patch<T>(endpoint, data),
  delete: <T>(endpoint: string) => apiClient.delete<T>(endpoint),
}

// Example API endpoints
export const apiEndpoints = {
  // Users
  users: {
    list: (params?: PaginationParams) => api.get<User[]>('/users', params),
    get: (id: string) => api.get<User>(`/users/${id}`),
    create: (data: Partial<User>) => api.post<User>('/users', data),
    update: (id: string, data: Partial<User>) => api.put<User>(`/users/${id}`, data),
    delete: (id: string) => api.delete<void>(`/users/${id}`),
  },

  // Auth
  auth: {
    login: (credentials: { email: string; password: string }) =>
      api.post<{ token: string; user: User }>('/auth/login', credentials),
    logout: () => api.post<void>('/auth/logout'),
    register: (data: { email: string; password: string; name: string }) =>
      api.post<{ user: User }>('/auth/register', data),
    refresh: () => api.post<{ token: string }>('/auth/refresh'),
  },
} as const
