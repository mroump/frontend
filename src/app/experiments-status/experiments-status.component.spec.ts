import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentsStatusComponent } from './experiments-status.component';

describe('ExperimentsStatusComponent', () => {
  let component: ExperimentsStatusComponent;
  let fixture: ComponentFixture<ExperimentsStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperimentsStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperimentsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
