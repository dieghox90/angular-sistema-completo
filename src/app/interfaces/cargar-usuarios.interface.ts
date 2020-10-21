import { Usuario } from 'src/app/models/usuario.model';

export interface CargarUsuario { 
  total: number;
  usuarios: Usuario[];
}