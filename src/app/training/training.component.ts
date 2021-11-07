import { Component, OnInit } from '@angular/core';
import {TrainingData} from '../data/trainingdata';
import AOS from 'aos';
//import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons,NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {Training} from '../model/training';

//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TraininingdetailsComponent } from '../traininingdetails/traininingdetails.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
  animations:[
  trigger('openclose',[state('open', style({
  height: '200px',
  opacity: 1,
  backgroundColor: 'yellow'
})),state('closed', style({
  height: '100px',
  opacity: 0.8,
  backgroundColor: 'blue'
})),
transition('open => closed', [
  animate('2s ease-in-out')
]),])
  ]
})
export class TrainingComponent implements OnInit {
tra=TrainingData;

 //title = 'ng-bootstrap-modal-demo';
  closeResult: string;
  modalOptions:NgbModalOptions;
  constructor(
    private modalService: NgbModal
  ){
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop',
     
    }
  }

  ngOnInit(): void {
  	AOS.init();
  } 
   open(a:Training) {
    const modalRef = this.modalService.open(TraininingdetailsComponent,{ size: 'lg',animation:true,  centered:true});
    modalRef.componentInstance.trainingget=a ;
   
  }
    

}

  

 

  


    

  

