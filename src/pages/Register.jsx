import { useState } from "react";
import { API_BASE_URL } from "../services/api";
import { showSuccess, showError, showLoading, closeLoading } from "../utils/sweetalert";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function register() {
    showLoading("Membuat akun...");

    const res = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    closeLoading();

    if (res.ok) {
      await showSuccess("Registrasi Berhasil!", "Silakan login dengan akun baru Anda");
      window.location.href = "/login";
    } else {
      showError("Registrasi Gagal", data.msg || "Terjadi kesalahan saat membuat akun");
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Illustration & Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-sage-600 via-forest-600 to-forest-700 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-forest-400/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" opacity="0.3"/>
                <path d="M17 8C14.5 8 13 9.5 13 12C13 14.5 14.5 16 17 16C17.8 16 18.5 15.7 19 15.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M7 8C9.5 8 11 9.5 11 12C11 14.5 9.5 16 7 16C6.2 16 5.5 15.7 5 15.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <span className="font-space text-2xl font-bold">ZeroWaste</span>
          </div>

          {/* Hero Text */}
          <h1 className="font-space text-5xl font-bold mb-6 leading-tight">
            Mulai Perjalanan<br/>Hijau Anda
          </h1>
          <p className="font-inter text-lg text-white/80 mb-12 max-w-md leading-relaxed">
            Daftar sekarang dan jadilah bagian dari komunitas yang peduli lingkungan untuk masa depan berkelanjutan.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="font-space text-4xl font-bold mb-1">10K+</div>
              <div className="font-inter text-sm text-white/70">Pengguna Aktif</div>
            </div>
            <div>
              <div className="font-space text-4xl font-bold mb-1">50K+</div>
              <div className="font-inter text-sm text-white/70">Produk Terjual</div>
            </div>
            <div>
              <div className="font-space text-4xl font-bold mb-1">100%</div>
              <div className="font-inter text-sm text-white/70">Ramah Lingkungan</div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-12 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-inter text-white/90">Akses ke ribuan produk eco-friendly</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-inter text-white/90">Bergabung dengan komunitas peduli lingkungan</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-inter text-white/90">Kontribusi nyata untuk planet bumi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-cream">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-2.5 mb-8">
            <div className="w-10 h-10 bg-forest-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" opacity="0.2"/>
                <path d="M17 8C14.5 8 13 9.5 13 12C13 14.5 14.5 16 17 16C17.8 16 18.5 15.7 19 15.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M7 8C9.5 8 11 9.5 11 12C11 14.5 9.5 16 7 16C6.2 16 5.5 15.7 5 15.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <span className="text-2xl font-space font-bold text-warm-gray-900">ZeroWaste</span>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-warm-gray-100 p-8 md:p-10">
            {/* Header */}
            <div className="mb-8">
              <h2 className="font-space text-3xl font-bold text-warm-gray-900 mb-2">
                Buat Akun Baru
              </h2>
              <p className="font-inter text-sm text-warm-gray-600">
                Bergabunglah dengan ZeroWaste hari ini
              </p>
            </div>

            {/* Form */}
            <div className="space-y-5">
              {/* Name Input */}
              <div>
                <label className="block font-inter text-sm font-medium text-warm-gray-900 mb-2">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-warm-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="font-inter w-full pl-12 pr-4 py-3 border-2 border-warm-gray-200 rounded-xl text-sm focus:outline-none focus:border-forest-600 focus:ring-4 focus:ring-forest-600/10 transition-all"
                    placeholder="Masukkan nama lengkap"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block font-inter text-sm font-medium text-warm-gray-900 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-warm-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    className="font-inter w-full pl-12 pr-4 py-3 border-2 border-warm-gray-200 rounded-xl text-sm focus:outline-none focus:border-forest-600 focus:ring-4 focus:ring-forest-600/10 transition-all"
                    placeholder="nama@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block font-inter text-sm font-medium text-warm-gray-900 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-warm-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    type="password"
                    className="font-inter w-full pl-12 pr-4 py-3 border-2 border-warm-gray-200 rounded-xl text-sm focus:outline-none focus:border-forest-600 focus:ring-4 focus:ring-forest-600/10 transition-all"
                    placeholder="Minimal 6 karakter"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={register}
                className="w-full font-inter bg-gradient-to-r from-sage-600 to-forest-600 hover:from-sage-700 hover:to-forest-700 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-sage-600/30 hover:shadow-xl hover:shadow-sage-600/40 mt-2"
              >
                Daftar Sekarang
              </button>
            </div>

            {/* Divider */}
            <div className="my-6 flex items-center gap-4">
              <div className="flex-1 h-px bg-warm-gray-200"></div>
              <span className="font-inter text-xs text-warm-gray-500">atau</span>
              <div className="flex-1 h-px bg-warm-gray-200"></div>
            </div>

            {/* Login Link */}
            <div className="text-center">
              <p className="font-inter text-sm text-warm-gray-600">
                Sudah punya akun?{" "}
                <a href="/login" className="text-forest-600 hover:text-forest-700 font-semibold transition-colors">
                  Masuk di sini
                </a>
              </p>
            </div>
          </div>

          {/* Footer Note */}
          <p className="font-inter text-xs text-warm-gray-500 text-center mt-6">
            Dengan mendaftar, Anda menyetujui{" "}
            <a href="#" className="text-forest-600 hover:underline">Syarat & Ketentuan</a>
            {" "}dan{" "}
            <a href="#" className="text-forest-600 hover:underline">Kebijakan Privasi</a>
          </p>
        </div>
      </div>
    </div>
  );
}
