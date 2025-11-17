export default function Impact() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-space text-4xl md:text-5xl font-bold text-warm-gray-900 mb-6">
            Dampak Lingkungan Kami
          </h1>
          <p className="font-inter text-lg text-warm-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bersama-sama kita menciptakan perubahan nyata untuk planet yang lebih hijau dan masa depan yang berkelanjutan
          </p>
        </div>

        {/* Main Stats */}
        <div className="bg-gradient-to-br from-forest-600 via-sage-600 to-forest-700 rounded-2xl p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-space text-6xl font-bold text-white mb-3">2.5</div>
              <div className="font-inter text-xl text-white mb-2">Ton Sampah</div>
              <div className="font-inter text-sm text-white/80">Didaur ulang tahun ini</div>
            </div>
            <div className="text-center">
              <div className="font-space text-6xl font-bold text-white mb-3">50K+</div>
              <div className="font-inter text-xl text-white mb-2">Produk</div>
              <div className="font-inter text-sm text-white/80">Terjual & digunakan</div>
            </div>
            <div className="text-center">
              <div className="font-space text-6xl font-bold text-white mb-3">1.2K</div>
              <div className="font-inter text-xl text-white mb-2">Ton CO₂</div>
              <div className="font-inter text-sm text-white/80">Emisi karbon dikurangi</div>
            </div>
            <div className="text-center">
              <div className="font-space text-6xl font-bold text-white mb-3">10K+</div>
              <div className="font-inter text-xl text-white mb-2">Pengguna</div>
              <div className="font-inter text-sm text-white/80">Peduli lingkungan</div>
            </div>
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="mb-16">
          <h2 className="font-space text-3xl font-bold text-warm-gray-900 mb-8 text-center">
            Dampak Terhadap Lingkungan
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-warm-gray-200 p-8">
              <div className="w-16 h-16 bg-forest-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-4xl">🌊</span>
              </div>
              <h3 className="font-space text-xl font-bold text-warm-gray-900 mb-3">
                Mengurangi Pencemaran
              </h3>
              <p className="font-inter text-warm-gray-700 mb-4 leading-relaxed">
                Setiap ton sampah yang didaur ulang mencegah pencemaran air dan tanah di lingkungan sekitar TPA.
              </p>
              <div className="font-space text-3xl font-bold text-forest-600">-80%</div>
              <div className="font-inter text-sm text-warm-gray-600">Pencemaran plastik</div>
            </div>

            <div className="bg-white rounded-xl border border-warm-gray-200 p-8">
              <div className="w-16 h-16 bg-sage-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-4xl">🌳</span>
              </div>
              <h3 className="font-space text-xl font-bold text-warm-gray-900 mb-3">
                Melestarikan Sumber Daya
              </h3>
              <p className="font-inter text-warm-gray-700 mb-4 leading-relaxed">
                Dengan mendaur ulang, kita mengurangi kebutuhan bahan baku baru dan melestarikan hutan.
              </p>
              <div className="font-space text-3xl font-bold text-sage-600">5,000+</div>
              <div className="font-inter text-sm text-warm-gray-600">Pohon diselamatkan</div>
            </div>

            <div className="bg-white rounded-xl border border-warm-gray-200 p-8">
              <div className="w-16 h-16 bg-forest-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-4xl">💨</span>
              </div>
              <h3 className="font-space text-xl font-bold text-warm-gray-900 mb-3">
                Menurunkan Emisi Karbon
              </h3>
              <p className="font-inter text-warm-gray-700 mb-4 leading-relaxed">
                Proses daur ulang menghasilkan emisi CO₂ yang jauh lebih rendah dibanding produksi baru.
              </p>
              <div className="font-space text-3xl font-bold text-forest-600">-65%</div>
              <div className="font-inter text-sm text-warm-gray-600">Emisi gas rumah kaca</div>
            </div>
          </div>
        </div>

        {/* Social Impact */}
        <div className="mb-16">
          <h2 className="font-space text-3xl font-bold text-warm-gray-900 mb-8 text-center">
            Dampak Sosial & Ekonomi
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-warm-gray-200 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-forest-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">👥</span>
                </div>
                <h3 className="font-space text-2xl font-bold text-warm-gray-900">
                  Pemberdayaan Masyarakat
                </h3>
              </div>
              <p className="font-inter text-warm-gray-700 mb-6 leading-relaxed">
                Kami memberdayakan 500+ pengrajin lokal dan pekerja bank sampah, memberikan mereka
                penghasilan stabil dan keterampilan baru.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="font-space text-3xl font-bold text-forest-600 mb-1">500+</div>
                  <div className="font-inter text-sm text-warm-gray-600">Pengrajin aktif</div>
                </div>
                <div>
                  <div className="font-space text-3xl font-bold text-forest-600 mb-1">50+</div>
                  <div className="font-inter text-sm text-warm-gray-600">Bank sampah mitra</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-warm-gray-200 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-sage-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="font-space text-2xl font-bold text-warm-gray-900">
                  Edukasi Lingkungan
                </h3>
              </div>
              <p className="font-inter text-warm-gray-700 mb-6 leading-relaxed">
                Melalui workshop dan kampanye, kami mengedukasi masyarakat tentang pentingnya
                gaya hidup berkelanjutan dan pengelolaan sampah yang benar.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="font-space text-3xl font-bold text-sage-600 mb-1">100+</div>
                  <div className="font-inter text-sm text-warm-gray-600">Workshop terselenggara</div>
                </div>
                <div>
                  <div className="font-space text-3xl font-bold text-sage-600 mb-1">25K+</div>
                  <div className="font-inter text-sm text-warm-gray-600">Peserta teredukasi</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Chart */}
        <div className="bg-white rounded-xl border border-warm-gray-200 p-12 mb-16">
          <h2 className="font-space text-3xl font-bold text-warm-gray-900 mb-8 text-center">
            Perbandingan: Produk Baru vs Daur Ulang
          </h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {/* Energy */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="font-inter font-medium text-warm-gray-900">Penggunaan Energi</span>
                <span className="font-space font-bold text-forest-600">-70%</span>
              </div>
              <div className="h-3 bg-warm-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-forest-600 to-sage-500" style={{width: '30%'}}></div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="font-inter text-xs text-warm-gray-600">Daur Ulang (30%)</span>
                <span className="font-inter text-xs text-warm-gray-400">Produk Baru (100%)</span>
              </div>
            </div>

            {/* Water */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="font-inter font-medium text-warm-gray-900">Penggunaan Air</span>
                <span className="font-space font-bold text-forest-600">-60%</span>
              </div>
              <div className="h-3 bg-warm-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-forest-600 to-sage-500" style={{width: '40%'}}></div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="font-inter text-xs text-warm-gray-600">Daur Ulang (40%)</span>
                <span className="font-inter text-xs text-warm-gray-400">Produk Baru (100%)</span>
              </div>
            </div>

            {/* Emissions */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="font-inter font-medium text-warm-gray-900">Emisi CO₂</span>
                <span className="font-space font-bold text-forest-600">-65%</span>
              </div>
              <div className="h-3 bg-warm-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-forest-600 to-sage-500" style={{width: '35%'}}></div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="font-inter text-xs text-warm-gray-600">Daur Ulang (35%)</span>
                <span className="font-inter text-xs text-warm-gray-400">Produk Baru (100%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Goals */}
        <div className="bg-gradient-to-br from-sage-600 to-forest-600 rounded-2xl p-12 mb-12">
          <h2 className="font-space text-3xl font-bold text-white mb-8 text-center">
            Target Kami di 2025
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-space text-5xl font-bold text-white mb-3">5 Ton</div>
              <div className="font-inter text-white/90">Sampah didaur ulang per tahun</div>
            </div>
            <div>
              <div className="font-space text-5xl font-bold text-white mb-3">1,000</div>
              <div className="font-inter text-white/90">Pengrajin diberdayakan</div>
            </div>
            <div>
              <div className="font-space text-5xl font-bold text-white mb-3">25K+</div>
              <div className="font-inter text-white/90">Pengguna aktif</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-xl border border-warm-gray-200 p-12 text-center">
          <h2 className="font-space text-3xl font-bold text-warm-gray-900 mb-4">
            Jadilah Bagian dari Perubahan
          </h2>
          <p className="font-inter text-warm-gray-600 mb-8 max-w-2xl mx-auto">
            Setiap pembelian Anda adalah kontribusi nyata untuk planet yang lebih hijau
          </p>
          <a
            href="/"
            className="inline-block font-inter bg-forest-600 hover:bg-forest-700 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Mulai Berkontribusi
          </a>
        </div>
      </div>
    </div>
  );
}
