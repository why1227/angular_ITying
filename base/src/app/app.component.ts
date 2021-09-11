import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'base';
  flag: boolean = true;
  change_title() {
    this.title = "改变后的title";
  }
  change_flag(){
    this.flag = !this.flag;
  }
}
