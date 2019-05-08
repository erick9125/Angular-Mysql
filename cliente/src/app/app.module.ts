import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { JuegoFormComponent } from './components/juego-form/juego-form.component';
import { JuegoListComponent } from './components/juego-list/juego-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    JuegoFormComponent,
    JuegoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
