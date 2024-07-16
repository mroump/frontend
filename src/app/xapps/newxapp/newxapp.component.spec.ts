import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewxappComponent } from './newxapp.component';

describe('NewxappComponent', () => {
  let component: NewxappComponent;
  let fixture: ComponentFixture<NewxappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewxappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewxappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
