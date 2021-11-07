import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
   animations: [
    trigger('openClose', [
      // ...
      state('void', style({
       
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('*', style({
       
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('void <=> *', [
        animate('2s')
      ])

    ]),
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  AOS.init();
  }
 isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}


/*
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBkyC6tY4PcYsDgBh9XEziLb-TCTAbYwyM",

  authDomain: "portfolio-e9bce.firebaseapp.com",

  projectId: "portfolio-e9bce",

  storageBucket: "portfolio-e9bce.appspot.com",

  messagingSenderId: "308334504544",

  appId: "1:308334504544:web:781f4dcd6d278b4a557105",

  measurementId: "G-QW5V33WGXM"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBkyC6tY4PcYsDgBh9XEziLb-TCTAbYwyM",

  authDomain: "portfolio-e9bce.firebaseapp.com",

  projectId: "portfolio-e9bce",

  storageBucket: "portfolio-e9bce.appspot.com",

  messagingSenderId: "308334504544",

  appId: "1:308334504544:web:781f4dcd6d278b4a557105",

  measurementId: "G-QW5V33WGXM"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBkyC6tY4PcYsDgBh9XEziLb-TCTAbYwyM",

  authDomain: "portfolio-e9bce.firebaseapp.com",

  projectId: "portfolio-e9bce",

  storageBucket: "portfolio-e9bce.appspot.com",

  messagingSenderId: "308334504544",

  appId: "1:308334504544:web:781f4dcd6d278b4a557105",

  measurementId: "G-QW5V33WGXM"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
*/
