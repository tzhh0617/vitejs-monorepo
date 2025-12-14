import type { FormField } from '@workspace/types';

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }

  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }

  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }

  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const validateField = (value: any, field: FormField): string | undefined => {
  if (field.required && (!value || value.toString().trim() === '')) {
    return `${field.label} is required`;
  }

  if (!value) return undefined;

  const stringValue = value.toString().trim();

  if (field.validation) {
    const { min, max, pattern, custom } = field.validation;

    if (field.type === 'number') {
      const numValue = Number(value);
      if (min !== undefined && numValue < min) {
        return `${field.label} must be at least ${min}`;
      }
      if (max !== undefined && numValue > max) {
        return `${field.label} must be no more than ${max}`;
      }
    } else {
      if (min !== undefined && stringValue.length < min) {
        return `${field.label} must be at least ${min} characters`;
      }
      if (max !== undefined && stringValue.length > max) {
        return `${field.label} must be no more than ${max} characters`;
      }
    }

    if (pattern && !pattern.test(stringValue)) {
      return `${field.label} is invalid`;
    }

    if (custom) {
      return custom(value);
    }
  }

  return undefined;
};

export const validateForm = (
  values: Record<string, any>,
  fields: FormField[]
): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  fields.forEach((field) => {
    const error = validateField(values[field.name], field);
    if (error) {
      errors[field.name] = error;
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove potential javascript protocol
    .replace(/on\w+=/gi, ''); // Remove potential event handlers
};

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isValidUUID = (uuid: string): boolean => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};