import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlatListComponent } from './admin-plat-list.component';

describe('AdminPlatListComponent', () => {
  let component: AdminPlatListComponent;
  let fixture: ComponentFixture<AdminPlatListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPlatListComponent]
    });
    fixture = TestBed.createComponent(AdminPlatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
