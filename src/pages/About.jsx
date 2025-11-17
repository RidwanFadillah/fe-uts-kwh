export default function About() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-space text-4xl md:text-5xl font-bold text-warm-gray-900 mb-6">
            Tentang ZeroWaste
          </h1>
          <p className="font-inter text-lg text-warm-gray-600 max-w-3xl mx-auto leading-relaxed">
            Platform e-commerce yang mengubah sampah menjadi produk bernilai untuk masa depan yang lebih berkelanjutan
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl border border-warm-gray-200 p-8">
            <div className="w-14 h-14 bg-forest-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="font-space text-2xl font-bold text-warm-gray-900 mb-4">Misi Kami</h2>
            <p className="font-inter text-warm-gray-700 leading-relaxed">
              Mengubah persepsi masyarakat tentang sampah dengan menciptakan ekosistem daur ulang yang berkelanjutan.
              Kami berkomitmen untuk mengurangi limbah dan memberikan nilai ekonomi pada barang bekas.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-warm-gray-200 p-8">
            <div className="w-14 h-14 bg-sage-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="font-space text-2xl font-bold text-warm-gray-900 mb-4">Visi Kami</h2>
            <p className="font-inter text-warm-gray-700 leading-relaxed">
              Menjadi platform terdepan di Indonesia dalam ekonomi sirkular, di mana setiap sampah memiliki nilai
              dan berkontribusi pada planet yang lebih hijau untuk generasi mendatang.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-br from-forest-600 to-sage-600 rounded-2xl p-12 mb-16">
          <h2 className="font-space text-3xl font-bold text-white text-center mb-12">
            Dampak Kami
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-space text-5xl font-bold text-white mb-2">10K+</div>
              <div className="font-inter text-white/80">Pengguna Aktif</div>
            </div>
            <div className="text-center">
              <div className="font-space text-5xl font-bold text-white mb-2">50K+</div>
              <div className="font-inter text-white/80">Produk Terjual</div>
            </div>
            <div className="text-center">
              <div className="font-space text-5xl font-bold text-white mb-2">2.5 Ton</div>
              <div className="font-inter text-white/80">Sampah Didaur Ulang</div>
            </div>
            <div className="text-center">
              <div className="font-space text-5xl font-bold text-white mb-2">100%</div>
              <div className="font-inter text-white/80">Ramah Lingkungan</div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-xl border border-warm-gray-200 p-12 mb-16">
          <h2 className="font-space text-3xl font-bold text-warm-gray-900 mb-8 text-center">
            Cerita Kami
          </h2>
          <div className="space-y-6 font-inter text-warm-gray-700 leading-relaxed max-w-4xl mx-auto">
            <p>
              ZeroWaste lahir dari keprihatinan mendalam terhadap meningkatnya volume sampah di Indonesia.
              Setiap tahunnya, jutaan ton sampah berakhir di tempat pembuangan akhir, mencemari lingkungan
              dan mengancam ekosistem kita.
            </p>
            <p>
              Kami percaya bahwa sampah bukan akhir dari siklus hidup suatu produk, melainkan awal dari
              kemungkinan baru. Dengan menghubungkan pengrajin lokal, komunitas daur ulang, dan konsumen
              yang peduli lingkungan, kami menciptakan ekosistem yang menguntungkan semua pihak.
            </p>
            <p>
              Melalui platform ini, kami tidak hanya menjual produk ramah lingkungan, tetapi juga
              mengedukasi masyarakat tentang pentingnya gaya hidup berkelanjutan dan memberikan dampak
              ekonomi positif bagi para pengrajin lokal.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="font-space text-3xl font-bold text-warm-gray-900 mb-8 text-center">
            Nilai-Nilai Kami
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-warm-gray-200 p-6 text-center">
              <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">♻️</span>
              </div>
              <h3 className="font-space text-xl font-semibold text-warm-gray-900 mb-3">Berkelanjutan</h3>
              <p className="font-inter text-sm text-warm-gray-600">
                Setiap keputusan kami dibuat dengan mempertimbangkan dampak jangka panjang terhadap planet
              </p>
            </div>

            <div className="bg-white rounded-xl border border-warm-gray-200 p-6 text-center">
              <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-space text-xl font-semibold text-warm-gray-900 mb-3">Komunitas</h3>
              <p className="font-inter text-sm text-warm-gray-600">
                Membangun jaringan kuat antara pengrajin, pelanggan, dan pegiat lingkungan
              </p>
            </div>

            <div className="bg-white rounded-xl border border-warm-gray-200 p-6 text-center">
              <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="font-space text-xl font-semibold text-warm-gray-900 mb-3">Inovasi</h3>
              <p className="font-inter text-sm text-warm-gray-600">
                Terus berinovasi dalam menciptakan solusi kreatif untuk masalah sampah
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-xl border border-warm-gray-200 p-12 text-center">
          <h2 className="font-space text-3xl font-bold text-warm-gray-900 mb-4">
            Bergabunglah dengan Gerakan Kami
          </h2>
          <p className="font-inter text-warm-gray-600 mb-8 max-w-2xl mx-auto">
            Bersama-sama kita bisa membuat perbedaan. Mulai belanja produk ramah lingkungan hari ini
            dan jadilah bagian dari solusi untuk masa depan yang lebih hijau.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/"
              className="font-inter bg-forest-600 hover:bg-forest-700 text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Lihat Produk
            </a>
            <a
              href="/community"
              className="font-inter border-2 border-forest-600 text-forest-600 hover:bg-forest-50 font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Gabung Komunitas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
