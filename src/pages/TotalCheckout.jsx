/* eslint-disable no-unused-vars */
import { Fragment, useState } from "react";

function TotalCheckout() {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "Tas Daur Ulang Premium", price: 150000, qty: 1, image_url: null },
    { id: 2, title: "Botol Minum Eco Friendly", price: 75000, qty: 2, image_url: null },
    { id: 3, title: "Notebook Kertas Daur Ulang", price: 45000, qty: 3, image_url: null },
  ]);

  // Hitung subtotal, ongkir, total
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 200000 ? 0 : 15000;
  const total = subtotal + shipping;

  return (
    <Fragment>
      <div className="flex flex-col w-full lg:w-[45%] h-full lg:h-full lg:flex lg:fixed top-0 right-0 p-5 lg:p-10 pt-14 bg-neutral-200 space-y-6 order-1 lg:order-2 overflow-auto">
        {/* LIST ITEM */}
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-4 pb-5 border-b border-neutral-200">
            {/* Image */}
            <div className="w-24 h-24 bg-neutral-200 rounded-xl flex items-center justify-center overflow-hidden">
              {item.image_url ? (
                <img src={item.image_url} alt={item.title} className="w-full h-full object-cover" />
              ) : (
                <svg className="w-10 h-10 text-neutral-500" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16l4.5-4.5a2 2 0 012.8 0L16 16m-2-2l1.6-1.6a2 2 0 012.8 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              )}
            </div>

            {/* Item Info */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h6 className="text-base font-semibold text-neutral-900">{item.title}</h6>
                <p className="text-sm text-neutral-600">
                  Rp {item.price.toLocaleString("id-ID")} × {item.qty}
                </p>
              </div>

              {/* Total per item */}
              <p className="text-base font-bold text-neutral-900 mt-1">Rp {(item.price * item.qty).toLocaleString("id-ID")}</p>
            </div>
          </div>
        ))}

        {/* DISCOUNT */}
        <div className="flex gap-3 pt-2">
          <input
            type="text"
            placeholder="Discount code"
            className="w-full p-3 rounded-xl border border-neutral-300 bg-white 
                       focus:ring-2 focus:ring-forest-500 focus:outline-none"
          />
          <button className="px-4 py-3 bg-forest-600 text-white rounded-xl hover:bg-forest-800 transition">Apply</button>
        </div>

        {/* SUBTOTAL */}
        <div className="flex justify-between text-sm">
          <span className="font-semibold text-neutral-800">Subtotal</span>
          <span className="text-neutral-900">Rp {subtotal.toLocaleString("id-ID")}</span>
        </div>

        {/* SHIPPING */}
        <div className="flex justify-between text-sm">
          <span className="font-semibold text-neutral-800">Ongkir</span>
          <span className="text-neutral-900">{shipping === 0 ? "Gratis" : `Rp ${shipping.toLocaleString("id-ID")}`}</span>
        </div>

        {/* TOTAL */}
        <div className="flex justify-between items-center pt-2 pb-10">
          <h1 className="text-xl font-bold text-neutral-900">Total</h1>
          <h1 className="text-xl font-bold text-neutral-900">Rp {total.toLocaleString("id-ID")}</h1>
        </div>
      </div>
    </Fragment>
  );
}

export default TotalCheckout;
