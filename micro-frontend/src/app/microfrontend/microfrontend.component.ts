// microfrontend.component.ts
import { Component } from '@angular/core';
import { LdapService } from 'C:/Users/areti/micro-frontend/src/app/ldap.service';

@Component({
  selector: 'app-microfrontend',
  templateUrl: './microfrontend.component.html',
  styleUrls: ['./microfrontend.component.css'],
})
export class MicrofrontendComponent {
  constructor(private ldapService: LdapService) {}

  // Use ldapService as needed in this microfrontend component
}
