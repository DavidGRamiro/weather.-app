import { NgModule } from "@angular/core";

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { CardModule } from 'primeng/card';




@NgModule({
  exports:[
    ButtonModule,
    InputTextModule,
    AutoCompleteModule,
    MessagesModule,
    ToastModule,
    CardModule
  ]
})

export class PrimeNGModule {}
