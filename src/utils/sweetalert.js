import Swal from 'sweetalert2';

// Custom theme configuration
const customStyles = {
  confirmButtonColor: '#047857', // forest-600
  cancelButtonColor: '#78716C', // warm-gray-500
  background: '#FAFAF9', // cream
};

// Success notification
export const showSuccess = (title, text = '') => {
  return Swal.fire({
    icon: 'success',
    title: title,
    text: text,
    ...customStyles,
    confirmButtonText: 'OK',
  });
};

// Error notification
export const showError = (title, text = '') => {
  return Swal.fire({
    icon: 'error',
    title: title,
    text: text,
    ...customStyles,
    confirmButtonText: 'OK',
  });
};

// Warning notification
export const showWarning = (title, text = '') => {
  return Swal.fire({
    icon: 'warning',
    title: title,
    text: text,
    ...customStyles,
    confirmButtonText: 'OK',
  });
};

// Info notification
export const showInfo = (title, text = '') => {
  return Swal.fire({
    icon: 'info',
    title: title,
    text: text,
    ...customStyles,
    confirmButtonText: 'OK',
  });
};

// Confirmation dialog
export const showConfirm = (title, text = '', confirmText = 'Ya', cancelText = 'Batal') => {
  return Swal.fire({
    title: title,
    text: text,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
    ...customStyles,
  });
};

// Toast notification (small notification at top-right)
export const showToast = (title, icon = 'success') => {
  return Swal.fire({
    toast: true,
    position: 'top-end',
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
};

// Loading spinner
export const showLoading = (title = 'Loading...') => {
  Swal.fire({
    title: title,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
};

// Close loading
export const closeLoading = () => {
  Swal.close();
};

// Login required dialog
export const showLoginRequired = () => {
  return Swal.fire({
    icon: 'warning',
    title: 'Login Diperlukan',
    text: 'Anda harus login terlebih dahulu untuk mengakses halaman ini',
    ...customStyles,
    confirmButtonText: 'Login Sekarang',
    showCancelButton: true,
    cancelButtonText: 'Batal',
  });
};
