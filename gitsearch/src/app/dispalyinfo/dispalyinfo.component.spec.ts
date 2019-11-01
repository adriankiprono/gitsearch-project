import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispalyinfoComponent } from './dispalyinfo.component';

describe('DispalyinfoComponent', () => {
  let component: DispalyinfoComponent;
  let fixture: ComponentFixture<DispalyinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispalyinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispalyinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
