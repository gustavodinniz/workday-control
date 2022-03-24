import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, Routes} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

import {Login} from '../../models';
import {LoginService} from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private loginService: LoginService
  ) {
  }

  ngOnInit(): void {
    this.generateForm();
  }

  generateForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  login() {
    if (this.form.invalid) {
      return;
    }

    const login: Login = this.form.value;
    this.loginService.logar(login).subscribe(
      data => {
        console.log(JSON.stringify(data));
        localStorage['token'] = data['data']['token'];
        const userData = JSON.parse(
          atob(data['data']['token'].split('.')[1])
        );
        console.log(JSON.stringify(userData));
        if (userData['role'] == 'ROLE_ADMIN') {
          alert('Deve redirecionar para a página de Admin');
        } else {
          alert('Deve redirecionar para a página de Funcionário');
        }
      },
      err => {
        console.log(JSON.stringify(err));
        let msg: string = "Tente novamente em instantes.";
        if (err['status'] == 401) {
          msg = "Email/senha inválido(s)."
        }
        this.snackBar.open(msg, "Erro", {duration: 5000});
      }
    );
  }

}
