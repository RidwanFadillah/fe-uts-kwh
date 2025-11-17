import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../services/api";
import { getToken } from "../services/auth";
import { showConfirm, showSuccess, showError, showLoginRequired, showToast } from "../utils/sweetalert";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = getToken();
  const isAdmin = token
    ? JSON.parse(atob(token.split(".")[1])).role === "admin"
    : false;

  useEffect(() => {
    // Check if user is logged in - if not, show login required dialog
    if (!token) {
      showLoginRequired().then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/login";
        } else {
          window.location.href = "/";
        }
      });
      return;
    }

    loadProduct();
  }, [id, token]);

  async function loadProduct() {
    setLoading(true);
    const res = await fetch(`${API_BASE_URL}/products`);
    const data = await res.json();
    const foundProduct = data.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
    setLoading(false);
  }

  async function deleteProduct() {
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
      await showSuccess("Produk Dihapus", "Produk berhasil dihapus dari sistem");
      window.location.href = "/";
    } else {
      showError("Gagal Menghapus", data.msg || "Terjadi kesalahan");
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-3 border-warm-gray-200 border-t-forest-600 mb-4"></div>
          <p className="font-inter text-sm text-warm-gray-600">Memuat detail produk...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h2 className="font-space text-2xl font-bold text-warm-gray-900 mb-4">Produk tidak ditemukan</h2>
          <a href="/" className="font-inter text-forest-600 hover:text-forest-700 font-medium">
            Kembali ke halaman utama
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        {/* Breadcrumb - Clean */}
        <nav className="flex items-center gap-2 text-sm text-warm-gray-600 mb-8 font-inter">
          <a href="/" className="hover:text-forest-600 transition-colors">Beranda</a>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-warm-gray-900 font-medium">{product.title}</span>
        </nav>

        {/* Product Detail - Modern Layout */}
        <div className="bg-white rounded-lg border border-warm-gray-200 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden bg-warm-gray-50">
                {product.image_url ? (
                  <img
                    src={product.image_url}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-24 h-24 text-warm-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>
              {/* Eco Badge - Subtle */}
              <div className="absolute top-4 right-4 bg-sage-500 text-white px-3 py-1.5 rounded font-inter text-sm font-medium flex items-center gap-1.5">
                <span>♻️</span>
                <span>Eco Friendly</span>
              </div>
            </div>

            {/* Product Info - Clean Typography */}
            <div className="flex flex-col">
              <h1 className="font-space text-3xl md:text-4xl font-bold text-warm-gray-900 mb-6">{product.title}</h1>

              {/* Price - Bold & Simple */}
              <div className="mb-8">
                <div className="font-space text-4xl font-bold text-warm-gray-900 mb-3">
                  Rp{Number(product.price).toLocaleString('id-ID')}
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-sage-50 text-sage-700 font-inter text-xs font-medium px-3 py-1.5 rounded">
                    Tersedia
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="font-space text-lg font-semibold text-warm-gray-900 mb-3">Deskripsi Produk</h2>
                <p className="font-inter text-warm-gray-700 leading-relaxed">
                  {product.caption || "Produk ramah lingkungan dari hasil daur ulang sampah."}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="font-space text-lg font-semibold text-warm-gray-900 mb-4">Keunggulan</h2>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 font-inter text-warm-gray-700">
                    <svg className="w-5 h-5 text-forest-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    100% Ramah Lingkungan
                  </li>
                  <li className="flex items-center gap-3 font-inter text-warm-gray-700">
                    <svg className="w-5 h-5 text-forest-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Kualitas Premium
                  </li>
                  <li className="flex items-center gap-3 font-inter text-warm-gray-700">
                    <svg className="w-5 h-5 text-forest-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Mendukung Daur Ulang Sampah
                  </li>
                  <li className="flex items-center gap-3 font-inter text-warm-gray-700">
                    <svg className="w-5 h-5 text-forest-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Handmade dengan Cinta
                  </li>
                </ul>
              </div>

              {/* Admin Actions - Minimal */}
              {isAdmin && (
                <div className="flex gap-3 pt-6 border-t border-warm-gray-200">
                  <a
                    href={`/edit/${product.id}`}
                    className="flex-1 text-center font-inter bg-forest-600 hover:bg-forest-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Edit Produk
                  </a>
                  <button
                    onClick={deleteProduct}
                    className="flex-1 font-inter bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Hapus Produk
                  </button>
                </div>
              )}

              {/* User Actions - Add to Cart */}
              {!isAdmin && (
                <div className="pt-6 border-t border-warm-gray-200">
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        showToast("Produk ditambahkan ke keranjang", "success");
                      }}
                      className="flex-1 font-inter bg-forest-600 hover:bg-forest-700 text-white font-medium py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Tambah ke Keranjang
                    </button>
                    <button
                      onClick={() => {
                        showToast("Produk ditambahkan ke wishlist", "success");
                      }}
                      className="font-inter border-2 border-forest-600 text-forest-600 hover:bg-forest-50 font-medium py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      Wishlist
                    </button>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-4 p-4 bg-sage-50 rounded-lg">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                      <div>
                        <div className="font-inter text-sm font-medium text-sage-900 mb-1">
                          Gratis Ongkir
                        </div>
                        <div className="font-inter text-xs text-sage-700">
                          Untuk pembelian minimal Rp200.000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Back Button - Clean */}
        <div className="mt-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 font-inter text-warm-gray-600 hover:text-warm-gray-900 font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Produk
          </a>
        </div>
      </div>
    </div>
  );
}
