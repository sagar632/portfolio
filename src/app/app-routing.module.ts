import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {ExperienceComponent} from './experience/experience.component';
import {SkillsComponent} from './skills/skills.component';
import {TrainingComponent} from './training/training.component';
import {AboutComponent} from './about/about.component';
import { TraininingdetailsComponent } from './traininingdetails/traininingdetails.component';
import { ExperiencedetailsComponent } from './experiencedetails/experiencedetails.component';

const routes: Routes = [
{path:'',
redirectTo:"home",
pathMatch:'full'},
{
	path:"home",
	component:HomeComponent},
	{
		path:'contact',
		component:ContactComponent},
		
{
	path:"experience",
	component:ExperienceComponent
},
{
	path:"skills",
	component:SkillsComponent
},

{
	path:"training",
	component:TrainingComponent
},
{
	path:"about",
	component:AboutComponent
},
{path:"experiencedetails/:id",component:ExperiencedetailsComponent
},
{path:"trainingdetails/:id",component:TraininingdetailsComponent
}


		];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
