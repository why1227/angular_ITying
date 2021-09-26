import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor() { }

  axios_get(api: string) {
    return new Promise((resolve, reject) => {
      // promise
      axios.get(api).then(function (response) {
        // console.log(response);
        resolve(response);
      }).catch(function (error) {
        console.log(error);
      });

    })
  }



}
