import { Component, OnInit } from '@angular/core';

import { RequestService } from '../services/request.service';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor(private request: RequestService) { }

  ngOnInit(): void {
    // 1-同步的方法
    let data = this.request.get_data();
    console.log(data);

    // 2-callback获取异步数据
    //获取不到：undefined
    let no_data = this.request.get_no_data();
    console.log(no_data);

    let callback_data = this.request.get_callback_data((value: any) => {
      console.log(value);
    });

    // 3-Promise获取异步数据
    let Promise_data = this.request.get_promise_data();
    Promise_data.then((data) => {
      console.log(data);
    })

    // 4-Promise获取异步数据
    // let rxjs_data = this.request.get_rxjs_data();
    // rxjs_data.subscribe((data)=>{
    //   console.log(data);
    // });


    //5-过一秒以后撤回刚才的操作
    //promise没法撤回
    let stream = this.request.get_rxjs_data();
    let d = stream.subscribe((data) => {
      console.log(data);
    });
    setTimeout(() => {
      d.unsubscribe();// 取消订阅
    }, 1000);

    // 6-订阅后多次执行
    // promise没有这个能力
    let promise_interval_data = this.request.get_promise_interval_data();
    promise_interval_data.then((data) => {
      console.log(data);
    })
    // 7-rxjs多次执行
    // let stream_interval = this.request.get_rxjs_interval_data();
    // stream_interval.subscribe((data) => {
    //   console.log(data);
    // });

    // 8-用工具方法对返回的数据进行处理
    // 可以多个一起使用
    let stream_number = this.request.get_rxjs_interval_number();
    stream_number.pipe(
      filter((value: any) => {
        return value % 2 == 0;
      }),
      map((value: any) => {
        return value * value;
        // json字符串转对象
      })
    )
      .subscribe((data) => {
        console.log(data);
      });

  }

}
