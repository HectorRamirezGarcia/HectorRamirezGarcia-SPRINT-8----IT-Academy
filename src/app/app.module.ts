import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StartshipsComponent } from './startships/startships.component';
import { FooterComponent } from './footer/footer.component';
import { Api_requests_models } from './startships/api_requests.model';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    StartshipsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [Api_requests_models],
  bootstrap: [AppComponent]
})
export class AppModule { }
