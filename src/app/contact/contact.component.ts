import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import AOS from 'aos';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contactForm=new FormGroup({
	firstname:new FormControl('',[Validators.required, Validators.maxLength(20),Validators.minLength(4)]),
	lastname:new FormControl('',[Validators.required, Validators.maxLength(20),Validators.minLength(4)]),
	email:new FormControl('',[Validators.required, Validators.email]),
	phoneNumber:new FormControl('',[Validators.required, Validators.maxLength(10),Validators.minLength(10)]),
	remarks:new FormControl('',[Validators.required, Validators.email]),
	address:new FormControl('',[Validators.required]),
	organizationname:new  FormControl('',[Validators.maxLength(100)])
});
  constructor() { }

  ngOnInit(): void {
  	AOS.init();
  }
submit(){

}
}
