import { UsuarioService } from './../../services/usuario.service';
import { SidebarService } from './../../services/sidebar.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public usuario: Usuario;

  constructor(private sidebarService: SidebarService,
  private usuarioService:UsuarioService) { 
    this.menuItems = sidebarService.menu;
    this.usuario = usuarioService.usuario;
  }

  ngOnInit(): void {
  }

}
