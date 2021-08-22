import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  get() {
    return 'this is a service';
  }
  get_item(key: string) {
    // return 'this is a service';
    return JSON.parse(localStorage.getItem(key) || '{}');
  }
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  remove(key: string) {
    localStorage.removeItem(key);
  }
}
