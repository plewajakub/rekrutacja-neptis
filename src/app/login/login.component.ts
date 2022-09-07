import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "../_core/_services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private readonly _formBuilder: FormBuilder, private readonly _loginService: LoginService) { }

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm(): void {
    //TODO: dodaj pola hasło oraz checkbox do akceptacji zgód i przygotuj walidację
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmitForm(): void {
    //TODO: podłącz sztuczny serwer - https://jsonplaceholder.typicode.com/posts/
    if (this.loginForm.valid) {
      console.log('Formularz gotowy do wysyłki');
      this._loginService.sendFormData(this.loginForm.getRawValue()).subscribe(response => {
        console.log(response);
        window.alert("Formularz przesłany pomyślnie!")
      }, error => {
        window.alert("Wystąpił błąd. Spróbuj ponownie później.")
      })
    } else {
      this.loginForm.markAllAsTouched();
      window.alert("Wystąpił błąd. Sprawdź poprawność formularza.")
    }
  }
}
