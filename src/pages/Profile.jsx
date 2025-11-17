import { useState, useEffect } from "react";
import { getToken } from "../services/auth";
import { showSuccess, showLoading, closeLoading } from "../utils/sweetalert";

export default function Profile() {
  const token = getToken();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (token) {
      const decoded = JSON.parse(atob(token.split(".")[1]));
      setUser(decoded);
      setFormData({
        name: decoded.name || "",
        email: decoded.email || "",
        phone: decoded.phone || "",
        address: decoded.address || "",
      });
    }
  }, [token]);

  if (!token) {
    window.location.href = "/login";
    return null;
  }

  const handleSave = async () => {
    // TODO: Implement save to API
    showLoading("Menyimpan profil...");

    setTimeout(() => {
      closeLoading();
      showSuccess("Sukses", "Profil berhasil diperbarui!");
      setIsEditing(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-space text-3xl font-bold text-warm-gray-900 mb-2">
            Profil Saya
          </h1>
          <p className="font-inter text-sm text-warm-gray-600">
            Kelola informasi akun Anda
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-xl border border-warm-gray-200 overflow-hidden mb-6">
          {/* Cover */}
          <div className="h-32 bg-gradient-to-r from-forest-600 to-sage-600"></div>

          {/* Profile Info */}
          <div className="px-8 pb-8">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center -mt-16 mb-6">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <div className="w-28 h-28 bg-forest-600 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <button className="absolute bottom-0 right-0 w-10 h-10 bg-sage-600 hover:bg-sage-700 rounded-full flex items-center justify-center text-white transition-colors shadow-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>

              {/* User Info & Edit Button */}
              <div className="flex-1 md:mt-16">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h2 className="font-space text-2xl font-bold text-warm-gray-900 mb-1">
                      {user?.name || "User Name"}
                    </h2>
                    <p className="font-inter text-sm text-warm-gray-600">
                      {user?.email || "email@example.com"}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="bg-forest-100 text-forest-700 text-xs font-medium px-2.5 py-1 rounded font-inter">
                        {user?.role === "admin" ? "Admin" : "Member"}
                      </span>
                      <span className="bg-sage-100 text-sage-700 text-xs font-medium px-2.5 py-1 rounded font-inter">
                        ✓ Verified
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="font-inter bg-forest-600 hover:bg-forest-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    {isEditing ? "Batal" : "Edit Profil"}
                  </button>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <label className="block font-inter text-sm font-medium text-warm-gray-900 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  disabled={!isEditing}
                  className="font-inter w-full px-4 py-2.5 border border-warm-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-600/20 focus:border-forest-600 transition-all text-sm disabled:bg-warm-gray-50 disabled:text-warm-gray-600"
                />
              </div>

              <div>
                <label className="block font-inter text-sm font-medium text-warm-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  disabled={!isEditing}
                  className="font-inter w-full px-4 py-2.5 border border-warm-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-600/20 focus:border-forest-600 transition-all text-sm disabled:bg-warm-gray-50 disabled:text-warm-gray-600"
                />
              </div>

              <div>
                <label className="block font-inter text-sm font-medium text-warm-gray-900 mb-2">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  disabled={!isEditing}
                  placeholder="+62 812-3456-7890"
                  className="font-inter w-full px-4 py-2.5 border border-warm-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-600/20 focus:border-forest-600 transition-all text-sm disabled:bg-warm-gray-50 disabled:text-warm-gray-600"
                />
              </div>

              <div>
                <label className="block font-inter text-sm font-medium text-warm-gray-900 mb-2">
                  Tanggal Bergabung
                </label>
                <input
                  type="text"
                  value="17 Januari 2025"
                  disabled
                  className="font-inter w-full px-4 py-2.5 border border-warm-gray-300 rounded-lg text-sm bg-warm-gray-50 text-warm-gray-600"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block font-inter text-sm font-medium text-warm-gray-900 mb-2">
                  Alamat
                </label>
                <textarea
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  disabled={!isEditing}
                  rows={3}
                  placeholder="Jl. Contoh No. 123, Jakarta"
                  className="font-inter w-full px-4 py-2.5 border border-warm-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-600/20 focus:border-forest-600 transition-all text-sm disabled:bg-warm-gray-50 disabled:text-warm-gray-600 resize-none"
                ></textarea>
              </div>
            </div>

            {isEditing && (
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setIsEditing(false)}
                  className="font-inter border-2 border-warm-gray-300 text-warm-gray-700 hover:bg-warm-gray-50 font-medium px-6 py-2.5 rounded-lg transition-colors"
                >
                  Batal
                </button>
                <button
                  onClick={handleSave}
                  className="font-inter bg-forest-600 hover:bg-forest-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors"
                >
                  Simpan Perubahan
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-warm-gray-200 p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div>
                <div className="font-space text-2xl font-bold text-warm-gray-900">12</div>
                <div className="font-inter text-sm text-warm-gray-600">Total Pesanan</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-warm-gray-200 p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <div className="font-space text-2xl font-bold text-warm-gray-900">8</div>
                <div className="font-inter text-sm text-warm-gray-600">Wishlist</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-warm-gray-200 p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-space text-2xl font-bold text-warm-gray-900">1,250</div>
                <div className="font-inter text-sm text-warm-gray-600">Poin Hijau</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
