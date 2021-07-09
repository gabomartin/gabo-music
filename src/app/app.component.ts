import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gabo-music';
  opened:boolean = false;


  sideOpen(){
    this.opened=this.opened==false?true:false;
  }
}

