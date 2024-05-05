import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatDetailsComponent } from './plat-details.component';

describe('PlatDetailsComponent', () => {
  let component: PlatDetailsComponent;
  let fixture: ComponentFixture<PlatDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatDetailsComponent]
    });
    fixture = TestBed.createComponent(PlatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
