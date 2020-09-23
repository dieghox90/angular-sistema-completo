import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  
  public labels1:string[] = ['Pan', 'Refresco', 'Tacos'];

  public data1 = [
    [350, 450, 100],
  ];

  ngOnInit(): void {
  }

}
