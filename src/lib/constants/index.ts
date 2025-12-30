// Application constants
export const APP_NAME = 'Hệ thống quản lý dân số'
export const APP_VERSION = '1.0.0'

// API endpoints
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api'

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  ADMIN: {
    DASHBOARD: '/admin/dashboard',
    CITIZEN_MANAGEMENT: '/admin/citizen-management',
    STATISTICS: '/admin/statistics',
    SETTINGS: '/admin/settings',
    PROFILE: '/admin/profile',
  },
} as const

