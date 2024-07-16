import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewexperimentComponent } from './newexperiment.component';

describe('NewexperimentComponent', () => {
  let component: NewexperimentComponent;
  let fixture: ComponentFixture<NewexperimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewexperimentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewexperimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
