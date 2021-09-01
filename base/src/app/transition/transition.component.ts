import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.css']
})
export class TransitionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show_aside() {
    // 原声js获取dom节电
    let aside_dom = document.querySelector('#aside') as HTMLInputElement;
    aside_dom.style.transform = "translate(0,0)";
  }

  hide_aside() {
    // 原声js获取dom节电
    let aside_dom = document.querySelector('#aside') as HTMLElement;
    aside_dom.style.transform = "translate(100%,0)";
  }

}
