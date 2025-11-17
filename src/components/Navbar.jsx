import { getToken, logout } from "../services/auth";
import { useState } from "react";

export default function Navbar() {
  const token = getToken();
  const [searchQuery, setSearchQuery] = useState("");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);

  const isAdmin = token
    ? JSON.parse(atob(token.split(".")[1])).role === "admin"
    : false;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <nav className="bg-white border-b border-warm-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6">
        {/* Main Navbar */}
        <div className="flex items-center justify-between py-4 gap-6">
          {/* Left - Logo */}
          <a href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-8 h-8 bg-forest-600 rounded-lg flex items-center justify-center group-hover:bg-forest-700 transition-colors">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" opacity="0.2"/>
                <path d="M17 8C14.5 8 13 9.5 13 12C13 14.5 14.5 16 17 16C17.8 16 18.5 15.7 19 15.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M7 8C9.5 8 11 9.5 11 12C11 14.5 9.5 16 7 16C6.2 16 5.5 15.7 5 15.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <span className="text-xl font-inter font-semibold text-warm-gray-900 hidden lg:block">
              ZeroWaste
            </span>
          </a>

          {/* Center - Search Box */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari produk ramah lingkungan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="font-inter w-full pl-12 pr-4 py-2.5 border-2 border-warm-gray-300 rounded-lg focus:outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20 transition-all text-sm"
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-warm-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </form>

          {/* Right - Icons & Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {!token ? (
              <>
                <a
                  href="/login"
                  className="font-inter text-sm font-medium text-warm-gray-700 hover:text-forest-600 px-4 py-2 transition-colors hidden md:block"
                >
                  Masuk
                </a>
                <a
                  href="/register"
                  className="font-inter text-sm font-medium bg-forest-600 hover:bg-forest-700 text-white px-5 py-2.5 rounded-lg transition-colors"
                >
                  Daftar
                </a>
              </>
            ) : (
              <>
                {/* Cart Icon */}
                <a
                  href="/cart"
                  className="relative p-2 text-warm-gray-700 hover:text-forest-600 transition-colors"
                  title="Keranjang"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                    0
                  </span>
                </a>

                {/* Notifications Icon */}
                <button
                  className="relative p-2 text-warm-gray-700 hover:text-forest-600 transition-colors"
                  title="Notifikasi"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                    3
                  </span>
                </button>

                {/* Chat Icon */}
                <a
                  href="/messages"
                  className="relative p-2 text-warm-gray-700 hover:text-forest-600 transition-colors"
                  title="Pesan"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                    5
                  </span>
                </a>

                {/* User Menu Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 p-2 text-warm-gray-700 hover:text-forest-600 transition-colors"
                  >
                    <div className="w-8 h-8 bg-forest-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <svg className="w-4 h-4 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-warm-gray-200 py-2 z-50">
                      <a href="/profile" className="flex items-center gap-3 px-4 py-2.5 text-sm font-inter text-warm-gray-700 hover:bg-cream transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Profil Saya
                      </a>
                      <a href="/orders" className="flex items-center gap-3 px-4 py-2.5 text-sm font-inter text-warm-gray-700 hover:bg-cream transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        Pesanan Saya
                      </a>
                      <a href="/wishlist" className="flex items-center gap-3 px-4 py-2.5 text-sm font-inter text-warm-gray-700 hover:bg-cream transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        Wishlist
                      </a>
                      <a href="/green-points" className="flex items-center gap-3 px-4 py-2.5 text-sm font-inter text-warm-gray-700 hover:bg-cream transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Poin Hijau
                      </a>
                      {isAdmin && (
                        <a href="/add" className="flex items-center gap-3 px-4 py-2.5 text-sm font-inter text-warm-gray-700 hover:bg-cream transition-colors border-t border-warm-gray-200 mt-2 pt-3">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                          Tambah Produk
                        </a>
                      )}
                      <button
                        onClick={() => {
                          logout();
                          window.location.href = "/login";
                        }}
                        className="flex items-center gap-3 w-full px-4 py-2.5 text-sm font-inter text-red-600 hover:bg-red-50 transition-colors border-t border-warm-gray-200 mt-2 pt-3"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Keluar
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Secondary Menu - Categories & Links */}
        <div className="border-t border-warm-gray-100 py-3 hidden md:block">
          <div className="flex items-center gap-6">
            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowCategoryMenu(!showCategoryMenu)}
                className="flex items-center gap-2 font-inter text-sm font-medium text-warm-gray-700 hover:text-forest-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                Kategori
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showCategoryMenu && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-warm-gray-200 py-2 z-50">
                  <a href="/category/bottle" className="block px-4 py-2.5 text-sm font-inter text-warm-gray-700 hover:bg-cream transition-colors">
                    ♻️ Botol Bekas
                  </a>
                  <a href="/category/plastic" className="block px-4 py-2.5 text-sm font-inter text-warm-gray-700 hover:bg-cream transition-colors">
                    ♻️ Plastik Daur Ulang
                  </a>
                  <a href="/category/paper" className="block px-4 py-2.5 text-sm font-inter text-warm-gray-700 hover:bg-cream transition-colors">
                    ♻️ Kertas Daur Ulang
                  </a>
                  <a href="/category/textile" className="block px-4 py-2.5 text-sm font-inter text-warm-gray-700 hover:bg-cream transition-colors">
                    ♻️ Tekstil Bekas
                  </a>
                  <a href="/category/electronic" className="block px-4 py-2.5 text-sm font-inter text-warm-gray-700 hover:bg-cream transition-colors">
                    ♻️ Elektronik Bekas
                  </a>
                  <a href="/category/all" className="block px-4 py-2.5 text-sm font-inter text-forest-600 hover:bg-cream transition-colors border-t border-warm-gray-200 mt-2 pt-3 font-medium">
                    Lihat Semua Kategori →
                  </a>
                </div>
              )}
            </div>

            <a href="/" className="font-inter text-sm font-medium text-warm-gray-700 hover:text-forest-600 transition-colors">
              Beranda
            </a>
            <a href="/about" className="font-inter text-sm font-medium text-warm-gray-700 hover:text-forest-600 transition-colors">
              Tentang Kami
            </a>
            <a href="/how-it-works" className="font-inter text-sm font-medium text-warm-gray-700 hover:text-forest-600 transition-colors">
              Cara Kerja
            </a>
            <a href="/impact" className="font-inter text-sm font-medium text-warm-gray-700 hover:text-forest-600 transition-colors">
              Dampak Lingkungan
            </a>
            <a href="/community" className="font-inter text-sm font-medium text-warm-gray-700 hover:text-forest-600 transition-colors">
              Komunitas
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
