import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrivateComponent } from './private/private.component';
import { StudentComponent } from './student/student.component';
import { AcademicComponent } from './academic/academic.component';
import { ManagementComponent } from './management/management.component';

const appRoutes: Routes = [
  { path: 'home', component: PrivateComponent},
  { path: 'login', component: LoginComponent },
  { path: 'student', component: StudentComponent },
  { path: '', redirectTo: 'login', pathMatch: 'prefix'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrivateComponent,
    StudentComponent,
    AcademicComponent,
    ManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    AlertModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
