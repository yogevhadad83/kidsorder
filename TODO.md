# TODO - Parent Features & Enhancements

This document tracks features intentionally stubbed for future implementation.

## 🔐 Security Enhancements

- [ ] **Hash PINs** - Replace plain text PINs with bcrypt hashing
  - File: `src/data/kids.ts`
  - Add bcrypt dependency
  - Create migration script for existing PINs

- [ ] **CSRF Protection** - Add CSRF tokens to all forms
  - Implement token generation/validation
  - Add to login and confirm forms

- [ ] **Rate Limiting** - Prevent brute force attacks
  - npm package: `express-rate-limit` or similar
  - Limit login attempts per IP
  - Limit API requests per session

## 📧 Parent Notifications

- [ ] **Email Notifications**
  - File: `src/app/api/requests/route.ts` (see `sendParentNotification()`)
  - Integration options: SendGrid, AWS SES, Resend
  - Template with kid name, restaurant, meal, notes
  - Include approve/reject links

- [ ] **SMS Notifications**
  - Integration: Twilio, AWS SNS
  - Text parent when request is submitted
  - Keep messages short and actionable

- [ ] **Push Notifications**
  - Web Push API or Firebase Cloud Messaging
  - Real-time notifications on parent's device
  - Permission handling

- [ ] **In-App Notifications**
  - Parent dashboard notification center
  - Unread count badge
  - Notification history

## 💾 Database Integration

Currently using in-memory storage. Replace with persistent database:

- [ ] **Choose Database** (PostgreSQL, MongoDB, or Firebase)
- [ ] **Schema Design**
  - Kids table (id, name, avatar, pin_hash, parent_id)
  - Restaurants table
  - Meals table (with restaurant_id FK)
  - Requests table (with kid_id, meal_id, status, timestamps)
  - Parents table (email, phone, preferences)
  - Kid_Restaurant_Permissions (which kids can order from which restaurants)

- [ ] **Migrations**
  - Initial schema
  - Seed data from current TypeScript files

- [ ] **ORM Setup** (Prisma, Drizzle, or TypeORM)

## 👨‍👩‍👧‍👦 Parent Dashboard

New parent-facing features:

- [ ] **Parent Authentication**
  - Email/password login
  - OAuth (Google, Apple)
  - Forgot password flow
  - 2FA optional

- [ ] **Approve/Reject Requests**
  - View pending requests
  - One-click approve/reject
  - Add rejection reason (kid sees it)
  - Set delivery time

- [ ] **Menu Management per Kid**
  - Customize which restaurants each kid sees
  - Enable/disable specific meals
  - Add parental notes (e.g., "Only on weekends")

- [ ] **Order History**
  - View all past requests
  - Filter by kid, restaurant, date range
  - Export to CSV

- [ ] **Budget & Limits**
  - Set weekly/monthly spending limits per kid
  - Max requests per day
  - Block certain time windows (e.g., "No requests after 8pm")

- [ ] **Analytics Dashboard**
  - Most requested meals
  - Spending trends
  - Kid preferences over time

## 🍽️ Enhanced Meal Features

- [ ] **Meal Images**
  - Upload real images instead of just emoji
  - Next.js Image optimization
  - Support for multiple images

- [ ] **Nutritional Information**
  - Calories, allergens, ingredients
  - Dietary tag filters (vegetarian, gluten-free, etc.)

- [ ] **Delivery Time Estimates**
  - Restaurant-specific prep times
  - Third-party API integration (DoorDash, UberEats)

- [ ] **Real Restaurant API Integration**
  - Automatically sync menus from restaurant partners
  - Live pricing and availability

- [ ] **Allergy Tracking**
  - Per-kid allergy profiles
  - Automatic meal filtering
  - Warning alerts

## 🎨 UX Improvements

- [ ] **Dark Mode** - Kid and parent themes
- [ ] **Multilingual Support** - i18n for other languages
- [ ] **Accessibility Audit** - WCAG AA compliance
- [ ] **Animations** - Framer Motion for smoother transitions
- [ ] **Sound Effects** - Optional audio feedback for kids
- [ ] **Favorites** - Star meals as favorites for quick access
- [ ] **Recent Orders** - Quick reorder last 5 meals

## 🧪 Testing & Quality

- [ ] **Unit Tests** - Jest + React Testing Library
- [ ] **E2E Tests** - Playwright or Cypress
- [ ] **API Tests** - Supertest
- [ ] **Accessibility Tests** - axe-core
- [ ] **Performance Tests** - Lighthouse CI
- [ ] **Security Scanning** - Snyk or similar

## 🚀 Deployment & DevOps

- [ ] **Environment Variables** - Proper .env handling
- [ ] **CI/CD Pipeline** - GitHub Actions
- [ ] **Docker** - Containerize for deployment
- [ ] **Monitoring** - Sentry for error tracking
- [ ] **Analytics** - PostHog or Mixpanel
- [ ] **Logging** - Structured logging (Winston/Pino)

## 📱 Mobile App

- [ ] **React Native** version for iOS/Android
- [ ] **Offline Support** - Browse menu without internet
- [ ] **Biometric Auth** - Face ID / Fingerprint for kids

## 🤖 AI/ML Features (Future)

- [ ] **Meal Recommendations** - Based on kid's past orders
- [ ] **Smart Scheduling** - Suggest meal times
- [ ] **Price Optimization** - Notify parent of deals/discounts

---

## Priority Labels

🔴 **High Priority** - Critical for parent approval workflow  
🟡 **Medium Priority** - Enhances UX significantly  
🟢 **Low Priority** - Nice to have

Add labels to items above as you prioritize implementation.
