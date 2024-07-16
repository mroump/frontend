import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditxappComponent } from './editxapp.component';

describe('EditxappComponent', () => {
  let component: EditxappComponent;
  let fixture: ComponentFixture<EditxappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditxappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditxappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
