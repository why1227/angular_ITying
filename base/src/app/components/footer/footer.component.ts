import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Output() private outer = new EventEmitter();
  constructor() { }

  msg: string = "我是子组件的msg";
  ngOnInit(): void {
  }
  run() {
    alert("我是子组件的run方法～");
  }

  set_parent() {
    this.outer.emit("我是子组件的数据～");
  }

}
