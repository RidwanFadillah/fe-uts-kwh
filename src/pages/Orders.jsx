import { useState } from "react";
import { getToken } from "../services/auth";

export default function Orders() {
  const token = getToken();
  const [activeTab, setActiveTab] = useState("all");

  if (!token) {
    window.location.href = "/login";
    return null;
  }

  // Dummy data
  const orders = [
    {
      id: "ORD-2025-001",
      date: "15 Jan 2025",
      total: 250000,
      status: "delivered",
      items: [
        { name: "Tas Daur Ulang Premium", qty: 1, price: 150000, image: null },
        { name: "Botol Minum Eco", qty: 2, price: 50000, image: null },
      ]
    },
    {
      id: "ORD-2025-002",
      date: "12 Jan 2025",
      total: 180000,
      status: "shipping",
      items: [
        { name: "Notebook dari Kertas Daur Ulang", qty: 3, price: 60000, image: null },
      ]
    },
    {
      id: "ORD-2025-003",
      date: "8 Jan 2025",
      total: 320000,
      status: "processing",
      items: [
        { name: "Tempat Pensil Unik", qty: 2, price: 80000, image: null },
        { name: "Dompet Ramah Lingkungan", qty: 1, price: 160000, image: null },
      ]
    },
  ];

  const getStatusBadge = (status) => {
    const badges = {
      delivered: { color: "bg-green-100 text-green-700", text: "Selesai" },
      shipping: { color: "bg-blue-100 text-blue-700", text: "Dalam Pengiriman" },
      processing: { color: "bg-amber-100 text-amber-700", text: "Diproses" },
      cancelled: { color: "bg-red-100 text-red-700", text: "Dibatalkan" },
    };
    return badges[status] || badges.processing;
  };

  const filteredOrders = activeTab === "all" ? orders : orders.filter(o => o.status === activeTab);

  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-space text-3xl font-bold text-warm-gray-900 mb-2">
            Pesanan Saya
          </h1>
          <p className="font-inter text-sm text-warm-gray-600">
            Kelola dan lacak semua pesanan Anda
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-warm-gray-200 p-2 mb-6">
          <div className="flex gap-2 overflow-x-auto">
            {[
              { key: "all", label: "Semua" },
              { key: "processing", label: "Diproses" },
              { key: "shipping", label: "Dikirim" },
              { key: "delivered", label: "Selesai" },
              { key: "cancelled", label: "Dibatalkan" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`font-inter px-6 py-2.5 rounded-lg font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === tab.key
                    ? "bg-forest-600 text-white"
                    : "text-warm-gray-700 hover:bg-warm-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div className="bg-white rounded-xl border border-warm-gray-200 p-12 text-center">
            <div className="w-16 h-16 bg-warm-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-warm-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="font-space text-lg font-semibold text-warm-gray-900 mb-2">
              Belum Ada Pesanan
            </h3>
            <p className="font-inter text-sm text-warm-gray-600 mb-6">
              Mulai belanja produk ramah lingkungan sekarang!
            </p>
            <a
              href="/"
              className="inline-block font-inter bg-forest-600 hover:bg-forest-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors"
            >
              Belanja Sekarang
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-xl border border-warm-gray-200 overflow-hidden">
                {/* Order Header */}
                <div className="bg-warm-gray-50 px-6 py-4 border-b border-warm-gray-200">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="font-space text-sm font-bold text-warm-gray-900">{order.id}</div>
                        <div className="font-inter text-xs text-warm-gray-600">Tanggal: {order.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`font-inter text-xs font-medium px-3 py-1.5 rounded ${getStatusBadge(order.status).color}`}>
                        {getStatusBadge(order.status).text}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="w-20 h-20 bg-warm-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-8 h-8 text-warm-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-inter text-sm font-medium text-warm-gray-900 mb-1">{item.name}</h4>
                          <p className="font-inter text-xs text-warm-gray-600">Jumlah: {item.qty}</p>
                          <p className="font-space text-sm font-bold text-warm-gray-900 mt-2">
                            Rp{(item.price * item.qty).toLocaleString('id-ID')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Footer */}
                  <div className="border-t border-warm-gray-200 pt-4 flex items-center justify-between">
                    <div>
                      <div className="font-inter text-xs text-warm-gray-600 mb-1">Total Pembayaran</div>
                      <div className="font-space text-xl font-bold text-warm-gray-900">
                        Rp{order.total.toLocaleString('id-ID')}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {order.status === "delivered" && (
                        <button className="font-inter border-2 border-forest-600 text-forest-600 hover:bg-forest-50 font-medium px-4 py-2 rounded-lg transition-colors text-sm">
                          Beli Lagi
                        </button>
                      )}
                      <button className="font-inter bg-forest-600 hover:bg-forest-700 text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm">
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
