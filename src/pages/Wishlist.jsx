import { useState } from "react";
import { getToken } from "../services/auth";
import { showConfirm, showToast } from "../utils/sweetalert";

export default function Wishlist() {
  const token = getToken();
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, title: "Tas Daur Ulang Premium", price: 150000, image_url: null },
    { id: 2, title: "Botol Minum Eco Friendly", price: 75000, image_url: null },
    { id: 3, title: "Notebook Kertas Daur Ulang", price: 45000, image_url: null },
    { id: 4, title: "Tempat Pensil Unik dari Kardus", price: 35000, image_url: null },
    { id: 5, title: "Dompet Ramah Lingkungan", price: 125000, image_url: null },
    { id: 6, title: "Tote Bag Kanvas Organik", price: 95000, image_url: null },
    { id: 7, title: "Gantungan Kunci Kayu Bekas", price: 25000, image_url: null },
    { id: 8, title: "Bingkai Foto dari Majalah Bekas", price: 85000, image_url: null },
  ]);

  if (!token) {
    window.location.href = "/login";
    return null;
  }

  const removeFromWishlist = async (id) => {
    const result = await showConfirm("Hapus Item", "Apakah Anda yakin ingin menghapus item ini dari wishlist?");
    if (result.isConfirmed) {
      setWishlistItems(wishlistItems.filter(item => item.id !== id));
      showToast("Item berhasil dihapus dari wishlist", "success");
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-space text-3xl font-bold text-warm-gray-900 mb-2">
            Wishlist Saya
          </h1>
          <p className="font-inter text-sm text-warm-gray-600">
            {wishlistItems.length} produk yang Anda simpan
          </p>
        </div>

        {/* Wishlist Grid */}
        {wishlistItems.length === 0 ? (
          <div className="bg-white rounded-xl border border-warm-gray-200 p-12 text-center">
            <div className="w-16 h-16 bg-warm-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-warm-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-space text-lg font-semibold text-warm-gray-900 mb-2">
              Wishlist Masih Kosong
            </h3>
            <p className="font-inter text-sm text-warm-gray-600 mb-6">
              Simpan produk favorit Anda di sini untuk dibeli nanti
            </p>
            <a
              href="/"
              className="inline-block font-inter bg-forest-600 hover:bg-forest-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors"
            >
              Jelajahi Produk
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-lg overflow-hidden border border-warm-gray-200 hover:border-forest-600 transition-all duration-200 relative"
              >
                {/* Remove Button */}
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-2 right-2 z-10 w-8 h-8 bg-white hover:bg-red-50 rounded-full flex items-center justify-center shadow-md transition-all opacity-0 group-hover:opacity-100"
                  title="Hapus dari wishlist"
                >
                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Product Image */}
                <a href={`/product/${item.id}`} className="block relative bg-warm-gray-50 aspect-square overflow-hidden">
                  {item.image_url ? (
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-200"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-warm-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  {/* Eco Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-sage-500 text-white text-xs font-medium px-2 py-1 rounded">
                    ♻️
                  </div>
                  {/* Heart Icon */}
                  <div className="absolute top-2.5 right-2.5 opacity-100 group-hover:opacity-0 transition-opacity">
                    <svg className="w-6 h-6 text-red-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                </a>

                {/* Product Info */}
                <div className="p-4">
                  <a href={`/product/${item.id}`}>
                    <h2 className="font-inter text-sm font-medium text-warm-gray-900 mb-2 line-clamp-2 min-h-[40px] group-hover:text-forest-600 transition-colors">
                      {item.title}
                    </h2>
                  </a>

                  {/* Price */}
                  <div className="mb-3">
                    <span className="font-space text-lg font-bold text-warm-gray-900">
                      Rp{item.price.toLocaleString('id-ID')}
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full font-inter bg-forest-600 hover:bg-forest-700 text-white text-xs font-medium py-2.5 px-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Tambah ke Keranjang
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick Actions */}
        {wishlistItems.length > 0 && (
          <div className="mt-8 bg-white rounded-xl border border-warm-gray-200 p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-space text-lg font-semibold text-warm-gray-900 mb-1">
                  Sudah Siap Berbelanja?
                </h3>
                <p className="font-inter text-sm text-warm-gray-600">
                  Tambahkan semua item ke keranjang atau hapus yang tidak diperlukan
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={async () => {
                    const result = await showConfirm("Hapus Semua Item", "Apakah Anda yakin ingin menghapus semua item dari wishlist?");
                    if (result.isConfirmed) {
                      setWishlistItems([]);
                      showToast("Semua item berhasil dihapus", "success");
                    }
                  }}
                  className="font-inter border-2 border-warm-gray-300 text-warm-gray-700 hover:bg-warm-gray-50 font-medium px-6 py-2.5 rounded-lg transition-colors"
                >
                  Hapus Semua
                </button>
                <button className="font-inter bg-forest-600 hover:bg-forest-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors">
                  Tambah Semua ke Keranjang
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
