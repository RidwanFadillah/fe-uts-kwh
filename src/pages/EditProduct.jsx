import { useEffect, useState } from "react";
import { API_BASE_URL } from "../services/api";
import { getToken } from "../services/auth";
import { useParams } from "react-router-dom";
import { showSuccess, showError, showLoading, closeLoading } from "../utils/sweetalert";

export default function EditProduct() {
  const { id } = useParams();
  const token = getToken();

  const [product, setProduct] = useState({
    title: "",
    caption: "",
    price: "",
    image_url: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  function handleImageChange(e) {
    const file = e.target.files[0];
    setProduct({ ...product, image: file });

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  useEffect(() => {
    loadProduct();
  }, []);

  async function loadProduct() {
    const res = await fetch(`${API_BASE_URL}/products`);
    const data = await res.json();

    const found = data.find((p) => p.id == id);
    if (found) {
      setProduct({
        title: found.title,
        caption: found.caption,
        price: found.price,
        image_url: found.image_url,
        image: null,
      });
    }
  }

  async function updateProduct() {
    showLoading("Menyimpan perubahan...");

    const form = new FormData();
    form.append("title", product.title);
    form.append("caption", product.caption);
    form.append("price", product.price);

    if (product.image) {
      form.append("image", product.image);
    }

    try {
      const res = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: form,
      });

      const data = await res.json();
      closeLoading();

      if (res.ok) {
        showSuccess("Sukses", data.msg || "Produk berhasil diperbarui");
        setTimeout(() => window.location.href = "/", 1500);
      } else {
        showError("Gagal", data.msg || "Terjadi kesalahan saat memperbarui produk");
      }
    } catch (error) {
      closeLoading();
      showError("Gagal", "Terjadi kesalahan saat memperbarui produk");
    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-6 max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <a href="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-4">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali
          </a>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
            Edit Produk
          </h1>
          <p className="text-gray-600 mt-2">Perbarui informasi produk</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-xl p-8">
          <div className="space-y-6">
            {/* Title Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nama Produk <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="input-field"
                placeholder="Nama produk"
                value={product.title}
                onChange={(e) =>
                  setProduct({ ...product, title: e.target.value })
                }
              />
            </div>

            {/* Caption Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Deskripsi Produk <span className="text-red-500">*</span>
              </label>
              <textarea
                className="input-field min-h-[100px] resize-y"
                placeholder="Deskripsi produk"
                value={product.caption}
                onChange={(e) =>
                  setProduct({ ...product, caption: e.target.value })
                }
              />
            </div>

            {/* Price Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Harga (Rp) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 font-semibold">Rp</span>
                </div>
                <input
                  type="number"
                  className="input-field pl-12"
                  placeholder="50000"
                  value={product.price}
                  onChange={(e) =>
                    setProduct({ ...product, price: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Image Section */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Foto Produk
              </label>

              {/* Current Image or New Preview */}
              {(imagePreview || product.image_url) && (
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">
                    {imagePreview ? "Preview Gambar Baru" : "Gambar Saat Ini"}
                  </p>
                  <img
                    src={imagePreview || product.image_url}
                    alt="Product"
                    className="w-full h-64 object-cover rounded-lg border-2 border-gray-200"
                  />
                </div>
              )}

              {/* Upload Button */}
              <div className="relative">
                <input
                  type="file"
                  id="file-upload-edit"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <label
                  htmlFor="file-upload-edit"
                  className="flex items-center justify-center gap-2 w-full border-2 border-dashed border-gray-300 hover:border-blue-500 rounded-lg p-6 cursor-pointer transition-all bg-gray-50 hover:bg-blue-50"
                >
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div className="text-center">
                    <p className="text-gray-700 font-semibold">
                      {product.image ? product.image.name : "Klik untuk ganti gambar"}
                    </p>
                    <p className="text-gray-500 text-sm">PNG, JPG hingga 5MB</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={updateProduct}
                className="btn-primary flex-1"
              >
                <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Simpan Perubahan
              </button>
              <a
                href="/"
                className="flex-1 text-center bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-all"
              >
                Batal
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
