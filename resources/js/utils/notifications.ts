import Swal from 'sweetalert2';

interface NotificationOptions {
  title?: string;
  text?: string;
  icon?: 'success' | 'error' | 'warning' | 'info' | 'question';
  confirmButtonText?: string;
  cancelButtonText?: string;
  showCancelButton?: boolean;
  timer?: number;
  timerProgressBar?: boolean;
}

class NotificationService {
  private getCustomTheme() {
    return {
      customClass: {
        popup: 'rounded-2xl shadow-2xl border-0',
        title: 'text-gray-900 font-bold text-xl',
        content: 'text-gray-600',
        confirmButton: 'bg-[#0ABAB5] hover:bg-[#09A6A1] text-white font-semibold py-3 px-6 rounded-lg mr-3 transition-colors',
        cancelButton: 'bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors',
        timerProgressBar: 'bg-[#0ABAB5]'
      },
      buttonsStyling: false,
      backdrop: 'rgba(0, 0, 0, 0.4)',
      allowOutsideClick: true,
      allowEscapeKey: true,
    };
  }

  success(options: NotificationOptions) {
    return Swal.fire({
      icon: 'success',
      title: options.title || 'Berhasil!',
      text: options.text,
      confirmButtonText: options.confirmButtonText || 'OK',
      timer: options.timer || 3000,
      timerProgressBar: options.timerProgressBar !== false,
      showConfirmButton: !options.timer,
      ...this.getCustomTheme()
    });
  }

  error(options: NotificationOptions) {
    return Swal.fire({
      icon: 'error',
      title: options.title || 'Oops...',
      text: options.text,
      confirmButtonText: options.confirmButtonText || 'OK',
      ...this.getCustomTheme()
    });
  }

  warning(options: NotificationOptions) {
    return Swal.fire({
      icon: 'warning',
      title: options.title || 'Perhatian!',
      text: options.text,
      confirmButtonText: options.confirmButtonText || 'OK',
      showCancelButton: options.showCancelButton || false,
      cancelButtonText: options.cancelButtonText || 'Batal',
      ...this.getCustomTheme()
    });
  }

  info(options: NotificationOptions) {
    return Swal.fire({
      icon: 'info',
      title: options.title || 'Informasi',
      text: options.text,
      confirmButtonText: options.confirmButtonText || 'OK',
      timer: options.timer || 4000,
      timerProgressBar: options.timerProgressBar !== false,
      ...this.getCustomTheme()
    });
  }

  question(options: NotificationOptions) {
    return Swal.fire({
      icon: 'question',
      title: options.title || 'Konfirmasi',
      text: options.text,
      showCancelButton: true,
      confirmButtonText: options.confirmButtonText || 'Ya',
      cancelButtonText: options.cancelButtonText || 'Tidak',
      ...this.getCustomTheme()
    });
  }

  async confirm(options: NotificationOptions) {
    const result = await Swal.fire({
      icon: 'question',
      title: options.title || 'Konfirmasi',
      text: options.text,
      showCancelButton: true,
      confirmButtonText: options.confirmButtonText || 'Ya, Lanjutkan',
      cancelButtonText: options.cancelButtonText || 'Batal',
      reverseButtons: true,
      ...this.getCustomTheme()
    });
    
    return result.isConfirmed;
  }

  loading(title: string = 'Mohon tunggu...', text: string = 'Sedang memproses data') {
    return Swal.fire({
      title,
      text,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
      customClass: {
        popup: 'rounded-2xl shadow-2xl border-0',
        title: 'text-gray-900 font-bold text-xl'
      },
      backdrop: 'rgba(0, 0, 0, 0.4)',
      allowOutsideClick: false,
      allowEscapeKey: false
    });
  }

  toast(message: string, type: 'success' | 'error' | 'warning' | 'info' = 'success') {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
      customClass: {
        popup: 'rounded-lg shadow-lg',
        timerProgressBar: 'bg-[#0ABAB5]'
      }
    });

    return Toast.fire({
      icon: type,
      title: message
    });
  }

  // Custom medical-themed notifications
  appointmentSuccess(doctorName?: string) {
    return Swal.fire({
      icon: 'success',
      title: 'Appointment Berhasil Dibuat!',
      html: `
        <div class="text-center">
          <div class="mb-4">
            <svg class="w-16 h-16 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </div>
          ${doctorName ? `<p class="text-gray-600">Appointment dengan <strong>${doctorName}</strong> telah berhasil dibuat.</p>` : ''}
          <p class="text-sm text-gray-500 mt-2">Silakan cek email Anda untuk detail appointment.</p>
        </div>
      `,
      confirmButtonText: 'Lihat Detail',
      timer: 5000,
      timerProgressBar: true,
      ...this.getCustomTheme()
    });
  }

  emergencyAlert() {
    return Swal.fire({
      icon: 'error',
      title: 'Kondisi Darurat?',
      html: `
        <div class="text-center">
          <div class="mb-4">
            <svg class="w-16 h-16 mx-auto text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 10a7 7 0 1114 0 7 7 0 01-14 0zm7-3a1 1 0 00-1 1v2a1 1 0 002 0V8a1 1 0 00-1-1zm0 6a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
            </svg>
          </div>
          <p class="text-gray-600 mb-4">Untuk kondisi darurat medis, segera hubungi IGD kami</p>
          <div class="flex justify-center space-x-4">
            <a href="tel:119" class="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold">
              📞 Hubungi IGD: 119
            </a>
            <a href="https://wa.me/628123456789" class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
              💬 WhatsApp
            </a>
          </div>
        </div>
      `,
      showConfirmButton: false,
      showCloseButton: true,
      ...this.getCustomTheme()
    });
  }
}

export const notify = new NotificationService();
