import { Fragment } from "react";
import { RiArrowDropLeftLine } from "react-icons/ri";
import TimelineCheckout from "./TimelineCheckout";
import { Link } from "react-router-dom";

function FormCheckout() {
  return (
    <Fragment>
      <div className="flex flex-col w-full lg:w-[55%] h-full p-6 lg:p-10 bg-white order-2 lg:order-1">
        {/* Header */}
        <div className="flex justify-center mb-4">
          <a href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 bg-forest-600 rounded-lg flex items-center justify-center group-hover:bg-forest-700 transition-colors shadow-sm">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" opacity="0.25" />
                <path d="M17 8C14.5 8 13 9.5 13 12C13 14.5 14.5 16 17 16C17.8 16 18.5 15.7 19 15.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M7 8C9.5 8 11 9.5 11 12C11 14.5 9.5 16 7 16C6.2 16 5.5 15.7 5 15.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <span className="text-xl font-inter font-semibold text-neutral-900 hidden lg:block">ZeroWaste</span>
          </a>
        </div>

        <TimelineCheckout />

        {/* Title */}
        <div className="lg:py-5 space-y-1 lg:px-12 pt-5">
          <h1 className="text-2xl font-bold text-neutral-900">Shipping Progress</h1>
          <p className="text-sm text-neutral-600">Please provide the relevant information for your order</p>
        </div>

        {/* Form */}
        <div className="flex lg:px-10 mt-4">
          <form className="flex flex-col gap-4 w-full bg-neutral-50 p-6 rounded-2xl shadow-sm border border-neutral-200">
            {/* Contact */}
            <h1 className="font-medium text-lg text-neutral-700">Contact</h1>
            <input type="text" placeholder="Email" className="p-3 rounded-xl border border-neutral-300 text-neutral-800 focus:ring-2 focus:ring-forest-500 focus:outline-none" />

            {/* Shipping */}
            <h1 className="font-medium text-lg text-neutral-700">Shipping Address</h1>

            <input type="text" placeholder="Country/Region" className="p-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-forest-500 focus:outline-none" />

            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="Firstname" className="p-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-forest-500 focus:outline-none" />
              <input type="text" placeholder="Lastname" className="p-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-forest-500 focus:outline-none" />
            </div>

            <input type="text" placeholder="Company (Optional)" className="p-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-forest-500 focus:outline-none" />

            <input type="text" placeholder="Address" className="p-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-forest-500 focus:outline-none" />

            <div className="grid lg:grid-cols-3 gap-3">
              <input type="text" placeholder="City" className="p-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-forest-500 focus:outline-none" />

              <select className="p-3 rounded-xl border border-neutral-300 text-neutral-700 focus:ring-2 focus:ring-forest-500 bg-white">
                <option value="">Select State</option>
                <option>Ohio</option>
                <option>Delaware</option>
                <option>Florida</option>
                <option>Georgia</option>
                <option>Wisconsin</option>
                <option>Illinois</option>
                <option>Oklahoma</option>
                <option>Tennessee</option>
                <option>Kentucky</option>
                <option>North Carolina</option>
              </select>

              <input type="text" placeholder="ZIP Code" className="p-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-forest-500 focus:outline-none" />
            </div>

            <input type="text" placeholder="Phone" className="p-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-forest-500 focus:outline-none" />

            {/* Actions */}
            <hr className="border-neutral-300 my-4" />

            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center group">
                <RiArrowDropLeftLine size={32} className="text-neutral-500 group-hover:text-neutral-900 transition" />
                <span className="text-neutral-500 group-hover:text-neutral-900 text-sm">Return to cart</span>
              </Link>

              <a href="/Payment" className="bg-forest-600 hover:bg-forest-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors shadow-sm">
                Continue with Payment
              </a>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default FormCheckout;
