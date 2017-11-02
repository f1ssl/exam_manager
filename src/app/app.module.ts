import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './../login/login.component';
import { PrivateComponent } from './../login/private.component';

const appRoutes: Routes = [
  { path: 'home', component: PrivateComponent},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'prefix'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrivateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
