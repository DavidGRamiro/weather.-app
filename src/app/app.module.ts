import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { PrimeNGModule } from './Library/primeng.module';
import { ComponentsModule } from './Components/components.module';
import { MessageService } from 'primeng/api';
import { AnimationsModule } from './Components/Animations/animations.module';
import { MainModule } from './Components/main/main.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimeNGModule,
    FormsModule,
    ComponentsModule
  ],
  providers: [ MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
