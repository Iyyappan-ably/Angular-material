import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private router : Router, private br : BreakpointObserver) { }

  ngOnInit(): void {
    this.br.observe([`(max-width: 1025px)`]).subscribe((state : BreakpointState)=> {    //1025 --> medium device starting 
      this.isSmall = state.matches;                   
    })
  }

  pro(){
   this.router.navigate(['info/info-one']);
  }

  isSmall! : boolean;
}
