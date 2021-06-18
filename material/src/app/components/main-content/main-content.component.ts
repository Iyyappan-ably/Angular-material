import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(private breakPointObserver :BreakpointObserver) { }

  ngOnInit(): void {

    this.breakPointObserver.observe([Breakpoints.XSmall,`(max-width: 1040px)`]).subscribe((state : BreakpointState) => {
      this.isSmall = state.matches;
   
    });
}
  isSmall! : boolean;

  }
