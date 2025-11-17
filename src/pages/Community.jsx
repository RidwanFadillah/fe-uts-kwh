export default function Community() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-space text-4xl md:text-5xl font-bold text-warm-gray-900 mb-6">
            Komunitas ZeroWaste
          </h1>
          <p className="font-inter text-lg text-warm-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bergabunglah dengan ribuan orang yang peduli lingkungan dan buat dampak nyata bersama-sama
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl border border-warm-gray-200 p-6 text-center">
            <div className="font-space text-4xl font-bold text-forest-600 mb-2">10K+</div>
            <div className="font-inter text-sm text-warm-gray-600">Anggota Aktif</div>
          </div>
          <div className="bg-white rounded-xl border border-warm-gray-200 p-6 text-center">
            <div className="font-space text-4xl font-bold text-sage-600 mb-2">150+</div>
            <div className="font-inter text-sm text-warm-gray-600">Event Terselenggara</div>
          </div>
          <div className="bg-white rounded-xl border border-warm-gray-200 p-6 text-center">
            <div className="font-space text-4xl font-bold text-forest-600 mb-2">50+</div>
            <div className="font-inter text-sm text-warm-gray-600">Kota di Indonesia</div>
          </div>
          <div className="bg-white rounded-xl border border-warm-gray-200 p-6 text-center">
            <div className="font-space text-4xl font-bold text-sage-600 mb-2">2.5 Ton</div>
            <div className="font-inter text-sm text-warm-gray-600">Sampah Terkumpul</div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="font-space text-3xl font-bold text-warm-gray-900 mb-8 text-center">
            Keuntungan Bergabung
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-warm-gray-200 p-8">
              <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-space text-xl font-bold text-warm-gray-900 mb-3">
                Networking
              </h3>
              <p className="font-inter text-warm-gray-700 leading-relaxed">
                Terhubung dengan sesama pecinta lingkungan, berbagi ide, dan berkolaborasi dalam proyek hijau
              </p>
            </div>

            <div className="bg-white rounded-xl border border-warm-gray-200 p-8">
              <div className="w-14 h-14 bg-sage-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-space text-xl font-bold text-warm-gray-900 mb-3">
                Pembelajaran
              </h3>
              <p className="font-inter text-warm-gray-700 leading-relaxed">
                Akses eksklusif ke workshop, webinar, dan materi edukasi tentang gaya hidup berkelanjutan
              </p>
            </div>

            <div className="bg-white rounded-xl border border-warm-gray-200 p-8">
              <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="font-space text-xl font-bold text-warm-gray-900 mb-3">
                Rewards
              </h3>
              <p className="font-inter text-warm-gray-700 leading-relaxed">
                Kumpulkan poin hijau dari setiap aktivitas dan tukarkan dengan produk atau diskon spesial
              </p>
            </div>
          </div>
        </div>

        {/* Community Activities */}
        <div className="mb-16">
          <h2 className="font-space text-3xl font-bold text-warm-gray-900 mb-8 text-center">
            Aktivitas Komunitas
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Beach Cleanup */}
            <div className="bg-white rounded-xl border border-warm-gray-200 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-forest-100 to-sage-100 flex items-center justify-center">
                <span className="text-7xl">🏖️</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-forest-100 text-forest-700 text-xs font-medium px-2.5 py-1 rounded font-inter">
                    Event Bulanan
                  </span>
                </div>
                <h3 className="font-space text-xl font-bold text-warm-gray-900 mb-3">
                  Beach Cleanup
                </h3>
                <p className="font-inter text-warm-gray-700 mb-4 leading-relaxed">
                  Aksi bersih-bersih pantai rutin setiap bulan di berbagai lokasi. Mari bersama-sama
                  menjaga kebersihan pantai kita!
                </p>
                <div className="flex items-center gap-4 text-sm font-inter text-warm-gray-600">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>500+ Peserta</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span>Jakarta, Bali, Lombok</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Workshop */}
            <div className="bg-white rounded-xl border border-warm-gray-200 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-sage-100 to-forest-100 flex items-center justify-center">
                <span className="text-7xl">🎨</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-sage-100 text-sage-700 text-xs font-medium px-2.5 py-1 rounded font-inter">
                    Workshop
                  </span>
                </div>
                <h3 className="font-space text-xl font-bold text-warm-gray-900 mb-3">
                  DIY Upcycling
                </h3>
                <p className="font-inter text-warm-gray-700 mb-4 leading-relaxed">
                  Belajar mengubah sampah menjadi barang berguna. Workshop gratis setiap minggu
                  dengan mentor berpengalaman.
                </p>
                <div className="flex items-center gap-4 text-sm font-inter text-warm-gray-600">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>200+ Peserta</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Setiap Sabtu</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tree Planting */}
            <div className="bg-white rounded-xl border border-warm-gray-200 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-forest-100 to-sage-100 flex items-center justify-center">
                <span className="text-7xl">🌳</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-forest-100 text-forest-700 text-xs font-medium px-2.5 py-1 rounded font-inter">
                    Program Rutin
                  </span>
                </div>
                <h3 className="font-space text-xl font-bold text-warm-gray-900 mb-3">
                  Penanaman Pohon
                </h3>
                <p className="font-inter text-warm-gray-700 mb-4 leading-relaxed">
                  Program penanaman 10,000 pohon di berbagai wilayah Indonesia untuk mengurangi
                  jejak karbon kita bersama.
                </p>
                <div className="flex items-center gap-4 text-sm font-inter text-warm-gray-600">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <span>5,000 Pohon</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span>15 Kota</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Online Forum */}
            <div className="bg-white rounded-xl border border-warm-gray-200 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-sage-100 to-forest-100 flex items-center justify-center">
                <span className="text-7xl">💬</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-sage-100 text-sage-700 text-xs font-medium px-2.5 py-1 rounded font-inter">
                    Online 24/7
                  </span>
                </div>
                <h3 className="font-space text-xl font-bold text-warm-gray-900 mb-3">
                  Forum Diskusi
                </h3>
                <p className="font-inter text-warm-gray-700 mb-4 leading-relaxed">
                  Platform online untuk berbagi tips, bertanya, dan berdiskusi seputar gaya hidup
                  ramah lingkungan dengan ribuan anggota.
                </p>
                <div className="flex items-center gap-4 text-sm font-inter text-warm-gray-600">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                    <span>5,000+ Diskusi</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>10K+ Anggota</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Join CTA */}
        <div className="bg-gradient-to-br from-forest-600 to-sage-600 rounded-2xl p-12 text-center">
          <h2 className="font-space text-3xl font-bold text-white mb-4">
            Siap Bergabung dengan Kami?
          </h2>
          <p className="font-inter text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Daftar sekarang dan mulai perjalanan hijau Anda bersama ribuan anggota lainnya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="font-inter bg-white text-forest-600 hover:bg-warm-gray-50 font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Daftar Sekarang
            </a>
            <a
              href="/messages"
              className="font-inter border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
