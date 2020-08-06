import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatmanFamilyItemComponent } from './batman-family-item.component';

describe('BatmanFamilyItemComponent', () => {
  let component: BatmanFamilyItemComponent;
  let fixture: ComponentFixture<BatmanFamilyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatmanFamilyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatmanFamilyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
