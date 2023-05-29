import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { take } from 'rxjs';
import { Router } from '@angular/router';
import { RegistrationCredentials } from '../../models/credentials.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  user!: RegistrationCredentials;

  constructor(private authService: AuthService, private router: Router) {}

  form: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    uploadedImg: new FormControl(''),
  });

  ngOnInit(): void {}

  get formPopulated() {
    return (this.user = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      password: this.form.value.password,
      uploadedImg: this.form.value.uploadedImg,
      createdAt: new Date().toISOString(),
    });
  }

  onSubmit() {
    if (
      this.form.invalid ||
      this.form.value.password !== this.form.value.confirmPassword
    ) {
      return;
    }

    this.authService.registration(this.formPopulated).pipe(take(1)).subscribe();
    this.form.reset();
    this.router.navigateByUrl('/login');
  }
}
