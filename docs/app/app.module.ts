import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header/header.component';
import { HomeComponent } from './home/home/home.component';
import { NavComponent } from './nav/nav/nav.component';
import { NotExistComponent } from './notExist/not-exist/not-exist.component';
import { PortfolioComponent } from './portfolio/portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume/resume.component';
import { ContactComponent } from './contact/contact/contact.component';
import { ProjectCardsComponent } from './portfolio/project-cards/project-cards.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { CollapseModule } from 'ngx-bootstrap/collapse'
import { FormsModule } from '@angular/forms'
import { AccordionModule } from 'ngx-bootstrap/accordion'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavComponent,
    NotExistComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
    ProjectCardsComponent,
    ProjectModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    FormsModule,
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
