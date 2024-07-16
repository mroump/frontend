import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewxappComponent } from './viewxapp.component';

describe('ViewxappComponent', () => {
  let component: ViewxappComponent;
  let fixture: ComponentFixture<ViewxappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewxappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewxappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
