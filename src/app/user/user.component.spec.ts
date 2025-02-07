import { TestBed } from '@angular/core/testing';
import { AuthService } from '../auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true when login is successful', () => {
    const result = service.login('usuario', 'password');
    expect(result).toBeTrue();
  });

  it('should return false for incorrect credentials', () => {
    const result = service.login('wrongUser', 'wrongPassword');
    expect(result).toBeFalse();
  });
});
