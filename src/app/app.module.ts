import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
//import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { TrainingComponent } from './training/training.component';
import { SkillsComponent } from './skills/skills.component';
import { HiremeComponent } from './hireme/hireme.component';
import { HeaderComponent } from './header/header.component';
import { TraininingdetailsComponent } from './traininingdetails/traininingdetails.component';
import { ExperiencedetailsComponent } from './experiencedetails/experiencedetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import AOS from 'aos';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    TrainingComponent,
    SkillsComponent,
    HiremeComponent,
    HeaderComponent,
   
    ExperiencedetailsComponent,
    FooterComponent,
TraininingdetailsComponent
  ],

  imports: [BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    

     ReactiveFormsModule
  ],
 entryComponents:[TraininingdetailsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
