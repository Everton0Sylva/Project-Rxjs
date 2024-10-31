import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Methods } from '../model/Methods';

@Injectable({
  providedIn: 'root'
})
export class ApirequestService {

  public baseUri: string = "";

  private header = {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE'
  };

  constructor() {
    this.baseUri = "https://rickandmortyapi.com/api/character"
  }
  Fetch(path: string = '', method: Methods) {
    return new Observable((subscriber) => {
      let uri = this.baseUri + path;
      from(fetch(uri, {
        method: method.toString(),
        headers: this.header

      })
        .then((response) => response.json())
        .then((resp) => {
          subscriber.next(resp)
          subscriber.complete()
        })
        .catch((apiError) => subscriber.error(apiError))
      )
    })
  }

}
