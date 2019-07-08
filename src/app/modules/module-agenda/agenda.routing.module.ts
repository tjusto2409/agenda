import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgendaComponent } from './agenda/agenda.component';
import { ContatoComponent } from './agenda/contato/contato.component';
import { DefaultComponent } from './agenda/default/default.component';
import { AdicionarEditarComponent } from './agenda/contato/adicionar-editar/adicionar-editar.component';

const agendaRouting: Routes = [
  { path: 'agenda', component: AgendaComponent, children: [
    { path: '', component: DefaultComponent },
    { path: 'contato', children: [
      { path: '', redirectTo: '/agenda', pathMatch: 'full'},
      { path: 'adicionar', component: AdicionarEditarComponent },
      { path: 'editar', children: [
        { path: '', redirectTo: '/agenda', pathMatch: 'full'},
        { path: ':id', component: AdicionarEditarComponent }
      ] }, 
      { path: ':id', component: ContatoComponent },           
    ]},
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(agendaRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class AgendaRoutingModule { }
