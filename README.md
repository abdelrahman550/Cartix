# 🛒 Cartix — Full-Featured E-Commerce Frontend

> A large-scale, production-ready e-commerce frontend built with Next.js 14 — covering the full shopping journey from browsing to checkout, with authentication, cart, wishlist, and order management.

**[→ View Live Demo](https://cartix-oxo.vercel.app/)**

---

## 🌟 Why Cartix?

Cartix isn't a simple CRUD app or a tutorial clone. It's a complete frontend system designed at scale, handling:

- **Complex global state** — cart and wishlist are synced live across every page without a third-party state library
- **Real authentication flows** — protected routes, session-aware UI, and role-based page access built with NextAuth
- **Scalable architecture** — server actions, context providers, and reusable section components keep the codebase clean as it grows
- **Form reliability** — every user input is validated with Zod schemas before hitting any action, preventing bad data entirely
- **Smooth UX** — Framer Motion animations make interactions feel polished and intentional throughout the app

---

## ✨ Features

**Shopping**
- Browse all products, categories, brands and deals
- Product detail pages with image gallery and variant selection
- Promotional sections — Hero, Best Deals, Featured Products

**Cart & Wishlist**
- Add, update, or remove items — reflected instantly everywhere on the page
- Persistent cart and wishlist state shared across the entire app
- Full checkout flow from cart to order confirmation

**Authentication**
- Secure login and signup with session-based protection
- Authentication-protected routes that redirect unauthenticated users
- Session-aware navbar and UI that adapts per user state

**Orders**
- Order history page per user
- Checkout action that processes and stores orders

**Navigation & Search**
- Responsive navbar with dropdowns and mobile menu
- Profile menu, search input, and category navigation

**Forms**
- All inputs validated client-side with React Hook Form + Zod
- Clean, accessible error messaging on every form

---

## 🧱 Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) — App Router + Server Actions |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Authentication | [NextAuth.js](https://next-auth.js.org/) |
| Form Handling | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| State Management | React Context API |
| Deployment | [Vercel](https://vercel.com/) |

---

## 🗺️ Pages

| Route | Description |
|---|---|
| `/` | Homepage — Hero, Best Deals, Categories, Products |
| `/Shop` | Full product listing |
| `/Product/[id]` | Product detail page |
| `/Categories` | Browse by category |
| `/Brands` | Browse by brand |
| `/Cart` | Shopping cart |
| `/Wishlist` | Saved items |
| `/Checkout` | Order checkout |
| `/allorders` | Order history |
| `/Login` | User login |
| `/Signup` | User registration |

---

## ⚙️ Getting Started

```bash
git clone https://github.com/abdelrahman550/cartix.git
cd cartix
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📝 License

Open source under the [MIT License](LICENSE).

---

## 🙌 Author

Built with ❤️ by **Abdelrahman Mohamed**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/abdelrahman550)
