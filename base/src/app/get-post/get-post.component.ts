import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpserviceService } from '../services/httpservice.service';


@Component({
  selector: 'app-get-post',
  templateUrl: './get-post.component.html',
  styleUrls: ['./get-post.component.css']
})
export class GetPostComponent implements OnInit {

  constructor(private http: HttpClient, private http_service: HttpserviceService) { }
  list: any[] = [];

  ngOnInit(): void {
  }

  get_data() {
    let api = "http://a.itying.com/api/productlist";
    //rxjs
    this.http.get(api).subscribe((response: any) => {
      this.list = response.result;
    })
  }

  do_login() {
    let api = "http://127.0.0.1:3000/dologin";
    // 存在跨域
    this.http.post(api, { "username": "张三", "age": 20 }).subscribe((response) => {
      console.log(response);
    })
  }

  get_jsonp_data() {
    let api = "http://a.itying.com/api/productlist";

    // jsonp请求 服务器必须得支持jsonp
    // http://a.itying.com/api/productlist?callback=why
    // 有些是cb
    this.http.jsonp(api, "callback").subscribe((response) => {
      console.log(response);
    })
  }


  //axios
  get_axios_data() {
    let api = "http://a.itying.com/api/productlist";
    this.http_service.axios_get(api).then((data) => {
      console.log(data);
    })
  }

}
