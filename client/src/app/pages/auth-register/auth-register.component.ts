import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.css'],
})
export class AuthRegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private authService: AuthService,
    public router: Router,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const formData = this.registerForm.value;
    console.log(formData);
    if (formData.password2 === formData.password) {
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
      });

      let new_user = {
        email: formData.email,
        password: formData.password,
      };

      this.authService.register(new_user).subscribe((res) => {
        if (res) {
          console.log(res);
          this.registerForm.reset();
          Toast.fire({
            icon: 'success',
            title:
              '<p class="primary-text body-lg-bold">User created successfully, redirecting you to the login page</p>',
          });
          this.router.navigate(['users/login']);
        }
      });
    }
  }
}
