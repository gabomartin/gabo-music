import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  title = 'gabo-music';
  opened:boolean = false;
  dj:boolean =false;
  music:boolean =false;
  currDiv: string = "";
  sideOpen(){
    this.opened=this.opened==false?true:false;
  }
  

  showDiv(divVal: string) {
    this.currDiv = divVal;
  }

  linkExt(site:string){

    if(site=='ig'){
    window.open("https://www.instagram.com/gabo.martin/", "_blank");
    }
    if(site=='fb'){
      window.open("https://facebook.com/GaboMartinMusic", "_blank");
      }
}


}

