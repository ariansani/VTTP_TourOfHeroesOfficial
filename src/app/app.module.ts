import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { HeroService } from './services/hero.service';
import { MessagesComponent } from './components/messages.component';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [HeroService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
