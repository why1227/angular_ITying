import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  msg: string = "我是子组件的msg";
  ngOnInit(): void {
  }
  run() {
    alert("我是子组件的run方法～");
  }

}
