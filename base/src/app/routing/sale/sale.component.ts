import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  constructor() { }
  list: any[] = [];
  ngOnInit(): void {
    for (var i = 0; i < 10; i++) {
      this.list.push("这是第" + i + "条数据～")
    }
  }

}
