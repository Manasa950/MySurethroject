// login.component.ts
import { Component } from '@angular/core';
import { LdapService } from 'C:/Users/areti/micro-frontend/src/app/ldap.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private ldapService: LdapService) {}

  login(): void {
    this.ldapService.authenticate(this.username, this.password).then(
      (success) => {
        if (success) {
          // Redirect to the authenticated area
          console.log('Login successful!');
        } else {
          this.loginError = true;
        }
      },
      (error) => {
        console.error('Error during login:', error);
        this.loginError = true;
      }
    );
  }
}
