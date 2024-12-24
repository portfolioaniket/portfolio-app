import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { NotExistComponent } from './notExist/not-exist/not-exist.component';
import { PortfolioComponent } from './portfolio/portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume/resume.component';
import { ContactComponent } from './contact/contact/contact.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "portfolio", component: PortfolioComponent
  },
  {
    path: "resume", component: ResumeComponent
  },
  {
    path: "contact", component: ContactComponent
  },
  {
    path: "**", component: NotExistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
