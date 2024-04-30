import { HeaderComponent } from "@/app/components/header/header.component";
import { FooterComponent } from "@/app/components/footer/footer.component";
import { AuthService } from "@/app/services/auth.service";
import { informationLinks, socialLinks, supportLinks } from "@/utils/constants";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "login",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: "./login.component.html",
})
export class LoginComponent {
  isLoading = false;
  isError = false;
  errorMessage = "";
  isPasswordVisible = false;
  currentYear = new Date().getFullYear();

  socialLinks = socialLinks;
  informationLinks = informationLinks;
  supportLinks = supportLinks;

  loginForm = this.formBuilder.group({
    username: ["", Validators.required],
    pin: ["", Validators.required],
  });
  features = [
    {
      icon: "/assets/img/icon-top-up-white.png",
      title: "Top-Up Saldo",
      description:
        "Menambahkan saldo TapCash melalui rekening <br /> debit utama",
    },
    {
      icon: "/assets/img/icon-registration-white.png",
      title: "Registrasi Kartu",
      description:
        "Menghubungkan informasi yang ada pada kartu fisik <br /> TapCash dengan Virtual TapCash",
    },
    {
      icon: "/assets/img/icon-withdraw-white.png",
      title: "Tarik Saldo",
      description:
        "Mentransfer kembali saldo TapCash kembali ke rekening <br /> debit utama",
    },
    {
      icon: "/assets/img/icon-history-white.png",
      title: "Riyawat Transaksi",
      description:
        "Mengetahui riwayat penggunaan kartu TapCash <br /> saat melakukan transaksi",
    },
    {
      icon: "/assets/img/icon-top-up-white.png",
      title: "Informasi Kartu",
      description: "Mengetahui informasi saldo mereka secara real-time",
    },
    {
      icon: "/assets/img/icon-qr-white.png",
      title: "Kode QR Transaksi",
      description:
        "Menampilkan kode QR yang ditautkan ke kartu <br /> TapCash untuk melakukan transaksi pembayaran",
    },
  ];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  handleSubmit() {
    if (this.loginForm.valid) {
      this.authService
        .login({
          username: this.loginForm.value.username!,
          pin: this.loginForm.value.pin!,
        })
        .subscribe({
          next: (res) => {
            localStorage.setItem("token", res);
            this.router.navigate(["/"], {
              replaceUrl: true,
            });
          },
          error: (err) => {
            console.error(err);
            this.isError = true;
            this.errorMessage = err.message;
          },
        });

      this.router.navigate(["/"], {
        replaceUrl: true,
      });
    }
  }
}
