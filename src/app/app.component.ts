import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Alinfra';
  collection: any;
  list = true;

  constructor() {

  }
  ngOnInit(): void {
    this.response();
  }

  recentWorks = [
    { src: "../assets/images/recw1.jpeg", id: "1" },
    { src: "../assets/images/recw2.jpeg", id: "2", t: "2" },
    { src: "../assets/images/recw3.jpeg", id: "3", t: "3" },
    { src: "../assets/images/recw4.jpeg", id: "4", t: "2" },
    { src: "../assets/images/recw5.jpeg", id: "5", t: "2" },
    { src: "../assets/images/recw6.jpeg", id: "6" },
    { src: "../assets/images/recw7.jpeg", id: "7", t: "4" },
    { src: "../assets/images/recw8.jpeg", id: "8", t: "2" },
    { src: "../assets/images/recw9.jpeg", id: "9" }
  ]
  response() {
    if (window.innerWidth <= 500) {
      this.list = true;
    }
    else {
      this.list = false;
    }
  }

  
}
