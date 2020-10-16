import { UsuarioService } from './../services/usuario.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  
  constructor(private usuarioService: UsuarioService,
  private router:Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    
    this.usuarioService.validarToken().subscribe(resp => {
      console.log(resp)
    });
    
    console.log('paso por el can activated del Guard');
    
    return this.usuarioService.validarToken()
      .pipe(
        tap(estaAutenticado => { 
          if (!estaAutenticado) { 
            this.router.navigateByUrl('/login');
          }
        })
      );
  }
  
}
