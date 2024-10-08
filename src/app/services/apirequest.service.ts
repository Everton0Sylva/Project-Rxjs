import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Methods } from '../model/Methods';

@Injectable({
  providedIn: 'root'
})
export class ApirequestService {

  public baseUri: string = "";

  constructor() {
    this.baseUri = "https://rickandmortyapi.com/api/character"
  }
  /*
    private headers = {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*'
    }
    
      async Fetch(path: string, method: Methods) {
        let uri = this.baseUri + ''
        let response = await fetch(uri, {
          method: method,
          headers: this.headers
        });
        if (response.ok) {
          return await response.json();
        }
      }*/

  Fetch(path: string = '', method: Methods) {
    return new Observable((subscriber) => {
      let uri = this.baseUri + path;
      const response = from(fetch(uri, {
        method: method.toString(),
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE'
        }
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
