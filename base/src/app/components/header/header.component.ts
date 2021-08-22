import { Component, OnInit, Input } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title!: string;
  @Input() msg!: string;
  @Input()
  run!: Function;

  @Input() home!: HomeComponent;


  constructor() { }

  ngOnInit(): void {
  }
  get_msg() {
    // alert(this.msg);
    alert(this.home.msg);
  }
  get_fuc_run() {
    // 子组件里面执行父组件的run方法
    // this.run();
    this.home.run();
  }
}
