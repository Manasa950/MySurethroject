// ldap.service.ts
// ldap.service.ts
import { Injectable } from '@angular/core';
import * as ldap from 'ldapjs';
import { environment } from 'C:/Users/areti/micro-frontend/src/environment';

@Injectable({
  providedIn: 'root',
})
export class LdapService {
  private ldapClient: any;

  constructor() {
    this.ldapClient = ldap.createClient({
      url: environment.ldapServerUrl,
    });
  }

  authenticate(username: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const dn = `uid=${username},${environment.ldapBaseDN}`;

      this.ldapClient.bind(dn, password, (err: any) => {
        if (err) {
          console.error('LDAP Authentication Error:', err);
          resolve(false);
        } else {
          console.log('LDAP Authentication Successful');
          resolve(true);
        }
      });
    });
  }
}
