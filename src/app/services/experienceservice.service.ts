import { Injectable } from '@angular/core';
import {Experience} from '../model/experience';
import {ExperiencData} from '../data/experiencedata';

@Injectable({
  providedIn: 'root'
})
export class ExperienceserviceService {
experiendata=ExperiencData;
  constructor() { }
  getAllexperiences()
  {
  	return this.experiendata;

  }
  getExperienceWithId(id:number):Experience{
  	return this.experiendata.find(x=>x.id===id);
  	
  }
}
