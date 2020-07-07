import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productResult:Observable<any>;

  constructor(private productService:ProductService) {
    this.productResult=this.productService.getService();
    this.productResult.forEach(element => {
      console.log(element);

      
    });
   }

  ngOnInit(): void {
  }

}
