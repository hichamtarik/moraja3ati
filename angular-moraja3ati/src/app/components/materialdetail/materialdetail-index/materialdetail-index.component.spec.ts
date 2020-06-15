import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialdetailIndexComponent } from './materialdetail-index.component';

describe('MaterialdetailIndexComponent', () => {
  let component: MaterialdetailIndexComponent;
  let fixture: ComponentFixture<MaterialdetailIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialdetailIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialdetailIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
