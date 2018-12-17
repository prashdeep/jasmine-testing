import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { TemplateFormComponent } from './template-form/template-form.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
