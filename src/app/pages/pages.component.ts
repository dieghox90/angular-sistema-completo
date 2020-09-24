import { SettingsService } from './../services/settings.service';
import { Component, OnInit } from '@angular/core';

declare function customInitFunctions()

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor(private settinsService:SettingsService) {
  
  }

  ngOnInit(): void {
    customInitFunctions();

  }

}
