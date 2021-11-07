import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {TrainingserviceService} from '../services/trainingservice.service';
import {Training} from '../model/training';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-traininingdetails',
  templateUrl: './traininingdetails.component.html',
  styleUrls: ['./traininingdetails.component.css']
})
export class TraininingdetailsComponent implements OnInit {
//training:Training;
 @Input() trainingget:any;
  @Input() my_modal_content;
  constructor(public activeModal: NgbActiveModal) { }


  ngOnInit(): void {
 // const id=this.route.snapshot.paramMap.get('id');console.log(typeof(id)); 
  //	this.training=this.trainingservice.getTraingwithid(parseInt(id));

  }

}
