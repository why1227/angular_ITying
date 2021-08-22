import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private storage:StorageService) { }
  keyword: string = "";
  to_do_list: any[] = [];

  ngOnInit(): void {
    console.log(this.storage.get());
    let todo_list = this.storage.get_item("todo_list");
    if(todo_list){
      this.to_do_list = todo_list;
    }
  }
  do_add(e: any) {
    if (e.keyCode == 13) {
      this.keyword = this.keyword.trim();
      if (this.keyword == "") {
        alert("输入为空哦！");
        return;
      }
      if (!this.todo_list_has_keyword(this.to_do_list, this.keyword)) {
        this.to_do_list.push({
          title: this.keyword,
          status: 0, //0:代办，1：完成
        });
        this.storage.set("todo_list",this.to_do_list);
      }
      else {
        alert("数据已存在！");
      }

      this.keyword = "";
    }
  }

  deleteData(key: number) {
    this.to_do_list.splice(key, 1);
    this.storage.set("todo_list",this.to_do_list);
    
  }
  checkbox_change(){
    this.storage.set("todo_list",this.to_do_list);

  }

  todo_list_has_keyword(todolist: any[], keyword: any) {
    let falg: boolean = false;
    //why感觉这里用arr.some()或者arr.every()或者arr.find()好点儿
    //   todolist.forEach(item => {
    //     if (item.title == keyword) {
    //       falg = true;
    //     }
    //   })
    //   return falg;
    // }

    for (var i = 0; i < todolist.length; i++) {
      if (todolist[i].title == keyword) {
        return true;
      }
    }
    return falg;
  }

}
