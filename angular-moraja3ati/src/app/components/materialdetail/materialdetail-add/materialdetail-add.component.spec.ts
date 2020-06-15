import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialdetailAddComponent } from './materialdetail-add.component';

describe('MaterialdetailAddComponent', () => {
  let component: MaterialdetailAddComponent;
  let fixture: ComponentFixture<MaterialdetailAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialdetailAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialdetailAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
