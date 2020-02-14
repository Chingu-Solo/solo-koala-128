import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlusCircle, faSearch, faList, faTh, faRedoAlt, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { NavigationComponent } from './navigation/navigation.component';
import { ConfigService } from './config.service';
import { CardComponent } from './card/card.component';

import { HttpClientModule } from '@angular/common/http';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolbarComponent,
    MainComponent,
    FooterComponent,
    NavigationComponent,
    CardComponent,
    ScrollTopComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
    
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {

    library.addIcons(faPlusCircle, faSearch, faList, faTh, faRedoAlt, faArrowUp);
  }
 }
