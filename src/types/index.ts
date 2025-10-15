// User types
export interface User {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  role: 'admin' | 'curator' | 'learner' | 'billing_admin';
  organization_id?: string;
  created_at: string;
  updated_at: string;
}

export interface UpdateUserInput {
  id: string;
  full_name?: string;
  avatar_url?: string;
}

// Video/Clip types
export interface VideoClip {
  id: string;
  title: string;
  description: string;
  duration: number; // in seconds
  thumbnail_url: string;
  video_url: string;
  transcript?: string;
  tags: string[];
  machine_model?: string;
  process?: string;
  tooling?: string;
  step?: string;
  privacy: 'public' | 'private' | 'organization';
  status: 'draft' | 'pending_review' | 'published' | 'rejected';
  created_by: string;
  organization_id?: string;
  created_at: string;
  updated_at: string;
}

export interface CreateVideoClipInput {
  title: string;
  description: string;
  video_file: File;
  tags: string[];
  machine_model?: string;
  process?: string;
  tooling?: string;
  step?: string;
  privacy: 'public' | 'private' | 'organization';
  submit_for_review?: boolean;
}

export interface UpdateVideoClipInput {
  id: string;
  title?: string;
  description?: string;
  tags?: string[];
  machine_model?: string;
  process?: string;
  tooling?: string;
  step?: string;
  privacy?: 'public' | 'private' | 'organization';
  status?: 'draft' | 'pending_review' | 'published' | 'rejected';
}

// Course types
export interface Course {
  id: string;
  title: string;
  description: string;
  modules: CourseModule[];
  status: 'draft' | 'published' | 'archived';
  created_by: string;
  organization_id?: string;
  created_at: string;
  updated_at: string;
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  order: number;
  lessons: CourseLesson[];
}

export interface CourseLesson {
  id: string;
  title: string;
  description: string;
  video_clip_id: string;
  order: number;
  duration: number;
}

export interface Quiz {
  id: string;
  course_id: string;
  module_id?: string;
  lesson_id?: string;
  title: string;
  questions: QuizQuestion[];
  pass_threshold: number; // percentage
  time_limit?: number; // in minutes
  max_attempts?: number;
}

export interface QuizQuestion {
  id: string;
  type: 'multiple_choice' | 'true_false' | 'text';
  question: string;
  options?: string[];
  correct_answer: string | number;
  explanation?: string;
}

// Authentication types
export interface AuthResponse {
  user: User;
  token: string;
  refresh_token?: string;
}

export interface SignInInput {
  email: string;
  password: string;
}

export interface SignUpInput {
  email: string;
  password: string;
  full_name: string;
  organization_name?: string;
  role: 'curator' | 'learner' | 'billing_admin';
}

// Organization types
export interface Organization {
  id: string;
  name: string;
  domain?: string;
  subscription_tier: 'free' | 'basic' | 'premium' | 'enterprise';
  seats: number;
  used_seats: number;
  created_at: string;
  updated_at: string;
}

// Analytics types
export interface AnalyticsData {
  total_clips: number;
  total_courses: number;
  total_users: number;
  total_views: number;
  completion_rate: number;
  popular_clips: VideoClip[];
  recent_activity: ActivityItem[];
}

export interface ActivityItem {
  id: string;
  type: 'video_view' | 'course_completion' | 'quiz_passed' | 'clip_uploaded';
  user_id: string;
  resource_id: string;
  resource_type: 'video' | 'course' | 'quiz';
  timestamp: string;
  metadata?: Record<string, any>;
}

// API response types
export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
}

export interface PaginatedResponse<T> {
  data: T[];
  count: number;
  page: number;
  limit: number;
  total_pages: number;
}

export interface ApiError {
  message: string;
  status?: number;
  code?: string;
}
