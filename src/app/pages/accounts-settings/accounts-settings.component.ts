import { SettingsService } from './../../services/settings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts-settings',
  templateUrl: './accounts-settings.component.html',
  styles: [
  ]
})
export class AccountsSettingsComponent implements OnInit {

    
  

  constructor(private settinsService:SettingsService) { }

  ngOnInit(): void {
    
    this.settinsService.checkCurrentTheme();
  }

  changeTheme(theme: string) { 
    this.settinsService.changeTheme(theme);
  
  }



}
