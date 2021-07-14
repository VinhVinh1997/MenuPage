import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  elements: any = [
    // {cd: 1, nm: 'MARK', dc: 'OTTO', ac: '@MDO'},
    // {cd: 2, nm: 'JACOB', dc: 'THORNTON', ac: '@FAT'},
    // {cd: 3, nm: 'LARRY', dc: 'THE BIRD', ac: '@TWITTER'},
  ];

  headElements = ['Menu Item Code', 'Menu Item Name', 'Description', 'Action'];

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior:"smooth",inline: 'nearest'});
   // el.scrollTop = 50;

  }
}
