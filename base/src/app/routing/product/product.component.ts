import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  list: any[] = [];
  ngOnInit(): void {
    for (var i = 0; i < 10; i++) {
      this.list.push("这是第" + i + "条数据～")
    }
  }

}
