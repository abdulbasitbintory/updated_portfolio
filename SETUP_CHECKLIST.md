# Quick Setup Checklist

## 1. Environment Variables ✅

Add these to your `.env.local` file:

```env
# Supabase (from Supabase dashboard)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...

# Admin Configuration
ADMIN_PASSWORD=YourStrongAdminPassword123
ADMIN_TOKEN_SECRET=YourSecretTokenForSigning

# Contact Form Email
CONTACT_EMAIL=your-email@gmail.com
RESEND_API_KEY=re_xxxxx
```

## 2. Resend API Setup

1. **Create Resend Account**
   - Go to https://resend.com
   - Sign up and verify email

2. **Get API Key**
   - Navigate to API Keys section
   - Copy your API key
   - Add to `.env.local` as `RESEND_API_KEY`

3. **Verify Email Domain** (for production)
   - Follow Resend instructions to verify your domain
   - For development, the default domain works fine

## 3. Dependencies Installation

Run this command (should be automatic):
```bash
npm install
# or
yarn install
```

New packages added:
- `@supabase/supabase-js` - Database operations
- `resend` - Email sending
- `uuid` - Session tracking

## 4. Test Everything

### Theme Toggle
- [ ] Click theme toggle in navbar
- [ ] Check dark/light mode switches
- [ ] Refresh page, theme persists

### Contact Form
- [ ] Fill out contact form
- [ ] Submit successfully
- [ ] Check email receives notification
- [ ] Check Supabase `contact_submissions` table

### Admin Panel
- [ ] Go to `/admin/login`
- [ ] Enter admin password
- [ ] Access `/admin/dashboard`
- [ ] View analytics
- [ ] Try CRUD operations (view, edit, delete)

### Analytics
- [ ] Navigate through portfolio pages
- [ ] Check analytics dashboard for page views
- [ ] Click projects to track clicks
- [ ] Verify data in Supabase

## 5. Database

### Verify Tables Created
In Supabase console, check these tables exist:
- [ ] `projects`
- [ ] `skills`
- [ ] `contact_submissions`
- [ ] `analytics_events`
- [ ] `testimonials`
- [ ] `dedixor_info`
- [ ] `analytics_summary`
- [ ] `admin_logs`

### Add Sample Data (Optional)
1. Use admin panel to add projects and skills
2. Or insert directly in Supabase SQL editor

## 6. Deploy to Production

### Vercel Deployment
```bash
# Make sure all env vars are set in Vercel dashboard
vercel deploy
```

### Environment Variables in Vercel
1. Go to Vercel project settings
2. Add all `.env.local` variables
3. Redeploy

## 7. Customize

### Update Admin Password
In `.env.local`:
```env
ADMIN_PASSWORD=YourNewStrongPassword
```

### Update Contact Email
In `.env.local`:
```env
CONTACT_EMAIL=your-new-email@gmail.com
```

### Update Navbar
Edit `/src/component/Navbar.tsx` to customize:
- Navigation links
- Social icons
- Branding

### Update About Content
Edit pages to match your information:
- Bio and headline
- Skills list
- Project details
- Testimonials

## 8. Common Issues & Solutions

### "Supabase URL not found"
- [ ] Verify `NEXT_PUBLIC_SUPABASE_URL` in `.env.local`
- [ ] Restart dev server after adding env vars

### "Contact form not sending emails"
- [ ] Check `RESEND_API_KEY` is correct
- [ ] Verify `CONTACT_EMAIL` is valid
- [ ] Check Resend dashboard for error logs

### "Admin login fails"
- [ ] Ensure `ADMIN_PASSWORD` is set
- [ ] Clear browser cookies
- [ ] Check browser console for errors

### "Analytics not tracking"
- [ ] Verify Supabase connection
- [ ] Check `analytics_events` table exists
- [ ] Check browser console for fetch errors

## 9. Features Quick Reference

| Feature | Location | Status |
|---------|----------|--------|
| Dark/Light Theme | Navbar toggle | ✅ Ready |
| Contact Form | Home page bottom | ✅ Ready |
| Admin Panel | `/admin/login` | ✅ Ready |
| Analytics | Admin dashboard | ✅ Ready |
| Projects CRUD | Admin > Projects | ✅ Ready |
| Skills CRUD | Admin > Skills | ✅ Ready |
| Testimonials | Carousel on home | ✅ Ready |
| Dedixor Section | Home page | ✅ Ready |
| Product Showcase | Home page | ✅ Ready |

## 10. Final Checklist

- [ ] Environment variables configured
- [ ] Resend API key obtained and set
- [ ] Database tables verified in Supabase
- [ ] Theme toggle tested
- [ ] Contact form tested and emails working
- [ ] Admin panel accessed and working
- [ ] Analytics dashboard displaying data
- [ ] All new sections visible on home page
- [ ] Mobile responsive design verified
- [ ] Ready for production deployment

## Next Steps

1. **Customize Content**
   - Add your projects via admin panel
   - Update skills with proficiency levels
   - Add testimonials

2. **Monitor Analytics**
   - Check admin dashboard regularly
   - Track visitor behavior
   - Measure contact form submissions

3. **Maintain & Update**
   - Keep projects current
   - Update skills as you learn new tech
   - Add new testimonials from clients/colleagues

4. **Future Enhancements**
   - Add blog section
   - Integrate with social media
   - Add video testimonials
   - Create detailed case studies

---

**All Set!** Your portfolio is now production-ready with advanced features and analytics.
