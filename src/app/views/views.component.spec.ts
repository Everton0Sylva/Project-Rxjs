import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsComponent } from './views.component';
import { ApirequestService } from '../services/apirequest.service';
import { inject } from '@angular/core';
import { NgxUiLoaderModule, NgxUiLoaderService } from 'ngx-ui-loader';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ViewsRoutingModule } from './views-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('ViewsComponent', () => {
  let component: ViewsComponent;
  let fixture: ComponentFixture<ViewsComponent>;

  let apirequestService: ApirequestService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewsComponent],
      providers: [ApirequestService],
      imports: [
        CommonModule,
        FormsModule,
        ViewsRoutingModule,
        NgxUiLoaderModule,
        TypeaheadModule.forRoot()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    apirequestService = fixture.debugElement.injector.get(ApirequestService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Check Search', () => {
    // ngxUiLoaderService = inject(NgxUiLoaderService);
    // apirequestService = new ApirequestService();
    /*  spyOn(apirequestService, 'Fetch').and.returnValues((list: any) => {
        return list.length > 0;
      });*/
  });
});
