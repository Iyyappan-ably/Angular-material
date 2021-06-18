import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Entity/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  constructor(private service : ProductService, private breakPoint : BreakpointObserver) { }

  ngOnInit(): void {

     this.service.getProducts().subscribe({
       next : (data) => {this.products = data
                          console.log(data)},
       error : (err) => console.log(err),
       complete : () => { console.log("no data") }
     })

     this.breakPoint.observe([Breakpoints.XSmall]).subscribe((state : BreakpointState)=>{
       this.isSmall = state.matches;
     })
     setTimeout(()=>{
       if(this.dest){
       window.location.reload();
       }
     },20000);

  }

   dest : boolean = true;
   ngOnDestroy(){
     this.dest = false;
  }


  products! : IProduct[] ;

  col = ["productName","productCode","releaseDate","productPrice","image","details"];

  isSmall! : boolean ;



}
