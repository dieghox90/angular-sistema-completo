import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter,map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit {

  public titulo: string = "";

  public tituloSubs$: Subscription;

  constructor(private router: Router) {
  

   }

  ngOnInit(): void {
    this.tituloSubs$=this.getArgumentosRuta().subscribe(data => {
      console.log(data);
      this.titulo = data.titulo;
      document.title = data.titulo;
  });
  }

  getArgumentosRuta() { 
   return this.router.events.
    pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event:ActivationEnd) => event.snapshot.data),
    )
  }

}
