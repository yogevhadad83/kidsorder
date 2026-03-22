# 🍽️ Food Ask - Kid-Friendly Food Request App

A simple, kid-focused web app where children can browse parent-approved restaurants and meals, then submit food requests to their parents.

## 🎯 What This MVP Does

Kids can:
1. Log in by selecting their profile and entering a 4-digit PIN
2. Browse approved restaurants
3. Pick their favorite meals
4. Add optional notes
5. Submit food requests to parents

Parents receive console notifications (for now) when kids submit requests.

## ✨ Features

- **Kid-First UX**: Large buttons, high contrast, simple screens, emoji-rich interface
- **PIN Authentication**: Simple 4-digit PIN login (TODO: hash PINs in production)
- **Session Management**: Secure cookie-based sessions
- **Protected Routes**: Middleware ensures only logged-in kids access the app
- **Favorites-Oriented**: Small, curated menu of repetitive favorites
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation
- **Responsive**: Works on tablets and mobile devices

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Default Login Credentials

| Kid | Avatar | PIN |
|-----|--------|-----|
| Emma | 🦄 | 1234 |
| Liam | 🦖 | 5678 |
| Sophia | 🐱 | 9999 |

## 📂 Project Structure

```
src/
├── app/
│   ├── login/              # Login page + PIN auth
│   ├── restaurants/        # Restaurant selection
│   │   └── [restaurantId]/ # Meal selection for a restaurant
│   ├── confirm/            # Order confirmation
│   ├── sent/               # Success page
│   └── api/
│       └── requests/       # POST endpoint for submitting requests
├── components/
│   ├── BigButton.tsx       # Reusable large button component
│   ├── KidCard.tsx         # Kid profile selection card
│   ├── RestaurantCard.tsx  # Restaurant card
│   ├── MealCard.tsx        # Meal card
│   └── PageHeader.tsx      # Consistent page header
├── data/
│   ├── kids.ts             # Kid profiles (edit here to add/update kids)
│   └── menu.ts             # Restaurant + meal data (edit here to update menu)
├── lib/
│   ├── types.ts            # TypeScript type definitions
│   ├── session.ts          # Session cookie helpers
│   └── selection.ts        # Client-side selection storage
└── middleware.ts           # Route protection

```

## ✏️ How to Edit Kids & Menu

### Adding/Editing Kids

Edit \`src/data/kids.ts\`:

\`\`\`typescript
export const kids: Kid[] = [
  {
    id: "kid-1",
    name: "Emma",
    avatarEmoji: "🦄",
    pin: "1234", // TODO: Hash in production
  },
  // Add more kids here...
];
\`\`\`

### Adding/Editing Restaurants & Meals

Edit \`src/data/menu.ts\`:

\`\`\`typescript
export const restaurants: Restaurant[] = [
  {
    id: "rest-1",
    name: "Pizza Palace",
    logoEmoji: "🍕",
    meals: [
      {
        id: "meal-1-1",
        name: "Cheese Pizza",
        description: "Classic cheese pizza slice",
        emoji: "🍕",
      },
      // Add more meals here...
    ],
  },
  // Add more restaurants here...
];
\`\`\`

## 🔧 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Cookie-based sessions
- **State**: localStorage for current selection
- **Data**: Static TypeScript files (no database for MVP)

## 🎨 Design Principles

1. **Touch-First**: All interactive elements are ≥48px
2. **High Contrast**: Readable text, clear visual hierarchy
3. **Simple Language**: Short, friendly copy
4. **Emoji-Rich**: Visual cues for young readers
5. **Forgiving**: Clear error messages, easy navigation

## 📋 What's Stubbed for Later (Parent Features)

The following features are intentionally marked as TODO for the parent-side implementation:

### Security
- [ ] Hash PINs using bcrypt instead of plain text (see \`src/data/kids.ts\`)
- [ ] Add CSRF protection
- [ ] Rate limiting on login attempts

### Parent Notifications
- [ ] Email notifications (see \`src/app/api/requests/route.ts\` - \`sendParentNotification()\`)
- [ ] SMS notifications
- [ ] Push notifications
- [ ] In-app parent dashboard

### Data Persistence
- [ ] Replace in-memory request storage with database (PostgreSQL, MongoDB, etc.)
- [ ] Add request history tracking
- [ ] Parent approval/rejection workflow

### Parent Management
- [ ] Parent login/dashboard
- [ ] Approve/reject requests
- [ ] Edit approved menus per kid
- [ ] Order history and analytics
- [ ] Budget/limit controls

### Additional Features
- [ ] Meal images (currently only emoji)
- [ ] Delivery time estimates
- [ ] Integration with actual restaurant APIs
- [ ] Nutritional information
- [ ] Allergy tracking

## 🧪 Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📝 API Endpoints

### POST /api/requests

Submit a food request.

**Request Body**:
```json
{
  "restaurantId": "rest-1",
  "mealId": "meal-1-1",
  "notes": "Extra cheese please"
}
```

**Response**:
```json
{
  "requestId": "uuid-here",
  "request": {
    "kidId": "kid-1",
    "restaurantId": "rest-1",
    "mealId": "meal-1-1",
    "notes": "Extra cheese please",
    "createdAt": "2026-02-16T10:30:00.000Z"
  }
}
```

### GET /api/requests

Get all requests (for debugging/development).

**Response**:
```json
{
  "requests": [...]
}
```

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

## 🤝 Contributing

This is an MVP. To extend:

1. Replace static data files with a database
2. Implement parent authentication & dashboard
3. Add real notification system
4. Hash PINs before storing
5. Add tests

## 📄 License

MIT

## 🙏 Credits

Built with ❤️ for kids and parents who want a simple, safe way to request food.
