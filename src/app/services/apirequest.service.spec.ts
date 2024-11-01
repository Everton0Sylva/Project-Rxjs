import { TestBed } from '@angular/core/testing';

import { ApirequestService } from './apirequest.service';
import { debounceTime, last, of, switchMap } from 'rxjs';
import { Character } from '../model/character';
import { Methods } from '../model/Methods';

describe('ApirequestService', () => {
  let service: ApirequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApirequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });



  it('Teste da função Fetch', () => {
    let methods = Methods;
    let lista = new Array<any>();
    service.Fetch("/?name=Alien", methods.Get).pipe(
      last(),
      switchMap((data: any) => {
        return of([...data.results])
      }))
      .subscribe(result => {
        lista = [...result];
      })
    expect(lista).toBeGreaterThanOrEqual(0);

  });
});
