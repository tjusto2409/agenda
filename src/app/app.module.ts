import { LoginModule } from './modules/module-login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { AgendaModule } from './modules/module-agenda/agenda.module';
import { routing } from './core/rota/app.routing';

import { ConfigService } from './core/config.service';
import { HelperService } from './core/helper.service';
import { ServicosService } from './core/servicos.service';

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
  providers: [
    ConfigService,
    HelperService,
    ServicosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }