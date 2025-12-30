// Common types for the application

export interface User {
  id: string
  username: string
  email: string
  fullName: string
  role: string
  createdAt: string
  updatedAt: string
}

export interface Citizen {
  id: string
  citizenId: string
  fullName: string
  dateOfBirth: string
  gender: 'male' | 'female' | 'other'
  address: string
  phoneNumber?: string
  email?: string
  createdAt: string
  updatedAt: string
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

