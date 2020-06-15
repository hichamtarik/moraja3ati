import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialdetailEditComponent } from './materialdetail-edit.component';

describe('MaterialdetailEditComponent', () => {
  let component: MaterialdetailEditComponent;
  let fixture: ComponentFixture<MaterialdetailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialdetailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialdetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
