import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm!: FormGroup;
  errorMessage: string | undefined;
  errorPasswordVerif: string | undefined; 

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      verifPassword: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }
  onSubmit() {
    const email = this.signUpForm?.get('email')?.value;
    const password = this.signUpForm?.get('password')?.value;
    const verifPassword = this.signUpForm.get('verifPassword')?.value;
    if(password === verifPassword) {
      this.authService.createNewUser(email, password).then(
          () => {
          this.router.navigate(['/books']);
        },
          (error) => {
           this.errorMessage = error;
         }
      );
    } else {
      this.errorPasswordVerif = "Le mot de passe saisie n'est pas le même dans les deux champs !";
    }
  }


}
