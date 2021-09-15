import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  public onTable=true ;
  public onForm=false ;

  ngOnInit(): void {
  }
  clickOnForm(){
    this.onForm=true ;
    this.onTable=false ;

  }

  clickOnTable(){
    this.onTable=true ;
    this.onForm=false ;
  }

}
