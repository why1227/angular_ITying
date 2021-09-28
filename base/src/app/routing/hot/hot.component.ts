import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-hot',
  templateUrl: './hot.component.html',
  styleUrls: ['./hot.component.css']
})
export class HotComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  go_detail() {
    this.router.navigate(['/hot_detail', '111'])
  }
  go_home() {
    this.router.navigate(['/index'])
  }
  go_product_detail() {
    let query_params: NavigationExtras = {
      queryParams: { 'aid': 123 }
    }

    this.router.navigate(['/product_detail'],query_params)
  }
}
