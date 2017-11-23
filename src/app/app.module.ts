import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, Http } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrivateComponent } from './private/private.component';
import { StudentComponent } from './student/student.component';
import { DataService } from './services/data.service';
import { MockDataService } from './services/mock.data.service';
import { AcademicComponent } from './academic/academic.component';
import { ManagementComponent } from './management/management.component';

const appRoutes: Routes = [
  { path: 'home', component: PrivateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'student', component: StudentComponent },
  { path: '', redirectTo: 'login', pathMatch: 'prefix' }
];

const isDemo = true;

export function dataServiceFactory(http) {
  if (isDemo === true)
    return new MockDataService(http);
  else
    return new DataService(http)
}

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
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    ),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    CommonModule
  ],
  providers: [
    {
      provide: DataService,
      deps: [Http],
      useFactory: dataServiceFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
