// Application specific types
export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'user'
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

export interface PaginationParams {
  page: number
  limit: number
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// Navigation types (pure data)
export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  label?: string
  description?: string
}

export interface NavigationMenuProps {
  items: NavItem[]
}

// Form types (pure data)
export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'checkbox' | 'textarea'
  placeholder?: string
  required?: boolean
  options?: { value: string; label: string }[]
  validation?: {
    min?: number
    max?: number
    pattern?: RegExp
    custom?: (value: any) => string | undefined
  }
}

export interface FormConfig {
  fields: FormField[]
  submitLabel?: string
  onSubmit: (values: Record<string, any>) => void | Promise<void>
  initialValues?: Record<string, any>
}

// Dashboard types (pure data)
export interface DashboardStats {
  title: string
  value: string | number
  change?: {
    value: number
    type: 'increase' | 'decrease'
  }
}

export interface FeatureCard {
  title: string
  description: string
  image?: string
  href?: string
}

// Theme types
export type Theme = 'dark' | 'light' | 'system'
