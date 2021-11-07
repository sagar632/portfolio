import { Component, OnInit } from '@angular/core';
import {ExperiencData} from '../data/experiencedata';
import {Experience} from '../model/experience';
import { ExperiencedetailsComponent } from '../experiencedetails/experiencedetails.component';
import {NgbModal, ModalDismissReasons,NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import AOS from 'aos';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
exp=ExperiencData;
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
   open(a:Experience) {
    const modalRef = this.modalService.open(ExperiencedetailsComponent,{ size: 'lg',animation:true,  centered:true});
    modalRef.componentInstance.experienceget=a ;
    modalRef.componentInstance.my_modal_content = 'I am your content';
  }

}
