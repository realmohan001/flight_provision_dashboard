import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProvisionComponent } from './dashboard-provision.component';

describe('DashboardProvisionComponent', () => {
  let component: DashboardProvisionComponent;
  let fixture: ComponentFixture<DashboardProvisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardProvisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProvisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
