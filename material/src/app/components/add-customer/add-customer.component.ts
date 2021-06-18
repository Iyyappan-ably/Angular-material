import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit{

    constructor(private br: BreakpointObserver,private dia : MatDialog){

    }
  
    
    ngOnInit():void{
      console.log("before");
      this.br.observe([Breakpoints.XSmall]).subscribe((state : BreakpointState)=>{
        this.isSmall = state.matches;

      })
      console.log('after');
    }


    isSmall! : boolean ;
    languages : string[] =["Tamil","English","French","Spanish","German","Telugu","Bengal","Russian","Portuguese","Japanese"];
   
   

    name : any;
    age : any;
    gender : any;
    term : any;
    language! : string[];
    check : boolean = false;




    process(){

      console.log(this.name);
      console.log(this.age);
      console.log(this.gender);
      console.log(this.term);
      console.log(this.language);
    
      this.check = true;
      this.save();

    }

    spinner : boolean = false;
    success : any;
    save(){
      this.check = false;
      this.dia.open(DialogComponent);
      setTimeout(()=>{
        this.dia.closeAll();
        window.location.reload();
      },2000)

    }

    
}
