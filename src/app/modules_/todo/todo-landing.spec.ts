import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoLanding } from './todo-landing';

describe('TodoLanding', () => {
  let component: TodoLanding;
  let fixture: ComponentFixture<TodoLanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoLanding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoLanding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
