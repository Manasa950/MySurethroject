import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MicrofrontendComponent } from './microfrontend/microfrontend.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MicrofrontendComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add this line for ngModel
  ],
  providers: [],
  bootstrap: [AppComponent], // Bootstrap the AppComponent
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('app-micro-frontend', element);
  }
}
