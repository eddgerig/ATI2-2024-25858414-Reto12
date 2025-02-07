import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
    localStorage.removeItem('isLoggedIn'); // Limpia localStorage antes de cada prueba
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true when login is successful', () => {
    // Usa las credenciales válidas definidas en el servicio
    const username = 'admin';
    const password = '1234';

    // Llama al método login
    const result = service.login(username, password);
    console.log('Resultado del login:', result);

    // Verifica que el resultado sea true
    expect(result).toBeTrue();
  });
});