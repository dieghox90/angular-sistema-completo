import { Usuario } from 'src/app/models/usuario.model';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class BusquedasService {

  constructor(private http: HttpClient) { }
  
  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() { 
    return {
      headers: {
        'x-token': this.token
      }
    }
  }

  // para convertit un resultado de tipo any[] a un resultado de tipo Usuario[]
  private transformarUsuarios(resultados:any[]):Usuario[] { 
    return resultados.map(
      user => new Usuario(user.nombre,user.email,'',user.role,user.google,user.img,user.uid)
    );
  }

  buscar(tipo:'usuarios'|'medicos'|'hospitales', termino:string) { 
    const url = `${base_url}/todo/coleccion/${tipo}/${termino}`;
    return this.http.get<any[]>(url, this.headers)
      .pipe(
        map((resp: any) => {
          switch (tipo) {
            case 'usuarios':
              return this.transformarUsuarios(resp.resultados);
            default:
              return [];
          }
        })
    )
  }
}
