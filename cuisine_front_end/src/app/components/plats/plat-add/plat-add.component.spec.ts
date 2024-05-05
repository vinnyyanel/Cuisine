import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatAddComponent } from './plat-add.component';

describe('PlatAddComponent', () => {
  let component: PlatAddComponent;
  let fixture: ComponentFixture<PlatAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatAddComponent]
    });
    fixture = TestBed.createComponent(PlatAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
