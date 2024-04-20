import { AuthService } from '@/app/services/auth.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  isLoading = false;
  isError = false;
  errorMessage = '';

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  features = [
    {
      icon: '/assets/img/icon-top-up.png',
      title: 'Top-Up Saldo',
      description: 'Menambahkan saldo TapCash melalui rekening debit utama',
    },
    {
      icon: '/assets/img/icon-registration.png',
      title: 'Registrasi Kartu',
      description:
        'Menghubungkan informasi yang ada pada kartu fisik TapCash dengan Virtual TapCash',
    },
    {
      icon: '/assets/img/icon-withdraw.png',
      title: 'Tarik Saldo',
      description:
        'Mentransfer kembali saldo TapCash kembali ke rekening debit utama',
    },
    {
      icon: '/assets/img/icon-history.png',
      title: 'Riyawat Transaksi',
      description:
        'Mengetahui riwayat penggunaan kartu Tapcash untuk melakukan transaksi',
    },
    {
      icon: '/assets/img/icon-top-up.png',
      title: 'Informasi Kartu',
      description: 'Mengetahui informasi saldo mereka secara real-time',
    },
    {
      icon: '/assets/img/icon-qr.png',
      title: 'Kode QR Transaksi',
      description:
        'Menampilkan kode QR yang ditautkan ke kartu TapCash untuk melakukan transaksi pembayaran',
    },
  ];
  socialLinks = [
    {
      img: '/assets/img/logo-fb.png',
      alt: 'Facebook',
      link: 'https://facebook.com/bni',
    },
    {
      img: '/assets/img/logo-ig.png',
      alt: 'Instagram',
      link: 'https://instagram.com/bni46',
    },
    {
      img: '/assets/img/logo-x.png',
      alt: 'X',
      link: 'https://twitter.com/bni',
    },
    {
      img: '/assets/img/logo-linkedin.png',
      alt: 'LinkedIn',
      link: 'https://www.linkedin.com/company/pt.-bank-negara-indonesia-persero-tbk.',
    },
    {
      img: '/assets/img/logo-yt.png',
      alt: 'YouTube',
      link: 'https://www.youtube.com/user/BNITVC',
    },
  ];
  informationLinks = [
    {
      label: 'Tentang BNI',
      href: 'https://bni.co.id/id-id/perseroan/tentang-bni',
    },
    {
      label: 'Tata Kelola',
      href: 'https://bni.co.id/id-id/perseroan/tata-kelola',
    },
    {
      label: 'Hubungan Investor',
      href: 'https://bni.co.id/id-id/perseroan/hubungan-investor',
    },
    {
      label: 'Berkarier di BNI',
      href: 'https://recruitment.bni.co.id/',
    },
    {
      label: 'Lelang Sita Agunan',
      href: 'https://lelangagunan.bni.co.id/',
    },
    {
      label: 'Berita Pengadaan',
      href: 'https://bni.co.id/id-id/beranda/kabar-bni/berita-pengadaan',
    },
    {
      label: 'Peta Situs',
      href: 'https://bni.co.id/id-id/beranda/kabar-bni/peta-situs',
    },
  ];
  supportLinks = [
    {
      label: 'Pencari Lokasi BNI',
      href: 'https://bni.co.id/id-id/bantuan-dukungan/pencari-lokasi',
    },
    {
      label: 'Jaringan Global BNI',
      href: 'https://bni.co.id/id-id/bantuandukungan/jaringanglobal',
    },
    {
      label: 'Kontak BNI',
      href: 'https://bni.co.id/id-id/bantuandukungan/kontakbni',
    },
  ];
  currentYear = new Date().getFullYear();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  handleSubmit() {
    if (this.loginForm.valid) {
      this.authService.loginDummy({
        username: this.loginForm.value.username!,
        password: this.loginForm.value.password!,
      });
      this.router.navigate(['/'], {
        replaceUrl: true,
      });

      /* .subscribe({
          next: (res) => {
            if (!res.error) {
              this.authService.authUser.set(res.data.user);
              this.router.navigate(['/dashboard'], {
                replaceUrl: true,
              });
            }
          },
          error: (err) => {
            console.error(err);
            this.isError = true;
            this.errorMessage = err.message;
          },
        }); */
    }
  }
}
