import { Component, HostListener, OnInit } from '@angular/core';
import jump from 'jump.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Alinfra';
  collection: any;
  list = true;
  ariaExpanded: boolean = false;
  windowScrolled: boolean = false;

  constructor() {

  }
  ngOnInit(): void {
    this.response();
  }

  recentWorks = [
    { src: "../assets/images/recw13.webp", id: "1" },
    { src: "../assets/images/recw1.jpeg", id: "2" },
    
    { src: "../assets/images/recw3.webp", id: "3", t: "3",},
    { src: "../assets/images/recw4.webp", id: "4", t: "2" },
    { src: "../assets/images/recw11.webp", id: "5", t: "2" },
    { src: "../assets/images/recw6.webp", id: "6" },
    { src: "../assets/images/recw7.webp", id: "7", t: "4" },
    { src: "../assets/images/recw10.webp", id: "8", t: "2", s:"2" },
    { src: "../assets/images/recw12.webp", id: "9" },
    
    { src: "../assets/images/recw14.webp", id: "10", s:"2" },
    { src: "../assets/images/recw15.webp", id: "11", s:"2" },
    { src: "../assets/images/recw16.webp", id: "12", s:"2" },
    { src: "../assets/images/recw17.webp", id: "13", s:"2" },
    { src: "../assets/images/recw18.webp", id: "14", s:"2" },
    { src: "../assets/images/recw20.webp", id: "15", s:"2" }
  ]
  response() {
    if (window.innerWidth <= 500) {
      this.list = true;
    }
    else {
      this.list = false;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll = ($event: any) => {
    const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (verticalOffset > 80) {
      document.getElementById("nav").classList.add('navbar-shrink');
      this.windowScrolled = true;
    }
    else {
      document.getElementById("nav").classList.remove('navbar-shrink');
      this.windowScrolled = false;
    }
  }
  scrollToTarget = (target: string) => {
    const menuButtonElement = document.getElementById("menu-button");
    menuButtonElement.classList.add('collapsed');
    menuButtonElement.setAttribute("aria-expanded", "false");
    document.getElementById("navbarNavAltMarkup").classList.remove('show');

    this.ariaExpanded = false;
    jump(target, {
      offset: -15,
      duration: 500,
    });

  }
}

