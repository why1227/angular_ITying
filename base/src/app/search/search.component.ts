import { Component, OnInit } from '@angular/core';

import { StorageService } from '../services/storage.service';

//不推荐
// var storage = new StorageService();
// console.log(storage);
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private storage:StorageService) {
    let s = this.storage.get();
    console.log(s);
  }
  keyword: string = "";
  hisoty_list: string[] = [];

  ngOnInit(): void {
    let search_list = this.storage.get_item("search_list");
    if(search_list){
      this.hisoty_list = search_list;
    }
  }
  doSearch() {
    if (this.hisoty_list.indexOf(this.keyword) == -1) {
      this.hisoty_list.push(this.keyword);
    }
    this.storage.set('search_list',this.hisoty_list);

  }
  delete_history(key: number) {
    this.hisoty_list.splice(key, 1);
    this.storage.set("search_list",this.hisoty_list);

  }

}
