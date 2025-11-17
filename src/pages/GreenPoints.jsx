import { getToken } from "../services/auth";

export default function GreenPoints() {
  const token = getToken();

  if (!token) {
    window.location.href = "/login";
    return null;
  }

  const points = 1250;
  const tier = "Gold";

  const pointsHistory = [
    { id: 1, activity: "Pembelian Produk", points: +150, date: "15 Jan 2025", type: "earn" },
    { id: 2, activity: "Tukar Voucher 50K", points: -500, date: "12 Jan 2025", type: "redeem" },
    { id: 3, activity: "Review Produk", points: +50, date: "10 Jan 2025", type: "earn" },
    { id: 4, activity: "Pembelian Produk", points: +200, date: "8 Jan 2025", type: "earn" },
    { id: 5, activity: "Bergabung dengan Komunitas", points: +100, date: "5 Jan 2025", type: "earn" },
    { id: 6, activity: "Tukar Produk Gratis", points: -1000, date: "2 Jan 2025", type: "redeem" },
  ];

  const rewards = [
    { id: 1, name: "Voucher Diskon 50K", points: 500, stock: "Tersedia" },
    { id: 2, name: "Produk Gratis Pilihan", points: 1000, stock: "Tersedia" },
    { id: 3, name: "Voucher Diskon 100K", points: 1500, stock: "Tersedia" },
    { id: 4, name: "Free Shipping", points: 300, stock: "Tersedia" },
    { id: 5, name: "Workshop Gratis", points: 800, stock: "Terbatas" },
    { id: 6, name: "Merchandise Eksklusif", points: 1200, stock: "Tersedia" },
  ];

  const getTierColor = (tier) => {
    const colors = {
      Bronze: "from-amber-600 to-amber-700",
      Silver: "from-gray-400 to-gray-500",
      Gold: "from-amber-500 to-amber-600",
      Platinum: "from-slate-300 to-slate-400",
    };
    return colors[tier] || colors.Bronze;
  };

  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-space text-3xl font-bold text-warm-gray-900 mb-2">
            Poin Hijau
          </h1>
          <p className="font-inter text-sm text-warm-gray-600">
            Kumpulkan poin dan tukar dengan reward menarik
          </p>
        </div>

        {/* Points Card */}
        <div className={`bg-gradient-to-br ${getTierColor(tier)} rounded-2xl p-8 mb-8 text-white relative overflow-hidden`}>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl -ml-24 -mb-24"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="font-inter text-sm text-white/80 mb-2">Total Poin Anda</div>
                <div className="font-space text-5xl font-bold">{points.toLocaleString('id-ID')}</div>
              </div>
              <div className="text-right">
                <div className="font-inter text-sm text-white/80 mb-2">Status Member</div>
                <div className="font-space text-3xl font-bold">{tier}</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="font-inter text-xs text-white/80 mb-1">Poin Didapat</div>
                <div className="font-space text-2xl font-bold">2,150</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="font-inter text-xs text-white/80 mb-1">Poin Ditukar</div>
                <div className="font-space text-2xl font-bold">900</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="font-inter text-xs text-white/80 mb-1">Aktivitas</div>
                <div className="font-space text-2xl font-bold">15x</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Rewards Catalog */}
          <div>
            <h2 className="font-space text-2xl font-bold text-warm-gray-900 mb-6">
              Tukar Poin
            </h2>
            <div className="space-y-4">
              {rewards.map((reward) => (
                <div key={reward.id} className="bg-white rounded-xl border border-warm-gray-200 p-6 hover:border-forest-600 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-space text-lg font-semibold text-warm-gray-900 mb-1">
                        {reward.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="font-space text-2xl font-bold text-forest-600">
                          {reward.points}
                        </span>
                        <span className="font-inter text-sm text-warm-gray-600">poin</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`font-inter text-xs font-medium px-2.5 py-1 rounded ${
                        reward.stock === "Tersedia"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}>
                        {reward.stock}
                      </span>
                    </div>
                  </div>
                  <button
                    disabled={points < reward.points}
                    className={`w-full font-inter font-medium py-2.5 px-4 rounded-lg transition-colors ${
                      points >= reward.points
                        ? "bg-forest-600 hover:bg-forest-700 text-white"
                        : "bg-warm-gray-200 text-warm-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {points >= reward.points ? "Tukar Sekarang" : "Poin Tidak Cukup"}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Points History */}
          <div>
            <h2 className="font-space text-2xl font-bold text-warm-gray-900 mb-6">
              Riwayat Poin
            </h2>
            <div className="bg-white rounded-xl border border-warm-gray-200 divide-y divide-warm-gray-200">
              {pointsHistory.map((history) => (
                <div key={history.id} className="p-4 hover:bg-warm-gray-50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-inter text-sm font-medium text-warm-gray-900">
                      {history.activity}
                    </h3>
                    <span className={`font-space text-lg font-bold ${
                      history.type === "earn" ? "text-green-600" : "text-red-600"
                    }`}>
                      {history.points > 0 ? "+" : ""}{history.points}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-warm-gray-600 font-inter">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {history.date}
                  </div>
                </div>
              ))}
            </div>

            {/* How to Earn */}
            <div className="mt-8 bg-gradient-to-br from-sage-600 to-forest-600 rounded-xl p-6 text-white">
              <h3 className="font-space text-xl font-bold mb-4">Cara Mendapatkan Poin</h3>
              <ul className="space-y-3 font-inter text-sm">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Belanja produk (+10 poin per Rp10,000)</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Tulis review produk (+50 poin)</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ikut event komunitas (+100 poin)</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ajak teman (+200 poin per referral)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
