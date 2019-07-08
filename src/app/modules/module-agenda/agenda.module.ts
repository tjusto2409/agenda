import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AgendaRoutingModule } from './agenda.routing.module';

import { AgendaComponent } from './agenda/agenda.component';
import { ContatosComponent } from './agenda/contatos/contatos.component';
import { ContatoComponent } from './agenda/contato/contato.component';
import { DefaultComponent } from './agenda/default/default.component';
import { AdicionarEditarComponent } from './agenda/contato/adicionar-editar/adicionar-editar.component';

@NgModule({
  declarations: [
    AgendaComponent,
    ContatosComponent,
    ContatoComponent,
    DefaultComponent,
    AdicionarEditarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AgendaRoutingModule
  ],
  exports: [
    AgendaComponent
  ]
})
export class AgendaModule { }
