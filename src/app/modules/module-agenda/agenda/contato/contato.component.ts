import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from '../../../../core/helper.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html'
})
export class ContatoComponent implements OnInit {

  contatos = this.helper.getStorage('contatos');

  contato = [];

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private helper: HelperService) { }

  ngOnInit() {
    this.selectContato();
  }

  selectContato() {
    this.route.params.subscribe(
      params => {
        this.contato = this.contatos.filter(
          contato => {
            return contato.id == params.id
          }
        )
      }
    );
  }

  excluir() {
    this.route.params.subscribe(
      params => {
        this.contatos.map(
          (contato, index) => {
            if(contato.id == params.id) {
              this.contatos.splice(index, 1);
              localStorage.setItem('contatos', JSON.stringify(this.contatos))
              this.router.navigate(['/agenda']);
            }
          }
        )
      }
    );
  }

}
