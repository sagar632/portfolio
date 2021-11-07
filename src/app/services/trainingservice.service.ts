import { Injectable } from '@angular/core';
import {TrainingData} from'../data/trainingdata';
import {Training} from '../model/training';


@Injectable({
  providedIn: 'root'
})
export class TrainingserviceService {
trainings:Training[]=TrainingData;

  constructor() { }
  getTraining(){
  	return TrainingData;
  }
  getTraingwithid(id:number):Training{
return this.trainings.find(x=>x.id===id);

  }
}
