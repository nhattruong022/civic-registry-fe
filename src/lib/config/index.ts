// Application configuration
export const config = {
  app: {
    name: 'Hệ thống quản lý dân số',
    version: '1.0.0',
  },
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api',
    timeout: 30000,
  },
  features: {
    // Feature flags
  },
}

