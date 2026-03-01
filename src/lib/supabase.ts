import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export type Tables = {
  projects: {
    Row: {
      id: number;
      title: string;
      description: string;
      short_description: string | null;
      image_url: string | null;
      github_url: string | null;
      live_url: string | null;
      technologies: string[];
      categories: string[];
      features: string[];
      accomplishments: string[];
      views: number;
      clicks: number;
      order_index: number | null;
      created_at: string;
      updated_at: string;
    };
  };
  skills: {
    Row: {
      id: number;
      skill_name: string;
      icon_url: string | null;
      proficiency: number;
      category: string;
      description: string | null;
      endorsements: number;
      order_index: number | null;
      created_at: string;
      updated_at: string;
    };
  };
  contact_submissions: {
    Row: {
      id: number;
      name: string;
      email: string;
      phone: string | null;
      subject: string;
      message: string;
      read: boolean;
      archived: boolean;
      ip_address: string | null;
      user_agent: string | null;
      created_at: string;
      responded_at: string | null;
    };
  };
  analytics_events: {
    Row: {
      id: number;
      event_type: string;
      event_data: Record<string, any> | null;
      page_url: string | null;
      referrer: string | null;
      ip_address: string | null;
      user_agent: string | null;
      session_id: string | null;
      created_at: string;
    };
  };
  testimonials: {
    Row: {
      id: number;
      name: string;
      role: string | null;
      company: string | null;
      content: string;
      avatar_url: string | null;
      featured: boolean;
      order_index: number | null;
      created_at: string;
      updated_at: string;
    };
  };
  dedixor_info: {
    Row: {
      id: number;
      title: string | null;
      description: string | null;
      website_url: string | null;
      logo_url: string | null;
      your_role: string | null;
      achievements: string[];
      featured: boolean;
      created_at: string;
      updated_at: string;
    };
  };
  analytics_summary: {
    Row: {
      id: number;
      date: string;
      page_views: number;
      unique_visitors: number;
      contact_submissions: number;
      project_clicks: number;
      average_session_duration: number | null;
      bounce_rate: number | null;
      created_at: string;
      updated_at: string;
    };
  };
};
