import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-one',
  templateUrl: './info-one.component.html',
  styleUrls: ['./info-one.component.css']
})
export class InfoOneComponent implements OnInit {

  constructor(private br : BreakpointObserver) { }

  ngOnInit(): void {
    this.br.observe([`(max-width: 1025px)`]).subscribe((state : BreakpointState)=> {    //1025 --> medium device starting 
      this.isSmall = state.matches;                   
    })
  }
  isSmall! : boolean ;

}
