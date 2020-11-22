import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesHomeComponent } from './articles/articles-home/articles-home.component';
import { ArticleComponent } from './articles/article/article.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './header/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './home/carousel/carousel.component';
import { CardComponent } from './articles/card/card.component';
import { TruncatePipe } from './lib/pipes/truncate.pipe';
import { NewsletterComponent } from './lib/newsletter/newsletter.component';
import { CookieService } from 'ngx-cookie-service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SemipolarSpinnerModule } from 'angular-epic-spinners';

// NGX BOOTS
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AlertModule } from 'ngx-bootstrap/alert';

// MAT
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { FavsComponent } from './articles/favs/favs.component';
import { SpinnerComponent } from './lib/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ArticlesComponent,
    ArticlesHomeComponent,
    ArticleComponent,
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    CarouselComponent,
    CardComponent,
    TruncatePipe,
    NewsletterComponent,
    FavsComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    CarouselModule.forRoot(),
    AlertModule.forRoot(),
    InfiniteScrollModule,
    SemipolarSpinnerModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
