import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  toshow = '0'
  currentvalue=''
  writetoinput(value:string){
    this.currentvalue = this.currentvalue + value
    this.toshow = this.currentvalue
  }
  equals() {
    this.toshow = eval(this.currentvalue)
    this.currentvalue = this.toshow
  }
  clear(){
    this.currentvalue = '';
    this.toshow = '0';
  }
  back(){
    this.currentvalue = this.currentvalue.slice(0,-1)
    this.toshow = this.currentvalue
    if(this.toshow ==''){this.toshow = '0'}
    this.toshow = this.currentvalue
  }
  calcvalue(solve:any){

    this.toshow = eval(solve)
  }
}

