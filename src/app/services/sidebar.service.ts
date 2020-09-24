import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main', url: '/dashboard' },
        { titulo: 'ProgressBar', url: 'progress' },
        { titulo:'Graficas',url:'grafica1'},
      ]
    }
  ];

  constructor() { }
}
