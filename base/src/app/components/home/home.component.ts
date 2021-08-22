import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = "首页";
  msg: string = "我是父组件的一个msg";
  constructor() { }

  ngOnInit(): void {
  }
  run() {
    alert("我是父组件的run方法！");
  }

}
