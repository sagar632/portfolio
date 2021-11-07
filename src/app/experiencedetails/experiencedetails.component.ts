import { Component, OnInit,Input } from '@angular/core';
import {ExperiencData} from '../data/experiencedata';
import {Experience} from '../model/experience';
import {ExperienceserviceService} from '../services/experienceservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import AOS from 'aos';
@Component({
  selector: 'app-experiencedetails',
  templateUrl: './experiencedetails.component.html',
  styleUrls: ['./experiencedetails.component.css']
})
export class ExperiencedetailsComponent implements OnInit {
experience:Experience;
 @Input() experienceget:any;
  
  constructor(public activeModal: NgbActiveModal ) { }

  ngOnInit(): void {
  	AOS.init();
  	//const id=this.route.snapshot.paramMap.get('id');
  //	this.experience=this.experienceservice.getExperienceWithId(parseInt(id));

  }

}
