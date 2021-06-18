import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  break : number = 800;   //define a breakpoint
                          //define a boolean variable to monitor the state 
                          // if the view port value gets matched with media query(Breakpoints.XSmall) => state.matches returns true
                          // import BreakpointObserver
                          //listen the view port value using Observable in ngOnInit
  isSmall! : boolean ;
  close : boolean = true ;
  open : boolean = false;

  constructor(private breakPointObserver : BreakpointObserver, private router : Router) {
   }

  ngOnInit(): void {
    console.log("component loaded");

   this.breakPointObserver.observe([Breakpoints.XSmall,Breakpoints.Small]).subscribe((state : BreakpointState) => {
     this.isSmall = state.matches;
   })


  }

  call(value : any){
    
    
    this.close = !this.close;
    if(this.close==true){
       value.toggle();
    }
    else{
     value.toggle();
    }

  }



  home(){
    this.router.navigate(['home']);
  }


  welcome(){
    this.router.navigate(['main']);
  }

  execute(value : any){

    value.open();
  }

  exe(value:any){
    value.close();
  }

  welcome1(value : any){
    value.close();
    this.router.navigate(['main']);


  }

  home1(value : any){
    value.close();
    this.router.navigate(['home']);
  }


  prod1(value : any){
    value.close();
    this.router.navigate(['products']);
  }
  
  prod(){
    this.router.navigate(['products']);
  }

  add(){
    this.router.navigate(['addCustomer']);
  }

  add1(value : any){
    value.close();
    this.router.navigate(['addCustomer']);
  }


  info(){
    this.router.navigate(['info']);
  }


}
