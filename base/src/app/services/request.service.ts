import { Injectable } from '@angular/core';

import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  // 1-同步
  get_data() {
    return "this is service data";
  }

  // 异步
  get_no_data() {
    // 这样获取不到：undefined
    setTimeout(() => {
      let name = "why";
      return name;
    }, 1000);
  }

  // 2-回调函数获取数据
  get_callback_data(cb: any) {
    setTimeout(() => {
      let name = "callback_data";
      cb(name);
    }, 1000);
  }

  // 3-Promise
  get_promise_data() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = "Promise_data";
        resolve(data);
      }, 3000);

    })
  }

  // 多次promise不行
  get_promise_interval_data() {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        let data = "Promise_interval_data";
        resolve(data);
      }, 1000);

    })
  }

  // 4-RxJs
  get_rxjs_data() {
    return new Observable((observer) => {
      setTimeout(() => {
        let data = "rxjs_data";
        observer.next(data);
        // observer.error("失败的数据");
      }, 3000);

    })
  }

  // 多次
  get_rxjs_interval_data() {
    let count: number = 0;
    return new Observable((observer) => {
      setInterval(() => {
        count++;
        let data = "rxjs_data" + count;
        observer.next(data);
        // observer.error("失败的数据");
      }, 1000);

    })
  }


  // 工具方法
  get_rxjs_interval_number() {
    let count: number = 0;
    return new Observable((observer) => {
      setInterval(() => {
        count++;
        observer.next(count);
      }, 1000);

    })
  }

}
