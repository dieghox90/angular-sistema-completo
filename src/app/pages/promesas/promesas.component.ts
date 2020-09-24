import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then(usuarios => { 
      console.log(usuarios);
    });

    /*const promesa = new Promise((resolve,reject) => { 

      if (false) {
        resolve('Hola Mundo');
      } else { 
        reject('Algo salio mal'); 
      }
      
    });

    promesa.then((mensaje) => {
      console.log('Hey Termine : '+mensaje);
    });

    console.log('Fin del Init');
    */
  }

  getUsuarios() { 
    return new Promise(resolve => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data));
    }); 

    
      
  }

}
