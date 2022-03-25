import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule, LoginRoutingModule } from './authentication';
import { CadastroPjModule } from './authentication/cadastro-pj/cadastro-pj.module';
import { CadastroPjRoutingModule } from './authentication/cadastro-pj/cadastro-pj-routing.module';
import { CadastroPfModule } from './authentication/cadastro-pf/cadastro-pf.module';
import { CadastroPfRoutingModule } from './authentication/cadastro-pf/cadastro-pf-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LoginModule,
    LoginRoutingModule,
    CadastroPjModule,
    CadastroPjRoutingModule,
    CadastroPfModule,
    CadastroPfRoutingModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
