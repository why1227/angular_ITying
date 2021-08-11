import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.css']
})
export class DomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  keyDown(e:any){
    if(e.keyCode == 13){
      console.log("回车");
    }else{
      console.log(e.target.value);
    }
  }

}
