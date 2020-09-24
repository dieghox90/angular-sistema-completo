import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry,take,map,filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;
  constructor() {

   
    /*this.retornarObservable().pipe(
      retry()
    ).subscribe(
      valor => { 
        console.log('Subs :', valor),
          err => console.warn('Error : ', err),
          ()=>console.info('OBS TERMINADO ');
      }
    );*/

    this.intervalSubs=this.retornaIntervalo().subscribe(
      (valor) => console.log(valor)
    )
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }




  retornaIntervalo():Observable<number> { 
    return interval(500).pipe(
      map(valor => {
        return valor + 1;
      }),
      filter(valor => (valor % 2==0)? true:false),
      
    );
  }

  retornarObservable():Observable<number> {
    let i = -1;

    return new Observable<number>(observer => { 

      const intervalo=setInterval(() => {
        i++;
        observer.next(i);

        if (i == 5) { 
          clearInterval(intervalo);
          observer.complete();
        }

        if (i == 2) { 
          observer.error('i llego al valor de 2');
        }
      },1000);
    });
    
   }
  

}
