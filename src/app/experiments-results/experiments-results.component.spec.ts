import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentsResultsComponent } from './experiments-results.component';

describe('ExperimentsResultsComponent', () => {
  let component: ExperimentsResultsComponent;
  let fixture: ComponentFixture<ExperimentsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperimentsResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperimentsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
