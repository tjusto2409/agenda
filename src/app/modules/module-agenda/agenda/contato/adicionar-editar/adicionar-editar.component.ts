import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HelperService } from '../../../../../core/helper.service';

@Component({
  selector: 'app-adicionar-editar',
  templateUrl: './adicionar-editar.component.html',
})
export class AdicionarEditarComponent implements OnInit {

  form: FormGroup;

  constructor(private rourter: ActivatedRoute, 
              private formBuilder: FormBuilder,
              private helper: HelperService) { }

  contatos = this.helper.getStorage('contatos');
  id = null;

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: null,
      canal: null,
      obs: null
    });

    this.rourter.params.subscribe(
      params => {
        if(params.id) {
          this.id = params.id;
          this.editar();
        }
      }
    )
  }

  salvar() {

    if(this.id) {

      this.contatos.map(
        (contato) => {
          if(contato.id == this.id) {
            contato.nome = this.form.get('nome').value;
            contato.canal = this.form.get('canal').value;
            contato.obs = this.form.get('obs').value;
          }
        }
      )

    } else {
      this.contatos.push({
        id: (this.contatos[this.contatos.length - 1].id + 1),
        nome: this.form.get('nome').value,
        canal: this.form.get('canal').value,
        obs: this.form.get('obs').value,
      });
  
      this.form.reset();
    }

    this.helper.setStorage('contatos',this.contatos)    
  }

  editar() {
    this.helper.selectContato(this.contatos, this.id).map(
      contato => {
        this.form.get('nome').setValue(contato.nome);
        this.form.get('canal').setValue(contato.canal);
        this.form.get('obs').setValue(contato.obs);
      }
    )
  }
}

