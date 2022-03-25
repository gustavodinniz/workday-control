import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CadastroPj } from '../../models/cadastro-pj.model';

@Component({
  selector: 'app-cadastrar-pj',
  templateUrl: './cadastrar-pj.component.html',
  styleUrls: ['./cadastrar-pj.component.css']
})
export class CadastrarPjComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
  	this.gerarForm();
  }

  gerarForm() {
  	this.form = this.fb.group({
  		nome: ['', [Validators.required, Validators.minLength(3)]],
  		email: ['', [Validators.required, Validators.email]],
  		senha: ['', [Validators.required, Validators.minLength(6)]],
  		cpf: ['', [Validators.required]],
  		razaoSocial: ['', [Validators.required, Validators.minLength(5)]],
  		cnpj: ['', [Validators.required]]
  	});
  }

  cadastrarPj() {
  	if (this.form.invalid) {
  		return;
  	}

    const cadastroPj: CadastroPj = this.form.value;
    alert(JSON.stringify(cadastroPj));
  	// this.cadastrarPjService.cadastrar(cadastroPj)
    //   .subscribe(
    //     data => {
    //       console.log(JSON.stringify(data));
    //       const msg: string = "Realize o login para acessar o sistema.";
    //       this.snackBar.open(msg, "Sucesso", { duration: 5000 });
    //       this.router.navigate(['/login']);
    //     },
    //     err => {
    //       console.log(JSON.stringify(err));
    //       let msg: string = "Tente novamente em instantes.";
    //       if (err.status == 400) {
    //         msg = err.error.errors.join(' ');
    //       }
    //       this.snackBar.open(msg, "Erro", { duration: 5000 });
    //     }
    //   );
    // return false;
  }

}
