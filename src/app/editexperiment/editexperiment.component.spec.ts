import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditexperimentComponent } from './editexperiment.component';

describe('EditexperimentComponent', () => {
  let component: EditexperimentComponent;
  let fixture: ComponentFixture<EditexperimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditexperimentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditexperimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
