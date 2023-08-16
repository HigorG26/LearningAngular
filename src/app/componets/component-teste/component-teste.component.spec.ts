import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTesteComponent } from './component-teste.component';

describe('ComponentTesteComponent', () => {
  let component: ComponentTesteComponent;
  let fixture: ComponentFixture<ComponentTesteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentTesteComponent]
    });
    fixture = TestBed.createComponent(ComponentTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
