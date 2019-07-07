import { LoginModule } from './modules/module-login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './core/rota/app.routing';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AgendaModule } from './modules/module-agenda/agenda.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    SharedModule,
    LoginModule,
    AgendaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }