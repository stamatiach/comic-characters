import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatmanFamilyListComponent } from './batman-family-list.component';

describe('BatmanFamilyListComponent', () => {
  let component: BatmanFamilyListComponent;
  let fixture: ComponentFixture<BatmanFamilyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatmanFamilyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatmanFamilyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
