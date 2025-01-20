import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperIntroComponent } from './developer-intro.component';

describe('DeveloperIntroComponent', () => {
  let component: DeveloperIntroComponent;
  let fixture: ComponentFixture<DeveloperIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloperIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
