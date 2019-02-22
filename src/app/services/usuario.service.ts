import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarioseleccionado: Usuario;
  usuarios: Usuario[];
  readonly urlbase = 'http://192.168.0.121/api/usuario/';
  constructor(private http: HttpClient) {
    this.usuarioseleccionado = new Usuario();
  }

  dameUsuarios() {
    return this.http.get(this.urlbase);
  }
  dameUsuario(usuario: Usuario) {
    return this.http.get(this.urlbase + `/${usuario._id}`);
  }
  actualizarUsuario(usuario: Usuario) { 
    return this.http.put(this.urlbase + `/${usuario._id}`, usuario);
  }
  crearUsuario(usuario: Usuario) {
    return this.http.post(this.urlbase, usuario);
  }

}
