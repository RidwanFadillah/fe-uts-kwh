import { useState } from "react";
import { getToken } from "../services/auth";
import { showConfirm, showToast } from "../utils/sweetalert";

export default function Cart() {
  const token = getToken();
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "Tas Daur Ulang Premium", price: 150000, qty: 1, image_url: null },
    { id: 2, title: "Botol Minum Eco Friendly", price: 75000, qty: 2, image_url: null },
    { id: 3, title: "Notebook Kertas Daur Ulang", price: 45000, qty: 3, image_url: null },
  ]);

  if (!token) {
    window.location.href = "/login";
    return null;
  }

  const updateQty = (id, delta) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return { ...item, qty: Math.max(1, newQty) };
      }
      return item;
    }));
  };

  const removeItem = async (id) => {
    const result = await showConfirm("Hapus Item", "Apakah Anda yakin ingin menghapus item ini dari keranjang?");
    if (result.isConfirmed) {
      setCartItems(cartItems.filter(item => item.id !== id));
      showToast("Item berhasil dihapus", "success");
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const shipping = subtotal > 200000 ? 0 : 15000;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-space text-3xl font-bold text-warm-gray-900 mb-2">
            Keranjang Belanja
          </h1>
          <p className="font-inter text-sm text-warm-gray-600">
            {cartItems.length} item dalam keranjang
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-xl border border-warm-gray-200 p-12 text-center">
            <div className="w-16 h-16 bg-warm-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-warm-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-space text-lg font-semibold text-warm-gray-900 mb-2">
              Keranjang Masih Kosong
            </h3>
            <p className="font-inter text-sm text-warm-gray-600 mb-6">
              Yuk belanja produk ramah lingkungan sekarang!
            </p>
            <a
              href="/"
              className="inline-block font-inter bg-forest-600 hover:bg-forest-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors"
            >
              Mulai Belanja
            </a>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl border border-warm-gray-200 p-6 hover:border-forest-600 transition-all">
                  <div className="flex gap-6">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-warm-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-10 h-10 text-warm-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-inter text-base font-medium text-warm-gray-900 line-clamp-2">
                          {item.title}
                        </h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-warm-gray-400 hover:text-red-600 transition-colors flex-shrink-0 ml-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQty(item.id, -1)}
                            className="w-8 h-8 border-2 border-warm-gray-300 rounded-lg flex items-center justify-center hover:border-forest-600 hover:text-forest-600 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="font-space text-lg font-medium text-warm-gray-900 w-8 text-center">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateQty(item.id, 1)}
                            className="w-8 h-8 border-2 border-warm-gray-300 rounded-lg flex items-center justify-center hover:border-forest-600 hover:text-forest-600 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <div className="font-space text-xl font-bold text-warm-gray-900">
                            Rp{(item.price * item.qty).toLocaleString('id-ID')}
                          </div>
                          <div className="font-inter text-xs text-warm-gray-600">
                            @Rp{item.price.toLocaleString('id-ID')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-warm-gray-200 p-6 sticky top-24">
                <h2 className="font-space text-xl font-bold text-warm-gray-900 mb-6">
                  Ringkasan Pesanan
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between font-inter text-sm">
                    <span className="text-warm-gray-600">Subtotal ({cartItems.length} item)</span>
                    <span className="font-medium text-warm-gray-900">Rp{subtotal.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between font-inter text-sm">
                    <span className="text-warm-gray-600">Ongkir</span>
                    <span className="font-medium text-warm-gray-900">
                      {shipping === 0 ? "Gratis" : `Rp${shipping.toLocaleString('id-ID')}`}
                    </span>
                  </div>
                  {shipping === 0 && (
                    <div className="flex items-center gap-2 bg-green-50 text-green-700 p-3 rounded-lg">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-inter text-xs">Gratis ongkir untuk pembelian di atas Rp200.000</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-warm-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-space text-lg font-semibold text-warm-gray-900">Total</span>
                    <span className="font-space text-2xl font-bold text-forest-600">
                      Rp{total.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>

                <button className="w-full font-inter bg-forest-600 hover:bg-forest-700 text-white font-medium py-3.5 rounded-lg transition-colors mb-3">
                  Checkout
                </button>
                <a
                  href="/"
                  className="block w-full font-inter border-2 border-forest-600 text-forest-600 hover:bg-forest-50 font-medium py-3 text-center rounded-lg transition-colors"
                >
                  Lanjut Belanja
                </a>

                {/* Promo Info */}
                <div className="mt-6 p-4 bg-sage-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                    <div>
                      <div className="font-inter text-sm font-medium text-sage-900 mb-1">
                        Dapatkan Poin Hijau!
                      </div>
                      <div className="font-inter text-xs text-sage-700">
                        +{Math.floor(total / 10000)} poin dari transaksi ini
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
