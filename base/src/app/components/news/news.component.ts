import { Component, OnInit, ViewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @ViewChild('footer') footer!: FooterComponent;
  constructor() { }

  ngOnInit(): void {
  }
  get_child_msg() {
    alert(this.footer.msg);
  }
  get_child_run() {
    this.footer.run();
  }

}
