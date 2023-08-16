import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBidingComponent } from './two-way-biding.component';

describe('TwoWayBidingComponent', () => {
  let component: TwoWayBidingComponent;
  let fixture: ComponentFixture<TwoWayBidingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoWayBidingComponent]
    });
    fixture = TestBed.createComponent(TwoWayBidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
