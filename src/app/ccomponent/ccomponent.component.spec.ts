import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcomponentComponent } from './ccomponent.component';

describe('CcomponentComponent', () => {
  let component: CcomponentComponent;
  let fixture: ComponentFixture<CcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
