import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { AddressSplitComponent } from './address-split.component';

describe('AddressSplitComponent', () => {
  let component: AddressSplitComponent;
  let fixture: ComponentFixture<AddressSplitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressSplitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
