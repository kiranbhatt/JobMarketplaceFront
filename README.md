This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# folder structure


src/
├── app/
│   ├── layout.tsx                # 🌍 Root layout for the whole app
│   ├── error.tsx                 # 🌍 Root error boundary
│   ├── loading.tsx               # 🌍 Global loading UI
│   ├── page.tsx                  # 🏠 Landing page or default dashboard

│   ├── dashboard/
│   │   ├── layout.tsx            # 🧱 Layout specific to dashboard
│   │   ├── error.tsx             # 🧯 Error boundary for dashboard
│   │   ├── loading.tsx           # ⏳ Loading fallback for dashboard
│   │   ├── page.tsx              # 📊 Dashboard main content
│   │   ├── components/
│   │   │   ├── StatsCard.tsx
│   │   │   └── ActivityChart.tsx
│   │   ├── styles/
│   │   │   └── dashboard.module.css
│   │   └── utils/
│   │       └── transformData.ts

│   ├── users/
│   │   ├── layout.tsx
│   │   ├── error.tsx
│   │   ├── loading.tsx
│   │   ├── page.tsx              # 👥 Users list
│   │   ├── [id]/page.tsx         # 👤 Individual user page
│   │   ├── new/page.tsx          # ➕ Create new user
│   │   └── components/
│   │       ├── UserCard.tsx
│   │       └── UserForm.tsx

│   ├── chat/
│   │   ├── layout.tsx
│   │   ├── error.tsx
│   │   ├── loading.tsx
│   │   ├── page.tsx              # 💬 Chat interface
│   │   ├── components/
│   │   │   ├── ChatWindow.tsx
│   │   │   └── MessageBubble.tsx
│   │   └── utils/
│   │       └── chatHelpers.ts

│   ├── interactions/
│   │   ├── layout.tsx
│   │   ├── error.tsx
│   │   ├── loading.tsx
│   │   ├── page.tsx              # 🔄 Interaction logs
│   │   └── components/
│   │       └── InteractionTable.tsx

│   ├── api/
│   │   ├── users/
│   │   │   └── route.ts          # API proxy or handler for users
│   │   ├── chat/
│   │   │   └── route.ts
│   │   ├── dashboard/
│   │   │   └── route.ts
│   │   └── interactions/
│   │       └── route.ts

├── components/                   # 🌐 Global shared components
│   ├── Button.tsx
│   ├── Modal.tsx
│   ├── Navbar.tsx
│   └── Sidebar.tsx

├── hooks/                        # 🪝 Custom React hooks
│   ├── useAuth.ts
│   └── useFetch.ts

├── lib/                          # 🧠 Shared logic / libraries
│   ├── api.ts                    # API client setup (e.g., fetch or axios)
│   ├── auth.ts                   # Auth helpers
│   └── logger.ts                 # Logging utility

├── types/                        # 🧾 Global TypeScript types
│   ├── user.ts
│   ├── chat.ts
│   └── dashboard.ts

├── constants/                    # 🔢 App-wide constants
│   └── roles.ts

├── styles/                       # 🎨 Global styles
│   ├── globals.css
│   └── tailwind.config.ts

├── middleware.ts                 # 🔐 Middleware (auth, logging, etc.)
└── utils/                        # 🛠️ General-purpose utilities
    ├── formatDate.ts
    └── debounce.ts
