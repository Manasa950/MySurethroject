// login.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { LdapService } from 'C:/Users/areti/micro-frontend/src/app/ldap.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let ldapServiceSpy: jasmine.SpyObj<LdapService>;

  beforeEach(() => {
    ldapServiceSpy = jasmine.createSpyObj('LdapService', ['authenticate']);

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [{ provide: LdapService, useValue: ldapServiceSpy }],
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should authenticate with correct credentials', () => {
    component.username = 'validUsername';
    component.password = 'validPassword';

    ldapServiceSpy.authenticate.and.returnValue(Promise.resolve(true));

    component.login();

    fixture.whenStable().then(() => {
      expect(ldapServiceSpy.authenticate).toHaveBeenCalledWith(
        'validUsername',
        'validPassword'
      );
      // Add assertions for successful login behavior
    });
  });

  it('should handle authentication failure', () => {
    component.username = 'invalidUsername';
    component.password = 'invalidPassword';

    ldapServiceSpy.authenticate.and.returnValue(Promise.resolve(false));

    component.login();

    fixture.whenStable().then(() => {
      expect(ldapServiceSpy.authenticate).toHaveBeenCalledWith(
        'invalidUsername',
        'invalidPassword'
      );
      expect(component.loginError).toBe(true);
    });
  });
});
