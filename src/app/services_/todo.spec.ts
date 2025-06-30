import { TestBed } from '@angular/core/testing';

import { TodoSrvice } from './todo';

describe('Todo', () => {
  let service: TodoSrvice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoSrvice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
