import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.page.html',
  styleUrls: ['./sugerencias.page.scss'],
})
export class SugerenciasPage implements OnInit {

  username: string = "";
  password: string = "";

  constructor(private router: Router) {} // Asegúrate de inyectar el servicio Router en el constructor


  ngOnInit() {
  }
  login() {
    if (this.username.trim() !== "" && this.password.trim() !== "") {
      console.log('Usuario:', this.username);
      console.log('Contraseña:', this.password);

      this.username="";
      this.password="";

      this.router.navigate(['/home']);
    } else {
      console.log('Por favor, completa todos los campos.');
    }
  }
}
