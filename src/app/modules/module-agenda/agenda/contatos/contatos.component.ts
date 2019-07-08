import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html'
})
export class ContatosComponent implements OnInit {

  contatos = JSON.parse(localStorage.getItem('contatos'));

  constructor() { }

  ngOnInit() {
  }

  search() {
    
  }

}
