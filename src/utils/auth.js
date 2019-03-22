import * as Cookie from 'cookies-js';
// import * as jwtDecode from 'jwt-decode';

export const authService = {
  getToken() {
    return localStorage.getItem('jwt-token');
  }
}
