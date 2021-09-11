import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  @Input('title') title!: string;

  msg: string = "生命周期演示～";
  user_info: string = "why";
  old_user_info: string = "";

  constructor() {
    console.log("00-构造函数执行了---除了使用简单的值对局部变量进行初始化之外，什么都不应该做～");
  }

  change_msg() {
    this.msg = "数据改变了！"
  }

  ngOnChanges() {
    console.log("01-ngOnChanges执行了---当被绑定的输入属性的值发生变化时调用（父子组件传值时候会触发）");
  }

  ngOnInit(): void {
    console.log("02-ngOnInit执行了---请求数据一般就在这个里面");
  }

  ngDoCheck() {
    console.log("03-ngDoCheck执行了---检测，并在发生Angular无法或不愿意自己检测到变化时做出反应");
    if (this.user_info !== this.old_user_info) {
      console.log(`你从${this.old_user_info}改为${this.user_info}`);
      this.old_user_info = this.user_info;
    }
    else {
      console.log("数据没有变化～");
    }
  }

  ngAfterContentInit() {
    console.log("04-ngAfterContentInit执行了---当把内容投影进组件之后调用");
  }

  ngAfterContentChecked() {
    console.log("05-ngAfterContentChecked执行了---每次完成被投影组件内容的变更检测之后调用");
  }

  ngAfterViewInit() {
    console.log("06-ngAfterViewInit执行了---初始化完组件视图及其子视图之后再调用（dom操作放在这个里面）");
  }
  ngAfterViewChecked() {
    console.log("07-ngAfterViewChecked---每次做完组件视图和子视图的变更检测之后调用");
  }
  ngOnDestroy() {
    console.log("08-ngOnDestroy---销毁指令或组件之前立即调用");
  }

}
