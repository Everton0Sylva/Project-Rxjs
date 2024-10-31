import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NgxUiLoaderModule, NgxUiLoaderService } from 'ngx-ui-loader';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxUiLoaderModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [NgxUiLoaderService]
    }).compileComponents();



    fixture = TestBed.createComponent(AppComponent);


  });

  it('should create the app', () => {
    let ngxUiLoaderService = fixture.debugElement.injector.get(NgxUiLoaderService);

    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});