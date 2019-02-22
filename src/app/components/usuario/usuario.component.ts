import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
declare var M: any; // esto toma una variable desde materialize y no de typescript
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  enedicion: boolean;

  constructor(public usuarioservicio: UsuarioService) { } //aqui puse alguna vez private usuarioservicio

  ngOnInit() {
    this.dameUsuarios();
    this.enedicion = false;
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.usuarioservicio.usuarioseleccionado = new Usuario();
    }
  }
  addUsuario(form: NgForm) {
    // console.log(form.value);
    this.usuarioservicio.crearUsuario(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({ html: 'usuario grabado' });
        this.dameUsuarios();
      });
  }
  dameUsuarios() {
    this.usuarioservicio.dameUsuarios().subscribe(
      res => {
        this.usuarioservicio.usuarios = res as Usuario[];
      }
    );
  }
  seleccionarUsuario(usuario: Usuario) {
    this.usuarioservicio.usuarioseleccionado = usuario;
    this.enedicion = true;
  }
  actualizarUsuario(form: NgForm) {
    let id: string;
    id = this.usuarioservicio.usuarioseleccionado._id;
    let usuarioporactualizar = new Usuario(id, form.value.nombres, form.value.apellidos);
    this.usuarioservicio.actualizarUsuario(usuarioporactualizar).subscribe(res => {
      this.enedicion = false;
      this.resetForm(form);
      this.dameUsuarios();
      M.toast({ html: 'se actualizo bien' });
    });
  }
}
