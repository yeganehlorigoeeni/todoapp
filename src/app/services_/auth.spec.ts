import { TestBed } from '@angular/core/testing';

import {LoginService} from './auth';
import { Login } from '../modules_/todo/pages/login/login';

describe('Login', () => {
  let service: Login;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Login);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
