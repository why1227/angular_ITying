
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  peopleInfo = {
    username: "",
    sex: "1",
    city_list: ['江苏', '上海', '浙江'],
    city: "上海",
    hobby: [
      {
        title: "吃饭",
        checked: false,
      },
      {
        title: "睡觉",
        checked: false,
      },
      {
        title: "看帅哥",
        checked: true,
      },
    ],
    mark:"",

  }
  constructor() { }

  ngOnInit(): void {
  }
  doSubmit() {
    //dom
    // let usernameDom = document.getElementById('username') as HTMLInputElement;
    // console.log(usernameDom.value);
  }

}
