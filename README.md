# 🌱 ZeroWaste - E-commerce Platform

Aplikasi e-commerce ramah lingkungan untuk produk daur ulang sampah.

## 🚀 Tech Stack

- **Frontend:** React 19 + Vite + Tailwind CSS
- **Backend API:** Node.js Express (http://18.140.52.216:3000)
- **Deployment:** AWS EC2 with GitHub Actions CI/CD
- **UI Libraries:** SweetAlert2

## 🎨 Design System

- **Colors:** Forest Green, Sage, Warm Gray, Cream
- **Typography:** Inter (body) + Space Grotesk (headings)
- **Style:** Modern minimalist with eco-friendly aesthetic

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔐 Environment Variables

Copy `.env.example` to `.env`:

```bash
VITE_API_URL=http://18.140.52.216:3000
VITE_ENV=production
```

## 🌐 Deployment

**Live URLs:**
- Frontend: http://13.212.26.236
- Backend API: http://18.140.52.216:3000

**CI/CD Setup:** Auto deploy on push to `main` branch.

👉 **[Full CI/CD Deployment Guide](CI-CD-GUIDE.md)**

## 🏗️ Project Structure

```
src/
├── components/       # Reusable components (Navbar, Footer)
├── pages/           # Page components
│   ├── Products.jsx
│   ├── ProductDetail.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Profile.jsx
│   ├── Cart.jsx
│   ├── Wishlist.jsx
│   ├── Orders.jsx
│   ├── Messages.jsx
│   └── ...
├── services/        # API & Auth services
├── utils/           # Utilities (SweetAlert helpers)
└── App.jsx          # Main app with routes
```

## ✨ Features

### User Features
- Browse eco-friendly products
- Product detail with images
- Add to cart & wishlist
- User authentication (JWT)
- User profile management
- Order history
- Real-time messaging

### Admin Features
- Add/Edit/Delete products
- Product management dashboard

### Pages
- Home (Products List)
- Product Detail
- Login & Register
- User Profile
- Shopping Cart
- Wishlist
- Orders History
- Messages/Chat
- About Us
- How It Works
- Environmental Impact
- Community

## 🎯 NPM Scripts

```bash
npm run dev          # Start dev server (Vite)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🔑 Authentication

Uses JWT tokens stored in localStorage. Supports role-based access:
- **User:** Browse, purchase, manage profile
- **Admin:** Full product management

## 🚀 Quick Deploy

```bash
git add .
git commit -m "Your changes"
git push origin main
```

Auto deploys to EC2! Monitor at GitHub Actions.

## 📚 Documentation

- **[CI/CD Deployment Guide](CI-CD-GUIDE.md)** - Complete setup & troubleshooting

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Push to GitHub
4. CI/CD will auto deploy

## 📝 License

This project is for educational purposes.

---

**Built with 💚 for a sustainable future**
