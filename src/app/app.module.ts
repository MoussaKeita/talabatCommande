import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandesComponent } from './commandes/commandes.component';
import { CommandeCreateComponent } from './commandes/commande-create/commande-create.component';
import { CommandeListComponent } from './commandes/commande-list/commande-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CommandesComponent,
    CommandeCreateComponent,
    CommandeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
