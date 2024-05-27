import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoading = signal(false);
  counter = 0;
  constructor() { }
  addCounter():void {
    
    this.counter ++;
    if(this.counter === 1) {
      console.log(true);
      this.isLoading.set(true);
    }
    

  }

  removeCounter():void {
    this.counter --; 
    
    if(this.counter === 0) {
      console.log(false);
      this.isLoading.set(false);
    }
    
  }
}
