import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InflightCheckComponent } from './inflight-check.component';

describe('InflightCheckComponent', () => {
  let component: InflightCheckComponent;
  let fixture: ComponentFixture<InflightCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InflightCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InflightCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
