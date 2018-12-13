import { BrowserModule }       from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData }  from '@angular/common';

import localeEs                from '@angular/common/locales/es';

import { AppComponent }        from './app.component';

import { CapitalizadoPipe }    from './pipes/capitalizado.pipe';
import { ContrasenaPipe }      from './pipes/contrasena.pipe';
import { DomseguroPipe }       from './pipes/domseguro.pipe';

registerLocaleData( localeEs );

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    ContrasenaPipe,
    DomseguroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  	{ provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [
  	AppComponent
  ]
})
export class AppModule { }
