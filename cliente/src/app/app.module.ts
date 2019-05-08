import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { JuegoFormComponent } from './components/juego-form/juego-form.component';
import { JuegoListComponent } from './components/juego-list/juego-list.component';

import { JuegosService } from './services/juegos.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    JuegoFormComponent,
    JuegoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    JuegosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
