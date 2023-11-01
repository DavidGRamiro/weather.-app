import { NgModule } from "@angular/core";

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';




@NgModule({
  imports: [
    ButtonModule,
    InputTextModule,
    AutoCompleteModule,
    ToastModule,
    MessagesModule
  ],
  exports:[
    ButtonModule,
    InputTextModule,
    AutoCompleteModule,
    MessagesModule,
    ToastModule
  ]
})

export class PrimeNGModule {}
