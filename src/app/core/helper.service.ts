import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private route: ActivatedRoute) { }

  getStorage(key) {
    return JSON.parse(localStorage.getItem(key))
  }

  setStorage(key, item) {
    localStorage.setItem(key, JSON.stringify(item))
  }

  selectContato(array, id) {
    return array.filter(
      contato => {
        return contato.id == id
      }
    )
  }
}
