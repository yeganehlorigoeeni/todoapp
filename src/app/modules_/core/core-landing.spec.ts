import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreLanding } from './core-landing';

describe('CoreLanding', () => {
  let component: CoreLanding;
  let fixture: ComponentFixture<CoreLanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreLanding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreLanding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
