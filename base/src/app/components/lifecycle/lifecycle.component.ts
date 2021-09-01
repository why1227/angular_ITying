import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  msg: string = "生命周期演示～";
  constructor() {
    console.log("00-构造函数执行了---除了使用简单的值对局部变量进行初始化之外，什么都不应该做～");
  }

  ngOnChanges(){
    console.log("01-ngOnChanges");
  }

  ngOnInit(): void {
    console.log("02-ngOnInit");
  }

  ngDoCheck(){
    console.log("03-ngDoCheck");
  }

  ngAfterContentInit(){
    console.log("04-ngAfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("05-ngAfterContentChecked");
  }

  ngAfterViewInit(){
    console.log("06-ngAfterViewInit");
  }

}
