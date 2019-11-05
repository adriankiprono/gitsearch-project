import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DispalyinfoComponent } from './dispalyinfo/dispalyinfo.component';
import { SearchformComponent } from './searchform/searchform.component';
import { DateDifferencePipe } from './date-difference.pipe';
import { UnderlineDirective } from './underline.directive';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DispalyinfoComponent,
    SearchformComponent,
    DateDifferencePipe,
    UnderlineDirective,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
