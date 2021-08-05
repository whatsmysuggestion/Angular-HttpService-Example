import { Component } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   data;
   constructor(private api: ApiService) { }
   
   
     ngOnInit() {
    this.api.getProducts().subscribe((res: any) => {
        this.data = res;
        console.log(this.data);
         
	 }); }
	  
	  
}
