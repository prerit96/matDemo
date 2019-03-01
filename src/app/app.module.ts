import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatInputModule,
  MatToolbarModule, MatRadioModule, MatTableModule, MatSidenavModule, MatIconModule, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DefaultHomeComponent } from './home/default-home/default-home.component'
import { DatePipe } from '@angular/common';
import { DatafilterPipe } from './Pipes/datafilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DefaultHomeComponent,
    DatafilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatRadioModule,
    MatTableModule,
    MatSidenavModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
