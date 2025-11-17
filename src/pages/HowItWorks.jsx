export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-space text-4xl md:text-5xl font-bold text-warm-gray-900 mb-6">
            Cara Kerja ZeroWaste
          </h1>
          <p className="font-inter text-lg text-warm-gray-600 max-w-3xl mx-auto leading-relaxed">
            Proses sederhana untuk mengubah sampah menjadi produk bernilai dan berkontribusi pada planet yang lebih hijau
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="bg-white rounded-xl border border-warm-gray-200 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-forest-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-space text-xl font-bold text-white">1</span>
                    </div>
                    <h2 className="font-space text-2xl font-bold text-warm-gray-900">Pengumpulan Sampah</h2>
                  </div>
                  <p className="font-inter text-warm-gray-700 leading-relaxed mb-4">
                    Kami bermitra dengan komunitas lokal dan bank sampah untuk mengumpulkan berbagai jenis sampah
                    yang masih bisa didaur ulang, seperti plastik, kertas, botol, dan tekstil bekas.
                  </p>
                  <ul className="space-y-2 font-inter text-sm text-warm-gray-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Plastik bekas (botol, kemasan, dll)
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Kertas dan kardus
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Tekstil dan kain bekas
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="aspect-square bg-gradient-to-br from-forest-100 to-sage-100 rounded-2xl flex items-center justify-center">
                  <svg className="w-32 h-32 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="aspect-square bg-gradient-to-br from-sage-100 to-forest-100 rounded-2xl flex items-center justify-center">
                  <svg className="w-32 h-32 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white rounded-xl border border-warm-gray-200 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-sage-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-space text-xl font-bold text-white">2</span>
                    </div>
                    <h2 className="font-space text-2xl font-bold text-warm-gray-900">Pemilahan & Pembersihan</h2>
                  </div>
                  <p className="font-inter text-warm-gray-700 leading-relaxed mb-4">
                    Sampah yang terkumpul dipilah berdasarkan jenis dan kondisinya. Kemudian dibersihkan
                    dengan standar kebersihan tinggi agar siap untuk proses daur ulang.
                  </p>
                  <ul className="space-y-2 font-inter text-sm text-warm-gray-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Pemilahan berdasarkan material
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Pembersihan dengan standar tinggi
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Quality control ketat
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="bg-white rounded-xl border border-warm-gray-200 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-forest-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-space text-xl font-bold text-white">3</span>
                    </div>
                    <h2 className="font-space text-2xl font-bold text-warm-gray-900">Proses Kreasi</h2>
                  </div>
                  <p className="font-inter text-warm-gray-700 leading-relaxed mb-4">
                    Pengrajin lokal yang terlatih mengubah material daur ulang menjadi produk berkualitas tinggi
                    dengan desain menarik dan fungsional.
                  </p>
                  <ul className="space-y-2 font-inter text-sm text-warm-gray-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Desain unik & kreatif
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Handmade dengan cinta
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Kualitas premium
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="aspect-square bg-gradient-to-br from-forest-100 to-sage-100 rounded-2xl flex items-center justify-center">
                  <svg className="w-32 h-32 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="aspect-square bg-gradient-to-br from-sage-100 to-forest-100 rounded-2xl flex items-center justify-center">
                  <svg className="w-32 h-32 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white rounded-xl border border-warm-gray-200 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-sage-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-space text-xl font-bold text-white">4</span>
                    </div>
                    <h2 className="font-space text-2xl font-bold text-warm-gray-900">Distribusi & Penjualan</h2>
                  </div>
                  <p className="font-inter text-warm-gray-700 leading-relaxed mb-4">
                    Produk jadi dipasarkan melalui platform ZeroWaste, siap untuk dikirim ke pelanggan
                    yang peduli lingkungan di seluruh Indonesia.
                  </p>
                  <ul className="space-y-2 font-inter text-sm text-warm-gray-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Platform online mudah diakses
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Pengiriman ke seluruh Indonesia
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Kemasan ramah lingkungan
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-gradient-to-br from-forest-600 to-sage-600 rounded-2xl p-12 mb-12 text-center">
          <h2 className="font-space text-3xl font-bold text-white mb-6">
            Dampak Positif dari Setiap Pembelian
          </h2>
          <p className="font-inter text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Setiap produk yang Anda beli berkontribusi pada lingkungan yang lebih bersih dan ekonomi lokal yang lebih kuat
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="font-space text-4xl font-bold text-white mb-2">🌍</div>
              <div className="font-inter text-white/90">Mengurangi Sampah TPA</div>
            </div>
            <div>
              <div className="font-space text-4xl font-bold text-white mb-2">💼</div>
              <div className="font-inter text-white/90">Memberdayakan Pengrajin</div>
            </div>
            <div>
              <div className="font-space text-4xl font-bold text-white mb-2">🌱</div>
              <div className="font-inter text-white/90">Melestarikan Lingkungan</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-xl border border-warm-gray-200 p-12 text-center">
          <h2 className="font-space text-3xl font-bold text-warm-gray-900 mb-4">
            Siap Memulai Perjalanan Hijau Anda?
          </h2>
          <p className="font-inter text-warm-gray-600 mb-8 max-w-2xl mx-auto">
            Jelajahi koleksi produk ramah lingkungan kami dan jadilah bagian dari solusi
          </p>
          <a
            href="/"
            className="inline-block font-inter bg-forest-600 hover:bg-forest-700 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Belanja Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}
