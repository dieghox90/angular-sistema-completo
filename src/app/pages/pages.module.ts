import { ComponentsModule } from './../components/components.module';
import { SharedModule } from './../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';




import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountsSettingsComponent } from './accounts-settings/accounts-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { PerfilComponent } from './perfil/perfil.component';




@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountsSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    UsuariosComponent,
    PerfilComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountsSettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
    
  ]
})
export class PagesModule { }
