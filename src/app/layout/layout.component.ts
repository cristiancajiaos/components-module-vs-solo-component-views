import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public routes: any = [
    { name: 'Home', url: '/home' },
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact' }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
