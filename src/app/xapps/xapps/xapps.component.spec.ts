import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XappsComponent } from './xapps.component';

describe('XappsComponent', () => {
  let component: XappsComponent;
  let fixture: ComponentFixture<XappsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XappsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
