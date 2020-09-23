import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'
  ]
})
export class ProgressComponent implements OnInit {

  progreso1: number = 25;
  progreso2: number = 35;

  ngOnInit(): void {
  }

  getProgreso1() { 
    return `${this.progreso1}%`;
  }

  getProgreso2() { 
    return `${this.progreso2}%`;
  }

 
 

}
