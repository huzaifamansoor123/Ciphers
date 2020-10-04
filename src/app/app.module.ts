import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ShiftCipherComponent } from './shift-cipher/shift-cipher.component';
import { VigenereCipherComponent } from './vigenere-cipher/vigenere-cipher.component';
import { PlayFairComponent } from './play-fair/play-fair.component';
import { SubstitutionCipherComponent } from './substitution-cipher/substitution-cipher.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { RealfenceComponent } from './realfence/realfence.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ShiftCipherComponent,
    VigenereCipherComponent,
    PlayFairComponent,
    SubstitutionCipherComponent,
    MainlayoutComponent,
    RealfenceComponent
  ],
  imports: [
    BrowserModule,
    NzLayoutModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    NzCardModule,
    NzDividerModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
