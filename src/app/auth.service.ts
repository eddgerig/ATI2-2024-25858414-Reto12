import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private validUser = { username: 'admin', password: '1234' }; // Credenciales para el login

  login(username: string, password: string): boolean {
    if (username === this.validUser.username && password === this.validUser.password) {
      localStorage.setItem('isLoggedIn', 'true'); 
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('isLoggedIn'); //Cierra sesión
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
