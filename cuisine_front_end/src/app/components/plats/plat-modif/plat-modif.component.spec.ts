import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatModifComponent } from './plat-modif.component';

describe('PlatModifComponent', () => {
  let component: PlatModifComponent;
  let fixture: ComponentFixture<PlatModifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatModifComponent]
    });
    fixture = TestBed.createComponent(PlatModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
