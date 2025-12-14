import type { ApiResponse, PaginatedResponse, PaginationParams } from '@workspace/types';

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public response?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export interface RequestOptions extends RequestInit {
  timeout?: number;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

const defaultOptions: RequestOptions = {
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const api = {
  async request<T>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<ApiResponse<T>> {
    const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), options.timeout || 10000);

    try {
      const response = await fetch(url, {
        ...defaultOptions,
        ...options,
        headers: {
          ...defaultOptions.headers,
          ...options.headers,
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new ApiError(
          errorData.message || `HTTP ${response.status}: ${response.statusText}`,
          response.status,
          errorData
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      clearTimeout(timeoutId);

      if (error instanceof ApiError) {
        throw error;
      }

      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new ApiError('Request timeout', 408);
        }
        throw new ApiError(error.message, 500);
      }

      throw new ApiError('Unknown error occurred', 500);
    }
  },

  async get<T>(endpoint: string, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  },

  async post<T>(
    endpoint: string,
    data?: any,
    options?: RequestOptions
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  },

  async put<T>(
    endpoint: string,
    data?: any,
    options?: RequestOptions
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  },

  async patch<T>(
    endpoint: string,
    data?: any,
    options?: RequestOptions
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    });
  },

  async delete<T>(endpoint: string, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  },

  async getPaginated<T>(
    endpoint: string,
    params: PaginationParams,
    options?: RequestOptions
  ): Promise<PaginatedResponse<T>> {
    const searchParams = new URLSearchParams({
      page: params.page.toString(),
      limit: params.limit.toString(),
    });

    const url = `${endpoint}?${searchParams.toString()}`;
    const response = await this.get<PaginatedResponse<T>>(url, options);
    return response.data;
  },
};

// Helper function to handle API responses with loading and error states
export const useApiQuery = async <T>(
  queryKey: string[],
  queryFn: () => Promise<ApiResponse<T>>
) => {
  try {
    const response = await queryFn();
    return {
      data: response.data,
      error: null,
      loading: false,
    };
  } catch (error) {
    return {
      data: null,
      error: error instanceof ApiError ? error : new ApiError('Unknown error', 500),
      loading: false,
    };
  }
};