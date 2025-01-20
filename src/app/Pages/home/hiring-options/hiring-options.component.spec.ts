import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringOptionsComponent } from './hiring-options.component';

describe('HiringOptionsComponent', () => {
  let component: HiringOptionsComponent;
  let fixture: ComponentFixture<HiringOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiringOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiringOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
