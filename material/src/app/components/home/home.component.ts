import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { GridColumnStyleBuilder } from '@angular/flex-layout/grid/typings/column/column';

export interface Person {
  name: string;
  age : number;
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private breakPoint : BreakpointObserver) { }

  ngOnInit(): void {

        this.breakPoint.observe([Breakpoints.XSmall]).subscribe((state : BreakpointState) => {
          this.isSmall = state.matches;
        })

  }
  dataSource = [
    {name : "pinki", age : 21},
    {name : "lara", age : 22}
  ];

  columns = ["name","age"];

  isSmall! : boolean ;

}
