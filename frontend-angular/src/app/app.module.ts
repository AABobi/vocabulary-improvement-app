import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './core/bootstrap/success-alert/success-alert.component';
import { WarningAlertComponent } from './core/bootstrap/warning-alert/warning-alert.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: SuccessAlertComponent },
// { path: '', redirectTo: '/home', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
