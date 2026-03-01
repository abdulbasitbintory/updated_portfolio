import { v4 as uuidv4 } from 'uuid';

interface AnalyticsEvent {
  event_type: string;
  event_data?: Record<string, any>;
  page_url?: string;
  referrer?: string;
}

export class AnalyticsTracker {
  private sessionId: string;

  constructor() {
    // Get or create session ID from localStorage
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('analytics_session_id');
      this.sessionId = stored || uuidv4();
      if (!stored) {
        localStorage.setItem('analytics_session_id', this.sessionId);
      }
    } else {
      this.sessionId = uuidv4();
    }
  }

  async trackEvent(event: AnalyticsEvent) {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...event,
          page_url: event.page_url || (typeof window !== 'undefined' ? window.location.pathname : ''),
          referrer: event.referrer || (typeof window !== 'undefined' ? document.referrer : ''),
          session_id: this.sessionId,
        }),
      });
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }

  trackPageView() {
    this.trackEvent({
      event_type: 'page_view',
    });
  }

  trackProjectView(projectId: number) {
    this.trackEvent({
      event_type: 'project_view',
      event_data: { projectId },
    });
  }

  trackProjectClick(projectId: number) {
    this.trackEvent({
      event_type: 'project_click',
      event_data: { projectId },
    });
  }

  trackSkillView(skillId: number) {
    this.trackEvent({
      event_type: 'skill_view',
      event_data: { skillId },
    });
  }

  trackContactFormView() {
    this.trackEvent({
      event_type: 'contact_form_view',
    });
  }

  trackContactFormStart() {
    this.trackEvent({
      event_type: 'contact_form_start',
    });
  }

  trackSocialClick(platform: string) {
    this.trackEvent({
      event_type: 'social_click',
      event_data: { platform },
    });
  }
}

// Export singleton instance
export const analytics = new AnalyticsTracker();
