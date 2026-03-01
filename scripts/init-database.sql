-- Portfolio Database Schema for Abdul Basit's Portfolio

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  short_description VARCHAR(500),
  image_url TEXT,
  github_url TEXT,
  live_url TEXT,
  technologies TEXT[] NOT NULL DEFAULT '{}',
  categories TEXT[] NOT NULL DEFAULT '{}',
  features TEXT[] NOT NULL DEFAULT '{}',
  accomplishments TEXT[] NOT NULL DEFAULT '{}',
  views INTEGER DEFAULT 0,
  clicks INTEGER DEFAULT 0,
  order_index INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Skills table
CREATE TABLE IF NOT EXISTS skills (
  id BIGSERIAL PRIMARY KEY,
  skill_name VARCHAR(255) NOT NULL,
  icon_url TEXT,
  proficiency INTEGER NOT NULL CHECK (proficiency >= 0 AND proficiency <= 100),
  category VARCHAR(100) NOT NULL,
  description TEXT,
  endorsements INTEGER DEFAULT 0,
  order_index INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact form submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(500) NOT NULL,
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT FALSE,
  archived BOOLEAN DEFAULT FALSE,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  responded_at TIMESTAMP
);

-- Analytics events table
CREATE TABLE IF NOT EXISTS analytics_events (
  id BIGSERIAL PRIMARY KEY,
  event_type VARCHAR(100) NOT NULL,
  event_data JSONB,
  page_url TEXT,
  referrer TEXT,
  ip_address INET,
  user_agent TEXT,
  session_id UUID,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_event_type (event_type),
  INDEX idx_created_at (created_at)
);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(255),
  company VARCHAR(255),
  content TEXT NOT NULL,
  avatar_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  order_index INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Admin logs for tracking changes
CREATE TABLE IF NOT EXISTS admin_logs (
  id BIGSERIAL PRIMARY KEY,
  action VARCHAR(100) NOT NULL,
  entity_type VARCHAR(100),
  entity_id BIGINT,
  changes JSONB,
  ip_address INET,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_action (action),
  INDEX idx_created_at (created_at)
);

-- Dedixor (co-founder section) info
CREATE TABLE IF NOT EXISTS dedixor_info (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  website_url TEXT,
  logo_url TEXT,
  your_role VARCHAR(255),
  achievements TEXT[],
  featured BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Analytics summary (for dashboard)
CREATE TABLE IF NOT EXISTS analytics_summary (
  id BIGSERIAL PRIMARY KEY,
  date DATE NOT NULL,
  page_views INTEGER DEFAULT 0,
  unique_visitors INTEGER DEFAULT 0,
  contact_submissions INTEGER DEFAULT 0,
  project_clicks INTEGER DEFAULT 0,
  average_session_duration DECIMAL(10, 2),
  bounce_rate DECIMAL(5, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(date)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects USING GIN (categories);
CREATE INDEX IF NOT EXISTS idx_skills_category ON skills (category);
CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_submissions (email);
CREATE INDEX IF NOT EXISTS idx_analytics_session ON analytics_events (session_id);
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON testimonials (featured);

-- Enable Row Level Security (RLS) for admin access
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE dedixor_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_summary ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

-- Policy for analytics_events (readable by anyone, writable by authenticated users/API)
CREATE POLICY "analytics_events_insert" ON analytics_events
  FOR INSERT WITH CHECK (true);

CREATE POLICY "analytics_events_select" ON analytics_events
  FOR SELECT USING (true);

-- Policy for contact_submissions (writable by anyone, readable by admin with token)
CREATE POLICY "contact_insert" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- Policies for projects, skills, testimonials, dedixor_info (public read, admin only write)
CREATE POLICY "public_read" ON projects FOR SELECT USING (true);
CREATE POLICY "public_read" ON skills FOR SELECT USING (true);
CREATE POLICY "public_read" ON testimonials FOR SELECT USING (true);
CREATE POLICY "public_read" ON dedixor_info FOR SELECT USING (true);
