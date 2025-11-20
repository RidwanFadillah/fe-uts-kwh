import { useEffect, useState } from "react";
import { API_BASE_URL } from "../services/api";
import { getToken } from "../services/auth";
import { showConfirm, showSuccess, showError, showToast } from "../utils/sweetalert";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [loading, setLoading] = useState(true);

  const token = getToken();
  const isAdmin = token
    ? JSON.parse(atob(token.split(".")[1])).role === "admin"
    : false;

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    filterAndSortProducts();
  }, [searchQuery, sortBy, products]);

  async function load() {
    setLoading(true);
    const res = await fetch(`${API_BASE_URL}/products`);
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  }

  function filterAndSortProducts() {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.caption && p.caption.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort
    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredProducts(filtered);
  }

  async function deleteProduct(id) {
    const result = await showConfirm(
      "Hapus Produk?",
      "Produk yang dihapus tidak dapat dikembalikan",
      "Ya, Hapus",
      "Batal"
    );

    if (!result.isConfirmed) return;

    const res = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (res.ok) {
      showToast("Produk berhasil dihapus", "success");
      load(); // refresh data setelah delete
    } else {
      showError("Gagal Menghapus", data.msg || "Terjadi kesalahan");
    }
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        {/* Header - Clean & Minimal */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="font-space text-3xl font-bold text-warm-gray-900 mb-2">
                Produk Ramah Lingkungan - CI/CD Test ✅
              </h1>
              <p className="font-inter text-sm text-warm-gray-600">
                {filteredProducts.length} produk tersedia
              </p>
            </div>
            {isAdmin && (
              <a
                href="/add"
                className="flex items-center gap-2 font-inter text-sm font-medium bg-forest-600 hover:bg-forest-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Tambah Produk
              </a>
            )}
          </div>

          {/* Search and Filter Bar - Minimal Design */}
          <div className="bg-white rounded-lg border border-warm-gray-200 p-4">
            <div className="flex flex-col md:flex-row gap-3">
              {/* Search */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-warm-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Cari produk..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="font-inter w-full pl-10 pr-4 py-2.5 border border-warm-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-forest-600 focus:border-forest-600 transition-all text-sm"
                />
              </div>

              {/* Sort */}
              <div className="md:w-56">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="font-inter w-full px-4 py-2.5 border border-warm-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-forest-600 focus:border-forest-600 transition-all bg-white text-sm"
                >
                  <option value="newest">Terbaru</option>
                  <option value="price-low">Harga Terendah</option>
                  <option value="price-high">Harga Tertinggi</option>
                  <option value="name">Nama A-Z</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Loading State - Minimal */}
        {loading && (
          <div className="flex items-center justify-center py-24">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-10 w-10 border-3 border-warm-gray-200 border-t-forest-600 mb-4"></div>
              <p className="font-inter text-sm text-warm-gray-600">Memuat produk...</p>
            </div>
          </div>
        )}

        {/* Empty State - Clean */}
        {!loading && filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-lg border border-warm-gray-200">
            <div className="mb-4">
              <svg className="w-16 h-16 mx-auto text-warm-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="font-space text-lg font-semibold text-warm-gray-900 mb-2">
              {searchQuery ? "Produk tidak ditemukan" : "Belum ada produk"}
            </h3>
            <p className="font-inter text-sm text-warm-gray-600 mb-4">
              {searchQuery ? `Tidak ada hasil untuk "${searchQuery}"` : "Produk akan muncul di sini"}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="font-inter text-sm text-forest-600 hover:text-forest-700 font-medium"
              >
                Hapus pencarian
              </button>
            )}
          </div>
        )}

        {/* Products Grid - Modern Minimalist */}
        {!loading && filteredProducts.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="group bg-white rounded-lg overflow-hidden border border-warm-gray-200 hover:border-forest-600 transition-all duration-200"
              >
                {/* Product Image - Clickable */}
                <a href={`/product/${p.id}`} className="block relative bg-warm-gray-50 aspect-square overflow-hidden">
                  {p.image_url ? (
                    <img
                      src={p.image_url}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-200"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-warm-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  {/* Eco Badge - Subtle */}
                  <div className="absolute top-2.5 right-2.5 bg-sage-500 text-white text-xs font-medium px-2 py-1 rounded">
                    ♻️
                  </div>
                </a>

                {/* Product Info - Clean Layout */}
                <div className="p-4">
                  <a href={`/product/${p.id}`}>
                    <h2 className="font-inter text-sm font-medium text-warm-gray-900 mb-2 line-clamp-2 min-h-[40px] group-hover:text-forest-600 transition-colors cursor-pointer">
                      {p.title}
                    </h2>
                  </a>

                  {/* Price - Simple & Bold */}
                  <div className="mb-3">
                    <span className="font-space text-lg font-bold text-warm-gray-900">
                      Rp{Number(p.price).toLocaleString('id-ID')}
                    </span>
                  </div>

                  {/* Admin Actions - Minimal */}
                  {isAdmin && (
                    <div className="flex gap-2 pt-3 border-t border-warm-gray-100">
                      <a
                        href={`/edit/${p.id}`}
                        className="flex-1 text-center font-inter bg-forest-600 hover:bg-forest-700 text-white text-xs font-medium py-2 px-3 rounded transition-colors"
                      >
                        Edit
                      </a>
                      <button
                        onClick={() => deleteProduct(p.id)}
                        className="flex-1 font-inter bg-red-600 hover:bg-red-700 text-white text-xs font-medium py-2 px-3 rounded transition-colors"
                      >
                        Hapus
                      </button>
                    </div>
                  )}

                  {/* User Actions - Add to Cart */}
                  {!isAdmin && token && (
                    <button
                      onClick={() => {
                        showToast("Produk ditambahkan ke keranjang", "success");
                      }}
                      className="w-full font-inter bg-forest-600 hover:bg-forest-700 text-white text-xs font-medium py-2.5 px-3 rounded transition-colors flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Tambah ke Keranjang
                    </button>
                  )}

                  {/* Guest User - Login Required */}
                  {!token && (
                    <a
                      href="/login"
                      className="block w-full font-inter bg-forest-600 hover:bg-forest-700 text-white text-xs font-medium py-2.5 px-3 rounded transition-colors text-center"
                    >
                      Login untuk Membeli
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
