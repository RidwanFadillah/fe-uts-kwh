# 📝 TODO List - ZeroWaste Project

## ✅ Yang Sudah Selesai

### Frontend
- [x] Setup React + Vite + Tailwind CSS
- [x] Design system (colors, typography, layout)
- [x] Navbar & Footer responsive
- [x] All pages (Products, Detail, Login, Register, Profile, Cart, Wishlist, Orders, Messages)
- [x] SweetAlert2 integration (notifications)
- [x] Protected routes (login required)
- [x] Role-based UI (Admin vs User)
- [x] React Router setup

### Backend Integration
- [x] API services (auth, products)
- [x] JWT authentication
- [x] Connect to backend API (http://18.140.52.216:3000)

### DevOps
- [x] GitHub Actions CI/CD
- [x] Auto deploy to AWS EC2
- [x] Nginx configuration
- [x] Environment variables setup

---

## 🔥 High Priority (Harus Dikerjakan)

### 1. **Backend API Integration - CRUD Operations** 🎯
**Current Status:** Masih dummy data/mock functions

**Yang Perlu Dikerjakan:**

#### Products Page (src/pages/Products.jsx)
- [ ] Integrate real API `GET /products`
- [ ] Real delete product functionality (connect to API)
- [ ] Loading states saat fetch data
- [ ] Error handling kalau API down
- [ ] Pagination atau infinite scroll

**File:** `src/pages/Products.jsx` (line 33-40, 42-67)

#### Product Detail (src/pages/ProductDetail.jsx)
- [ ] Real API `GET /products/:id`
- [ ] Real delete product (connect to API)
- [ ] Handle product not found (404)

**File:** `src/pages/ProductDetail.jsx` (line 33-40, 42-67)

#### Add Product (src/pages/AddProduct.jsx)
- [ ] Real API `POST /products` with image upload
- [ ] Form validation
- [ ] Handle success/error responses

**File:** `src/pages/AddProduct.jsx` (line 24-50)

#### Edit Product (src/pages/EditProduct.jsx)
- [ ] Real API `GET /products/:id` untuk load data
- [ ] Real API `PUT /products/:id` untuk update
- [ ] Handle image upload/change

**File:** `src/pages/EditProduct.jsx` (line 25-60)

---

### 2. **Shopping Cart Functionality** 🛒
**Current Status:** Dummy state, not persistent

**Yang Perlu Dikerjakan:**

- [ ] Create Cart Context (React Context API)
- [ ] Add to cart dari Products & ProductDetail
- [ ] Persist cart to localStorage
- [ ] Real cart item management (add, remove, update qty)
- [ ] Cart badge di Navbar (show item count)
- [ ] Sync cart dengan backend (optional, atau localStorage only)

**Files:**
- `src/pages/Cart.jsx` - Update dengan real state management
- `src/pages/Products.jsx` - Connect "Tambah ke Keranjang" button
- `src/pages/ProductDetail.jsx` - Connect button
- `src/components/Navbar.jsx` - Add cart badge

**Suggested Structure:**
```javascript
// src/context/CartContext.jsx
createContext with:
- cartItems state
- addToCart(product)
- removeFromCart(id)
- updateQuantity(id, qty)
- clearCart()
- getTotalPrice()
- getTotalItems()
```

---

### 3. **Wishlist Functionality** ❤️
**Current Status:** Dummy data

**Yang Perlu Dikerjakan:**

- [ ] Create Wishlist Context
- [ ] Add to wishlist button functionality
- [ ] Remove from wishlist
- [ ] Persist to localStorage
- [ ] Show heart icon (filled/outline) based on wishlist status
- [ ] Move item from wishlist to cart

**Files:**
- `src/pages/Wishlist.jsx`
- `src/pages/Products.jsx` - Add wishlist button
- `src/pages/ProductDetail.jsx` - Connect wishlist button

---

### 4. **Checkout & Payment** 💳
**Current Status:** Button only, no functionality

**Yang Perlu Dikerjakan:**

- [ ] Create Checkout page (`src/pages/Checkout.jsx`)
- [ ] Shipping address form
- [ ] Payment method selection
- [ ] Order summary
- [ ] Create order API integration (`POST /orders`)
- [ ] Payment gateway integration (Midtrans/Xendit/Manual)
- [ ] Order confirmation page
- [ ] Email notification (optional)

**Route to add:** `/checkout`

---

### 5. **Profile Management** 👤
**Current Status:** UI only, tidak save ke backend

**Yang Perlu Dikerjakan:**

- [ ] Connect `PUT /users/profile` API
- [ ] Real update profile (name, email, phone, address)
- [ ] Change password functionality
- [ ] Upload profile picture
- [ ] Update JWT token after profile update

**File:** `src/pages/Profile.jsx` (line 34-42)

---

### 6. **Orders History** 📦
**Current Status:** Dummy data

**Yang Perlu Dikerjakan:**

- [ ] Connect `GET /orders` API
- [ ] Show real user orders
- [ ] Order detail modal/page
- [ ] Order status tracking
- [ ] Cancel order functionality
- [ ] Filter by status (pending, processing, shipped, completed)

**File:** `src/pages/Orders.jsx`

---

### 7. **Messages/Chat** 💬
**Current Status:** Dummy messages, not real-time

**Yang Perlu Dikerjakan:**

**Option 1: Real-time Chat (Advanced)**
- [ ] Integrate Socket.io
- [ ] Real-time messaging
- [ ] Chat with admin
- [ ] Message persistence (database)
- [ ] Online/offline status

**Option 2: Simple Contact Form**
- [ ] Replace with contact form
- [ ] Send message to admin email
- [ ] Simpler implementation

**File:** `src/pages/Messages.jsx`

---

### 8. **Search & Filter** 🔍
**Current Status:** Search box di Navbar tidak berfungsi

**Yang Perlu Dikerjakan:**

- [ ] Search products by name/description
- [ ] Filter by category
- [ ] Filter by price range
- [ ] Sort by (price, newest, popular)
- [ ] Categories dropdown functionality

**Files:**
- `src/components/Navbar.jsx` - Connect search
- `src/pages/Products.jsx` - Add filter/sort UI

---

## 🚀 Medium Priority (Nice to Have)

### 9. **Image Upload** 📸
**Current Status:** Input text URL only

**Yang Perlu Dikerjakan:**

- [ ] File upload input
- [ ] Preview image before upload
- [ ] Upload to cloud storage (Cloudinary/AWS S3)
- [ ] Image optimization
- [ ] Multiple images per product

**Files:**
- `src/pages/AddProduct.jsx`
- `src/pages/EditProduct.jsx`

---

### 10. **Reviews & Ratings** ⭐
**Status:** Belum ada

**Yang Perlu Dikerjakan:**

- [ ] Review form di Product Detail
- [ ] Star rating component
- [ ] `POST /products/:id/reviews`
- [ ] Show reviews di product detail
- [ ] Average rating display

---

### 11. **Green Points System** 🌱
**Current Status:** Page kosong (dummy stats)

**Yang Perlu Dikerjakan:**

- [ ] Points calculation logic
- [ ] Earn points per purchase
- [ ] Redeem points for discount
- [ ] Points history
- [ ] Leaderboard (optional)

**File:** `src/pages/GreenPoints.jsx`

---

### 12. **Admin Dashboard** 📊
**Status:** Belum ada

**Yang Perlu Dikerjakan:**

- [ ] Admin dashboard page
- [ ] Sales statistics
- [ ] Order management (view all orders)
- [ ] User management
- [ ] Product analytics
- [ ] Charts (Chart.js/Recharts)

**Route to add:** `/admin/dashboard`

---

### 13. **Informational Pages - Content Update** 📄
**Current Status:** Static dummy content

**Yang Perlu Dikerjakan:**

- [ ] Update real content di About Us
- [ ] Update How It Works dengan real process
- [ ] Update Impact dengan real data/statistics
- [ ] Add real community events

**Files:**
- `src/pages/About.jsx`
- `src/pages/HowItWorks.jsx`
- `src/pages/Impact.jsx`
- `src/pages/Community.jsx`

---

## 💡 Low Priority (Future Enhancements)

### 14. **Performance Optimization**
- [ ] Code splitting (React.lazy)
- [ ] Image lazy loading
- [ ] Memoization (useMemo, useCallback)
- [ ] Bundle size optimization

---

### 15. **SEO & Meta Tags**
- [ ] React Helmet for meta tags
- [ ] Open Graph tags
- [ ] Sitemap
- [ ] robots.txt

---

### 16. **Accessibility (A11y)**
- [ ] ARIA labels
- [ ] Keyboard navigation
- [ ] Screen reader friendly
- [ ] Color contrast check

---

### 17. **PWA (Progressive Web App)**
- [ ] Service worker
- [ ] Offline mode
- [ ] Install prompt
- [ ] Push notifications

---

### 18. **Testing**
- [ ] Unit tests (Vitest)
- [ ] Integration tests
- [ ] E2E tests (Playwright/Cypress)

---

### 19. **Multi-language Support** 🌍
- [ ] i18n setup (react-i18next)
- [ ] English & Indonesian
- [ ] Language switcher

---

### 20. **Dark Mode** 🌙
- [ ] Dark theme colors
- [ ] Theme switcher toggle
- [ ] Persist theme preference

---

### 21. **Social Features**
- [ ] Share product to social media
- [ ] Login with Google/Facebook
- [ ] Referral system

---

### 22. **Email Notifications** 📧
- [ ] Order confirmation email
- [ ] Shipping notification
- [ ] Password reset email
- [ ] Newsletter signup

---

### 23. **Inventory Management**
- [ ] Stock tracking
- [ ] Low stock alerts
- [ ] Out of stock handling
- [ ] Pre-order functionality

---

### 24. **Shipping Integration**
- [ ] JNE/TIKI/Pos Indonesia API
- [ ] Calculate shipping cost
- [ ] Track shipment
- [ ] Multiple shipping options

---

### 25. **Voucher/Coupon System** 🎟️
- [ ] Create/manage coupons (admin)
- [ ] Apply coupon at checkout
- [ ] Discount validation
- [ ] Coupon expiry

---

## 🐛 Known Issues / Bugs to Fix

### Issues:
1. [ ] Navbar menu mobile responsiveness (burger menu not implemented)
2. [ ] Categories dropdown not functional
3. [ ] Notification bell icon - no real notifications
4. [ ] Chat icon - not connected to Messages page
5. [ ] Product images - handle missing/broken images better
6. [ ] Form validation - need more comprehensive validation

---

## 📋 Backend API Requirements

**API Endpoints yang Perlu:**

### Auth
- [x] POST `/auth/register`
- [x] POST `/auth/login`
- [ ] POST `/auth/logout`
- [ ] POST `/auth/refresh-token`
- [ ] POST `/auth/forgot-password`
- [ ] POST `/auth/reset-password`

### Products
- [x] GET `/products` (list all)
- [x] GET `/products/:id` (detail)
- [x] POST `/products` (admin create)
- [x] PUT `/products/:id` (admin update)
- [x] DELETE `/products/:id` (admin delete)
- [ ] GET `/products/search?q=keyword`
- [ ] GET `/products/category/:category`
- [ ] POST `/products/:id/reviews` (add review)

### Users
- [ ] GET `/users/profile`
- [ ] PUT `/users/profile`
- [ ] POST `/users/change-password`
- [ ] POST `/users/upload-avatar`

### Orders
- [ ] POST `/orders` (create order)
- [ ] GET `/orders` (user's orders)
- [ ] GET `/orders/:id` (order detail)
- [ ] PUT `/orders/:id/cancel`
- [ ] GET `/admin/orders` (all orders for admin)
- [ ] PUT `/admin/orders/:id/status` (update status)

### Cart (Optional - atau pakai localStorage only)
- [ ] GET `/cart`
- [ ] POST `/cart/add`
- [ ] PUT `/cart/:id`
- [ ] DELETE `/cart/:id`

### Wishlist (Optional)
- [ ] GET `/wishlist`
- [ ] POST `/wishlist/add`
- [ ] DELETE `/wishlist/:id`

---

## 🎯 Recommendations untuk Team

### Prioritas Kerja:
1. **Week 1:** Cart & Wishlist functionality (critical untuk e-commerce)
2. **Week 2:** Real API integration untuk CRUD products
3. **Week 3:** Checkout & Payment flow
4. **Week 4:** Orders management & Profile update
5. **Week 5+:** Nice-to-have features

### Best Practices:
- [ ] Always test locally before push
- [ ] Follow existing code style
- [ ] Add comments untuk logic kompleks
- [ ] Update dokumentasi kalau ada perubahan besar
- [ ] Bikin branch per feature (jangan langsung ke main)
- [ ] Code review sebelum merge

### Git Workflow Suggestion:
```bash
# Bikin branch baru
git checkout -b feature/cart-functionality

# Kerjain fitur
# ...

# Commit & push
git add .
git commit -m "Add cart context and functionality"
git push origin feature/cart-functionality

# Bikin Pull Request di GitHub
# Review → Merge ke main
```

---

## 📞 Contact & Collaboration

- **GitHub:** Push code & create issues
- **Documentation:** Update TODO.md setelah selesai task
- **CI/CD:** Monitor deployment di GitHub Actions

---

## 🎉 Progress Tracker

**Total Tasks:** ~80+
**Completed:** ~25 (31%)
**Remaining:** ~55 (69%)

**Update progress dengan mark [x] setiap task selesai!**

---

**Last Updated:** 2025-01-17
**Maintained by:** ZeroWaste Team
